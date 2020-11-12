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

var precacheConfig = [["404.html","2a6600efd52bf71105accb261933f8a5"],["about/index.html","21b96460285bacb9af8068d83efea7a7"],["archives/2020/05/index.html","aed41d4b50317cce1ccee0fa0a7de7e3"],["archives/2020/05/page/2/index.html","9b108ecd611f497c2c93932ec7270e23"],["archives/2020/06/index.html","be53a0b24fc3d6aafd3d517b22c6e937"],["archives/2020/07/index.html","f4dcc72be9c01cf6c493d42d409ff93f"],["archives/2020/11/index.html","a01a053e1135ee2ce945fe4891019d73"],["archives/2020/index.html","15ab71d60404a5077a63028cea381808"],["archives/2020/page/2/index.html","bdbbb79369a97f7ff84455852a92a703"],["archives/index.html","29686dea7aedea9c7843b5762b25632c"],["archives/page/2/index.html","29686dea7aedea9c7843b5762b25632c"],["categories/Hexo博客/index.html","4e653dd6097279b5fa9ee2f1fe6b3745"],["categories/index.html","00eb9190856021310f8bdb1cd5870907"],["categories/前端/React/index.html","c314215f52c5af5f4829234ec08fc4fb"],["categories/前端/TypeScript/index.html","d8be9dd76e24d7de28e7644626021175"],["categories/前端/index.html","bd6e3fb1784c82b8e30853bdaaca678e"],["categories/前端/page/2/index.html","9ef47f07d2038f63595a8c2860d66134"],["categories/前端/webpack4-0学习总结/index.html","d4ebca046e35f23826ba812be5fd56f3"],["categories/前端/面试造轮/index.html","543787bf22abca89aa62b3ec1bbebb7e"],["categories/效率工具/index.html","450c2335cfe59f098b5ba8eb4aae0f98"],["categories/测试分类/index.html","5549e079a3d0e86514578438d1b9b9be"],["categories/记录生活/2020/index.html","6b69d1e39747f1f720dc922977216855"],["categories/记录生活/index.html","518e07a87c4e4fa1b2f586754cc9ec46"],["css/first.css","77ab7f749b05ffe7ed86466ce56e211d"],["css/style.css","4be277dc1e7b5207508ed36953b135c8"],["friends/index.html","c33ef28ace2b402eb0bf682cb03fdef3"],["index.html","dcff9a2407df28193a9bba5ce0bb1d5f"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","eb1e425e95845e212e2a308759be4f64"],["page/2/index.html","8586437e25a5a6efcf1f35dfc8fabd41"],["posts/20802113/index.html","bb93440c4a5dbb44be0041cf6ad0c05f"],["posts/24b4915a/index.html","9188ce1132d7a6a35e00bef9a50b278c"],["posts/35b500c6/index.html","c1e3199c9fb53f6e6bd029d564768bbf"],["posts/3b0a6cbe/index.html","43c666db88af72f6813635ac8365d4e2"],["posts/66d3b164/index.html","bee5e0cb0e16fc499079662b0c40ad93"],["posts/6af865/index.html","bb6edf527290b42f9e847cba5a386fcd"],["posts/829819a3/index.html","4683bd177445ac878ccf2d97eb209e53"],["posts/84d16999/index.html","a161da4c8009820cb91715897105950b"],["posts/b050203a/index.html","7586b12dca551405d0824c31c9ec2b80"],["posts/b4c78541/index.html","565cb29132e2f311bc5bf621ca1ba1e3"],["posts/c05e5480/index.html","684b4dc7b75cea71268048fdb764ff90"],["posts/cf86baf1/index.html","594835e61979dfc927ad48ddb786269d"],["posts/d4ddb122/index.html","2df0583b9d2d77c4fda4a3d92e8d07b5"],["posts/f032f0/index.html","664a7928b734b7ff5f9be68489a0da94"],["posts/f9d92613/index.html","0e4d469fbb22df95e63e93cb9087b98d"],["posts/fc7889ef/index.html","7d22bffc4872b423953f1f56246f0dbf"],["posts/ff905629/index.html","5c11fee7bc62f07d2e7cd83936356d8a"],["tags/DIY博客/index.html","c1d259cf5f0f67019fe0eda94c884f1f"],["tags/Hexo/index.html","923b6f3f484034499b6f764dc69df323"],["tags/Hexo评论系统/index.html","bd0eecb9729aaa7818d5cb4ff3e53691"],["tags/Next-js/index.html","21c63f5dbb40e384442f87a66ccf8950"],["tags/React/index.html","1a23322d4993d0b587ad91463c9d9c20"],["tags/ReactHook/index.html","2735721de4e86f36981df4626bcc3855"],["tags/TypeScript/index.html","dcf14e3c5eb649e2e41c69bda93c71c3"],["tags/Typora/index.html","611a35ac7e42b6a4abc1487ad40540c2"],["tags/Valine国际版/index.html","0b52b377614f548c8d7bfe5cd2f57680"],["tags/index.html","296587f5e34fe853b3410fa0ac41ae1a"],["tags/jwt/index.html","61854af38a3c2887edef0dbaeeafe018"],["tags/webpack4-0/index.html","14b0a2853e0f7c05f6e7023708537856"],["tags/博客/index.html","41071070fcd8b107f5d38e07fb7ec69b"],["tags/工具/index.html","5bf0a23d6ea944c353e8e506154d47dd"],["tags/测试标签/index.html","b912ce5b7fc92a835e95b559ae2969d7"],["tags/记录生活/index.html","e405813624cba5a665ee9fac870b5606"],["tags/部署/index.html","b0018eda5387127e89a8f2225c041cc1"],["tags/阿里云/index.html","63978c0681540e7fad8e3c0968277435"],["tags/面试题/index.html","0ac116e88f81200a3acfa7e609f44046"]];
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







