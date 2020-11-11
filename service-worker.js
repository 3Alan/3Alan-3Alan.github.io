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

var precacheConfig = [["G:/oneDrive/blog/public/404.html","57027d8d28179568f013a4794eab3835"],["G:/oneDrive/blog/public/about/index.html","5ec043f2926cd0efe1e910a792f99c04"],["G:/oneDrive/blog/public/archives/2020/05/index.html","f0d9617f48c8ccbfbc56bce3e9ba5476"],["G:/oneDrive/blog/public/archives/2020/05/page/2/index.html","5dc89e5f0c3334e89fd4ed61e7915fc4"],["G:/oneDrive/blog/public/archives/2020/06/index.html","1ba635c2cc3cfb36b6c023b5766e1055"],["G:/oneDrive/blog/public/archives/2020/07/index.html","40a62e5de60cf6cb72d44fb04c91c00d"],["G:/oneDrive/blog/public/archives/2020/11/index.html","8a1e5e06503dbb4abf0772afc3733d5c"],["G:/oneDrive/blog/public/archives/2020/index.html","1b9e26a6bfcb7b814dd78a0b638e5ff7"],["G:/oneDrive/blog/public/archives/2020/page/2/index.html","1c4d8f375b8fb1ebe9b36e4d6de9edc3"],["G:/oneDrive/blog/public/archives/index.html","141b354c87c1096365985c92b5371b12"],["G:/oneDrive/blog/public/archives/page/2/index.html","141b354c87c1096365985c92b5371b12"],["G:/oneDrive/blog/public/categories/Hexo博客/index.html","7a309ce38722b34aad4289be974944a7"],["G:/oneDrive/blog/public/categories/index.html","ad6b7b2852fb018ab79782fd98b54430"],["G:/oneDrive/blog/public/categories/前端/React/index.html","f5b464ac8f777382b3d654b54239899a"],["G:/oneDrive/blog/public/categories/前端/TypeScript/index.html","0d72e5adadf237a779ed2ad543e55fa6"],["G:/oneDrive/blog/public/categories/前端/index.html","52d5014ef7c02855abe7001de6c2c81c"],["G:/oneDrive/blog/public/categories/前端/page/2/index.html","2cf692bdccb4bb6db8cfa995edb10506"],["G:/oneDrive/blog/public/categories/前端/webpack4-0学习总结/index.html","05bd94da3a18784b9cce97e5da8b1c69"],["G:/oneDrive/blog/public/categories/前端/面试造轮/index.html","dda3a486cd34755eaccfc2c97d97285c"],["G:/oneDrive/blog/public/categories/效率工具/index.html","6675a192b263ba77b0b6e5ee5c5fafb7"],["G:/oneDrive/blog/public/categories/测试分类/index.html","9931fdc32e301c86800a0ca62673d661"],["G:/oneDrive/blog/public/categories/记录生活/2020/index.html","19c9cf706d1b04adbc4be484ab1e3f97"],["G:/oneDrive/blog/public/categories/记录生活/index.html","039af3216a3f315c236c0d43a2cea7c9"],["G:/oneDrive/blog/public/css/first.css","77ab7f749b05ffe7ed86466ce56e211d"],["G:/oneDrive/blog/public/css/style.css","4be277dc1e7b5207508ed36953b135c8"],["G:/oneDrive/blog/public/friends/index.html","ae9c8193a5ff6ae3f5452a21b7791f47"],["G:/oneDrive/blog/public/index.html","d813a45d5005f858161ffe306b2b0873"],["G:/oneDrive/blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["G:/oneDrive/blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["G:/oneDrive/blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["G:/oneDrive/blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["G:/oneDrive/blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["G:/oneDrive/blog/public/list/index.html","b27f92e05f05b66d09c01df8ff820920"],["G:/oneDrive/blog/public/page/2/index.html","55df6c44ec7bc444c658f06cb23adb29"],["G:/oneDrive/blog/public/posts/20802113/index.html","bb93440c4a5dbb44be0041cf6ad0c05f"],["G:/oneDrive/blog/public/posts/24b4915a/index.html","4096afa15ecb12a1f3df6a74dd50155c"],["G:/oneDrive/blog/public/posts/35b500c6/index.html","cc1510389b3345fadf4bd78383c632e1"],["G:/oneDrive/blog/public/posts/3b0a6cbe/index.html","4b08728c62e0e96742909bc8d6fe5878"],["G:/oneDrive/blog/public/posts/66d3b164/index.html","bee5e0cb0e16fc499079662b0c40ad93"],["G:/oneDrive/blog/public/posts/829819a3/index.html","4a80c369d65a76ed9c5b9ffb1908cd22"],["G:/oneDrive/blog/public/posts/84d16999/index.html","38085074cc165c8440236cfdb8df3415"],["G:/oneDrive/blog/public/posts/b050203a/index.html","3078d46c884ae91f709e43a55c6c6067"],["G:/oneDrive/blog/public/posts/b4c78541/index.html","467f16e9f0284535b4045eb8aa71c0d8"],["G:/oneDrive/blog/public/posts/c05e5480/index.html","6d2bc179f3a6650ad47d3dcdb3d3c9fa"],["G:/oneDrive/blog/public/posts/cf86baf1/index.html","e0843d27b6b2538938d1b9c056595985"],["G:/oneDrive/blog/public/posts/d4ddb122/index.html","387b06b7c2ab66749b6999b1d20893df"],["G:/oneDrive/blog/public/posts/f032f0/index.html","664a7928b734b7ff5f9be68489a0da94"],["G:/oneDrive/blog/public/posts/f9d92613/index.html","1aa983ed07cc68cb445f12f3e09473fe"],["G:/oneDrive/blog/public/posts/fc7889ef/index.html","3a927636a126613cd619431d2bb719e9"],["G:/oneDrive/blog/public/posts/ff905629/index.html","3d16f7b50dd4ac139191ab3029276826"],["G:/oneDrive/blog/public/tags/DIY博客/index.html","66ea5b964d32d487191ab44eaea34737"],["G:/oneDrive/blog/public/tags/Hexo/index.html","75f6004c4597d047f895560bf682f0a4"],["G:/oneDrive/blog/public/tags/Hexo评论系统/index.html","c6379850f3a1792378be5f1dfa96d200"],["G:/oneDrive/blog/public/tags/React/index.html","4083ca60676544ccaeb2640347a50c2b"],["G:/oneDrive/blog/public/tags/ReactHook/index.html","b2bbedec4aeb65d180b99f450b714291"],["G:/oneDrive/blog/public/tags/TypeScript/index.html","fd53ae881da2c1be8b9a41100df62711"],["G:/oneDrive/blog/public/tags/Typora/index.html","70f56dcbcbd6c80f3ab8a060944bea25"],["G:/oneDrive/blog/public/tags/Valine国际版/index.html","e5c7160603c6c5772bbcb71c134c3f7d"],["G:/oneDrive/blog/public/tags/index.html","24f883f13d5e2f89eb5b186e9ef958ec"],["G:/oneDrive/blog/public/tags/jwt/index.html","c8397f8a00803d40e587464c6bfe8404"],["G:/oneDrive/blog/public/tags/webpack4-0/index.html","163bac93b80723ae0fc7316681e936c2"],["G:/oneDrive/blog/public/tags/博客/index.html","14114aaa98c134bab99880ea83470e5d"],["G:/oneDrive/blog/public/tags/工具/index.html","e790fe479ed6640f3228d3c160aa6b27"],["G:/oneDrive/blog/public/tags/测试标签/index.html","e11e707123df1cd23a53f396741f32f0"],["G:/oneDrive/blog/public/tags/记录生活/index.html","8fcbd07cadaf194df2d85cb7964ac072"],["G:/oneDrive/blog/public/tags/部署/index.html","868c2b8c28b319136ba02a9b59dc9e72"],["G:/oneDrive/blog/public/tags/阿里云/index.html","7f7ba4dacbcb89298b45558c7e2b2ba9"],["G:/oneDrive/blog/public/tags/面试题/index.html","d5815c154fe68c107ad518961eeb9fc0"]];
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







