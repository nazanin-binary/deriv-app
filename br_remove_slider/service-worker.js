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

var precacheConfig = [["/br_remove_slider/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_remove_slider/css/AccountSignupModal.css","5215c139e93cec8b926fd2916aca6be1"],["/br_remove_slider/css/app.css","38a34771a7e800c8737654cec0f10f7f"],["/br_remove_slider/css/digits.css","1419ea07bf9c9264cb142ce95d47171a"],["/br_remove_slider/css/modals.css","a3ada3ef9ab9912f1f3b17ded2c4fdb2"],["/br_remove_slider/css/notification-messages.css","30c5f2d725b0ba1d8d70246ac9d6f545"],["/br_remove_slider/css/reports.css","113d3dd3e7a75253136cd029a46beea9"],["/br_remove_slider/css/screen-small.css","bf00b73794f7526c5c4ac49b7472ae83"],["/br_remove_slider/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/br_remove_slider/css/work-in-progress.css","124f574d47a7d3d3f72c38068dc644ff"],["/br_remove_slider/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_remove_slider/index.html","67b041a23e0be983b59c8f082b158e58"],["/br_remove_slider/js/0.6ab46773b80a92256d0e.js","dfda2b2ff8aeba6f43ba952e6328f70c"],["/br_remove_slider/js/1.6ab46773b80a92256d0e.js","5cdbde63281491f63f73d4b35724cf76"],["/br_remove_slider/js/10.6ab46773b80a92256d0e.js","24cdab0956b85ae0f05d16b6e18ea861"],["/br_remove_slider/js/11.6ab46773b80a92256d0e.js","6ba9826d58870cecfc4a8a2f70bd21bc"],["/br_remove_slider/js/12.6ab46773b80a92256d0e.js","b3782aa11a2bcd7346f2c063500adc36"],["/br_remove_slider/js/13.6ab46773b80a92256d0e.js","b46531f2c6ee6940b54d18df22c0af4c"],["/br_remove_slider/js/14.6ab46773b80a92256d0e.js","dc6854e5922a0b8b3d34c5a82666ef03"],["/br_remove_slider/js/15.6ab46773b80a92256d0e.js","f0c158aa9ef8b8776a835c22f6af1f6a"],["/br_remove_slider/js/16.6ab46773b80a92256d0e.js","0d424ec46f1b5e5be8c252c4d4d44269"],["/br_remove_slider/js/17.6ab46773b80a92256d0e.js","dc28a133f46826e491fb06d3535134ce"],["/br_remove_slider/js/18.6ab46773b80a92256d0e.js","777574ae5fdcd71fcc3ffcc42e53c1a4"],["/br_remove_slider/js/19.6ab46773b80a92256d0e.js","b200401627886e467477545c3f68b44b"],["/br_remove_slider/js/2.6ab46773b80a92256d0e.js","0e2466b9de6153ea9594962c9419ef35"],["/br_remove_slider/js/20.6ab46773b80a92256d0e.js","fbbb8a76a96980f85bdd144ce264df2e"],["/br_remove_slider/js/21.6ab46773b80a92256d0e.js","5f687c2fed7eb27312924b100cf0747e"],["/br_remove_slider/js/22.6ab46773b80a92256d0e.js","770c0ffb933eb8235d0b1aa26ff8454b"],["/br_remove_slider/js/23.6ab46773b80a92256d0e.js","b3fb842ad9128a191fbf0755b91f8a33"],["/br_remove_slider/js/24.6ab46773b80a92256d0e.js","f74c7345e32be8641c5a43a68545c5c5"],["/br_remove_slider/js/25.6ab46773b80a92256d0e.js","2b01cd4aeb606a6056a609eed5f2da10"],["/br_remove_slider/js/26.6ab46773b80a92256d0e.js","c957258cc4be5f2c162d2959f699e3f5"],["/br_remove_slider/js/27.6ab46773b80a92256d0e.js","dd3ee128f0adf21451d4f8a421dccc9d"],["/br_remove_slider/js/28.6ab46773b80a92256d0e.js","2ca62e020af3af61d23921c198937c77"],["/br_remove_slider/js/29.6ab46773b80a92256d0e.js","0d570d0b894670a33910a3f46eeb6b96"],["/br_remove_slider/js/3.6ab46773b80a92256d0e.js","785d9fc9e11188f6fda8e4da076aef6d"],["/br_remove_slider/js/30.6ab46773b80a92256d0e.js","e14d0edc0d88c7cd23a8eec487f0c043"],["/br_remove_slider/js/31.6ab46773b80a92256d0e.js","460768b28d8889420548466cd2810346"],["/br_remove_slider/js/32.6ab46773b80a92256d0e.js","f8b3b9b4edcb9463f387566a9f41ca07"],["/br_remove_slider/js/33.6ab46773b80a92256d0e.js","ef0cd40bae67a9909ca0f64a58cdafd5"],["/br_remove_slider/js/34.6ab46773b80a92256d0e.js","9b1f5bb4391494bae13094bb8cf8ade3"],["/br_remove_slider/js/35.6ab46773b80a92256d0e.js","b72213cfa8109496842b86c121e4d8ba"],["/br_remove_slider/js/36.6ab46773b80a92256d0e.js","93b974f835a3e8dbb7c8933e1f5f414e"],["/br_remove_slider/js/37.6ab46773b80a92256d0e.js","4e05bada5f3ed81e37d23b57eae46f87"],["/br_remove_slider/js/38.6ab46773b80a92256d0e.js","6ddc14163b226fb3d2377068da2d4c4b"],["/br_remove_slider/js/39.6ab46773b80a92256d0e.js","0c3ab86e5516db772268727becf5c48e"],["/br_remove_slider/js/4.6ab46773b80a92256d0e.js","774c2a9e2b7d1b4ccdedb8d92234887a"],["/br_remove_slider/js/40.6ab46773b80a92256d0e.js","41be90ef0e4e28328f38ac00bce9aff8"],["/br_remove_slider/js/404.6ab46773b80a92256d0e.js","aaeab513b6d02aad7397a3e6321054de"],["/br_remove_slider/js/41.6ab46773b80a92256d0e.js","73ee7223220fb8337a4fdaabaf2b6859"],["/br_remove_slider/js/42.6ab46773b80a92256d0e.js","6e491d37c484c011be0f4071d8deee9e"],["/br_remove_slider/js/43.6ab46773b80a92256d0e.js","ce0ff9730d4dfb3fb0aa8c9d8fd30ae0"],["/br_remove_slider/js/44.6ab46773b80a92256d0e.js","5460643f6a20eedaee5215adfcbb8245"],["/br_remove_slider/js/45.6ab46773b80a92256d0e.js","968cfb2f90498a4b2ab48295fc5ddd1f"],["/br_remove_slider/js/46.6ab46773b80a92256d0e.js","01205adb12da86af57b19828e875ef8f"],["/br_remove_slider/js/47.6ab46773b80a92256d0e.js","3d37371687f1d059b5a3d0f42fd8226d"],["/br_remove_slider/js/48.6ab46773b80a92256d0e.js","8ef23309f3eb2dcfce8c146705b2f5f3"],["/br_remove_slider/js/49.6ab46773b80a92256d0e.js","a5b3eae6910e7657b559c33742aa088c"],["/br_remove_slider/js/5.6ab46773b80a92256d0e.js","55da0f862cba4482d336e2d0e59893b0"],["/br_remove_slider/js/50.6ab46773b80a92256d0e.js","bfb6a9d1bb16516fab0c482049d6d9d5"],["/br_remove_slider/js/51.6ab46773b80a92256d0e.js","b146d8f1b33f6fbabf97cea1d7e12462"],["/br_remove_slider/js/52.6ab46773b80a92256d0e.js","9b8d9ff25240ece14b0d9d3e999b05b1"],["/br_remove_slider/js/53.6ab46773b80a92256d0e.js","12b6fd0c04dece4f298927ca09d5974e"],["/br_remove_slider/js/54.6ab46773b80a92256d0e.js","47e3c20684d44861233d6f9edd5bc6dc"],["/br_remove_slider/js/55.6ab46773b80a92256d0e.js","22d3e1788ec906d5bf652740aa6acae4"],["/br_remove_slider/js/56.6ab46773b80a92256d0e.js","a1cb4121c038da5e4542705bc8ae1d82"],["/br_remove_slider/js/57.6ab46773b80a92256d0e.js","bd2386dbc6e6dafbeb24afc4eec0f61e"],["/br_remove_slider/js/58.6ab46773b80a92256d0e.js","caa44ce0c637886053ce0d3d561526af"],["/br_remove_slider/js/59.6ab46773b80a92256d0e.js","a6dfb7dad607d9adc118960e671ae24c"],["/br_remove_slider/js/6.6ab46773b80a92256d0e.js","e3f60a93f8a282d997ec328925a24cd6"],["/br_remove_slider/js/60.6ab46773b80a92256d0e.js","6f9ab880899dd804d33be1fc64a95700"],["/br_remove_slider/js/61.6ab46773b80a92256d0e.js","67767d26c5c1a6d023a0d91fce3e6173"],["/br_remove_slider/js/62.6ab46773b80a92256d0e.js","c55483e16dd5fbf6debeac95aeaff70c"],["/br_remove_slider/js/63.6ab46773b80a92256d0e.js","0a4d2413a2c462d357310b07b8456746"],["/br_remove_slider/js/64.6ab46773b80a92256d0e.js","d8be04ac65792cb88a46853e21ccb00d"],["/br_remove_slider/js/65.6ab46773b80a92256d0e.js","b14ac103ba7fc32198e437b8ad950171"],["/br_remove_slider/js/66.6ab46773b80a92256d0e.js","d0844751a302da12ce7daacd9e3cd91f"],["/br_remove_slider/js/67.6ab46773b80a92256d0e.js","58bf122e320fe5e4704f2b399bb26d78"],["/br_remove_slider/js/68.6ab46773b80a92256d0e.js","28de1c6851383ed1860fd7569c7af7ab"],["/br_remove_slider/js/69.6ab46773b80a92256d0e.js","a467471e30422c79158a453e7a40cf30"],["/br_remove_slider/js/7.6ab46773b80a92256d0e.js","eaedc19aef9c16b1198f40f40c0de1a2"],["/br_remove_slider/js/70.6ab46773b80a92256d0e.js","4006825b0dee67072b75a8ea75e7c165"],["/br_remove_slider/js/71.6ab46773b80a92256d0e.js","e56e3d32eedc89a8bc80486a949b6c5c"],["/br_remove_slider/js/8.6ab46773b80a92256d0e.js","7fcbab2122f89cc5d903f47b3ae38ca0"],["/br_remove_slider/js/9.6ab46773b80a92256d0e.js","23a39fa0131c0dfef5cfefbfa6a330b2"],["/br_remove_slider/js/AccountSignupModal.6ab46773b80a92256d0e.js","bdf0525a7cff1a86bd214eec36d8653f"],["/br_remove_slider/js/account-info.6ab46773b80a92256d0e.js","ca03f89074c32781580c241295fed46e"],["/br_remove_slider/js/contract.6ab46773b80a92256d0e.js","d13a3d36d98060ed61d863a61dd2c01a"],["/br_remove_slider/js/default~open_position~1833eefb.6ab46773b80a92256d0e.js","26a3528119e5df23760301c45a9f5db3"],["/br_remove_slider/js/digits.6ab46773b80a92256d0e.js","3ff34c3a3dc3520b849c756cd0af026f"],["/br_remove_slider/js/info-box.6ab46773b80a92256d0e.js","d9206e7be8462644564fc248e5ae0b45"],["/br_remove_slider/js/modals.6ab46773b80a92256d0e.js","9befedeae15aadd4961d8f3540aeb199"],["/br_remove_slider/js/notification-messages.6ab46773b80a92256d0e.js","6fc20816d7fcece18eee533f628c1fdd"],["/br_remove_slider/js/open_positions.6ab46773b80a92256d0e.js","d503793558a5e98b9c9beb3081f74369"],["/br_remove_slider/js/profit_table.6ab46773b80a92256d0e.js","323345a17f8e90f817a1ab45ad3190ed"],["/br_remove_slider/js/push-notification.6ab46773b80a92256d0e.js","316c8a442c96155548d650417f0872a6"],["/br_remove_slider/js/reports.6ab46773b80a92256d0e.js","6ea2fbedfb27c1371e9e8808e44707a7"],["/br_remove_slider/js/screen-small.6ab46773b80a92256d0e.js","b177b439b1ac0a969b38189aadb9c653"],["/br_remove_slider/js/settings-chart.6ab46773b80a92256d0e.js","692b8e73e33d5e8412b22168fb95c780"],["/br_remove_slider/js/settings-language.6ab46773b80a92256d0e.js","bd47dd720a8716052fa3938b30d75728"],["/br_remove_slider/js/settings-theme.6ab46773b80a92256d0e.js","ac0a57b34b3a0ed3c83a265074989c30"],["/br_remove_slider/js/smart_chart.6ab46773b80a92256d0e.js","a90ae1a485b6fbf7aa38ecc277d298a8"],["/br_remove_slider/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/br_remove_slider/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/br_remove_slider/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/br_remove_slider/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/br_remove_slider/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/br_remove_slider/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/br_remove_slider/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/br_remove_slider/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/br_remove_slider/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/br_remove_slider/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/br_remove_slider/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/br_remove_slider/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_remove_slider/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/br_remove_slider/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/br_remove_slider/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/br_remove_slider/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/br_remove_slider/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/br_remove_slider/js/statement.6ab46773b80a92256d0e.js","afd2070872bc0eb8d00414f296c61d58"],["/br_remove_slider/js/toggle-menu-drawer.6ab46773b80a92256d0e.js","908dae6e537f45cf5cdee252f8b3cf1f"],["/br_remove_slider/js/two-month-picker.6ab46773b80a92256d0e.js","3bc9e3ef7c0e6f650029ab78980ef930"],["/br_remove_slider/js/vendors~AccountSignupModal.6ab46773b80a92256d0e.js","0e1c08580357d61b73b74c36d3060b87"],["/br_remove_slider/js/vendors~open_position~7c650be5.6ab46773b80a92256d0e.js","96370a09a14169069e4993fc9b50456a"],["/br_remove_slider/js/vendors~smart_chart.6ab46773b80a92256d0e.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/br_remove_slider/js/work-in-progress.6ab46773b80a92256d0e.js","3e86bd86e15f88dcccb55cdd497aa90f"],["/br_remove_slider/manifest.json","e13c327f8720f28ed7a51aceb7d6e7c1"],["/br_remove_slider/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_remove_slider/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_remove_slider/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_remove_slider/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_remove_slider/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_remove_slider/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_remove_slider/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_remove_slider/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_remove_slider/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_remove_slider/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_remove_slider/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_remove_slider/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_remove_slider/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_remove_slider/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_remove_slider/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_remove_slider/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_remove_slider/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_remove_slider/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_remove_slider/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_remove_slider/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_remove_slider/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_remove_slider/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_remove_slider/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_remove_slider/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_remove_slider/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_remove_slider/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_remove_slider/';
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







