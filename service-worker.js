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

var precacheConfig = [["G:/blog/public/404.html","1584f3fb2f55b4a9527446b496c7b6c7"],["G:/blog/public/about/index.html","73b2fa2742f51cc99ce84ba45ac8bb54"],["G:/blog/public/archives/2020/05/index.html","4b9f320e6bec5f0fc8be943289b9ae97"],["G:/blog/public/archives/2020/05/page/2/index.html","c64b6a4210dbe3e2ce076e3a717691d1"],["G:/blog/public/archives/2020/06/index.html","da33b5da7a6cebbaf350b0b24969845b"],["G:/blog/public/archives/2020/index.html","dd445a13949ae643b281f7150f98b5b2"],["G:/blog/public/archives/2020/page/2/index.html","05ecc087baefd7e480e0e55f9907ed6e"],["G:/blog/public/archives/index.html","91d3f82ec1c7c96e4ac21a74be0cd51e"],["G:/blog/public/archives/page/2/index.html","91d3f82ec1c7c96e4ac21a74be0cd51e"],["G:/blog/public/categories/Hexo博客/index.html","00acec9aa91f6946a51dec9d6fff45f3"],["G:/blog/public/categories/index.html","edabd2e82246ec5b17b92671f65f07cf"],["G:/blog/public/categories/前端/React/index.html","d623b62b342da395c7f05f5d846a7c49"],["G:/blog/public/categories/前端/index.html","f34e9de9e1940add01cc1d09c63302b6"],["G:/blog/public/categories/前端/webpack4-0学习总结/index.html","78e19b4ba1eb40fc4f36c73486fe7ad7"],["G:/blog/public/categories/前端/面试造轮/index.html","8e7ac2581aa75002dd0842b4ddeee4eb"],["G:/blog/public/categories/效率工具/index.html","401778f499b63491617746d461400302"],["G:/blog/public/categories/测试分类/index.html","31397d9a00e9a0513d4f1743bb16d39f"],["G:/blog/public/categories/记录生活/2020/index.html","c10f520d242b86b63d041c78126dbd0c"],["G:/blog/public/categories/记录生活/index.html","e127a2e8995f51f703671ee1dfeffeed"],["G:/blog/public/css/style.css","635a2cff6e901bb687849450b9d64c10"],["G:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["G:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["G:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["G:/blog/public/friends/index.html","4a169ceb9e48b5399942dd53fd185337"],["G:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["G:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["G:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["G:/blog/public/index.html","d78cab1918de4cb914a08ff0cc3b0035"],["G:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["G:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["G:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["G:/blog/public/list/index.html","f1752ee7b70dd942800ad074a2bcc20c"],["G:/blog/public/page/2/index.html","a62d3b9f37ffc54c7a089e527e5e4797"],["G:/blog/public/posts/20802113/index.html","780ac8dd87acfeaa77a1328b7c8d65ee"],["G:/blog/public/posts/24b4915a/index.html","188e17205e920464682ac7379ae4cf7a"],["G:/blog/public/posts/35b500c6/index.html","295146041ca8adce76616788cf249979"],["G:/blog/public/posts/3b0a6cbe/index.html","a40693363c9320f058ce233c2ccc2d4e"],["G:/blog/public/posts/66d3b164/index.html","bdd334c6afa8c8c89e88bfeef1bd536b"],["G:/blog/public/posts/829819a3/index.html","f111d1b041e55705afb51cbd17682e4a"],["G:/blog/public/posts/84d16999/index.html","e09572e4bdc90a45ccd9e7c4d47714b2"],["G:/blog/public/posts/b050203a/index.html","3e6c3f1a53723abcd89c4fe2cda868f6"],["G:/blog/public/posts/b4c78541/index.html","deac6bcc84e03ba11c667cf2e66e3df5"],["G:/blog/public/posts/cf86baf1/index.html","106c5151c2e2f2164a4de4d1b8ef4b33"],["G:/blog/public/posts/d4ddb122/index.html","026c087c221801e16cdf1f9c278c23b3"],["G:/blog/public/posts/f032f0/index.html","157c982639fb6636368a7766765d25f7"],["G:/blog/public/posts/f9d92613/index.html","83883614fa7f4ad6e2e5cab05e3d2716"],["G:/blog/public/posts/ff905629/index.html","cd1f3bab85cdcd5c7309926302f68ae8"],["G:/blog/public/tags/DIY博客/index.html","3f7a45c22faff9b75bc4564bce1bc530"],["G:/blog/public/tags/Hexo/index.html","64d7ba2544370e29e9377faddfef3728"],["G:/blog/public/tags/Hexo评论系统/index.html","3961be35a4aa702ddb9d870b24baf2b3"],["G:/blog/public/tags/React/index.html","7d3409b23468540a5dba3805062befd3"],["G:/blog/public/tags/ReactHook/index.html","1d1d6c97da8a01600294ed1bc4e2ac7f"],["G:/blog/public/tags/Typora/index.html","1026fa7416dbd5d1899d6c1a12713c6b"],["G:/blog/public/tags/Valine国际版/index.html","cb1ae2006fe23c5347a59ba6e33ea4d1"],["G:/blog/public/tags/index.html","690b7ffc68ededd71d4c854ddc53ab20"],["G:/blog/public/tags/jwt/index.html","ef3aee6f658ea1785c5f5ea1ff717612"],["G:/blog/public/tags/webpack4-0/index.html","3af617f56a269eb84434711e2c14dd9c"],["G:/blog/public/tags/博客/index.html","b9c2e430a311f0e8d4e287e350ebc812"],["G:/blog/public/tags/工具/index.html","98cc159f9fdc01a22e40f85218b19b47"],["G:/blog/public/tags/测试标签/index.html","49ea9f473877398ede812fdd60a869a0"],["G:/blog/public/tags/记录生活/index.html","201b416f1cb83a26c16e470c82e3dfff"],["G:/blog/public/tags/部署/index.html","46490111c0f3dc5869c49a675d46cfd2"],["G:/blog/public/tags/阿里云/index.html","63a0fce5bf99234dbc671caf780e3791"],["G:/blog/public/tags/面试题/index.html","8c468abc45a02d21dc9284fc1dea51d0"]];
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







