var observer = require('common/observer');
var Symbol = require('./symbol');
var StrategyCtrl = require('./strategyCtrl');
var asyncChain = require('common/tools').asyncChain;
var storageManager = require('common/storageManager');
var CustomApi = require('common/customApi');

var Bot = function Bot() {
	this.ticks = [];
	this.api = new CustomApi();
	this.symbol = new Symbol(this.api);
	this.initPromise = this.symbol.initPromise;
	this.running = false;
}

Bot.prototype = Object.create(null, {
	start: {
		value: function start(token, tradeOptions, strategy, finish){
			if ( !this.running ) {
				this.running = true;
			} else {
				return;
			}
			this.strategy = strategy;
			this.finish = finish;
			this.tradeOptions = tradeOptions;
			this.token = token;
			var that = this;
			asyncChain()
			.pipe(function(done){
				observer.register('api.authorize', function(){
					done();
				});
				that.api.authorize(that.token);
			})
			.pipe(function(done){
				that.api.history(that.tradeOptions[0].symbol, {
					end: 'latest',
					count: 600,
					subscribe: 1
				});
				observer.register('api.history', function(history){
					that.ticks.concat(history);					
					done();
				});
			})
			.pipe(function(done){
				that.startTrading();
			})
			.exec();
		}
	},
	startTrading: {
		value: function startTrading() {
			var that = this;
			this.strategyCtrl = new StrategyCtrl(this.api, this.strategy);
			observer.register('strategy.finish', function(contract){
				that.finish(contract);
				that.stop(contract);
			});
			this.subscribeProposals();
		}
	},
	subscribeProposals: {
		value: function subscribeProposals() {
			var that = this;
			for (var i in this.tradeOptions) {
				this.api.proposal(this.tradeOptions[i]);
			}
			observer.register('api.proposal', function(proposal){
				that.strategyCtrl.updateProposal(proposal);
			});
			observer.register('strategy.ready', function(){
				observer.emit('bot.waiting_for_purchase');
			});
		}
	},
	observeTicks: {
		value: function observeTicks() {
			var that = this;
			observer.register('api.tick', function(tick){
				observer.emit('ui.log', i18n._('tick received at:') + ' ' + tick.epoch);
				that.ticks.concat(tick);
				that.strategyCtrl.updateTicks(that.ticks);
			})
		}
	},
	stop: {
		value: function stop(contract){
			if ( this.running ) {
				this.running = false;
			} else {
				return;
			}
			var that = this;
			asyncChain()
			.pipe(function(done){
				that.api._originalApi.unsubscribeFromAllTicks().then(function(response){
					console.log('unsub from ticks');
					done();
				});
			})
			.pipe(function(done){
				that.api._originalApi.unsubscribeFromAllProposals().then(function(response){
					console.log('unsub from proposal', response);
					done();
				});
			})
			.pipe(function(done){
				that.api._originalApi.unsubscribeFromAlProposals().then(function(response){
					console.log('unsub from o proposal');
					done();
				});
			})
			.pipe(function(done){
				observer.emit('bot.finish', contract);
			})
			.exec();
		}
	}
});

module.exports = Bot;