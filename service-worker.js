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

var precacheConfig = [["G:/blog/public/2020/05/12/Typora-PicGo-Gitee（书写博客神器）/index.html","e0ab7dc7cf23f8aa98aa837d15b5ae0b"],["G:/blog/public/2020/05/13/react博客-egg-jwt实现登录系统/index.html","1992d4461c1be6e11a6c4d0a1ddf159c"],["G:/blog/public/2020/05/13/react博客-项目部署/index.html","75e7c0aa11b197b36f1644397f42d0f1"],["G:/blog/public/2020/05/13/test1/index.html","19929d2a24c8a0cea0037f6affc709b2"],["G:/blog/public/2020/05/14/webpack4.0学习总结（一）/index.html","19041e8b8ea0126ce35484febaa304fa"],["G:/blog/public/2020/05/15/webpack4.0学习总结（二）/index.html","9b241b02b077bf9b627a2843d79eee49"],["G:/blog/public/2020/05/16/valine国际版邮件回复/index.html","1936b16b4415cae8b8f9e3bfc3fb02eb"],["G:/blog/public/2020/05/17/webpack4-0学习总结（三）/index.html","ca8f5e24e7551419eb3f7a072a2f278e"],["G:/blog/public/404.html","a07a252261e2507e965cd7ca93b6ccde"],["G:/blog/public/about/index.html","6e40bd1d3fd568c8f498516cd08f3860"],["G:/blog/public/archives/2020/05/index.html","8742babfba1d9251cd96926a10c642b9"],["G:/blog/public/archives/2020/index.html","73c3e2ae97969d8fe6db7f500e1c3dae"],["G:/blog/public/archives/index.html","453532f37e4bfb8d31ba0390fe32ae4b"],["G:/blog/public/categories/Hexo博客/index.html","57aaf37ff186124074d8f6cacb0833e2"],["G:/blog/public/categories/index.html","e5b7319a39ccaa91a6a33483975e1709"],["G:/blog/public/categories/前端/React/index.html","2fb5792dac993ea4aa65abc289d8e40c"],["G:/blog/public/categories/前端/index.html","4d8731cd00f6bc8b504fa28a553dfb35"],["G:/blog/public/categories/前端/webpack4-0学习总结/index.html","eb6b61610a8a055cc4cbdc5a528a75b5"],["G:/blog/public/categories/效率工具/index.html","0072bf6b9851d90dcc6f295d8835ec9d"],["G:/blog/public/categories/测试分类/index.html","a4c919d3545bffdc765181f77b227f2b"],["G:/blog/public/css/style.css","5d53865bff9f2b0690494ee6ef4c077a"],["G:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["G:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["G:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["G:/blog/public/friends/index.html","18382f0e778fd142f01e077dac79d052"],["G:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["G:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["G:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["G:/blog/public/index.html","0764a2bfc62863c5c1d961ed7e8a123a"],["G:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["G:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["G:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["G:/blog/public/list/index.html","50893069842906c0e52e497950dcccd1"],["G:/blog/public/tags/Hexo/index.html","c37ae4760553fe3ce98c6ea7c8b388e5"],["G:/blog/public/tags/React/index.html","6032b8b62dfc87e4fd134634ee36b3be"],["G:/blog/public/tags/ReactHook/index.html","a1c541cf9f6654db26f7d54318be49c8"],["G:/blog/public/tags/Typora/index.html","5318c6679068e1a6dcd36b3ce58b96af"],["G:/blog/public/tags/index.html","988e9ba3420c0e1837f395dc64f7afbf"],["G:/blog/public/tags/jwt/index.html","1104b6eec283951e094546cd6859df2d"],["G:/blog/public/tags/valine/index.html","c9b52f8a69a45532ca96601714bc5063"],["G:/blog/public/tags/webpack4-0/index.html","1a102c6d41c17d8f6bfd4e1cb9435e22"],["G:/blog/public/tags/博客/index.html","395f375f35c646a0abc2649ca1f372f6"],["G:/blog/public/tags/工具/index.html","f4199c984bd78cd094326360a6a2b700"],["G:/blog/public/tags/测试标签/index.html","9dfc8e1390aface9aa3505410daaee87"],["G:/blog/public/tags/评论系统/index.html","fcda8368e52119acb326d6743c62fdd1"],["G:/blog/public/tags/部署/index.html","4a3ac46d08332e30d765023cc18b5422"],["G:/blog/public/tags/阿里云/index.html","673470ddae0baa1560d1a25931af0bb7"]];
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







