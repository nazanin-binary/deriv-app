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

var precacheConfig = [["/br_remove_depreciated/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_remove_depreciated/css/AccountSignupModal.css","15bac9756ef48720fd578385aaeb38ca"],["/br_remove_depreciated/css/app.css","2d1889def6976692708efd6324359d8b"],["/br_remove_depreciated/css/default~open_position~1833eefb.css","68f0f941424072a8839005fae754ea56"],["/br_remove_depreciated/css/digits.css","8e0c3639dc5d97daf805bd355f6bd61f"],["/br_remove_depreciated/css/modals.css","36ac27218506985cdfe4fff51007b959"],["/br_remove_depreciated/css/notification-messages.css","3a4c941d74380bc59f328d97d3d5a29f"],["/br_remove_depreciated/css/reports.css","dec2ce4997d7a792e672d40a818d6361"],["/br_remove_depreciated/css/screen-small.css","6ef029a4ce7a534a440630f047658efb"],["/br_remove_depreciated/css/smartcharts.css","642f653882facad64e89d1a5bec36335"],["/br_remove_depreciated/css/work-in-progress.css","d50fe922cdf426bafc8e8f12c106e137"],["/br_remove_depreciated/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_remove_depreciated/index.html","aa5f56d2ab8a3d98188eceb27ba4e4e0"],["/br_remove_depreciated/js/0.eb465caceba651014d06.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/br_remove_depreciated/js/1.eb465caceba651014d06.js","d5b227514040f9243fd1bd65d8f4d25e"],["/br_remove_depreciated/js/10.eb465caceba651014d06.js","8958a5efde16b9f3f03c90d7b9d37d17"],["/br_remove_depreciated/js/11.eb465caceba651014d06.js","acce189eda79f6b5736a40eb6d8d5f98"],["/br_remove_depreciated/js/12.eb465caceba651014d06.js","ee44b731f6900e7ccc73f242ed3e4e4d"],["/br_remove_depreciated/js/13.eb465caceba651014d06.js","9c695dc05e918c1008404ce725e60481"],["/br_remove_depreciated/js/14.eb465caceba651014d06.js","33d37032119f2e4b992b830fccf6ad82"],["/br_remove_depreciated/js/15.eb465caceba651014d06.js","76f05dd99abd1229f89a7c1102ff1826"],["/br_remove_depreciated/js/16.eb465caceba651014d06.js","3ce63fe42b93882ce2659e02f448ca85"],["/br_remove_depreciated/js/17.eb465caceba651014d06.js","541fec0c7f5a4d4492ec9fe514d8008c"],["/br_remove_depreciated/js/18.eb465caceba651014d06.js","dd8bf65cf65f347bc489481aa016c50b"],["/br_remove_depreciated/js/19.eb465caceba651014d06.js","f862d72135432a24aa9f6db89b09f8ca"],["/br_remove_depreciated/js/2.eb465caceba651014d06.js","d6729726c1d4fbfdfd85b12620e52515"],["/br_remove_depreciated/js/20.eb465caceba651014d06.js","6beafd2bb872be804374f949ee93236e"],["/br_remove_depreciated/js/21.eb465caceba651014d06.js","a516ce3bf4dd2e992b57b05ca48e9681"],["/br_remove_depreciated/js/22.eb465caceba651014d06.js","f21a445b04c6d32143971884813f9ed2"],["/br_remove_depreciated/js/23.eb465caceba651014d06.js","fb701e8ee187912d8e43a156650121c6"],["/br_remove_depreciated/js/24.eb465caceba651014d06.js","1d5a076c696dfaa892725e6772a0b1be"],["/br_remove_depreciated/js/25.eb465caceba651014d06.js","d9359481e4d6ddb7252368d547a719c6"],["/br_remove_depreciated/js/26.eb465caceba651014d06.js","9b49a6abba358e476f6f8ac3398671eb"],["/br_remove_depreciated/js/27.eb465caceba651014d06.js","0796b7ea70934eae1b486b5aa13ab069"],["/br_remove_depreciated/js/28.eb465caceba651014d06.js","adbf510614c224b14cba70eb3f11af18"],["/br_remove_depreciated/js/29.eb465caceba651014d06.js","e43c7a4490f162eb809140b75e67173f"],["/br_remove_depreciated/js/3.eb465caceba651014d06.js","e46b170f7047561d1c538c38480fa04e"],["/br_remove_depreciated/js/30.eb465caceba651014d06.js","26205c97d5c89455c76279e0bb08de4d"],["/br_remove_depreciated/js/31.eb465caceba651014d06.js","0a3cd04996ff8848287f2ec09d20e50c"],["/br_remove_depreciated/js/32.eb465caceba651014d06.js","88fa3864e4483588bb6f9a99180218ca"],["/br_remove_depreciated/js/33.eb465caceba651014d06.js","429dbf00261d1eb49a3fa7085fcf9e65"],["/br_remove_depreciated/js/34.eb465caceba651014d06.js","7b3901614911314a75ffc6091b907650"],["/br_remove_depreciated/js/35.eb465caceba651014d06.js","5d6359465e161a7591382d98c410d797"],["/br_remove_depreciated/js/36.eb465caceba651014d06.js","282ade981de24ef6859cf0c2607e704e"],["/br_remove_depreciated/js/37.eb465caceba651014d06.js","e2c101fa2d92d32da1d61b08a08b0d03"],["/br_remove_depreciated/js/38.eb465caceba651014d06.js","e640fbb0096a931058250e3ff92492eb"],["/br_remove_depreciated/js/39.eb465caceba651014d06.js","b5702bb17302f415a8179f5ded8cb2b1"],["/br_remove_depreciated/js/4.eb465caceba651014d06.js","98d11c18123dadd3fa0da60d4a1d8e4d"],["/br_remove_depreciated/js/40.eb465caceba651014d06.js","bb9f713fc0a8334188bf7c4b1db52b13"],["/br_remove_depreciated/js/404.eb465caceba651014d06.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_remove_depreciated/js/41.eb465caceba651014d06.js","5c37d9a7d2c8a15e9ad200ad32b312cf"],["/br_remove_depreciated/js/42.eb465caceba651014d06.js","b3c18a9404562f0a005726f540cadbfb"],["/br_remove_depreciated/js/43.eb465caceba651014d06.js","20e7b6a0e223136319a8de5344773cd1"],["/br_remove_depreciated/js/44.eb465caceba651014d06.js","800d9a45f7e7b4f634e4d9ed0712ccb0"],["/br_remove_depreciated/js/45.eb465caceba651014d06.js","9417477798ed2caf8545fbd0610b0af1"],["/br_remove_depreciated/js/46.eb465caceba651014d06.js","ecbeec308d0414c70384206c418feff7"],["/br_remove_depreciated/js/47.eb465caceba651014d06.js","e42ea84ddc7e3827d3fcd702d8f86ab6"],["/br_remove_depreciated/js/48.eb465caceba651014d06.js","fed012001a93f3ab0f2d5a067048b235"],["/br_remove_depreciated/js/49.eb465caceba651014d06.js","1625b2a663b2fe781471c7e83754490b"],["/br_remove_depreciated/js/5.eb465caceba651014d06.js","e8a98d899ce3ac8a390d016fd3b088b0"],["/br_remove_depreciated/js/50.eb465caceba651014d06.js","11a4bfe92ad7a6f27cfa12f7a4384441"],["/br_remove_depreciated/js/51.eb465caceba651014d06.js","4b628b10f2d5b405079d00b68b49066f"],["/br_remove_depreciated/js/52.eb465caceba651014d06.js","ea53befbc15fd32a17a123c66e9516be"],["/br_remove_depreciated/js/53.eb465caceba651014d06.js","24915e62a944043f178a28a94939f02f"],["/br_remove_depreciated/js/54.eb465caceba651014d06.js","f9ce82c1eba1b5949f156f15ab27dad2"],["/br_remove_depreciated/js/55.eb465caceba651014d06.js","11bb74750638ce9cfa9be687866ab198"],["/br_remove_depreciated/js/56.eb465caceba651014d06.js","dd6e15302e295e8a162d041d0dd132ae"],["/br_remove_depreciated/js/57.eb465caceba651014d06.js","be49051fc95706d04fd32b84d83ae678"],["/br_remove_depreciated/js/58.eb465caceba651014d06.js","cb429d77b6828c6ab7091cc3eb56d5ce"],["/br_remove_depreciated/js/59.eb465caceba651014d06.js","4f275a0da12e986fa0e90b34713d7e78"],["/br_remove_depreciated/js/6.eb465caceba651014d06.js","e451ab08bd5f2037a105a1b47195aed7"],["/br_remove_depreciated/js/60.eb465caceba651014d06.js","0faabad8e465298e40927e937adfa32d"],["/br_remove_depreciated/js/61.eb465caceba651014d06.js","8235dfe44363431a4a591d7c63a9e9f8"],["/br_remove_depreciated/js/62.eb465caceba651014d06.js","ffb22e7f3f2136a423d52f8815cc7c29"],["/br_remove_depreciated/js/63.eb465caceba651014d06.js","e88eeddbea7dc182514dfa70e49770b2"],["/br_remove_depreciated/js/64.eb465caceba651014d06.js","3060133f9778cae20cd5a16d87d88e7f"],["/br_remove_depreciated/js/65.eb465caceba651014d06.js","dca94a266c37ab45bc5795a209a1569d"],["/br_remove_depreciated/js/66.eb465caceba651014d06.js","a09b3211a4d1d88e373d708b90106e98"],["/br_remove_depreciated/js/67.eb465caceba651014d06.js","2e1d9d07990fd15e46e61fc5923e80d5"],["/br_remove_depreciated/js/68.eb465caceba651014d06.js","ead2b3320618499ddc75c160130a9ff5"],["/br_remove_depreciated/js/69.eb465caceba651014d06.js","9c5378c25efd5362aa8fa268c4419176"],["/br_remove_depreciated/js/7.eb465caceba651014d06.js","83e12b92961079501d44db6d5eaa3633"],["/br_remove_depreciated/js/70.eb465caceba651014d06.js","c1e9bae8923c603e670412f72f974e8c"],["/br_remove_depreciated/js/71.eb465caceba651014d06.js","e53e8a7f0f8803a052035ba3a8e19f62"],["/br_remove_depreciated/js/8.eb465caceba651014d06.js","1d36df44a0c6c879a6ffc141fc65ba87"],["/br_remove_depreciated/js/9.eb465caceba651014d06.js","402075a4357a2ea0d24dfab3f48838be"],["/br_remove_depreciated/js/AccountSignupModal.eb465caceba651014d06.js","c68deddef4b22caf6b8a2b5a72e3b8d4"],["/br_remove_depreciated/js/account-info.eb465caceba651014d06.js","3838205d370f6fa50dc4f6c7607487f1"],["/br_remove_depreciated/js/contract.eb465caceba651014d06.js","9ff03b1b2f439465fdb1b6f9c7a9df62"],["/br_remove_depreciated/js/default~open_position~1833eefb.eb465caceba651014d06.js","2cf3d129070817361c284300a1d490ac"],["/br_remove_depreciated/js/digits.eb465caceba651014d06.js","dbd1917187e3152d063de6a54e5d458d"],["/br_remove_depreciated/js/info-box.eb465caceba651014d06.js","d875b810eca8d18514f47976f1f3cb25"],["/br_remove_depreciated/js/modals.eb465caceba651014d06.js","84602b7541717531da712291711794e4"],["/br_remove_depreciated/js/notification-messages.eb465caceba651014d06.js","a8b6ea43a36f912ae42fc2a82e1d0119"],["/br_remove_depreciated/js/open_positions.eb465caceba651014d06.js","1fc1b7b908937b9cd37fa021895fed7b"],["/br_remove_depreciated/js/profit_table.eb465caceba651014d06.js","e86e8eab70e2f1fba5861e9a8fba578d"],["/br_remove_depreciated/js/push-notification.eb465caceba651014d06.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_remove_depreciated/js/reports.eb465caceba651014d06.js","030e80bfa86cb161b339b30de4c16f00"],["/br_remove_depreciated/js/screen-small.eb465caceba651014d06.js","664bbb2d0aef4cff89948ba049e0fea6"],["/br_remove_depreciated/js/settings-chart.eb465caceba651014d06.js","e0ddf3623b5ebbc95f3aa41c2ecd4b7c"],["/br_remove_depreciated/js/settings-language.eb465caceba651014d06.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_remove_depreciated/js/settings-theme.eb465caceba651014d06.js","dc396d0e6e847f4cecb6a04ab51955b0"],["/br_remove_depreciated/js/smart_chart.eb465caceba651014d06.js","0bd151447fb09ea7ea7570c5835f6351"],["/br_remove_depreciated/js/smartcharts/chartiq-1bc597.smartcharts.js","5b8745e14e4ba2dbf9dce796b69f27b2"],["/br_remove_depreciated/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/br_remove_depreciated/js/smartcharts/de-po-0b83db.smartcharts.js","390ba62901011463380108d47696b86b"],["/br_remove_depreciated/js/smartcharts/de-po-0c1385.smartcharts.js","5a1e3cfccfb638c33c2f5d66faca3eeb"],["/br_remove_depreciated/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/br_remove_depreciated/js/smartcharts/es-po-11debc.smartcharts.js","eb8f2698b9a18a06d6abc4ab54217f1f"],["/br_remove_depreciated/js/smartcharts/es-po-19e90a.smartcharts.js","7c6bd1342a7ad6700a6cffd6e4e0a73a"],["/br_remove_depreciated/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/br_remove_depreciated/js/smartcharts/es-po-56de13.smartcharts.js","a68591a46e8fe0acdc1049676a590c31"],["/br_remove_depreciated/js/smartcharts/es-po-9f965b.smartcharts.js","cad3ec523aa2676ff28d5fd9562293a1"],["/br_remove_depreciated/js/smartcharts/fr-po-32dce3.smartcharts.js","23e4180e68f49df1797131801cee12bc"],["/br_remove_depreciated/js/smartcharts/fr-po-c8c922.smartcharts.js","e90e43f928ce0dd7b25dcb942168150c"],["/br_remove_depreciated/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/br_remove_depreciated/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/br_remove_depreciated/js/smartcharts/html2canvas-a979bf.smartcharts.js","b4a971996facd8b3fb56255d9db5968f"],["/br_remove_depreciated/js/smartcharts/html2canvas-cc1be4.smartcharts.js","aed4281de504ca46d74664c391a68189"],["/br_remove_depreciated/js/smartcharts/id-po-684adf.smartcharts.js","f93136258ba3abe61664cafb7e109193"],["/br_remove_depreciated/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/br_remove_depreciated/js/smartcharts/id-po-ef2967.smartcharts.js","fd7940c65afe27f5e11d46b68e89f74c"],["/br_remove_depreciated/js/smartcharts/it-po-2b8029.smartcharts.js","04d5b0354f5f6d861e4fe4dd06ece07f"],["/br_remove_depreciated/js/smartcharts/it-po-6fb521.smartcharts.js","7bcd6576fdba2d63bf7ce1f387c71797"],["/br_remove_depreciated/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/br_remove_depreciated/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/br_remove_depreciated/js/smartcharts/nl-po-dbc059.smartcharts.js","5f0bbcbda9c2655ecb1033afbc324cd6"],["/br_remove_depreciated/js/smartcharts/pl-po-685545.smartcharts.js","bd25a5c21d8475ec37815c8c9600c201"],["/br_remove_depreciated/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/br_remove_depreciated/js/smartcharts/pl-po-ddb25d.smartcharts.js","9c1ec02f795276ab3c106a52e99af8cc"],["/br_remove_depreciated/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/br_remove_depreciated/js/smartcharts/pt-po-94d77b.smartcharts.js","a5c20ad9ea460a09a0f5615d3c1b162f"],["/br_remove_depreciated/js/smartcharts/pt-po-d41ef5.smartcharts.js","d05e1ab6e49d1f64a63e877eac50f8c6"],["/br_remove_depreciated/js/smartcharts/ru-po-afea21.smartcharts.js","29869f8a0d1329b458944e3fcc6cd54a"],["/br_remove_depreciated/js/smartcharts/ru-po-e27011.smartcharts.js","3a98d589a8728aa7881b50d2dbc01e17"],["/br_remove_depreciated/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/br_remove_depreciated/js/smartcharts/sprite-1aa5c4.smartcharts.svg","7624932c54f8eb2ff067baf09b5a05f1"],["/br_remove_depreciated/js/smartcharts/sprite-7acb38.smartcharts.svg","d4cfdebc77d6ffe19b4e3a7086de354e"],["/br_remove_depreciated/js/smartcharts/sprite-8c94a0.smartcharts.svg","b275f7af96e7e84d95e3b5612f636473"],["/br_remove_depreciated/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_remove_depreciated/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/br_remove_depreciated/js/smartcharts/th-po-f7955d.smartcharts.js","5b7e6f27230e5c47a8b2493ddd253c4c"],["/br_remove_depreciated/js/smartcharts/th-po-f9221a.smartcharts.js","8a546ad5e35758d391a1b394c959a8d7"],["/br_remove_depreciated/js/smartcharts/vendors~resize-observer-polyfill-358f59.smartcharts.js","7cc03f6cea9d826c6829915288d857c5"],["/br_remove_depreciated/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/br_remove_depreciated/js/smartcharts/vi-po-2fa80c.smartcharts.js","9da61d50dabb424f48153731cba37ae8"],["/br_remove_depreciated/js/smartcharts/vi-po-47a1c7.smartcharts.js","7c2e37e4dbded9406787b7702a469871"],["/br_remove_depreciated/js/smartcharts/vi-po-47e08b.smartcharts.js","4a11b3ed941616c11b7cd43256de11c9"],["/br_remove_depreciated/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/br_remove_depreciated/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/br_remove_depreciated/js/smartcharts/zh_cn-po-80ac55.smartcharts.js","7e082dc033a0a4d5cff2b107dd2960aa"],["/br_remove_depreciated/js/smartcharts/zh_cn-po-e6a513.smartcharts.js","962ee83946ae9e5ec1069aa9baa56dfd"],["/br_remove_depreciated/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/br_remove_depreciated/js/smartcharts/zh_tw-po-48b237.smartcharts.js","2c4a29f445e75eb7892e1fbcf592e915"],["/br_remove_depreciated/js/smartcharts/zh_tw-po-49baa6.smartcharts.js","0c86a54715c0b38dd7246544137ffc58"],["/br_remove_depreciated/js/statement.eb465caceba651014d06.js","9a8f9ce973af0c135b292708a3f209dd"],["/br_remove_depreciated/js/toggle-menu-drawer.eb465caceba651014d06.js","05ed6159c951aa402f0e8e2041498992"],["/br_remove_depreciated/js/two-month-picker.eb465caceba651014d06.js","7ffcebff91118e847097df8afcb893b7"],["/br_remove_depreciated/js/vendors~AccountSignupModal.eb465caceba651014d06.js","0e1c08580357d61b73b74c36d3060b87"],["/br_remove_depreciated/js/vendors~digits~info-b~897959f6.eb465caceba651014d06.js","29c829d50c1d4afb35e541dad5732db1"],["/br_remove_depreciated/js/vendors~open_position~7c650be5.eb465caceba651014d06.js","96370a09a14169069e4993fc9b50456a"],["/br_remove_depreciated/js/work-in-progress.eb465caceba651014d06.js","e4206c2e258b35597fec2b01850ef48e"],["/br_remove_depreciated/manifest.json","e70f27273369bc5c1e87ec77231d9e11"],["/br_remove_depreciated/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_remove_depreciated/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_remove_depreciated/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_remove_depreciated/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_remove_depreciated/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_remove_depreciated/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_remove_depreciated/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_remove_depreciated/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_remove_depreciated/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_remove_depreciated/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_remove_depreciated/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_remove_depreciated/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_remove_depreciated/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_remove_depreciated/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_remove_depreciated/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_remove_depreciated/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_remove_depreciated/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_remove_depreciated/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_remove_depreciated/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_remove_depreciated/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_remove_depreciated/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_remove_depreciated/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_remove_depreciated/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_remove_depreciated/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_remove_depreciated/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_remove_depreciated/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_remove_depreciated/';
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







