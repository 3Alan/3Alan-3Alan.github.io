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

var precacheConfig = [["404.html","191539b938305510726039ae5af877a3"],["about/index.html","4ecd77e72151d8e7221723f501ac5d29"],["archives/2020/05/index.html","edad82b4a871b911173ff933dce59bf3"],["archives/2020/05/page/2/index.html","d1fad4c93244c12c6e06d64b2a57f5b2"],["archives/2020/06/index.html","138aa87eb208b5b2e6ad87ac5e428b51"],["archives/2020/07/index.html","62adb15455667c451ef859d4501bb3ec"],["archives/2020/11/index.html","aff1efd4be4365aa605c4c4e6ff214f6"],["archives/2020/index.html","3910c3fa8a5fdacbe4df23bf0fdd78e5"],["archives/2020/page/2/index.html","06d6cb22384a675bdbc17a88a9acc803"],["archives/index.html","f52835304121f7cba516a1433b756974"],["archives/page/2/index.html","f52835304121f7cba516a1433b756974"],["categories/Hexo博客/index.html","4f9e036d9b572066f5ff524fa8977aa3"],["categories/index.html","bd3ee62b83ed2de63786729e4454ec85"],["categories/前端/React/index.html","6aaf60bc5cd8029ef369cbbd37c51bd0"],["categories/前端/TypeScript/index.html","5dc0d4e193b585123246909fe35dbc2f"],["categories/前端/index.html","ac5fcf6de5f8e81fcff1470805891f87"],["categories/前端/page/2/index.html","df5dc6b9a84ffd07504cd04e4cda69fb"],["categories/前端/webpack4-0学习总结/index.html","8acea115ebe0114cce3551feef0a8c70"],["categories/前端/面试造轮/index.html","25976a4f90940243db5a02213842a462"],["categories/效率工具/index.html","d7d332c9fae5f78246274e272fcc4ac5"],["categories/测试分类/index.html","2f5ced2a4694c01e46cceaff28a8c8fe"],["categories/记录生活/2020/index.html","2c4a935d0732867a927ae1bd00f9cb91"],["categories/记录生活/index.html","2d4c34d6527a454b7654061e9952ccd9"],["css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["css/style.css","2417f18c2b7d1674f39e97f273536641"],["friends/index.html","eb31546bc5fe87155ac6948a1c107cdd"],["index.html","cb811c5fbbd931f48ad375ffae4facda"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","7db37d6debb540c3e4eb1c56d70d55c0"],["page/2/index.html","426bfb7d8b89f13dde79ab849c6e0491"],["posts/20802113/index.html","747c006446a77671e1e490f15f0b900d"],["posts/24b4915a/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/35b500c6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3b0a6cbe/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/66d3b164/index.html","6e7c3923c38f28560aedeb8ebf302750"],["posts/6af865/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/829819a3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/84d16999/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/92c49d45/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/b050203a/index.html","db1e66bd52e4f41459f2caa40490ab7c"],["posts/b4c78541/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/c05e5480/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/cf86baf1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/d4ddb122/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/f032f0/index.html","73dad7b2febc772fca6329556bd4d785"],["posts/f9d92613/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/fc7889ef/index.html","9d9949413dc45a0087464776dadd4757"],["posts/ff905629/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/DIY博客/index.html","34e358d92d5d7331a1a9274a1f64317f"],["tags/Hexo/index.html","545e2fc0dc85998b18287c39f9795cea"],["tags/Hexo评论系统/index.html","89996ab2300b9b154ec11b827616e3b5"],["tags/Next-js/index.html","9d751b60f93d1637dc08c8f6fe87e54d"],["tags/React/index.html","d3dfb54124acf0f6ecd63e3cd0baf977"],["tags/ReactHook/index.html","85bb60a9e11d88ee0c0e22f44dece8b8"],["tags/TypeScript/index.html","776f964fe7a0b2197ba82bee9df3e3ae"],["tags/Typora/index.html","782fe7b12f81d2016e4b166038b904db"],["tags/Valine国际版/index.html","66d3823ef4f6ceb41f3467b36a14d3ec"],["tags/index.html","bf948f1824f1c2d02bdd5f611daa5522"],["tags/jwt/index.html","409ce046d07f3c251e461225107916ce"],["tags/webpack4-0/index.html","a17fed331b5fd5309f542b1d25043ddd"],["tags/博客/index.html","3b1956d748732c5dda37738d25f4279e"],["tags/工具/index.html","9707af4629660a89eac1982d0246e0b8"],["tags/测试标签/index.html","237cf33c2c2d3f8c118cf83ec7960486"],["tags/自动化测试/index.html","beedd2907e9a3ff5c4642bde1037cbb8"],["tags/记录生活/index.html","4593a072c0519b4c823758e3e87f9497"],["tags/部署/index.html","1844dc56314bd74aa14d7cafb8ca6d60"],["tags/阿里云/index.html","dc0bc0356c1a75a09480bacffcac01b1"],["tags/面试题/index.html","7d2e698b9513e9ba05751c51f856cbd2"]];
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







