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

var precacheConfig = [["G:/blog/public/404.html","c5f37cbd6ba078c82bedcdaffd1dda54"],["G:/blog/public/about/index.html","965627892f5234dbfa91ab2ae49a2936"],["G:/blog/public/archives/2020/05/index.html","52e5f945858286e07a4a329048f4d4ec"],["G:/blog/public/archives/2020/05/page/2/index.html","4470b035958be6fa20394c567aed3da8"],["G:/blog/public/archives/2020/06/index.html","df335ebe3c950bf3acc16dec4b215546"],["G:/blog/public/archives/2020/index.html","9c0dfa6af33fd9e5a982cd5829bdede3"],["G:/blog/public/archives/2020/page/2/index.html","581e450f9cb685cbed94ab9a95ffde3d"],["G:/blog/public/archives/index.html","b56424dd9cf9c82c9831721c12ed9813"],["G:/blog/public/archives/page/2/index.html","b56424dd9cf9c82c9831721c12ed9813"],["G:/blog/public/categories/Hexo博客/index.html","a77b39323c87031cd70ae7b66b5610da"],["G:/blog/public/categories/index.html","93008f34aa00c94f2bfc15e8ea918aa5"],["G:/blog/public/categories/前端/React/index.html","a78d68f5deff9428c6417c78dcd18ecb"],["G:/blog/public/categories/前端/index.html","87fa354f65d4e0f8ba1b2af61ee4fb89"],["G:/blog/public/categories/前端/webpack4-0学习总结/index.html","c7cd3f5cad3125d18f81701c53cbfb65"],["G:/blog/public/categories/前端/面试造轮/index.html","3a3b226ee49527f651af692eb65a703a"],["G:/blog/public/categories/效率工具/index.html","02290715c463eedca41533c55afd3d7e"],["G:/blog/public/categories/测试分类/index.html","0f1c81d685fcb5a18c46c0843eaeb660"],["G:/blog/public/categories/记录生活/2020/index.html","d78e2289c1ccf4d9e93556472b57bb42"],["G:/blog/public/categories/记录生活/index.html","44828144ab464a7dde29da0bf5422328"],["G:/blog/public/css/style.css","39c04eddb1a28691b49cc774e45eb686"],["G:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["G:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["G:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["G:/blog/public/friends/index.html","a708977b4e61d2fbfc6a05dd73809bdf"],["G:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["G:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["G:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["G:/blog/public/index.html","396f0466a6801aa649e89a5c452b015c"],["G:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["G:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["G:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["G:/blog/public/list/index.html","58fa8d900ae851d1a1e66e7c6c20717f"],["G:/blog/public/page/2/index.html","fe45c8f3562570a6f809e1f8247872b9"],["G:/blog/public/posts/20802113/index.html","94308ea7d6126074c4ffad45af9ff784"],["G:/blog/public/posts/24b4915a/index.html","0f370adce3b13637d8eb634d6a4200b1"],["G:/blog/public/posts/35b500c6/index.html","457c15ad80d0e0fe2d8ceade7c953b80"],["G:/blog/public/posts/3b0a6cbe/index.html","86ab74ca426a003e2a27c4a91065c88b"],["G:/blog/public/posts/66d3b164/index.html","9f01280ad5ce9893f7e4a40eee0ab9e2"],["G:/blog/public/posts/829819a3/index.html","f72727bc04a3d9ea3bec9f04eb6ae611"],["G:/blog/public/posts/84d16999/index.html","20f49b9167fa992536734bd54c97acf8"],["G:/blog/public/posts/b050203a/index.html","4fdcb33c65c2fbcaf781932ec4f00db9"],["G:/blog/public/posts/b4c78541/index.html","edf6bd261911809ccaa0b10b0ac230a9"],["G:/blog/public/posts/cf86baf1/index.html","07ed14857fe92dd1d60e468cd478c8d7"],["G:/blog/public/posts/d4ddb122/index.html","a55d637c4375878aac5b8da3ce51619d"],["G:/blog/public/posts/f032f0/index.html","7dbd036106b195722a32f56c9d97ed1f"],["G:/blog/public/posts/f9d92613/index.html","53887dde725ed9a94d8e6a9a2e6baea2"],["G:/blog/public/posts/ff905629/index.html","74aadf5f2e1ed513f404b0592bc44246"],["G:/blog/public/tags/DIY博客/index.html","ed29f8efbd7d9a2297c4540002f00b67"],["G:/blog/public/tags/Hexo/index.html","b8c52121184c1398ea4e45388f5fcce6"],["G:/blog/public/tags/Hexo评论系统/index.html","f9e7c50400fab5299393ca944d8ce1fa"],["G:/blog/public/tags/React/index.html","8014f813ebe29cf1aa3e18e8ca6df0ee"],["G:/blog/public/tags/ReactHook/index.html","523dd03a7f6392cc44b5c0dcc73fb160"],["G:/blog/public/tags/Typora/index.html","bcf0fbcc268fb308eb8a1120f4e4ec22"],["G:/blog/public/tags/Valine国际版/index.html","c7aff73180104eca5df6c6232e9c77ff"],["G:/blog/public/tags/index.html","af234a1a482bdf1e9d4b214d2f74806d"],["G:/blog/public/tags/jwt/index.html","3155dcbf83a4cdbb28ff9659a7035b12"],["G:/blog/public/tags/webpack4-0/index.html","987e9f8afda375c2b454a5f969faa070"],["G:/blog/public/tags/博客/index.html","17166e303c3e3ae2ee3dd1081a3e775c"],["G:/blog/public/tags/工具/index.html","6e5d2c41dce97ac1d51a95ab1c99c481"],["G:/blog/public/tags/测试标签/index.html","ce3ac2cc73c658fa042955049c417cf9"],["G:/blog/public/tags/记录生活/index.html","973dbfd588fb6b267a89867dbd2d7623"],["G:/blog/public/tags/部署/index.html","f8803d224a08d34fec7c7f9c68b291eb"],["G:/blog/public/tags/阿里云/index.html","4569de600e2b8455763eee4efc6fa958"],["G:/blog/public/tags/面试题/index.html","0d1a2e0688c44bf85fa6fd9829bb65e7"]];
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







