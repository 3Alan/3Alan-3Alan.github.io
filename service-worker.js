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

var precacheConfig = [["404.html","2a6600efd52bf71105accb261933f8a5"],["about/index.html","21b96460285bacb9af8068d83efea7a7"],["archives/2020/05/index.html","c6ecd685319f9411c1f911aa46ae8aec"],["archives/2020/05/page/2/index.html","803ebfc2307fc5e2e253c2d156195f03"],["archives/2020/06/index.html","f843060cf0f5e5b2cc2b26cf86d49af3"],["archives/2020/07/index.html","0d41371ff7fb7d30eb60a2ae716a622f"],["archives/2020/11/index.html","7375898205cc5b80f2bb0e3e26a3a05c"],["archives/2020/index.html","b4fa52054ceeba79d207653e6dceef5a"],["archives/2020/page/2/index.html","ccbbc954d162813f4c069862f8287492"],["archives/index.html","4260e33cf5393c66d45d5617752c697e"],["archives/page/2/index.html","4260e33cf5393c66d45d5617752c697e"],["categories/Hexo博客/index.html","16135e8aa770118379f9abc4e3a801b7"],["categories/index.html","ad6b7b2852fb018ab79782fd98b54430"],["categories/前端/React/index.html","39df354de5f0e4d4e95a7f730061c0d1"],["categories/前端/TypeScript/index.html","4214409043bc88b1f4b1cce72ae29646"],["categories/前端/index.html","184d5f4325e73c753450f480723067ae"],["categories/前端/page/2/index.html","70269449a9283e073c1a7a25e34b39d0"],["categories/前端/webpack4-0学习总结/index.html","cbd3a5becc97a1fb5eb93a2c652b676b"],["categories/前端/面试造轮/index.html","9b9c6044a912b20f54748e2ba7b57b23"],["categories/效率工具/index.html","919f9c4de4c56a8cd4f8a06ba69b7624"],["categories/测试分类/index.html","ccac67b4eb6b8e0efc2feaa10e4c3d4c"],["categories/记录生活/2020/index.html","6fa8463ae8b2244c8d958313b501fcde"],["categories/记录生活/index.html","0f855786b1adc9686e93c29bc214d7c0"],["css/first.css","77ab7f749b05ffe7ed86466ce56e211d"],["css/style.css","4be277dc1e7b5207508ed36953b135c8"],["friends/index.html","c33ef28ace2b402eb0bf682cb03fdef3"],["index.html","9d260dfce67add6fa6d9eb55ec76619b"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","bdd0b9c7d893aa0b852765efe2f943a7"],["page/2/index.html","ae827dbede40511f60406fdd98992bcc"],["posts/20802113/index.html","bb93440c4a5dbb44be0041cf6ad0c05f"],["posts/24b4915a/index.html","a772e38aefa757cae9b82f9b52222a5f"],["posts/35b500c6/index.html","a2783ac0776248673fa5d12251ccc529"],["posts/3b0a6cbe/index.html","a674d0fcde0bde80d83e09e21d04eba9"],["posts/66d3b164/index.html","bee5e0cb0e16fc499079662b0c40ad93"],["posts/829819a3/index.html","4683bd177445ac878ccf2d97eb209e53"],["posts/84d16999/index.html","6b0ed8c243ebb16029facb431e440a86"],["posts/b050203a/index.html","7586b12dca551405d0824c31c9ec2b80"],["posts/b4c78541/index.html","04280d6c3528a577d7744a04570dfd2f"],["posts/c05e5480/index.html","a18afaf4ebebbb49a0210e1a64fbaff5"],["posts/cf86baf1/index.html","594835e61979dfc927ad48ddb786269d"],["posts/d4ddb122/index.html","54c49bb3dc1dd062bb4622fb800b40eb"],["posts/f032f0/index.html","664a7928b734b7ff5f9be68489a0da94"],["posts/f9d92613/index.html","f352df3bdf02760afa67b4446becb3d1"],["posts/fc7889ef/index.html","7d22bffc4872b423953f1f56246f0dbf"],["posts/ff905629/index.html","a96df2c9dbe8aa33ef5a641df14e564f"],["tags/DIY博客/index.html","e51e36e210b8efe79b1a52f525d00ef0"],["tags/Hexo/index.html","9aed1ae123a278759f498ba0b074deae"],["tags/Hexo评论系统/index.html","29b0d88a42ccfe74fa889478b0b83a7a"],["tags/React/index.html","ec5d8db9f7f51b4245a5e89def51a7ef"],["tags/ReactHook/index.html","65e7a68ff9b1b72f9071379165b461fc"],["tags/TypeScript/index.html","8ec296a76946f3d7d42c1cc14340c322"],["tags/Typora/index.html","e9d2fcee8b1383a53a4cbd41ab28b291"],["tags/Valine国际版/index.html","41a8161016d861d91e48121c2d2fd354"],["tags/index.html","24f883f13d5e2f89eb5b186e9ef958ec"],["tags/jwt/index.html","81f9946914570ac1cf85dd2821774d7d"],["tags/webpack4-0/index.html","09e1e13819467a5dc8be3c52340ee1bb"],["tags/博客/index.html","d0fea50a0f06a14152dff87c1d77ddb1"],["tags/工具/index.html","63627757d718666baf9c2d5b2e6b9459"],["tags/测试标签/index.html","52add91410b9c06666580df40443e1bb"],["tags/记录生活/index.html","f21ffb27ec976cbd404c29dcd754b87b"],["tags/部署/index.html","401c7b6455dd52d90460d21514861938"],["tags/阿里云/index.html","1f76df7956beda88817b28baacbfd79d"],["tags/面试题/index.html","e68eba827f5754079470479662f08525"]];
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







