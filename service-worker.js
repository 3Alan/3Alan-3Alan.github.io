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

var precacheConfig = [["G:/blog/public/2020/05/12/Typora-PicGo-Gitee（书写博客神器）/index.html","e0ab7dc7cf23f8aa98aa837d15b5ae0b"],["G:/blog/public/2020/05/13/react博客-egg-jwt实现登录系统/index.html","1992d4461c1be6e11a6c4d0a1ddf159c"],["G:/blog/public/2020/05/13/react博客-项目部署/index.html","75e7c0aa11b197b36f1644397f42d0f1"],["G:/blog/public/2020/05/13/test1/index.html","19929d2a24c8a0cea0037f6affc709b2"],["G:/blog/public/2020/05/14/webpack4.0学习总结（一）/index.html","ecc585aba00bd07dc0d40b7148b5a6e8"],["G:/blog/public/2020/05/15/webpack4.0学习总结（二）/index.html","a431486a37e631efb3c334a468595578"],["G:/blog/public/2020/05/16/valine国际版邮件回复/index.html","6e0b9e5dc84b8fffbad789a77377c457"],["G:/blog/public/2020/05/17/webpack4.0学习总结（三）/index.html","ead95a257f0a54bb491b1aeba7b8b619"],["G:/blog/public/2020/05/18/webpack4.0学习总结（四）/index.html","4a596f9d61518d1a4f53c055441f01af"],["G:/blog/public/2020/05/22/记录生活2020-5/index.html","5dd7f66d7ca6df4c8b32c47136283ed5"],["G:/blog/public/2020/05/25/webpack4.0进阶（一）/index.html","ee7adbd31c10f690451289176e31e065"],["G:/blog/public/404.html","a07a252261e2507e965cd7ca93b6ccde"],["G:/blog/public/about/index.html","6e40bd1d3fd568c8f498516cd08f3860"],["G:/blog/public/archives/2020/05/index.html","a24c336d5ef2095e921cfce956f14a26"],["G:/blog/public/archives/2020/05/page/2/index.html","7a18db3a9538e455472b05df2eb7a084"],["G:/blog/public/archives/2020/index.html","18037c0482e270cc85fc5d0cbd7eae80"],["G:/blog/public/archives/2020/page/2/index.html","7368a4a62ea2e889e3561d7a7f047d0e"],["G:/blog/public/archives/index.html","ba149a1b3d76ba661f5444d17f16715a"],["G:/blog/public/archives/page/2/index.html","ba149a1b3d76ba661f5444d17f16715a"],["G:/blog/public/categories/Hexo博客/index.html","e84415cf5d19115bedc2cf8cc89d287f"],["G:/blog/public/categories/index.html","4b9ac2d098714fa2cb1bb24012b16bc1"],["G:/blog/public/categories/前端/React/index.html","f053f3810e765bbd9cc62ed4915975c2"],["G:/blog/public/categories/前端/index.html","748706a31f4edbf3fec5f878ad9edde1"],["G:/blog/public/categories/前端/webpack4-0学习总结/index.html","c55482aa1a8374b045e14d21f6530388"],["G:/blog/public/categories/效率工具/index.html","82f29ca90871f8fa79c253a221c9cc6b"],["G:/blog/public/categories/测试分类/index.html","12ac0126d66b7aa789542b8a591165fd"],["G:/blog/public/categories/记录生活/2020/index.html","293ff065ac3c08dc633437fbe1f8d778"],["G:/blog/public/categories/记录生活/index.html","c9bcf591b8e7f0519106773e8e89e7b4"],["G:/blog/public/css/style.css","5d53865bff9f2b0690494ee6ef4c077a"],["G:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["G:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["G:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["G:/blog/public/friends/index.html","18382f0e778fd142f01e077dac79d052"],["G:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["G:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["G:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["G:/blog/public/index.html","7fdda6e768dbd04cfcd8652b95cdf3d7"],["G:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["G:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["G:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["G:/blog/public/list/index.html","cc6268de3902f2bb6631b8e831f46ba0"],["G:/blog/public/page/2/index.html","02475efe41b858a984b35d61715aab22"],["G:/blog/public/tags/Hexo/index.html","43ef871e999d4c97f6770f5bed4b9ede"],["G:/blog/public/tags/React/index.html","7e16acaad7407f7d7246507854c3ddd8"],["G:/blog/public/tags/ReactHook/index.html","1aaa6b8c675d8b2d478764f2176ed128"],["G:/blog/public/tags/Typora/index.html","33f7aae10d2a627321815ac8a152e1cd"],["G:/blog/public/tags/index.html","3e046ff21bbeea667b11010e96f9dffe"],["G:/blog/public/tags/jwt/index.html","1d68b103ab1dad183b1fbe9009ece988"],["G:/blog/public/tags/valine/index.html","2a0c222f216c19b70597981148161b8f"],["G:/blog/public/tags/webpack4-0/index.html","42a73b9aaa9b16d1132a31eb1ae60573"],["G:/blog/public/tags/博客/index.html","0ff67183d9822ebeb4f23b2b2b02761c"],["G:/blog/public/tags/工具/index.html","f88ded93e90a37d9e04a428dc77e6c17"],["G:/blog/public/tags/测试标签/index.html","945bc5e1a7324e6d250885ed8fb897ce"],["G:/blog/public/tags/记录生活/index.html","df11cb48ebc225184d46731795f22448"],["G:/blog/public/tags/评论系统/index.html","044011e252e2edec79c5c43a5c15c1f3"],["G:/blog/public/tags/部署/index.html","6f25deb914893e4da8ac1ac389ac9544"],["G:/blog/public/tags/阿里云/index.html","ee152da25841d0ef7db319a0841b06b9"]];
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







