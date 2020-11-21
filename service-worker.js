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

var precacheConfig = [["G:/oneDrive/blog/public/404.html","43bcec98eded5dc30dcadab7d735576f"],["G:/oneDrive/blog/public/about/index.html","fd142f6e4bb846c96f2b390ce06648a3"],["G:/oneDrive/blog/public/archives/2020/05/index.html","15a5555e585c9a4a3f1f7e22cfe330ea"],["G:/oneDrive/blog/public/archives/2020/05/page/2/index.html","f9a9f6270b1ddcc218d2fd46081d56f0"],["G:/oneDrive/blog/public/archives/2020/06/index.html","b6ee6afd1f2c1b4ef840d18cdfb079b1"],["G:/oneDrive/blog/public/archives/2020/07/index.html","527b3b17c972e498e5b7c7b128b1696d"],["G:/oneDrive/blog/public/archives/2020/11/index.html","35be0bf7cf832cdc35a263b16441cd82"],["G:/oneDrive/blog/public/archives/2020/index.html","50cbd7b043393bd2b11e10216dfd3203"],["G:/oneDrive/blog/public/archives/2020/page/2/index.html","880259fcfd291967cfc3d6c3542a8835"],["G:/oneDrive/blog/public/archives/index.html","22bfa6d1a758d462ba46381181c1988e"],["G:/oneDrive/blog/public/archives/page/2/index.html","22bfa6d1a758d462ba46381181c1988e"],["G:/oneDrive/blog/public/categories/Hexo博客/index.html","6fa8bd4ef604d0744a205a8b1eec9f7a"],["G:/oneDrive/blog/public/categories/index.html","9f6db8c333573e06220f7d8864aa7bc2"],["G:/oneDrive/blog/public/categories/前端/React/index.html","847b1ac8f0b9eed2e2874f267c0e939c"],["G:/oneDrive/blog/public/categories/前端/TypeScript/index.html","ac28607917ccea2f4a053cfaf5fb7346"],["G:/oneDrive/blog/public/categories/前端/index.html","5adc3c84fa465d604f3d95f9e1eda289"],["G:/oneDrive/blog/public/categories/前端/page/2/index.html","6a0a9d3b1ec31eaa9559347be9bda34f"],["G:/oneDrive/blog/public/categories/前端/webpack4-0学习总结/index.html","08d2d1dc9cfa96424d0de5403fdac0cf"],["G:/oneDrive/blog/public/categories/前端/面试造轮/index.html","e42416bf36290678a0ec42ba00758b30"],["G:/oneDrive/blog/public/categories/效率工具/index.html","a25718035c648caad876dfe40051ecff"],["G:/oneDrive/blog/public/categories/测试分类/index.html","4546449b57859720ae1d69e39f5447eb"],["G:/oneDrive/blog/public/categories/记录生活/2020/index.html","ff8f6105ee77409b7c2347b22a6cb373"],["G:/oneDrive/blog/public/categories/记录生活/index.html","1e5edbe435bad16bab6928538106d2bb"],["G:/oneDrive/blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["G:/oneDrive/blog/public/css/style.css","fc1145618b4430b41bd3d521aaa98a23"],["G:/oneDrive/blog/public/friends/index.html","f36f6fca9472fd7612b5d846a46761ef"],["G:/oneDrive/blog/public/index.html","38305d77ab6b05b9bf0bf14fb7d91045"],["G:/oneDrive/blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["G:/oneDrive/blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["G:/oneDrive/blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["G:/oneDrive/blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["G:/oneDrive/blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["G:/oneDrive/blog/public/list/index.html","6c90d1f378e7846c2cc8c4cb7e6382d7"],["G:/oneDrive/blog/public/page/2/index.html","4dba384a7640c345e3bcf29662b7fcb4"],["G:/oneDrive/blog/public/posts/20802113/index.html","fd022371595aff334656fb577e08c431"],["G:/oneDrive/blog/public/posts/24b4915a/index.html","ca0b1f30caba5ee2f44bc1064f28e31d"],["G:/oneDrive/blog/public/posts/35b500c6/index.html","d1f610942e531095838cd70197a19697"],["G:/oneDrive/blog/public/posts/3b0a6cbe/index.html","9e6802909323035138c23a3b0de6e25a"],["G:/oneDrive/blog/public/posts/66d3b164/index.html","616edb155b0fba3a0877b9e085d6ff63"],["G:/oneDrive/blog/public/posts/6af865/index.html","19b634a8a48ea938022f95b26701a60b"],["G:/oneDrive/blog/public/posts/829819a3/index.html","d893c6564eda1b673b6a8f6d73e50ca5"],["G:/oneDrive/blog/public/posts/84d16999/index.html","b3ded9da81639d5677d35e4b06c09b90"],["G:/oneDrive/blog/public/posts/b050203a/index.html","3fedef22043b06ab2d07a1bbc06555de"],["G:/oneDrive/blog/public/posts/b4c78541/index.html","557de4000a39ff602219d7000c64c1ac"],["G:/oneDrive/blog/public/posts/c05e5480/index.html","66cf866f9916c161187debd114cf79b7"],["G:/oneDrive/blog/public/posts/cf86baf1/index.html","ded4fdef5087928ddab97354bba8144f"],["G:/oneDrive/blog/public/posts/d4ddb122/index.html","082d20949621fa62c28e1d90960d81bb"],["G:/oneDrive/blog/public/posts/f032f0/index.html","c7430c83e014cc1383a684c3cd85bc33"],["G:/oneDrive/blog/public/posts/f9d92613/index.html","1ecd7558f28e9e65a8005994595622c5"],["G:/oneDrive/blog/public/posts/fc7889ef/index.html","c2137ac91d1671fd04b0b6d086b00cde"],["G:/oneDrive/blog/public/posts/ff905629/index.html","a7a01ee4a27ea81b940998fc857b2f6b"],["G:/oneDrive/blog/public/tags/DIY博客/index.html","f5201ba2040a615be2fd69509eaa01a4"],["G:/oneDrive/blog/public/tags/Hexo/index.html","ff869d75f8a052b0dbcc031c841ae6ac"],["G:/oneDrive/blog/public/tags/Hexo评论系统/index.html","428d9731bdb9a60ba891cf941249a9d6"],["G:/oneDrive/blog/public/tags/Next-js/index.html","8e1bd0ad7fbcab10ce7f56cb94f3e0d7"],["G:/oneDrive/blog/public/tags/React/index.html","4e3b0a45e08f016297812d61fa7469d9"],["G:/oneDrive/blog/public/tags/ReactHook/index.html","fa3eba93f84b43d4bbf647cb8fdffe61"],["G:/oneDrive/blog/public/tags/TypeScript/index.html","7d47b11091f43b65975386e6783c2a7e"],["G:/oneDrive/blog/public/tags/Typora/index.html","dc8457f786ed92f91cfbda0dfb1a7ac5"],["G:/oneDrive/blog/public/tags/Valine国际版/index.html","f73902a4c60f764f3472e6cce0162027"],["G:/oneDrive/blog/public/tags/index.html","96af9962d41c2e2123a95308ead95cde"],["G:/oneDrive/blog/public/tags/jwt/index.html","da7bc254d4b31fbb338a7f2e8cf98b06"],["G:/oneDrive/blog/public/tags/webpack4-0/index.html","9a384421e889c56eed865a249791a8f6"],["G:/oneDrive/blog/public/tags/博客/index.html","fdeaf479460b6dd52e85d73e97343e88"],["G:/oneDrive/blog/public/tags/工具/index.html","72ea72838998c9b75d1035ba9e7256fc"],["G:/oneDrive/blog/public/tags/测试标签/index.html","fac15e1bd748d6fd89c21a65e821cedd"],["G:/oneDrive/blog/public/tags/记录生活/index.html","e615c97f47b1d8d6f15f7a09de9fbfbe"],["G:/oneDrive/blog/public/tags/部署/index.html","3926d0861657d3414aa32c8453751873"],["G:/oneDrive/blog/public/tags/阿里云/index.html","4dc93b610af9387eb1ba9e278cc009f2"],["G:/oneDrive/blog/public/tags/面试题/index.html","003b767eeeb9046f49d20880cc0da912"]];
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







