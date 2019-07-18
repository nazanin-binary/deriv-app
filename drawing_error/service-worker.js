/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/drawing_error/404.html","8483487e5b8462268ba74f7305dc240c"],["/drawing_error/css/app.css","67088ab8a47bbf44fbcf9184d8230938"],["/drawing_error/css/smartcharts.css","0f9cc3f6e9364cf0f076c73d6eadd3b0"],["/drawing_error/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/drawing_error/index.html","a256fedd9afdeb63ca1f9f8c73ab07e8"],["/drawing_error/js/0.efdcff238887165e6a4e.js","5484bb43592d84c758b540c46cedd4ad"],["/drawing_error/js/1.efdcff238887165e6a4e.js","89fbedf186563f03545bf7d057b4678c"],["/drawing_error/js/10.efdcff238887165e6a4e.js","31cf6e11dbbe8baa875312559e02ff88"],["/drawing_error/js/11.efdcff238887165e6a4e.js","ca05e8150a80aa61439758282e75ef30"],["/drawing_error/js/12.efdcff238887165e6a4e.js","614fba43013ce8d977edfda01252070f"],["/drawing_error/js/13.efdcff238887165e6a4e.js","0f9110820d0f90f5c061bc45bf8a9d90"],["/drawing_error/js/14.efdcff238887165e6a4e.js","7e8c5fd9561afb1b9c4dfa83941b7777"],["/drawing_error/js/15.efdcff238887165e6a4e.js","ad047001d279087202c9118fcb249821"],["/drawing_error/js/16.efdcff238887165e6a4e.js","e2f77413d3c78723c2a327d32653134d"],["/drawing_error/js/17.efdcff238887165e6a4e.js","229146fe84913a22a6f92275b1e453d6"],["/drawing_error/js/18.efdcff238887165e6a4e.js","b489ee6fda070a78668a398beb564624"],["/drawing_error/js/19.efdcff238887165e6a4e.js","c1b1691b5750de6e1e869f0b657b2df7"],["/drawing_error/js/2.efdcff238887165e6a4e.js","13de4457ae0dac0af67ea336a017e4ad"],["/drawing_error/js/20.efdcff238887165e6a4e.js","0b2198a86923bd1c011c479fd439bbc0"],["/drawing_error/js/21.efdcff238887165e6a4e.js","0033adc25deea5e35cdbc919fe7619d0"],["/drawing_error/js/22.efdcff238887165e6a4e.js","498c82fe029679c6221aed9cb62aa060"],["/drawing_error/js/23.efdcff238887165e6a4e.js","7930ec40aa2083fad72ce85cc7ae33f6"],["/drawing_error/js/24.efdcff238887165e6a4e.js","6962706da94ae1783a895917bf5b3a7b"],["/drawing_error/js/25.efdcff238887165e6a4e.js","a5432bbbf4d6f70e550476b0ceb3e4bc"],["/drawing_error/js/26.efdcff238887165e6a4e.js","76125d17b9fa03fb73140805c358beaf"],["/drawing_error/js/27.efdcff238887165e6a4e.js","c91013174762085fc7b11ac17d7f628c"],["/drawing_error/js/28.efdcff238887165e6a4e.js","c56c10288323bc7efeb5ed73311e8935"],["/drawing_error/js/29.efdcff238887165e6a4e.js","698a13fd923b35b83486324ddf083a6e"],["/drawing_error/js/3.efdcff238887165e6a4e.js","3be99bc9fd84f8b5ecc3cd6bc8911d22"],["/drawing_error/js/30.efdcff238887165e6a4e.js","23659b39b64330c7f2519147216f4345"],["/drawing_error/js/31.efdcff238887165e6a4e.js","f414dce83d6104589f6e5340b0485cab"],["/drawing_error/js/32.efdcff238887165e6a4e.js","56d26d58667b5cbdd40a3ece31c4580c"],["/drawing_error/js/33.efdcff238887165e6a4e.js","5b1f1b5d6b9cfb8e442066134ec024f2"],["/drawing_error/js/34.efdcff238887165e6a4e.js","6027d4541c5c41263eba9ad2ca602390"],["/drawing_error/js/35.efdcff238887165e6a4e.js","fea50ecb7d2c872613ed851b52ba6d9f"],["/drawing_error/js/36.efdcff238887165e6a4e.js","400a6796c33b07b4225fbe42bedbd493"],["/drawing_error/js/37.efdcff238887165e6a4e.js","ac0e4b80f22047f639f306880805766c"],["/drawing_error/js/38.efdcff238887165e6a4e.js","3b837a08dde58b19b5414765b32cbdae"],["/drawing_error/js/39.efdcff238887165e6a4e.js","0b808d09be37c27d2a681b2bb4d63a40"],["/drawing_error/js/4.efdcff238887165e6a4e.js","0838cbb4f86e46d98c4402093d4593ef"],["/drawing_error/js/40.efdcff238887165e6a4e.js","3f67dde4fc767b4a8b0dd88652f2c5a6"],["/drawing_error/js/404.efdcff238887165e6a4e.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/drawing_error/js/41.efdcff238887165e6a4e.js","632803018fe81dcc0e7659588bf5139e"],["/drawing_error/js/42.efdcff238887165e6a4e.js","975df935b098bbc1d0c1528bbd8a1aea"],["/drawing_error/js/43.efdcff238887165e6a4e.js","ccdf94667c5546861f29d2bd1dd7ed60"],["/drawing_error/js/44.efdcff238887165e6a4e.js","510f2cbef531eda1cfbaddee35b015ea"],["/drawing_error/js/45.efdcff238887165e6a4e.js","a8ae2bb2eca5213e1c6e1e193cf1269c"],["/drawing_error/js/46.efdcff238887165e6a4e.js","4025eeb7b930ae53547b0e03bdf300fd"],["/drawing_error/js/47.efdcff238887165e6a4e.js","b8601e4dd38c5aceb437e1174ba65bd7"],["/drawing_error/js/48.efdcff238887165e6a4e.js","ef61e0642c0041cef09b684bee42df1a"],["/drawing_error/js/49.efdcff238887165e6a4e.js","89040986b79313e074ed5861328090bb"],["/drawing_error/js/5.efdcff238887165e6a4e.js","12c8bf3690c831243dcd8cf83de95898"],["/drawing_error/js/50.efdcff238887165e6a4e.js","56d18d7819ede45a82f2d49d0c336703"],["/drawing_error/js/51.efdcff238887165e6a4e.js","0bec6be93b6544c62fd05a4096d4e30f"],["/drawing_error/js/52.efdcff238887165e6a4e.js","d31125224f926f8556249971f765efbd"],["/drawing_error/js/53.efdcff238887165e6a4e.js","5ba74fd3e177921eddf58187b98f54ba"],["/drawing_error/js/54.efdcff238887165e6a4e.js","f0eb8c02d129a04969038aa9d5657e99"],["/drawing_error/js/55.efdcff238887165e6a4e.js","dc2f73d8b4da8e0f33f316109b23c543"],["/drawing_error/js/56.efdcff238887165e6a4e.js","5058e9f6add1ffe42b591ac01540b98f"],["/drawing_error/js/57.efdcff238887165e6a4e.js","9101a0638014d1ca2ec26b6cb4545e9e"],["/drawing_error/js/58.efdcff238887165e6a4e.js","d93fea8da54b00775285c5e069873be6"],["/drawing_error/js/59.efdcff238887165e6a4e.js","fa1c0b97c228b08e037a2a555f8b3f45"],["/drawing_error/js/6.efdcff238887165e6a4e.js","8b55f396f4e14a7d21d0d18cca25bd80"],["/drawing_error/js/60.efdcff238887165e6a4e.js","12751673f8a54e165eaab54e9c62fdd4"],["/drawing_error/js/61.efdcff238887165e6a4e.js","f58a08d4fc2b10c4405d4f09df65ade7"],["/drawing_error/js/62.efdcff238887165e6a4e.js","6cb60162d2008b45bef13b7b136a778e"],["/drawing_error/js/63.efdcff238887165e6a4e.js","3d17828c4f15dd9cf13b84ccc2b8b9ed"],["/drawing_error/js/64.efdcff238887165e6a4e.js","8dab714d175ce0e8217e19958d22685f"],["/drawing_error/js/65.efdcff238887165e6a4e.js","0e9caa56274fe23544e2d27681e17309"],["/drawing_error/js/66.efdcff238887165e6a4e.js","3c10365197566b71bf9b19c8777ae6de"],["/drawing_error/js/67.efdcff238887165e6a4e.js","c43ef927a028de4555136ffafd0ea983"],["/drawing_error/js/68.efdcff238887165e6a4e.js","c024e0767640bb5361340429fb3069f3"],["/drawing_error/js/69.efdcff238887165e6a4e.js","1ec54b33cfb65e74754021f2969fff81"],["/drawing_error/js/7.efdcff238887165e6a4e.js","9bcabe4dfc6e5f477219f401b32334ef"],["/drawing_error/js/8.efdcff238887165e6a4e.js","8522b40cc5d7e496d0716c985f11dd7d"],["/drawing_error/js/9.efdcff238887165e6a4e.js","fddc38ab360fc84a61371e45679a9498"],["/drawing_error/js/contract.efdcff238887165e6a4e.js","8d734baf97c66e9f638f96b64aa08d3a"],["/drawing_error/js/open_positions.efdcff238887165e6a4e.js","1fc1b7b908937b9cd37fa021895fed7b"],["/drawing_error/js/open_positions~profit_table~statement.efdcff238887165e6a4e.js","16906d18bbd2abfa8bcc51ed292e1dd7"],["/drawing_error/js/profit_table.efdcff238887165e6a4e.js","adf9da8733d5263ad9ddc11510931b92"],["/drawing_error/js/profit_table~statement.efdcff238887165e6a4e.js","c4a34c57f20892507a786ef45cffcb5c"],["/drawing_error/js/reports.efdcff238887165e6a4e.js","4d12474f57d8e0b8dfc4a5ff8e339391"],["/drawing_error/js/smart_chart.efdcff238887165e6a4e.js","73ff5eb4e59bfa1fac190a8ae1097fae"],["/drawing_error/js/smartcharts/chartiq-51b952.smartcharts.js","fcf97473aa6a4b540cdcd8d2d31d7ec1"],["/drawing_error/js/smartcharts/chartiq-5871ca.smartcharts.js","5972d27f59f2e8942c3e0217f7fac2c7"],["/drawing_error/js/smartcharts/de-po-0c1385.smartcharts.js","5a1e3cfccfb638c33c2f5d66faca3eeb"],["/drawing_error/js/smartcharts/de-po-a30b9f.smartcharts.js","ea6958a42b5d808b9e76e52ae4daa083"],["/drawing_error/js/smartcharts/es-po-19e90a.smartcharts.js","7c6bd1342a7ad6700a6cffd6e4e0a73a"],["/drawing_error/js/smartcharts/es-po-cf1cf7.smartcharts.js","f77f5aff51a4082893ff3ad643545656"],["/drawing_error/js/smartcharts/fr-po-32dce3.smartcharts.js","23e4180e68f49df1797131801cee12bc"],["/drawing_error/js/smartcharts/fr-po-7c2247.smartcharts.js","c8d4c9fc66c42ce80c04bd88ca65f6c4"],["/drawing_error/js/smartcharts/html2canvas-7f54a4.smartcharts.js","e882e5deffcb51db874e06e54bc3f109"],["/drawing_error/js/smartcharts/html2canvas-cfdaf6.smartcharts.js","c1fc6b64430eeadab2fa3ce722c5b9ff"],["/drawing_error/js/smartcharts/id-po-684adf.smartcharts.js","f93136258ba3abe61664cafb7e109193"],["/drawing_error/js/smartcharts/id-po-842869.smartcharts.js","1db9a27de992b08a1bc89b3df809b294"],["/drawing_error/js/smartcharts/it-po-3032cb.smartcharts.js","36931ea43c5249b98e8e09255fef0985"],["/drawing_error/js/smartcharts/it-po-6fb521.smartcharts.js","7bcd6576fdba2d63bf7ce1f387c71797"],["/drawing_error/js/smartcharts/nl-po-4913ee.smartcharts.js","0de3e3e842d9289c9ed56728718f6aa8"],["/drawing_error/js/smartcharts/nl-po-dbc059.smartcharts.js","5f0bbcbda9c2655ecb1033afbc324cd6"],["/drawing_error/js/smartcharts/pl-po-68f0a1.smartcharts.js","419c51fd75609798fece101ad191d8a0"],["/drawing_error/js/smartcharts/pl-po-ddb25d.smartcharts.js","9c1ec02f795276ab3c106a52e99af8cc"],["/drawing_error/js/smartcharts/pt-po-94d77b.smartcharts.js","a5c20ad9ea460a09a0f5615d3c1b162f"],["/drawing_error/js/smartcharts/pt-po-e0a063.smartcharts.js","c0249ab9b1c802abc443705b74a81a52"],["/drawing_error/js/smartcharts/ru-po-00d45f.smartcharts.js","3efaa32922993fb61b1bd26941524914"],["/drawing_error/js/smartcharts/ru-po-afea21.smartcharts.js","29869f8a0d1329b458944e3fcc6cd54a"],["/drawing_error/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/drawing_error/js/smartcharts/th-po-b2c816.smartcharts.js","6351fa6afb43c72d22831a443884ca9c"],["/drawing_error/js/smartcharts/th-po-f9221a.smartcharts.js","8a546ad5e35758d391a1b394c959a8d7"],["/drawing_error/js/smartcharts/vendors~resize-observer-polyfill-358f59.smartcharts.js","7cc03f6cea9d826c6829915288d857c5"],["/drawing_error/js/smartcharts/vendors~resize-observer-polyfill-c645ea.smartcharts.js","bfe9606de86a7a3c823f9dd187837755"],["/drawing_error/js/smartcharts/vi-po-47e08b.smartcharts.js","4a11b3ed941616c11b7cd43256de11c9"],["/drawing_error/js/smartcharts/vi-po-aaf38b.smartcharts.js","748daf66b656a4bf05eca6a3aaa2e692"],["/drawing_error/js/smartcharts/zh_cn-po-d077e1.smartcharts.js","3351e42d15313a2d0e327f01069cb892"],["/drawing_error/js/smartcharts/zh_cn-po-e6a513.smartcharts.js","962ee83946ae9e5ec1069aa9baa56dfd"],["/drawing_error/js/smartcharts/zh_tw-po-48b237.smartcharts.js","2c4a29f445e75eb7892e1fbcf592e915"],["/drawing_error/js/smartcharts/zh_tw-po-b93066.smartcharts.js","592a1b2be8da1f6ffe15272c2d89af44"],["/drawing_error/js/statement.efdcff238887165e6a4e.js","2065b03b9946c6cdead91eff6abcc30d"],["/drawing_error/js/vendors~open_positions~profit_table~statement.efdcff238887165e6a4e.js","1fe1c49d4b88ac3f3c5d5e165ce63580"],["/drawing_error/manifest.json","ecf52244b9092202c2423589eb9618cd"],["/drawing_error/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/drawing_error/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/drawing_error/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/drawing_error/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/drawing_error/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/drawing_error/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/drawing_error/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/drawing_error/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/drawing_error/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/drawing_error/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/drawing_error/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/drawing_error/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/drawing_error/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/drawing_error/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/drawing_error/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/drawing_error/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/drawing_error/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/drawing_error/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/drawing_error/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/drawing_error/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/drawing_error/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/drawing_error/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/drawing_error/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/drawing_error/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/drawing_error/robots.txt","6978a616c585d03cb5b542a891995efb"],["/drawing_error/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/drawing_error/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







