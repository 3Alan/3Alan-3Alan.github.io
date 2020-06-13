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

var precacheConfig = [["G:/blog/public/404.html","c5f37cbd6ba078c82bedcdaffd1dda54"],["G:/blog/public/about/index.html","965627892f5234dbfa91ab2ae49a2936"],["G:/blog/public/archives/2020/05/index.html","c3aad43e17c57113e58b74f70e597169"],["G:/blog/public/archives/2020/05/page/2/index.html","c40d0275de8755ea067ab3a705816404"],["G:/blog/public/archives/2020/06/index.html","afa13e5e93581e886881d53776e5c1af"],["G:/blog/public/archives/2020/index.html","d401e6889f0b9670f9efb2598246a06e"],["G:/blog/public/archives/2020/page/2/index.html","4994859026173e0390c497cc3411d3fb"],["G:/blog/public/archives/index.html","b000540263fc9785f8b377877785a607"],["G:/blog/public/archives/page/2/index.html","b000540263fc9785f8b377877785a607"],["G:/blog/public/categories/Hexo博客/index.html","8dcea0af8650c92fceca8c34c1c715d1"],["G:/blog/public/categories/index.html","93008f34aa00c94f2bfc15e8ea918aa5"],["G:/blog/public/categories/前端/React/index.html","e7a8ed2ed7abb69118ca676432e8c02b"],["G:/blog/public/categories/前端/index.html","d4dcd7c5c1d3b96a5671a5ad9e8f868b"],["G:/blog/public/categories/前端/webpack4-0学习总结/index.html","06b39c38c1564573242a9a07f017c719"],["G:/blog/public/categories/前端/面试造轮/index.html","231e26667fc1e993101d5becc1e72378"],["G:/blog/public/categories/效率工具/index.html","7936979d6bc91aa51dd8420d3c224114"],["G:/blog/public/categories/测试分类/index.html","4cfd61383fe70314e1f5ba821df49a44"],["G:/blog/public/categories/记录生活/2020/index.html","449ea890d2003bce0a6e351d0cbbe951"],["G:/blog/public/categories/记录生活/index.html","d94dfefc7adbaaf1ed2293b018d98693"],["G:/blog/public/css/style.css","de36a84ba18c3f7bcb809c39124b3065"],["G:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["G:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["G:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["G:/blog/public/friends/index.html","a708977b4e61d2fbfc6a05dd73809bdf"],["G:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["G:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["G:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["G:/blog/public/index.html","d3c096e29089576f4e0f36a1d17eb170"],["G:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["G:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["G:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["G:/blog/public/list/index.html","65a63ef1f2e6fb409897e5fe190a6704"],["G:/blog/public/page/2/index.html","606a1a68cb21b0c522556dccf41919d0"],["G:/blog/public/posts/20802113/index.html","94308ea7d6126074c4ffad45af9ff784"],["G:/blog/public/posts/24b4915a/index.html","1725e8ad06c92a254c94e56d7d835eb7"],["G:/blog/public/posts/35b500c6/index.html","0c053497d643fee62ac373307da7f94b"],["G:/blog/public/posts/3b0a6cbe/index.html","86ab74ca426a003e2a27c4a91065c88b"],["G:/blog/public/posts/66d3b164/index.html","9f01280ad5ce9893f7e4a40eee0ab9e2"],["G:/blog/public/posts/829819a3/index.html","b9c2654d96a64b864d51dd5d5746fb21"],["G:/blog/public/posts/84d16999/index.html","01ef2b69db544b84f48fd52473c6def2"],["G:/blog/public/posts/b050203a/index.html","a41f26f4d315d0fcec77bb16404b11ea"],["G:/blog/public/posts/b4c78541/index.html","ef92ac37b3de1f7c8c617f4050a32c8b"],["G:/blog/public/posts/cf86baf1/index.html","f58501d85025d6e07fc684512a4e6d50"],["G:/blog/public/posts/d4ddb122/index.html","a55d637c4375878aac5b8da3ce51619d"],["G:/blog/public/posts/f032f0/index.html","7dbd036106b195722a32f56c9d97ed1f"],["G:/blog/public/posts/f9d92613/index.html","482b37ea3f5b66b32cc3abfe2689f31c"],["G:/blog/public/posts/ff905629/index.html","4e483040c99bac17f0c6ab221e233689"],["G:/blog/public/tags/DIY博客/index.html","b07d716c11d200905e78132b77e1b8e2"],["G:/blog/public/tags/Hexo/index.html","ca69d3919244936587bf0eadd3b0d85a"],["G:/blog/public/tags/React/index.html","1570f1a725c403324d82ebb84067625a"],["G:/blog/public/tags/ReactHook/index.html","55a194f9282f9622ed81b6249757efb4"],["G:/blog/public/tags/Typora/index.html","c789b0a26cab65d306664d23902b6d20"],["G:/blog/public/tags/Valine/index.html","fe8e212acfc658179ef0b4704f4249f0"],["G:/blog/public/tags/index.html","18a54f894c12b44579976e4885d6d316"],["G:/blog/public/tags/jwt/index.html","9a257382b3f9f5536aac25bd47981b04"],["G:/blog/public/tags/webpack4-0/index.html","de84d1aa3747bab84708bc14a834f6f0"],["G:/blog/public/tags/博客/index.html","a24608cc41b0dd9ff1496ec023c57733"],["G:/blog/public/tags/工具/index.html","5d1b2af1bfb87c2ebd1f282017b21d47"],["G:/blog/public/tags/测试标签/index.html","00917fde4ffc93451006793dbcf4fe65"],["G:/blog/public/tags/记录生活/index.html","7067c50d7453c5cec27bd62423bb9409"],["G:/blog/public/tags/评论系统/index.html","b0ac62a80ef451430a217e6db1ba9c0a"],["G:/blog/public/tags/部署/index.html","709eab62ae0d2a94a69bba7ab5cb3557"],["G:/blog/public/tags/阿里云/index.html","3a12eb43a6277bea6ca62ac4b945154a"],["G:/blog/public/tags/面试题/index.html","17248ac97cc979b9abd83d01808129a2"]];
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







