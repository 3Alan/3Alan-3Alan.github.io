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

var precacheConfig = [["404.html","e81962c81c488fbdbf02b693b6d6770b"],["about/index.html","b979ae565f6cee6ca1be0b1159125ab9"],["archives/2020/05/index.html","55f4f20af70674b25eb27fb8b69bae44"],["archives/2020/05/page/2/index.html","d3c03e26bf601cb0268cbd755625f524"],["archives/2020/06/index.html","674902521c3b8cd3f61b1c8c68ce7616"],["archives/2020/07/index.html","629eec26e03c37cbeadddf08e548b40c"],["archives/2020/11/index.html","b125142503c09a94130275e91ece1d9a"],["archives/2020/index.html","2c00d5ff536330f031344d220c1c1cef"],["archives/2020/page/2/index.html","b2284498702fee5de357aa6df78fba68"],["archives/index.html","9f27b1e18499a6cbfc0aee5c9172ac99"],["archives/page/2/index.html","9f27b1e18499a6cbfc0aee5c9172ac99"],["categories/Hexo博客/index.html","b57fe04d87e3306f833f1241df137c46"],["categories/index.html","a31b28eebce227735fb2ad1aed1f0bf5"],["categories/前端/React/index.html","939cdbf4a6b811553860808cbcaef6fd"],["categories/前端/TypeScript/index.html","1e8c067213b536881cd04e664ec20d64"],["categories/前端/index.html","ad286909b758b27cd9d7f894af3270ca"],["categories/前端/page/2/index.html","967f0128283fcbb4a575c9133fc5598b"],["categories/前端/webpack4-0学习总结/index.html","63d643da29490fb1f750de2982389743"],["categories/前端/面试造轮/index.html","7a554efd760963e4a01e7475f8e27c6e"],["categories/效率工具/index.html","2464d8cc6710a94cca96be3da2d2b36b"],["categories/测试分类/index.html","7a1a6a1c60dfc9e1848256d2d38a95b5"],["categories/记录生活/2020/index.html","6f438b9726383fe08df2287fc62bba23"],["categories/记录生活/index.html","b0df87dd7e368f166e2b395f29abfeb0"],["css/first.css","1d619110f1e482d1c318abbce2488f3a"],["css/style.css","3618609a130961585a2dab14f3483a8b"],["friends/index.html","94b5f5b109e1d42d3f5cda724c93ab8d"],["index.html","d1f69110ac777924cbfdb7c726c401fb"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","82e5a64eb343b3a67383666e06680d67"],["page/2/index.html","b18e4a43e0e93fd4262adef44e1dcfcc"],["posts/20802113/index.html","53b561404b225b44b5fc693250023e20"],["posts/24b4915a/index.html","b1b9e9e4565641d1917096bea0dbef10"],["posts/35b500c6/index.html","c882db0afc0789141a53a1ad145f23b1"],["posts/3b0a6cbe/index.html","eda0896a3db25b6a51e6c91951a7efc3"],["posts/66d3b164/index.html","93995553bd678f663c9c9b90bd6284ff"],["posts/829819a3/index.html","23ca96c63a960b3d412025f7822e4fb9"],["posts/84d16999/index.html","57a6207ae8bdf45fa09f689b3a687584"],["posts/b050203a/index.html","c0bd3d123eaaab9de2cee2c65b5ab2bb"],["posts/b4c78541/index.html","6658a8f96d70b2e8127e094b1d3530e3"],["posts/c05e5480/index.html","ccbbb9af16cc0593e79965cb0f5ef531"],["posts/cf86baf1/index.html","1ee8a07420eea634d3b0ca1b3a2b568b"],["posts/d4ddb122/index.html","01ace7ce5aa90168ddc5d98ad05533ad"],["posts/f032f0/index.html","a21fd89af94db022b43a92f6bd78b72e"],["posts/f9d92613/index.html","2f9b570925b58ed55dc04f30dec2a042"],["posts/fc7889ef/index.html","c100f0d46fa3f0ffdf61883e986348ec"],["posts/ff905629/index.html","f91419fad243b66282fbab922e838c52"],["tags/DIY博客/index.html","cf9e03ffd16ab704c559b6f2af6a31ba"],["tags/Hexo/index.html","4ce00387728e473820a4114e4476c0ba"],["tags/Hexo评论系统/index.html","afa1a19423cff3d53c9393b9e8183025"],["tags/React/index.html","9fc1bd21af81945a62d3ccdcc337045f"],["tags/ReactHook/index.html","1630b0acb38bae7cdf5ef4f5d71c611f"],["tags/TypeScript/index.html","bde42a153e1cfe9037b268802bcbaf33"],["tags/Typora/index.html","8891cbd26ce735a006411d84beb016f3"],["tags/Valine国际版/index.html","dac23a3a857d5b0592fcf571455e6896"],["tags/index.html","7be32685ce2679047608c2ddc6c1213b"],["tags/jwt/index.html","8281deb6c1045ca55b4c2fc364a71555"],["tags/webpack4-0/index.html","90bf52a430cda8d8e8437d8140461a90"],["tags/博客/index.html","e0b1e93728314a870e293ba0bcda8417"],["tags/工具/index.html","439f7bf0f31ad0b484d94571cf626c77"],["tags/测试标签/index.html","c1d7771d791d8c1d1ebf9d3918748af6"],["tags/记录生活/index.html","70de28fb292890d996d5bf5f9c157e53"],["tags/部署/index.html","5d7463ef9a3374937de74007972a2e13"],["tags/阿里云/index.html","ba6b758756a06349dc7824ebea76fc1d"],["tags/面试题/index.html","75e369e12e04390da7ff141dbf4181f8"]];
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







