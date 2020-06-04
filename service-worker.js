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

var precacheConfig = [["G:/blog/public/2020/05/12/Typora-PicGo-Gitee（书写博客神器）/index.html","30ebaf389fd013d6ce26c61fa116e6c6"],["G:/blog/public/2020/05/13/react博客-egg-jwt实现登录系统/index.html","23649e712d0bde61b12a4aada18f60a2"],["G:/blog/public/2020/05/13/react博客-项目部署/index.html","1a8205faa128aa6b5f364ea8e23dfba9"],["G:/blog/public/2020/05/13/test1/index.html","b9985de026c15409ef7d98bf841be4f3"],["G:/blog/public/2020/05/14/webpack4.0学习总结（一）/index.html","fa108c603215d2b3034529a9f703ad08"],["G:/blog/public/2020/05/15/webpack4.0学习总结（二）/index.html","4aa412faf8b7a521c160592b048f46d1"],["G:/blog/public/2020/05/16/Hexo博客定制/index.html","f2b9b2c398b82a843a6da04c45787045"],["G:/blog/public/2020/05/17/webpack4.0学习总结（三）/index.html","fd3735f96153d8b1de97636382978f76"],["G:/blog/public/2020/05/18/webpack4.0学习总结（四）/index.html","6403907a54f52560c9f3d09541414e99"],["G:/blog/public/2020/05/22/记录生活2020-5/index.html","eea0404785dfbe3f0bacb98c842c4c73"],["G:/blog/public/2020/05/25/webpack4.0进阶（一）/index.html","87aa09c902ad6293e3bfae69077578af"],["G:/blog/public/2020/05/31/前端面试题/index.html","f36c32010095a84a1df1453266a5cf16"],["G:/blog/public/2020/06/03/webpack4-0进阶（二）/index.html","d62ef3ba3cb4d24c3832fdf51acfe228"],["G:/blog/public/404.html","093c3b4abed143710ee96678152f21eb"],["G:/blog/public/about/index.html","11483d635ec00121502474f2ced18d7a"],["G:/blog/public/archives/2020/05/index.html","cbc1a1ac9f31f3c9f564e87fd236b087"],["G:/blog/public/archives/2020/05/page/2/index.html","74e6a56f33f58b0f34b11dda82754307"],["G:/blog/public/archives/2020/06/index.html","6f8c5ebd8b8883403e9b1460683864a1"],["G:/blog/public/archives/2020/index.html","0ca1e5b3630813c7a05a29424c4edf5c"],["G:/blog/public/archives/2020/page/2/index.html","e7e8bcaf79fdc755f62bbc718160bff0"],["G:/blog/public/archives/index.html","80486457e1489d42e1a053bf2410d73b"],["G:/blog/public/archives/page/2/index.html","80486457e1489d42e1a053bf2410d73b"],["G:/blog/public/categories/Hexo博客/index.html","16e2ecf00418e73047ae1bfe30280785"],["G:/blog/public/categories/index.html","1798df6203e992aea7bb1e4eae598f2a"],["G:/blog/public/categories/前端/React/index.html","e1c664a951d8b42ffc3742ad3e402d7c"],["G:/blog/public/categories/前端/index.html","3ddd93d02067d8af8cfead0135f045a8"],["G:/blog/public/categories/前端/webpack4-0学习总结/index.html","3cf7507625b5ef421ec9f39c7016f0f2"],["G:/blog/public/categories/前端/面试造轮/index.html","fb1f236ca320add8a6addc3303444183"],["G:/blog/public/categories/效率工具/index.html","f30bb7bb55e8fbfb3ddbd6a08ccd94c0"],["G:/blog/public/categories/测试分类/index.html","ad4f89b257a0a07ff94b087fe98a5615"],["G:/blog/public/categories/记录生活/2020/index.html","1c2e160fb1fb0e38ad1e107ee4af9edf"],["G:/blog/public/categories/记录生活/index.html","c5aceec2fbe3f77d0441d78019d17ced"],["G:/blog/public/css/style.css","5d53865bff9f2b0690494ee6ef4c077a"],["G:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["G:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["G:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["G:/blog/public/friends/index.html","d22b1c604a3241cb76ccc5337b01385f"],["G:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["G:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["G:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["G:/blog/public/index.html","db52cc99b9eb5f632506b00fc7ff5167"],["G:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["G:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["G:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["G:/blog/public/list/index.html","269f5b0ea06495c0d80dd4acb86cab40"],["G:/blog/public/page/2/index.html","c7eea3d1a6f3285f3924df8793990152"],["G:/blog/public/tags/DIY博客/index.html","3b11c1db57a84e742201cdcbb592ec1d"],["G:/blog/public/tags/Hexo/index.html","30d407e52cd264d3fe9548326039d56f"],["G:/blog/public/tags/React/index.html","6cb48fbc47782da42c7652e47d226568"],["G:/blog/public/tags/ReactHook/index.html","5d1eb547c4fe818ecc5afbc8ea8aac92"],["G:/blog/public/tags/Typora/index.html","4791cbf2fe83ec3ef53896d38a4456e4"],["G:/blog/public/tags/index.html","f3d70b7b14d9d76627c7d92bd9c477d3"],["G:/blog/public/tags/jwt/index.html","fe1566357886693ad3f937ee2b627186"],["G:/blog/public/tags/valine/index.html","39bbddcf79763578a787e90a14570b0b"],["G:/blog/public/tags/webpack4-0/index.html","d3c215ab34a8d205999c629ec1dfb879"],["G:/blog/public/tags/博客/index.html","e878ab5ff1a47c183fe56f99beee0647"],["G:/blog/public/tags/工具/index.html","3c8fda1e1a42573024fc0b04830fd70e"],["G:/blog/public/tags/测试标签/index.html","80453648087d7ca7e8110275ba3de58a"],["G:/blog/public/tags/记录生活/index.html","051b57f2c188c41f3f69a8cca311afbd"],["G:/blog/public/tags/评论系统/index.html","cd4abe7b1fba70a699d9a6d9474a4545"],["G:/blog/public/tags/部署/index.html","72971d4f48aff41187a1dedb68b216ef"],["G:/blog/public/tags/阿里云/index.html","f21e89b71af0110b1424e7b65af65625"],["G:/blog/public/tags/面试题/index.html","146439a2a41d330ac7e928fa34fc4c6d"]];
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







