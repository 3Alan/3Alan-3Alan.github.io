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

var precacheConfig = [["404.html","6cbfd5a2b281a00f7a4cd42d74a1c19a"],["about/index.html","08e90eb572560b229b2c39b094ed052a"],["archives/2020/05/index.html","c5433c41441cd4e4afbc1b52389d0168"],["archives/2020/05/page/2/index.html","388c12909fcbfbd69556f708f59c9fc6"],["archives/2020/06/index.html","3d437ca8048a4b14711fef24372c6453"],["archives/2020/07/index.html","bca7452938f6618e5fc027c8140c7862"],["archives/2020/11/index.html","8a2fd53dcff6c60b869f66c6ffb322f9"],["archives/2020/index.html","a693da4fae3ea13a8ad0bd3f33f6a0d3"],["archives/2020/page/2/index.html","aecf596ba0f425970d690898815c1e21"],["archives/index.html","2866714125d72e0958825adb8037c97b"],["archives/page/2/index.html","2866714125d72e0958825adb8037c97b"],["categories/Hexo博客/index.html","982d196d8c61bd027e5994f2a7de9118"],["categories/index.html","0f213bdeed5888e8a2fa5de5e0f9b72d"],["categories/前端/React/index.html","f33cd934c6bf08ad8fb4f6d4966f6455"],["categories/前端/TypeScript/index.html","449b67a0f499acf6c0e2c2ae093fad2b"],["categories/前端/index.html","67541f8f2e87297709bd24b2b7a319c6"],["categories/前端/page/2/index.html","bb338398b0c018fcf04e1d9f385f1d6f"],["categories/前端/webpack4-0学习总结/index.html","19a3fc589e76f7a5090be7fe126d43dd"],["categories/前端/面试造轮/index.html","98bf0dfe9d27021eb395501f4306607c"],["categories/效率工具/index.html","0937d9f3d25fa08de4ed57ae5d99974c"],["categories/测试分类/index.html","e519bb96846dc238b481d76248355c7e"],["categories/记录生活/2020/index.html","bd611f72cebe70d60553b97bc790f0ee"],["categories/记录生活/index.html","5f7d3828c63933fa8d0702bbb26598a8"],["css/first.css","6c1486c1cfce203e7c64e991befbc234"],["css/style.css","4be277dc1e7b5207508ed36953b135c8"],["friends/index.html","fed06e302d11db5ce78055aab4188d1b"],["index.html","51480948999b4c23492dbe4c81a973c3"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","70cd072fc032c8456547fe467cb5c5ea"],["page/2/index.html","492065eee8caac4ed0ff94477148b719"],["posts/20802113/index.html","ad3f19816b6cef5ad481959ab9836b03"],["posts/24b4915a/index.html","4186ccac26e727d0b23c1bdcbaafc03b"],["posts/35b500c6/index.html","1672d0a6e72799f519afc1c8579a2c68"],["posts/3b0a6cbe/index.html","ab92173dacaf878aafbf7cface2a4aff"],["posts/66d3b164/index.html","4ecb91612edfe77076030fd5e84075ba"],["posts/6af865/index.html","33ea479acd0ac8cbb4e0517048c148e7"],["posts/829819a3/index.html","7d64da12a0a59890147638b24abdd760"],["posts/84d16999/index.html","c9e024294ed4ded2246e488d636b31c3"],["posts/b050203a/index.html","abfecde3b390db5e33533af6ff1dd797"],["posts/b4c78541/index.html","94342ca27c4ab34e16261e06a15dc74d"],["posts/c05e5480/index.html","8bf29c3b8e972df017c0f6c9b25a8c83"],["posts/cf86baf1/index.html","a55afa18aa5c2b3d790436a103a90130"],["posts/d4ddb122/index.html","6c810a0dc65ece413cf0038f4ef4b943"],["posts/f032f0/index.html","8c582148c2e634441c5a97efc7ca5457"],["posts/f9d92613/index.html","275ad5c34fda2b4fae93fde07cb5af8b"],["posts/fc7889ef/index.html","ab5277c898be1e03854e11bc5c1a2dd4"],["posts/ff905629/index.html","b1fff1ac1c9d02204747594356b6664f"],["tags/DIY博客/index.html","a9adb3a0c96431104ccd8e19dfedbf23"],["tags/Hexo/index.html","1dc08c53c608972a2e846a0c12a5c3e4"],["tags/Hexo评论系统/index.html","1f4e6027138b849b80f7ad40da8edc4e"],["tags/Next-js/index.html","2b9e7ec5e836068bab76c90459476dd7"],["tags/React/index.html","0fbe97f1583f880269efaf8b70ad0f85"],["tags/ReactHook/index.html","a3333338bca1a11f10fda337346f1664"],["tags/TypeScript/index.html","4fe2236dd75cfc4ff665605838b12cf8"],["tags/Typora/index.html","c57d946e3edd39b32afbe56e0323ee03"],["tags/Valine国际版/index.html","91127f925b79afa5dcc001a721aa79ba"],["tags/index.html","9690c9e5a84b5a1de337d3cda866265b"],["tags/jwt/index.html","cd5da0a8d8d6fd835cdc558d0f0f04ee"],["tags/webpack4-0/index.html","a3cd1da906412e51e4d35fce73112a9f"],["tags/博客/index.html","4310727c2825ede2f03210e2fd6caa2c"],["tags/工具/index.html","f8fee996669ba8b47bdfaf077f396ac0"],["tags/测试标签/index.html","c57c5a479e163e668192a68abc601d4b"],["tags/记录生活/index.html","b97d762879a47b2d0b855ebc6974adea"],["tags/部署/index.html","dc9830bc703c861c3b6643af9300405a"],["tags/阿里云/index.html","d96d0cff8e230f770fcb0116c26c556f"],["tags/面试题/index.html","2f2d2a15401ae283f045a458d4dd1ec5"]];
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







