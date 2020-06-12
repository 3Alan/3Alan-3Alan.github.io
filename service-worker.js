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

var precacheConfig = [["G:/blog/public/2020/05/12/Typora-PicGo-Gitee（书写博客神器）/index.html","264c64537ca644b73da93fbc47a6758c"],["G:/blog/public/2020/05/13/react博客-egg-jwt实现登录系统/index.html","5e7d7f7baa7855774811281bcc5e1dce"],["G:/blog/public/2020/05/13/react博客-项目部署/index.html","78ba4ad6c5d6c16708e9dfcf4a54c894"],["G:/blog/public/2020/05/13/test1/index.html","58b5a8448796f12889a83028b1fd27a8"],["G:/blog/public/2020/05/14/webpack4.0学习总结（一）/index.html","3515933e5bf4e19143ff3196f03ed732"],["G:/blog/public/2020/05/15/webpack4.0学习总结（二）/index.html","58bea7f2daaee05cd6dcb0f5b160151f"],["G:/blog/public/2020/05/16/Hexo博客定制/index.html","5ca482b836ed4fd1818448c418c5e25e"],["G:/blog/public/2020/05/17/webpack4.0学习总结（三）/index.html","6049bceaad137d38aec092faf3d08100"],["G:/blog/public/2020/05/18/webpack4.0学习总结（四）/index.html","f9a72e2da0bcdee58b48bd5fa1312670"],["G:/blog/public/2020/05/22/记录生活2020-5/index.html","4b2ee40979e9e2ae5edf9729b66319bc"],["G:/blog/public/2020/05/25/webpack4.0进阶（一）/index.html","3806fa9293468b46f145fae78ab41576"],["G:/blog/public/2020/05/31/前端面试题/index.html","523b7f88f4078ca105f1a4c6c44ba8e8"],["G:/blog/public/2020/06/03/webpack4-0进阶（二）/index.html","f374227062e04e73a572d10a7fd92236"],["G:/blog/public/2020/06/05/webpack4-0进阶（三）/index.html","00e4bf623d01e51d81180f06e78132dd"],["G:/blog/public/404.html","aa5d0ef25a0e291b08d14216c3340753"],["G:/blog/public/about/index.html","9923579ff7c711bf45a210935906ebb9"],["G:/blog/public/archives/2020/05/index.html","31a2fe638851d5e09dae2e761680e194"],["G:/blog/public/archives/2020/05/page/2/index.html","33be19f7f061a2c0663a0a99cb7d50df"],["G:/blog/public/archives/2020/06/index.html","9c3b9bbb685611ea1c817ffe8f1790fa"],["G:/blog/public/archives/2020/index.html","b725405fac75071f9587902df6cb6ede"],["G:/blog/public/archives/2020/page/2/index.html","4dea16bcf74578c5dd3c2924950baf4b"],["G:/blog/public/archives/index.html","d04b5127dc1f157fe73dae5a81cef794"],["G:/blog/public/archives/page/2/index.html","d04b5127dc1f157fe73dae5a81cef794"],["G:/blog/public/categories/Hexo博客/index.html","4ae5cc09809bbfa2e08a73fb7ff07705"],["G:/blog/public/categories/index.html","bfcfad0e5709cc8299d085d48a588fae"],["G:/blog/public/categories/前端/React/index.html","75d743f3da4b38e4ee6d72e5b51476b1"],["G:/blog/public/categories/前端/index.html","c419b3acb36ba3fb0ec8fe2cfef2c356"],["G:/blog/public/categories/前端/webpack4-0学习总结/index.html","00d76986bdc078b9f71fe87c820fef4d"],["G:/blog/public/categories/前端/面试造轮/index.html","0bbeb139a99629dc9a78f35552e740be"],["G:/blog/public/categories/效率工具/index.html","8c13f5425e93698a965a6f6764efd070"],["G:/blog/public/categories/测试分类/index.html","bf60be8fd41446fd70d21d965ed942cd"],["G:/blog/public/categories/记录生活/2020/index.html","fbdba4acd72e45e519b2661e2e368bf6"],["G:/blog/public/categories/记录生活/index.html","c6ebb4d7f2a3c4964fa5b5147d215ed5"],["G:/blog/public/css/style.css","7aeaf21beac2f9a6cb10ae0de7b29df2"],["G:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["G:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["G:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["G:/blog/public/friends/index.html","d4c328811cfc8c056df09543d569e78d"],["G:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["G:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["G:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["G:/blog/public/index.html","f08f517f39d1ae83e133b80f91a30e9e"],["G:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["G:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["G:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["G:/blog/public/list/index.html","e405422e8b68d09f89a0dbe22027bd67"],["G:/blog/public/page/2/index.html","79d2b93de6d8c86fd0a07086d300d2db"],["G:/blog/public/tags/DIY博客/index.html","c35d7a09fdb1a8a0f9c996d2bcc345a9"],["G:/blog/public/tags/Hexo/index.html","2140859f88887104b7bb2ca69d8ef1c1"],["G:/blog/public/tags/React/index.html","b31d405d07ad28197580b918bfd8e024"],["G:/blog/public/tags/ReactHook/index.html","88c06279f7cd9a83cfa95385f5d607b7"],["G:/blog/public/tags/Typora/index.html","3c09680f2e6696ecb1c555640c6692c9"],["G:/blog/public/tags/Valine/index.html","8cc6f11e1a1a530708bb82aa058eb165"],["G:/blog/public/tags/index.html","04731e3fd642cc5fa0f619b90173d99c"],["G:/blog/public/tags/jwt/index.html","90cef8996cec602bdff8632814e1dff0"],["G:/blog/public/tags/webpack4-0/index.html","7743a3c299d98627aa0911aa9cb4f231"],["G:/blog/public/tags/博客/index.html","ef09586bfb03ae4e87a11b0430d38a12"],["G:/blog/public/tags/工具/index.html","91e2897d2d921123d651805ccb278777"],["G:/blog/public/tags/测试标签/index.html","cf8e385787f349b865ffddef22ee4428"],["G:/blog/public/tags/记录生活/index.html","cffc4bb47795b920b3654504a2ddfc52"],["G:/blog/public/tags/评论系统/index.html","aeb7e76d9495f650cae6eac6d47865a8"],["G:/blog/public/tags/部署/index.html","a49b95e57c715f987d3a7b09bd566ab3"],["G:/blog/public/tags/阿里云/index.html","314ace601b39de69dfb59ebd9d9ac58c"],["G:/blog/public/tags/面试题/index.html","386b5a59f69abda59068662d1e71b83a"]];
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







