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

var precacheConfig = [["D:/Blog/public/2021/01/23/introduction/index.html","4c1c2a79196ababab2c0c4c72a5fb813"],["D:/Blog/public/2021/01/27/searchSkill/index.html","33989f53534ee0d5cd43736fd9ac666c"],["D:/Blog/public/2021/02/02/area-cover1/index.html","1a12af1bb29ed2ce3ed633742559ad24"],["D:/Blog/public/2021/02/09/leetcode-lcof/index.html","2e5335927d3fad8c81341eebccd558fb"],["D:/Blog/public/2021/02/11/leetcode-everyday-2021-02-11/index.html","bb1c479c72e0e464e34e08eb98a7f848"],["D:/Blog/public/2021/05/25/reflect/index.html","dbbe1ea22a3f289b33e195a8fe060be7"],["D:/Blog/public/about/index.html","831e20eb516e16b5d8d44459f9047abb"],["D:/Blog/public/archives/2021/01/index.html","622887ffc25bbcfc96e2ffb5ab3e418b"],["D:/Blog/public/archives/2021/02/index.html","8118682cd00b1ee8392af4c3993d3807"],["D:/Blog/public/archives/2021/05/index.html","3f4b91c868201ddbbf711f4f6d9755e6"],["D:/Blog/public/archives/2021/index.html","649d4e05ab89857541e1a5715740c8a1"],["D:/Blog/public/archives/index.html","a3cf1a5aa306e0dc3fa97adb827cb1d2"],["D:/Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/Blog/public/categories/Java/index.html","acd7e6494f1e49528e8b6003344a3fa5"],["D:/Blog/public/categories/index.html","0053110d86453c8ec7fc67fe69e75798"],["D:/Blog/public/categories/leetcode/index.html","b8623c55c72e0b600d6d30118176310d"],["D:/Blog/public/categories/区域覆盖/index.html","1460fc6541960bfbf497d110d9d8b600"],["D:/Blog/public/categories/教程/index.html","d61fea492d8b0c10cb21cc8120b4dedf"],["D:/Blog/public/categories/杂记/index.html","d37a9e9796688aef000a47f4e1bae640"],["D:/Blog/public/css/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Blog/public/css/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/Blog/public/css/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/Blog/public/css/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Blog/public/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["D:/Blog/public/css/index.css","527c71b8814739323c8f4e25e807f6de"],["D:/Blog/public/css/style.css","5c470460c3777a634bb2b0dd57553491"],["D:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/fancybox/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["D:/Blog/public/fancybox/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["D:/Blog/public/images/20190319133735.png","79463640902ab24c2bb412709a66864d"],["D:/Blog/public/images/2021-02.png","a44ff0fea3de0f4ad9e954735bcc4dfe"],["D:/Blog/public/images/2021-03.png","29da99f5ba7a45d3dc2e5e9e9a8260e4"],["D:/Blog/public/images/Robot.png","afd16a2708457d7fb1bbd8b6d4e38bf3"],["D:/Blog/public/images/WPS图片批量处理/二次元三个可爱动漫少女带鱼屏壁纸_图片编号101971_壁纸网.jpg","b87811fbba9948deac2f44f201588287"],["D:/Blog/public/images/avatar.png","7cb89bd1e0a90c37f750989a5a235f77"],["D:/Blog/public/images/cloud.jpg","395a7b6c6460c7148fc99185940115ed"],["D:/Blog/public/images/comment_bg.png","2f4b7ed198a46059ed42e9462719a49a"],["D:/Blog/public/images/daily.png","b25dfda843cfde0705b8c0ef6d6b4150"],["D:/Blog/public/images/lsp1.jpg","b87811fbba9948deac2f44f201588287"],["D:/Blog/public/images/missing.png","8f8b3e838204eec8057ff952e682f6d6"],["D:/Blog/public/images/regular_expression_1.png","3ad2b0bd398933b80923b9a0fd374e87"],["D:/Blog/public/images/robot1.png","14e29c34fd8abae49587497d5303422c"],["D:/Blog/public/images/search.jpg","d57afdd19effb10de8b362abb0726b7c"],["D:/Blog/public/img/30ac5c03ebd5ddaff98fd6923743416d9be8133c.jpg","f314ba34154ab877fce6f6b472e5a43d"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/avatar.png","7cb89bd1e0a90c37f750989a5a235f77"],["D:/Blog/public/img/avatar2.png","5c19d8a4bbdd60f1496cb0e2c234262b"],["D:/Blog/public/img/comment_bg.png","2f4b7ed198a46059ed42e9462719a49a"],["D:/Blog/public/img/comment_bg2.png","09c05a228017b254150d3ac5c5ec15ed"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/footer.jpg","af95909147f49ef8cbb6cc4ecb9a9362"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/img/wechat.jpg","f2892d6d8bfe88969480a1f6f31b1c12"],["D:/Blog/public/index.html","1db8f98af446869e1b2a42e3bf1336a8"],["D:/Blog/public/js/jquery-3.4.1.min.js","220afd743d9e9643852e31a135a9f3ae"],["D:/Blog/public/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["D:/Blog/public/js/script.js","899039a2fd4a5c7a164d7ae5bfc78073"],["D:/Blog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Blog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Blog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/Blog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Blog/public/link/index.html","389afe025b958927ac7add73c0aa4b6a"],["D:/Blog/public/music/index.html","53b9fd5c6d5ff8e3a5997aecd4ea3f27"],["D:/Blog/public/tags/Java/index.html","0b64da1a554d9bd7e6c42f913d71fe6e"],["D:/Blog/public/tags/Java系列/index.html","beb15c3236e002f712099f58a4d584ba"],["D:/Blog/public/tags/index.html","6cceb4b3a8f1d7a3d94a867773f61488"],["D:/Blog/public/tags/力扣/index.html","81f08bddef7e4e9f52811be85609ae2a"],["D:/Blog/public/tags/区域覆盖/index.html","10bde575ae657bd073cd8b05d3b4d583"],["D:/Blog/public/tags/反射/index.html","533ff78221a935c13922cd035fe080de"],["D:/Blog/public/tags/搜索/index.html","e60ec673b6668f4a89be9119def5726b"],["D:/Blog/public/tags/教程/index.html","c549a230ec82c478820db3e8eec57bb3"],["D:/Blog/public/tags/每日一题/index.html","290215b12a85cc169dc1b3fb71cbb218"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


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
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
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
    var navigateFallback = '';
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







