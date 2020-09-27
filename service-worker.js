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

var precacheConfig = [["404.html","87007ab0482515d6e230fec2b8b8ab1c"],["about/index.html","977a4991ab3549041f65b803258725d1"],["archives/2020/05/index.html","33ae4b858fe794847beb7ceba8e8d381"],["archives/2020/05/page/2/index.html","fa3afce24a1c72645706a02c3d698507"],["archives/2020/06/index.html","82b2c873df4b2d14bcd54986fd49dcc4"],["archives/2020/07/index.html","3da76163f39d2f262ebd91922e9fe8ba"],["archives/2020/index.html","d093c71a75a3bf738edf6a957eb4b63f"],["archives/2020/page/2/index.html","783e1b8b175549cbcc71eb5994ed643c"],["archives/index.html","69bacd647ea7bc44f4267bae6665b656"],["archives/page/2/index.html","69bacd647ea7bc44f4267bae6665b656"],["categories/Hexo博客/index.html","938738e2a34d8f9a9d2514d714b8d529"],["categories/index.html","fcb6c7ca0838fe48bda9c66709c2a90a"],["categories/前端/React/index.html","4c779a01cf689e6da884bb2a2a5a7d74"],["categories/前端/TypeScript/index.html","512641e76dfa05f05f19d6e3c1f3d444"],["categories/前端/index.html","6fb605466c86f98f0c09af5cdfd536d1"],["categories/前端/page/2/index.html","d771db0c6ab2f501d16d0f965e4a6f09"],["categories/前端/webpack4-0学习总结/index.html","818af081be6c26d7095eb1c5076caeae"],["categories/前端/面试造轮/index.html","47cf9c0661818ba355d173f50fa7f4cd"],["categories/效率工具/index.html","1c55662f1dfb7feac515651304bc4834"],["categories/测试分类/index.html","04d513655d1cd87978070ed09d40330f"],["categories/记录生活/2020/index.html","dbb883db947c0047dbb38f7cefe5d7ee"],["categories/记录生活/index.html","3166824bdd6fa9d6a975fce16c327d3d"],["css/style.css","0af58131892edf319010b09cb0519b0b"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","9dadac1605ab8141144e81e6e79cc5ab"],["img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["img/azure.svg","570248db796e292bf7b59a650cd079c8"],["img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["index.html","6892efccdac765ec5b002be979b62912"],["js/app.js","ea306851b6276a0ffeec351d138589e5"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","430596db58e60567246c52c474816ee6"],["list/index.html","9136fc0a329139b01741a4582a3d43c5"],["page/2/index.html","a40a612f0f72accfaec9af85a246cca1"],["posts/20802113/index.html","a682eced0cafd56714f0b4bcd5b89231"],["posts/24b4915a/index.html","4d80aca3d7457323e2676a7c7f9fc3c4"],["posts/35b500c6/index.html","07f24030b41e6b2f608b12ebf4990d95"],["posts/3b0a6cbe/index.html","70f019454ee30053eebbdf6dbb169688"],["posts/66d3b164/index.html","2952dd9b7e811c47905b3b71cac0d941"],["posts/829819a3/index.html","f7c5610fdb280b8a3b1ddae19055e3ac"],["posts/84d16999/index.html","bb74337e82c8621782a2cb95583394d2"],["posts/b050203a/index.html","3c4e015b0c1065c74273c21c1d088be8"],["posts/b4c78541/index.html","d0df99f2922486ef53f98fe3fc3c9933"],["posts/c05e5480/index.html","2e08d9d1291cadc2d44d3c192d62df25"],["posts/cf86baf1/index.html","526fd8fb67872bd0f3449e5eba080206"],["posts/d4ddb122/index.html","93826304af3fe545f90d822b11595ab5"],["posts/f032f0/index.html","1653c0044e65f905a91724933e4cf302"],["posts/f9d92613/index.html","7e6c7b59163964d5d3bd3acc6230d848"],["posts/fc7889ef/index.html","e823f4cae0372669d90530ca2a97de06"],["posts/ff905629/index.html","0d7611432a51acc4fd45c9a9f626c197"],["tags/DIY博客/index.html","cf1237d58c97eb48004e3bc29ef9dcaf"],["tags/Hexo/index.html","b3afba38c6333eea0d51133e14c86b9a"],["tags/Hexo评论系统/index.html","f3531f12425096fc8c19f66da8656c1f"],["tags/React/index.html","732166fecd39eb078835ab797d775a60"],["tags/ReactHook/index.html","dd089d9cd6f09160b30cf6705a88a6b4"],["tags/TypeScript/index.html","947337f9dd5b99993c2e382e050ab83c"],["tags/Typora/index.html","11cceaf39d600dd62d536c8ff4feb3d1"],["tags/Valine国际版/index.html","dce7cbf4f59c7077632b58f69adf59c9"],["tags/index.html","778f550d56ac78b0a1085213a04f2eb9"],["tags/jwt/index.html","4b7bf04dfaafa605354e7088d7d95c83"],["tags/webpack4-0/index.html","13c5874353b032c765d46d8f3e6b16c5"],["tags/博客/index.html","738007bd033b9932fc2bfd6a0fc9a3b2"],["tags/工具/index.html","e7b3e25265fe256cf5b1eec8b6eaae4a"],["tags/测试标签/index.html","03e9187f4609448e65945a28b9c9bc74"],["tags/记录生活/index.html","9159bf461b5f56b7f51687ea90978c81"],["tags/部署/index.html","bfc928147700282c029cf8cc4aa04ad8"],["tags/阿里云/index.html","172507759767877f665d1effa43ecd48"],["tags/面试题/index.html","735e53f4aaeffb8212d5a70d4f8d718a"]];
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







