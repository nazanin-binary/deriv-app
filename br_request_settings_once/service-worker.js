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

var precacheConfig = [["/br_request_settings_once/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_request_settings_once/css/app.css","30efe7d4cab963ea70a7b097943e5ee6"],["/br_request_settings_once/css/digits.css","1419ea07bf9c9264cb142ce95d47171a"],["/br_request_settings_once/css/modals.css","a3ada3ef9ab9912f1f3b17ded2c4fdb2"],["/br_request_settings_once/css/notification-messages.css","30c5f2d725b0ba1d8d70246ac9d6f545"],["/br_request_settings_once/css/reports.css","113d3dd3e7a75253136cd029a46beea9"],["/br_request_settings_once/css/screen-small.css","bf00b73794f7526c5c4ac49b7472ae83"],["/br_request_settings_once/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/br_request_settings_once/css/work-in-progress.css","124f574d47a7d3d3f72c38068dc644ff"],["/br_request_settings_once/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_request_settings_once/index.html","5fff6157e4abfcf69ac0b603e4c857e4"],["/br_request_settings_once/js/0.3c493218859a282288a2.js","dfda2b2ff8aeba6f43ba952e6328f70c"],["/br_request_settings_once/js/1.3c493218859a282288a2.js","5cdbde63281491f63f73d4b35724cf76"],["/br_request_settings_once/js/10.3c493218859a282288a2.js","f7832504155f6787ed3fd076cdf8d038"],["/br_request_settings_once/js/11.3c493218859a282288a2.js","4ae4c903083cb93ce9cdbc50d85987ff"],["/br_request_settings_once/js/12.3c493218859a282288a2.js","4c917e2717043e30e6d983fa25f3f4b5"],["/br_request_settings_once/js/13.3c493218859a282288a2.js","1ea5cbd12ac288ec2a6854b613208d03"],["/br_request_settings_once/js/14.3c493218859a282288a2.js","36c62387a1e2880e39e918556694a8b4"],["/br_request_settings_once/js/15.3c493218859a282288a2.js","f3d684f29dadbe3849501b23d1145c72"],["/br_request_settings_once/js/16.3c493218859a282288a2.js","3d2eaeb1c3e16d6d1ff0cfb799d6e6aa"],["/br_request_settings_once/js/17.3c493218859a282288a2.js","9c8f6cd41036a9c2efc5b98ac510dccf"],["/br_request_settings_once/js/18.3c493218859a282288a2.js","71f151bd0c7e4ae8d2425d06bd3e0f00"],["/br_request_settings_once/js/19.3c493218859a282288a2.js","00b65dabb14936f3d530c7456f08453b"],["/br_request_settings_once/js/2.3c493218859a282288a2.js","0e2466b9de6153ea9594962c9419ef35"],["/br_request_settings_once/js/20.3c493218859a282288a2.js","46b1def4d5ba1cb4be53cb462ea10e8c"],["/br_request_settings_once/js/21.3c493218859a282288a2.js","d71d033fe0724ada90556bc0cbcf2255"],["/br_request_settings_once/js/22.3c493218859a282288a2.js","591fde0d15c34c12dd3e04b5e6459249"],["/br_request_settings_once/js/23.3c493218859a282288a2.js","3a2e21accf2da2157f14fe785d76f62c"],["/br_request_settings_once/js/24.3c493218859a282288a2.js","9d230af2dc830fa871512e63c8250c2b"],["/br_request_settings_once/js/25.3c493218859a282288a2.js","324aa122973b5b0a9bab0aa2594ec193"],["/br_request_settings_once/js/26.3c493218859a282288a2.js","f76f59e957f04fca55394fcc4d5cf3f1"],["/br_request_settings_once/js/27.3c493218859a282288a2.js","be2e4eb30795d756b2b4c7dd94513473"],["/br_request_settings_once/js/28.3c493218859a282288a2.js","339f27f8349e26031391c710f13f0e30"],["/br_request_settings_once/js/29.3c493218859a282288a2.js","e7765a5bb5867d5b2b8af55e81d0d093"],["/br_request_settings_once/js/3.3c493218859a282288a2.js","8dda781d429fc2e255b924e557c00b5c"],["/br_request_settings_once/js/30.3c493218859a282288a2.js","6c5f4af40527a67f3daad495804c2ca0"],["/br_request_settings_once/js/31.3c493218859a282288a2.js","a45dc3f0c8f888cd73d6b1fa14405b9a"],["/br_request_settings_once/js/32.3c493218859a282288a2.js","b5c6274453f53432ffcfd94826985685"],["/br_request_settings_once/js/33.3c493218859a282288a2.js","e41b96c8cbbba0c5b1e180e4e577310f"],["/br_request_settings_once/js/34.3c493218859a282288a2.js","67ddb780401d667cd0cd02841681bbde"],["/br_request_settings_once/js/35.3c493218859a282288a2.js","291d237cf91b5d1e856cd737461854fa"],["/br_request_settings_once/js/36.3c493218859a282288a2.js","58364f530f356ff4a126b336eb54dbfe"],["/br_request_settings_once/js/37.3c493218859a282288a2.js","4e5b85c179c98f3ce611d24f784560ab"],["/br_request_settings_once/js/38.3c493218859a282288a2.js","6969a5b11414dadee27704017cdba4fd"],["/br_request_settings_once/js/39.3c493218859a282288a2.js","2a99810cd430b7290e677cc9a64e9500"],["/br_request_settings_once/js/4.3c493218859a282288a2.js","a449f7e150a98e3f66915664b1c29e19"],["/br_request_settings_once/js/40.3c493218859a282288a2.js","b0ba692451faf4b4c401f95b8fa91b8c"],["/br_request_settings_once/js/404.3c493218859a282288a2.js","aaeab513b6d02aad7397a3e6321054de"],["/br_request_settings_once/js/41.3c493218859a282288a2.js","81ebea9f4236925c8c338d31dc618c6d"],["/br_request_settings_once/js/42.3c493218859a282288a2.js","be326139170c3aae8e39e7af751dc240"],["/br_request_settings_once/js/43.3c493218859a282288a2.js","c5bcee90f171048d5ae3669828c6f900"],["/br_request_settings_once/js/44.3c493218859a282288a2.js","1dc1483cd38d7e23e687a847bf98876e"],["/br_request_settings_once/js/45.3c493218859a282288a2.js","f4c02c18b1b8d323b048d5e6f8eb1937"],["/br_request_settings_once/js/46.3c493218859a282288a2.js","319d76707435e2d40ee33a9ad769eeef"],["/br_request_settings_once/js/47.3c493218859a282288a2.js","c3ab49877ca4789869c918fd04d24e75"],["/br_request_settings_once/js/48.3c493218859a282288a2.js","cf0fb8bcce78aad550561a1ca793c3bd"],["/br_request_settings_once/js/49.3c493218859a282288a2.js","bbc059d0ff49703183f6371bce65d5a2"],["/br_request_settings_once/js/5.3c493218859a282288a2.js","88f13e5ade0248f6316ea73b93683449"],["/br_request_settings_once/js/50.3c493218859a282288a2.js","679265d375640a1dd1624f7a1aa96005"],["/br_request_settings_once/js/51.3c493218859a282288a2.js","1fd7008c5b81f752be00d264525d049e"],["/br_request_settings_once/js/52.3c493218859a282288a2.js","056e6f9e51387a4d5906a1faaab6512e"],["/br_request_settings_once/js/53.3c493218859a282288a2.js","c0660d1ccd25b18f195a4cab52eaec11"],["/br_request_settings_once/js/54.3c493218859a282288a2.js","32cd1dac46d8fe969b36f9933872909f"],["/br_request_settings_once/js/55.3c493218859a282288a2.js","2dba03f483d1ea73f3293a989df4e3c5"],["/br_request_settings_once/js/56.3c493218859a282288a2.js","0713717aa32108e7cb638ecbf841fe5d"],["/br_request_settings_once/js/57.3c493218859a282288a2.js","6adeb8feb632799c00bc104179d9d3ee"],["/br_request_settings_once/js/58.3c493218859a282288a2.js","5dbb09c34c10713cee7ab75aed642d39"],["/br_request_settings_once/js/59.3c493218859a282288a2.js","9b50d11a60f88b1d57224cf49b28ccfc"],["/br_request_settings_once/js/6.3c493218859a282288a2.js","b8cfc2efb8f242eeb0b5d2ee2d6654bc"],["/br_request_settings_once/js/60.3c493218859a282288a2.js","78dbc359833b20cb129abe994d141bf3"],["/br_request_settings_once/js/61.3c493218859a282288a2.js","38490d21545defbf99a28f740c3de1d1"],["/br_request_settings_once/js/62.3c493218859a282288a2.js","215b40a72dd429d1a70d9e65866c6b63"],["/br_request_settings_once/js/63.3c493218859a282288a2.js","f05e08899b1780c82c76edef47107f4a"],["/br_request_settings_once/js/64.3c493218859a282288a2.js","7c0e4cdf7257d1e0d80dee94e91560ab"],["/br_request_settings_once/js/65.3c493218859a282288a2.js","c72b53439b2f2a163a02f367b488c28f"],["/br_request_settings_once/js/66.3c493218859a282288a2.js","823790237c88d1c86acb30967ff58268"],["/br_request_settings_once/js/67.3c493218859a282288a2.js","b3de393cac93254432e06b4ea08fd107"],["/br_request_settings_once/js/68.3c493218859a282288a2.js","f22451ca753c65828af2f4fb23248f3f"],["/br_request_settings_once/js/69.3c493218859a282288a2.js","5cfe50a95675360d36774d40834d3088"],["/br_request_settings_once/js/7.3c493218859a282288a2.js","fa02e76dd031961dba89b64a5fad02c6"],["/br_request_settings_once/js/70.3c493218859a282288a2.js","8516b76856d00f28860a27d14ad401a3"],["/br_request_settings_once/js/8.3c493218859a282288a2.js","bc05e29accf6baf254ef361c1fa30c5e"],["/br_request_settings_once/js/9.3c493218859a282288a2.js","fe4f3ad8a688ae5bb5da22b808d5a723"],["/br_request_settings_once/js/account-info.3c493218859a282288a2.js","ca03f89074c32781580c241295fed46e"],["/br_request_settings_once/js/contract.3c493218859a282288a2.js","d13a3d36d98060ed61d863a61dd2c01a"],["/br_request_settings_once/js/default~open_position~1833eefb.3c493218859a282288a2.js","26a3528119e5df23760301c45a9f5db3"],["/br_request_settings_once/js/digits.3c493218859a282288a2.js","3ff34c3a3dc3520b849c756cd0af026f"],["/br_request_settings_once/js/info-box.3c493218859a282288a2.js","d9206e7be8462644564fc248e5ae0b45"],["/br_request_settings_once/js/modals.3c493218859a282288a2.js","068dd5daececb8365995c1eda7d28605"],["/br_request_settings_once/js/notification-messages.3c493218859a282288a2.js","6fc20816d7fcece18eee533f628c1fdd"],["/br_request_settings_once/js/open_positions.3c493218859a282288a2.js","d503793558a5e98b9c9beb3081f74369"],["/br_request_settings_once/js/profit_table.3c493218859a282288a2.js","323345a17f8e90f817a1ab45ad3190ed"],["/br_request_settings_once/js/push-notification.3c493218859a282288a2.js","316c8a442c96155548d650417f0872a6"],["/br_request_settings_once/js/reports.3c493218859a282288a2.js","6ea2fbedfb27c1371e9e8808e44707a7"],["/br_request_settings_once/js/screen-small.3c493218859a282288a2.js","b177b439b1ac0a969b38189aadb9c653"],["/br_request_settings_once/js/settings-chart.3c493218859a282288a2.js","692b8e73e33d5e8412b22168fb95c780"],["/br_request_settings_once/js/settings-language.3c493218859a282288a2.js","bd47dd720a8716052fa3938b30d75728"],["/br_request_settings_once/js/settings-theme.3c493218859a282288a2.js","ac0a57b34b3a0ed3c83a265074989c30"],["/br_request_settings_once/js/smart_chart.3c493218859a282288a2.js","a90ae1a485b6fbf7aa38ecc277d298a8"],["/br_request_settings_once/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/br_request_settings_once/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/br_request_settings_once/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/br_request_settings_once/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/br_request_settings_once/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/br_request_settings_once/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/br_request_settings_once/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/br_request_settings_once/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/br_request_settings_once/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/br_request_settings_once/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/br_request_settings_once/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/br_request_settings_once/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_request_settings_once/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/br_request_settings_once/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/br_request_settings_once/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/br_request_settings_once/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/br_request_settings_once/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/br_request_settings_once/js/statement.3c493218859a282288a2.js","afd2070872bc0eb8d00414f296c61d58"],["/br_request_settings_once/js/toggle-menu-drawer.3c493218859a282288a2.js","908dae6e537f45cf5cdee252f8b3cf1f"],["/br_request_settings_once/js/two-month-picker.3c493218859a282288a2.js","3bc9e3ef7c0e6f650029ab78980ef930"],["/br_request_settings_once/js/vendors~open_position~7c650be5.3c493218859a282288a2.js","96370a09a14169069e4993fc9b50456a"],["/br_request_settings_once/js/vendors~smart_chart.3c493218859a282288a2.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/br_request_settings_once/js/work-in-progress.3c493218859a282288a2.js","3e86bd86e15f88dcccb55cdd497aa90f"],["/br_request_settings_once/manifest.json","ffc5923cb77616835670803cbd009eff"],["/br_request_settings_once/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_request_settings_once/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_request_settings_once/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_request_settings_once/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_request_settings_once/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_request_settings_once/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_request_settings_once/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_request_settings_once/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_request_settings_once/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_request_settings_once/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_request_settings_once/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_request_settings_once/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_request_settings_once/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_request_settings_once/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_request_settings_once/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_request_settings_once/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_request_settings_once/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_request_settings_once/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_request_settings_once/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_request_settings_once/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_request_settings_once/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_request_settings_once/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_request_settings_once/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_request_settings_once/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_request_settings_once/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_request_settings_once/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_request_settings_once/';
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







