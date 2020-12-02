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

var precacheConfig = [["404.html","191539b938305510726039ae5af877a3"],["about/index.html","4ecd77e72151d8e7221723f501ac5d29"],["archives/2020/05/index.html","708ead5303dc2c81e39ba6a3591a8409"],["archives/2020/05/page/2/index.html","8896546e016825fdf2822553528f13a9"],["archives/2020/06/index.html","da9a624c5a38aa48613e2270cc25ca19"],["archives/2020/07/index.html","587e7852c4f41e612ce197a0b2989231"],["archives/2020/11/index.html","50f58ccdedfca20873f14bc107a48bb9"],["archives/2020/index.html","3b91a8ef679cc12b600ba18339b0dd9d"],["archives/2020/page/2/index.html","e8922e02f63e926b497e2b345cacd3f9"],["archives/index.html","a8f2fe142d8c1be0cdcd8f5e52114d03"],["archives/page/2/index.html","a8f2fe142d8c1be0cdcd8f5e52114d03"],["categories/Hexo博客/index.html","aee333da324c7e94050c427c3e0e865e"],["categories/index.html","bd3ee62b83ed2de63786729e4454ec85"],["categories/前端/React/index.html","8853766081404c6b0bb1cd1c5e4804ce"],["categories/前端/TypeScript/index.html","664cea1933422c9f09615ef49aa415ce"],["categories/前端/index.html","d22964751bcdb15d90876448b9dd7e9e"],["categories/前端/page/2/index.html","5a41f58f033fd6f9e411b598ad0d626f"],["categories/前端/webpack4-0学习总结/index.html","caebbab101467289631744509e366781"],["categories/前端/面试造轮/index.html","ed3d509daf72c31952007b309390d3ea"],["categories/效率工具/index.html","77780e66765a51763d7b3276b7523ce4"],["categories/测试分类/index.html","290b831ba2b1136be018cd516dd25524"],["categories/记录生活/2020/index.html","4e06a227f06983686fac0ea1201e8b4b"],["categories/记录生活/index.html","3e22dba71cd487baa1f929a8b23c4599"],["css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["css/style.css","2417f18c2b7d1674f39e97f273536641"],["friends/index.html","eb31546bc5fe87155ac6948a1c107cdd"],["index.html","7ce3892f3dfd29aa14ce3b7e57022a39"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","f217afec82b125234371113bfbcfef12"],["page/2/index.html","0f3e659b6011eb7c411202a715c685df"],["posts/20802113/index.html","747c006446a77671e1e490f15f0b900d"],["posts/24b4915a/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/35b500c6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3b0a6cbe/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/66d3b164/index.html","6e7c3923c38f28560aedeb8ebf302750"],["posts/6af865/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/829819a3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/84d16999/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/92c49d45/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/b050203a/index.html","db1e66bd52e4f41459f2caa40490ab7c"],["posts/b4c78541/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/c05e5480/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/cf86baf1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/d4ddb122/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/f032f0/index.html","73dad7b2febc772fca6329556bd4d785"],["posts/f9d92613/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/fc7889ef/index.html","9d9949413dc45a0087464776dadd4757"],["posts/ff905629/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/DIY博客/index.html","f8105f89e52586bbe79346c025f92687"],["tags/Hexo/index.html","ea6981a3b02994bf0a38709ea4ffa746"],["tags/Hexo评论系统/index.html","f7ab1b8a68a2e194585147632e5e2001"],["tags/Next-js/index.html","5b7fbe55235fe9437f0e68e879fd969e"],["tags/React/index.html","fa3c345f8fc096e9b0673565e2b34817"],["tags/ReactHook/index.html","4b1683ffd35aa987ddc57f73052f54cf"],["tags/TypeScript/index.html","12938ca9baf7411a8abc020873a69b87"],["tags/Typora/index.html","2216a171315de3ba3aadd403789a695b"],["tags/Valine国际版/index.html","60e2f8a9c103168152cf210d094b9b8f"],["tags/index.html","bf948f1824f1c2d02bdd5f611daa5522"],["tags/jwt/index.html","483b1692ca66a1339766441e3b9d1aec"],["tags/webpack4-0/index.html","a36138ea0714fdc42d476ab888b479d0"],["tags/博客/index.html","0d8611ca614fae47aabeea161a044123"],["tags/工具/index.html","5575d8ecb8e7acc90e1bbeb648fca36b"],["tags/测试标签/index.html","bfa285e6f46b4acfbcaadc4ee01243b0"],["tags/自动化测试/index.html","1443b4b40e18a7a2cdfc703aaba8b304"],["tags/记录生活/index.html","e711c8ad37154285105417e4dce12c8a"],["tags/部署/index.html","1b6a55b11efc725dc8db2db6221faf99"],["tags/阿里云/index.html","0f33a5536b5cc01d681e9d74a6203e8b"],["tags/面试题/index.html","86f903259c707a7ed932b1071b2a3e84"]];
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







