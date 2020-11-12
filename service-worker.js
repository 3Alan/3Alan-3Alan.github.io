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

var precacheConfig = [["404.html","6cbfd5a2b281a00f7a4cd42d74a1c19a"],["about/index.html","08e90eb572560b229b2c39b094ed052a"],["archives/2020/05/index.html","318e93dc543a4c06bdec7ed347791aec"],["archives/2020/05/page/2/index.html","c6e6e70dbecc99fbbaa9bae31c440d5a"],["archives/2020/06/index.html","7ee9da493b048aa96274abe7aa74a513"],["archives/2020/07/index.html","a843c843b22050973e5a6b31b83fe20a"],["archives/2020/11/index.html","ac464837057994fbbe3844986b483143"],["archives/2020/index.html","c9c0cdec8f33eea35a1319d133708e84"],["archives/2020/page/2/index.html","c54e6e0f94bcc0c34183a4b37c7d423f"],["archives/index.html","daf3bcec2b42f712d12ea8d08d1d2745"],["archives/page/2/index.html","daf3bcec2b42f712d12ea8d08d1d2745"],["categories/Hexo博客/index.html","81f8a1553fa644dab8cc7729ab08dd4a"],["categories/index.html","0f213bdeed5888e8a2fa5de5e0f9b72d"],["categories/前端/React/index.html","d7afc58e849b2415c7894f9108d9e9cb"],["categories/前端/TypeScript/index.html","63260773ce82d8921bf2f41f65959c3b"],["categories/前端/index.html","dcf09d94f3b51a06a5b920ab1dd4fe73"],["categories/前端/page/2/index.html","bb81f90cce2c69d6da7920f82da0ec1c"],["categories/前端/webpack4-0学习总结/index.html","7361af4bd5d9887e6cff6cccc1024ca1"],["categories/前端/面试造轮/index.html","3102d0ff0311d030701fb0f525314eda"],["categories/效率工具/index.html","eefa3c80ba02f7b8c3a76331c6744a55"],["categories/测试分类/index.html","e869e9b344ee8155ba1288c16528574f"],["categories/记录生活/2020/index.html","fa83d9865bef9424915ee83ce0aca0ff"],["categories/记录生活/index.html","9b14d8625186980743be5ecfb3087975"],["css/first.css","6c1486c1cfce203e7c64e991befbc234"],["css/style.css","4be277dc1e7b5207508ed36953b135c8"],["friends/index.html","fed06e302d11db5ce78055aab4188d1b"],["index.html","9fe7895db45af75b3c8b20741174d8c4"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","5e79b42006fff7e7c74698eb83286119"],["page/2/index.html","eb2c744abee9986538c53a9aa4ecdbcc"],["posts/20802113/index.html","ad3f19816b6cef5ad481959ab9836b03"],["posts/24b4915a/index.html","8ef09c5846041ac66d35681deb59302e"],["posts/35b500c6/index.html","1672d0a6e72799f519afc1c8579a2c68"],["posts/3b0a6cbe/index.html","ab92173dacaf878aafbf7cface2a4aff"],["posts/66d3b164/index.html","4ecb91612edfe77076030fd5e84075ba"],["posts/6af865/index.html","46900a1b3666e95b816e2812af854a5f"],["posts/829819a3/index.html","7d64da12a0a59890147638b24abdd760"],["posts/84d16999/index.html","c9e024294ed4ded2246e488d636b31c3"],["posts/b050203a/index.html","abfecde3b390db5e33533af6ff1dd797"],["posts/b4c78541/index.html","94342ca27c4ab34e16261e06a15dc74d"],["posts/c05e5480/index.html","8bf29c3b8e972df017c0f6c9b25a8c83"],["posts/cf86baf1/index.html","a55afa18aa5c2b3d790436a103a90130"],["posts/d4ddb122/index.html","31274af2f6faf2bda30ae4dde09b3f87"],["posts/f032f0/index.html","8c582148c2e634441c5a97efc7ca5457"],["posts/f9d92613/index.html","275ad5c34fda2b4fae93fde07cb5af8b"],["posts/fc7889ef/index.html","ab5277c898be1e03854e11bc5c1a2dd4"],["posts/ff905629/index.html","b1fff1ac1c9d02204747594356b6664f"],["tags/DIY博客/index.html","7d5ad45d46f06d64c3b05a149752d54f"],["tags/Hexo/index.html","f122d262a1c8b7b7c05adf53bbbe951a"],["tags/Hexo评论系统/index.html","4d1f74d9da259c3887cc8baffea978ce"],["tags/Next-js/index.html","ab19f79740aa2d73982c8c72e6f7ca29"],["tags/React/index.html","06fdb6957abc4d76c328ee6e9f2307d5"],["tags/ReactHook/index.html","5d55e219b5e2711764961a2c79f4db3e"],["tags/TypeScript/index.html","2ec85594882f7834728bc27c8f595285"],["tags/Typora/index.html","9f96ebc510b9a3fa39fa0249d2397d77"],["tags/Valine国际版/index.html","bf338b7826a09ec17dd5233f5f43d369"],["tags/index.html","9690c9e5a84b5a1de337d3cda866265b"],["tags/jwt/index.html","f8d9dfd2a75bb7db4e5340ad6a718c95"],["tags/webpack4-0/index.html","0971542d3532a2e70a65cc85482dba0e"],["tags/博客/index.html","394a6bcdbe3cb07f398b99050419e4e1"],["tags/工具/index.html","d020d9fe17afa651f5ebe0272fc78b97"],["tags/测试标签/index.html","db40cfb4cb7b8783039ba113a6ea778e"],["tags/记录生活/index.html","f5c416dedabb9849a787e91588c151d2"],["tags/部署/index.html","f3dc7995b918fdb472cb3c481865c51c"],["tags/阿里云/index.html","5827c1f8062ccc9438714bc69c2c45e7"],["tags/面试题/index.html","edae9504ab1867ecc17aef415e31f009"]];
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







