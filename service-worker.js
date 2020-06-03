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

var precacheConfig = [["G:/blog/public/2020/05/12/Typora-PicGo-Gitee（书写博客神器）/index.html","883f207be3426b8acd91b54b5e4fd1b5"],["G:/blog/public/2020/05/13/react博客-egg-jwt实现登录系统/index.html","b4e378f6c3617a224f7d302b08080739"],["G:/blog/public/2020/05/13/react博客-项目部署/index.html","b65de38678b01bcee31255c3a3af93e2"],["G:/blog/public/2020/05/13/test1/index.html","30364314c458fdd629cd01a137477a83"],["G:/blog/public/2020/05/14/webpack4.0学习总结（一）/index.html","9f50b22e2e409cec3eb48974e4b888e4"],["G:/blog/public/2020/05/15/webpack4.0学习总结（二）/index.html","d3c486bf15c21a7fe38c499a3d42bfce"],["G:/blog/public/2020/05/16/valine国际版邮件回复/index.html","a21647ce54f2f07e69c223d9f40edb04"],["G:/blog/public/2020/05/17/webpack4.0学习总结（三）/index.html","197d6e26c265f8568e9c5757ed64ba47"],["G:/blog/public/2020/05/18/webpack4.0学习总结（四）/index.html","e1db655c81df62c596cd550b98fd9a75"],["G:/blog/public/2020/05/22/记录生活2020-5/index.html","affbef70d6b1fd900e92ba3b2539c702"],["G:/blog/public/2020/05/25/webpack4.0进阶（一）/index.html","50a76eec465455e8ccec8c2ecd100184"],["G:/blog/public/2020/05/31/前端面试题/index.html","535ba224e1a2c3b4013c527e711b9666"],["G:/blog/public/2020/06/03/webpack4-0进阶（二）/index.html","6ab6f7cd383c70193fd68e61d38fcd71"],["G:/blog/public/404.html","07011ef438d59c1b9e23b20c664b9640"],["G:/blog/public/about/index.html","347d64d4fecda9e4ff8c5e129de3a8a0"],["G:/blog/public/archives/2020/05/index.html","4ed3c044ec8e057052dcb773871122f1"],["G:/blog/public/archives/2020/05/page/2/index.html","f066f3547ef1d316a2ee8e5139dafd66"],["G:/blog/public/archives/2020/06/index.html","c51d4182dd5ff44042f1a8e904b0b0f5"],["G:/blog/public/archives/2020/index.html","e6594bb0f75d3706f059a5832061ffc8"],["G:/blog/public/archives/2020/page/2/index.html","83d26621a3812591e9d9992637cd052c"],["G:/blog/public/archives/index.html","10180185c57c243b97fe4eb1e991be15"],["G:/blog/public/archives/page/2/index.html","10180185c57c243b97fe4eb1e991be15"],["G:/blog/public/categories/Hexo博客/index.html","c2fc411dd4ead64d2c911b495898b53d"],["G:/blog/public/categories/index.html","b5262344267aead42fb3d71e5fd7e34f"],["G:/blog/public/categories/前端/React/index.html","d82ec08ee74a79ca792ca47a9662d72c"],["G:/blog/public/categories/前端/index.html","13f1aa1895f66f246e81e74492b89729"],["G:/blog/public/categories/前端/webpack4-0学习总结/index.html","657bc6bfa1011d76bbd78ff62abd851e"],["G:/blog/public/categories/前端/面试造轮/index.html","ed4cb8c59f01a879dd615a38e9b6414f"],["G:/blog/public/categories/效率工具/index.html","69a68dd3569ec8d9329ad0f7d5b7365c"],["G:/blog/public/categories/测试分类/index.html","1be3640e943ff3cb4996d61e8294c5e2"],["G:/blog/public/categories/记录生活/2020/index.html","a48a69451be99f028c8bf8f73ad50c05"],["G:/blog/public/categories/记录生活/index.html","f87837ee3fc8a056ea056268756bbdb3"],["G:/blog/public/css/style.css","5d53865bff9f2b0690494ee6ef4c077a"],["G:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["G:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["G:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["G:/blog/public/friends/index.html","370d795f58659a573586c79f9e9c3f68"],["G:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["G:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["G:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["G:/blog/public/index.html","61392f4449a06dacba79319856940f38"],["G:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["G:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["G:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["G:/blog/public/list/index.html","9638d27ef7af4309504cf10007bbba6c"],["G:/blog/public/page/2/index.html","b9259810ee85244d77371f377e131b91"],["G:/blog/public/tags/Hexo/index.html","75e450bf9d028ff3001106af37fb8549"],["G:/blog/public/tags/React/index.html","ecf4212889ab26c70079a848d66d6e74"],["G:/blog/public/tags/ReactHook/index.html","8a57e763b584f8fedb8d8e63b4ce6648"],["G:/blog/public/tags/Typora/index.html","c6e6697ca86211c791a30aa8494070f5"],["G:/blog/public/tags/index.html","693dafdf731ddab82c79c538e54278af"],["G:/blog/public/tags/jwt/index.html","67ade6c07d8b7a350be694fddc5f3caa"],["G:/blog/public/tags/valine/index.html","529b37dbf608f28d67ef9655c2037cab"],["G:/blog/public/tags/webpack4-0/index.html","4478b03b165a7b6410e3ec44f48ab19d"],["G:/blog/public/tags/博客/index.html","aba3cad2ff391105aad105d03f26357d"],["G:/blog/public/tags/工具/index.html","2c39b6bb9805fccd3d49203f1de21ee6"],["G:/blog/public/tags/测试标签/index.html","d521ab71137be86e8605617b953099cd"],["G:/blog/public/tags/记录生活/index.html","e5d5d427bcca3f35b699d39faf2cf4dd"],["G:/blog/public/tags/评论系统/index.html","ddfc68e519b676c3c2034d16a6136af7"],["G:/blog/public/tags/部署/index.html","b6e1277aab1a9229e04ae11480939407"],["G:/blog/public/tags/阿里云/index.html","f82ba05c1395ebacae9029eb1ed2c071"],["G:/blog/public/tags/面试题/index.html","57c9465494b16fc99b7f76b34e200ada"]];
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







