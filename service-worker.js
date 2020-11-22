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

var precacheConfig = [["G:/oneDrive/blog/public/404.html","f2df9502fa752e7c6f0f6ba1ed73faf6"],["G:/oneDrive/blog/public/about/index.html","56d226f6d817008391ca4c8cd5472797"],["G:/oneDrive/blog/public/archives/2020/05/index.html","303489473ad79a35080270284a31c5e0"],["G:/oneDrive/blog/public/archives/2020/05/page/2/index.html","29fe8e2b02d46487e402eb6d1d1a3d98"],["G:/oneDrive/blog/public/archives/2020/06/index.html","46aa33dfa82fcc8908b7c09f879ce8f0"],["G:/oneDrive/blog/public/archives/2020/07/index.html","37ee67e959a7e9e4947ba06174032f1c"],["G:/oneDrive/blog/public/archives/2020/11/index.html","806be9dfe369bd0670b9692065b31b99"],["G:/oneDrive/blog/public/archives/2020/index.html","67976c51f1b2b757e44d97d40d8ae55f"],["G:/oneDrive/blog/public/archives/2020/page/2/index.html","5b25f9b3f8c54bae6cc4570923f28654"],["G:/oneDrive/blog/public/archives/index.html","dcf46edba909c7a846893dcb16a57775"],["G:/oneDrive/blog/public/archives/page/2/index.html","dcf46edba909c7a846893dcb16a57775"],["G:/oneDrive/blog/public/categories/Hexo博客/index.html","c39e085c6ee5193f00fd587a7b524656"],["G:/oneDrive/blog/public/categories/index.html","bd3ee62b83ed2de63786729e4454ec85"],["G:/oneDrive/blog/public/categories/前端/React/index.html","63b13c12f929f48d4df5664b0065e6b0"],["G:/oneDrive/blog/public/categories/前端/TypeScript/index.html","32494c308694c449f151bfd8c705f484"],["G:/oneDrive/blog/public/categories/前端/index.html","e6d9127c76606ad1d3eb6e54f61fc1d0"],["G:/oneDrive/blog/public/categories/前端/page/2/index.html","4c4685a4c7c336087672cf030f8083b5"],["G:/oneDrive/blog/public/categories/前端/webpack4-0学习总结/index.html","4c4082afc899d82dabf2604b996af0e1"],["G:/oneDrive/blog/public/categories/前端/面试造轮/index.html","ad4c596d3d8d71da935ea2c88fa133be"],["G:/oneDrive/blog/public/categories/效率工具/index.html","98c7d2afc6d38d6fee28c8691f608a5c"],["G:/oneDrive/blog/public/categories/测试分类/index.html","fa43dcb00e851ba7a9721112c9be168d"],["G:/oneDrive/blog/public/categories/记录生活/2020/index.html","af4954c1ae0091b6aa8d74e904fe1d90"],["G:/oneDrive/blog/public/categories/记录生活/index.html","e802ca1c1e5b5f23747c07dbbc7e2b9c"],["G:/oneDrive/blog/public/css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["G:/oneDrive/blog/public/css/style.css","2417f18c2b7d1674f39e97f273536641"],["G:/oneDrive/blog/public/friends/index.html","fa2f224b4faa010e66338e9e29de6ab1"],["G:/oneDrive/blog/public/index.html","e5498e4de17185980e59f797783910c1"],["G:/oneDrive/blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["G:/oneDrive/blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["G:/oneDrive/blog/public/js/issues.js","31c43c2f323daded49b27eb8f9792476"],["G:/oneDrive/blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["G:/oneDrive/blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["G:/oneDrive/blog/public/list/index.html","0ad0a39483ff9546b8c67848558ea0e3"],["G:/oneDrive/blog/public/page/2/index.html","88489bcd6d2904eeb1db0ddb6b2e59cb"],["G:/oneDrive/blog/public/posts/20802113/index.html","747c006446a77671e1e490f15f0b900d"],["G:/oneDrive/blog/public/posts/24b4915a/index.html","0ba3ebf0cb53c48ae8894915096a1790"],["G:/oneDrive/blog/public/posts/35b500c6/index.html","b585b828a6496fba034ded6f136ce046"],["G:/oneDrive/blog/public/posts/3b0a6cbe/index.html","7dfd8b3c10b14fce17b62c53b46142e6"],["G:/oneDrive/blog/public/posts/66d3b164/index.html","6e7c3923c38f28560aedeb8ebf302750"],["G:/oneDrive/blog/public/posts/6af865/index.html","b7e20e6b27bbcc09d5c89a6a719f1942"],["G:/oneDrive/blog/public/posts/829819a3/index.html","c264875f83b78365cd953276eb8dae60"],["G:/oneDrive/blog/public/posts/84d16999/index.html","3245c49de4b2b0a6b0748d7ff2db187c"],["G:/oneDrive/blog/public/posts/92c49d45/index.html","912039d259bd297bc086de572fedd03e"],["G:/oneDrive/blog/public/posts/b050203a/index.html","bd839d2e8900cb521e89dd20e48af128"],["G:/oneDrive/blog/public/posts/b4c78541/index.html","9c450482bf5bad8ee4f2b64ffdf4020a"],["G:/oneDrive/blog/public/posts/c05e5480/index.html","aaa6b96075225c032fcbdd7a6687dd50"],["G:/oneDrive/blog/public/posts/cf86baf1/index.html","f90fb21e823607db4e8c7779144daf95"],["G:/oneDrive/blog/public/posts/d4ddb122/index.html","62be458f376b148a58ad9d5aef413136"],["G:/oneDrive/blog/public/posts/f032f0/index.html","73dad7b2febc772fca6329556bd4d785"],["G:/oneDrive/blog/public/posts/f9d92613/index.html","8f699daabc626433a7d31619f9d420d5"],["G:/oneDrive/blog/public/posts/fc7889ef/index.html","3ca5609a42f327764c4947b943acdc12"],["G:/oneDrive/blog/public/posts/ff905629/index.html","561fa6c3d7965a5f471191169172a5ec"],["G:/oneDrive/blog/public/tags/DIY博客/index.html","73534ca019c925a200814bd9fbb17f1e"],["G:/oneDrive/blog/public/tags/Hexo/index.html","a8a676b87492820b81007fa419a6b3c3"],["G:/oneDrive/blog/public/tags/Hexo评论系统/index.html","6572bd5eb471e9c202d4253430c803bc"],["G:/oneDrive/blog/public/tags/Next-js/index.html","ac7c95228896604ddadd2e6412b59a61"],["G:/oneDrive/blog/public/tags/React/index.html","4f29270ffb38a75086ce0fe3a105e464"],["G:/oneDrive/blog/public/tags/ReactHook/index.html","e0170d637624c1555e1765d683a34e31"],["G:/oneDrive/blog/public/tags/TypeScript/index.html","03e1603fe97883048e13731b8cf17024"],["G:/oneDrive/blog/public/tags/Typora/index.html","1fbb0b279d4bc80adbc8968325dc2770"],["G:/oneDrive/blog/public/tags/Valine国际版/index.html","2d8d7a3b9b6681c83ac3fabebf4244c4"],["G:/oneDrive/blog/public/tags/index.html","bf948f1824f1c2d02bdd5f611daa5522"],["G:/oneDrive/blog/public/tags/jwt/index.html","ac7b4c7c1495f343ecccc5f4c6735c22"],["G:/oneDrive/blog/public/tags/webpack4-0/index.html","d9656e6c94015339c6ca1978f25b6982"],["G:/oneDrive/blog/public/tags/博客/index.html","534b16554ef7f1eae4fe2a6daaca94c8"],["G:/oneDrive/blog/public/tags/工具/index.html","1e557f24639343a5c5687b6e0052963d"],["G:/oneDrive/blog/public/tags/测试标签/index.html","13a27798bd37444aefe2a9caae1bf4b7"],["G:/oneDrive/blog/public/tags/自动化测试/index.html","e6adc3ad636145b42da7c3c7202f3012"],["G:/oneDrive/blog/public/tags/记录生活/index.html","e30f2b08deaa6f023ca9b43f138ed839"],["G:/oneDrive/blog/public/tags/部署/index.html","120c96e8af25557c4a14b9fff720bf14"],["G:/oneDrive/blog/public/tags/阿里云/index.html","047890738372a44805e1295f577fadcf"],["G:/oneDrive/blog/public/tags/面试题/index.html","473b0af1c8b6b6f72f2c54cca2c71aaf"]];
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







