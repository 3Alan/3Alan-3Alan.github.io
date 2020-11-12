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

var precacheConfig = [["404.html","2a6600efd52bf71105accb261933f8a5"],["about/index.html","21b96460285bacb9af8068d83efea7a7"],["archives/2020/05/index.html","55e377bfe416fdb8e33358ed87e69cfc"],["archives/2020/05/page/2/index.html","2a440bc1760e1de386f985363bca7e68"],["archives/2020/06/index.html","356becbfc063bac746953c472ee7c7d6"],["archives/2020/07/index.html","1190963065dd1fe4fb710d3d085e9fb3"],["archives/2020/11/index.html","4349cca5dc1de24a00924e468275ae88"],["archives/2020/index.html","b5c215594aa54359ad22f9b7f03583ad"],["archives/2020/page/2/index.html","1c7410694ab02293e092d425fcf78f6d"],["archives/index.html","cadbab3376faf36d81a012fb0836dfad"],["archives/page/2/index.html","cadbab3376faf36d81a012fb0836dfad"],["categories/Hexo博客/index.html","be597577c8bfd0097b5bdb6e8f919a9d"],["categories/index.html","ad6b7b2852fb018ab79782fd98b54430"],["categories/前端/React/index.html","e1b98b59de5cb5542003e4cf9ae4cb73"],["categories/前端/TypeScript/index.html","e4595dc0dfd9a6ebea0b0aec1c7170d7"],["categories/前端/index.html","1c24381cb5e195e55e3f5ec3b78fa458"],["categories/前端/page/2/index.html","cfdd31c653ec1567330b5557158fc3cf"],["categories/前端/webpack4-0学习总结/index.html","54392bf44b9cb48d77dfc72c12deca3f"],["categories/前端/面试造轮/index.html","99b9718e61bfc118943fd39b7ccf9c67"],["categories/效率工具/index.html","96b5ecf44fa4da6f2135b1265b9440a2"],["categories/测试分类/index.html","2d0984a6adbc93b382fd9104976602d4"],["categories/记录生活/2020/index.html","d087e1397e41b118a4e3ad34f20007cc"],["categories/记录生活/index.html","e657e7c98817ec2ee25c9779c62aecef"],["css/first.css","77ab7f749b05ffe7ed86466ce56e211d"],["css/style.css","4be277dc1e7b5207508ed36953b135c8"],["friends/index.html","c33ef28ace2b402eb0bf682cb03fdef3"],["index.html","4573603828539fef8c2edecd8a14afa6"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","dc6a8d6c534b5ca1c00bd598bf4b8943"],["page/2/index.html","293c77d59cf6ac67c77977f80c80d719"],["posts/20802113/index.html","bb93440c4a5dbb44be0041cf6ad0c05f"],["posts/24b4915a/index.html","9188ce1132d7a6a35e00bef9a50b278c"],["posts/35b500c6/index.html","c1e3199c9fb53f6e6bd029d564768bbf"],["posts/3b0a6cbe/index.html","a674d0fcde0bde80d83e09e21d04eba9"],["posts/66d3b164/index.html","bee5e0cb0e16fc499079662b0c40ad93"],["posts/829819a3/index.html","4683bd177445ac878ccf2d97eb209e53"],["posts/84d16999/index.html","a161da4c8009820cb91715897105950b"],["posts/b050203a/index.html","7586b12dca551405d0824c31c9ec2b80"],["posts/b4c78541/index.html","565cb29132e2f311bc5bf621ca1ba1e3"],["posts/c05e5480/index.html","d17d7f5bd2c7592d3971c84a74408b41"],["posts/cf86baf1/index.html","594835e61979dfc927ad48ddb786269d"],["posts/d4ddb122/index.html","54c49bb3dc1dd062bb4622fb800b40eb"],["posts/f032f0/index.html","664a7928b734b7ff5f9be68489a0da94"],["posts/f9d92613/index.html","0e4d469fbb22df95e63e93cb9087b98d"],["posts/fc7889ef/index.html","7d22bffc4872b423953f1f56246f0dbf"],["posts/ff905629/index.html","5c11fee7bc62f07d2e7cd83936356d8a"],["tags/DIY博客/index.html","730dfa4156eaf81d8355b4a7a2da34af"],["tags/Hexo/index.html","5bb80412034b86891209e9cdca9b795c"],["tags/Hexo评论系统/index.html","1b7976fe4efc3ba7948c16f677feb484"],["tags/React/index.html","e132fab1cbbb0fe010cabf40c3843f6e"],["tags/ReactHook/index.html","38fac57e50b5f209c0b5d3d8f8b8f44a"],["tags/TypeScript/index.html","338535af8ac52403f858421b8a6e5394"],["tags/Typora/index.html","0253f4fb94a1cff40685a5be46cc81d8"],["tags/Valine国际版/index.html","25d4be38504b1ee0ba700d7ecef731ad"],["tags/index.html","24f883f13d5e2f89eb5b186e9ef958ec"],["tags/jwt/index.html","3aac1c91ff0c7e58e8e6b42a695077ef"],["tags/webpack4-0/index.html","e3f32a7ac2ce0a62363d0083b562972d"],["tags/博客/index.html","37cb22bdaa7fcb0c4c4163ea5858fb7b"],["tags/工具/index.html","d36142dc8ecc2351c4a12f86473859d6"],["tags/测试标签/index.html","2552a51a3278bfe16f7a10e429204e14"],["tags/记录生活/index.html","c55af567f32146672a3e18b33ee4f0ee"],["tags/部署/index.html","ac70a0f6572ebbe742ece59c126dffc1"],["tags/阿里云/index.html","528fde327f33377c142769a55e1faa3e"],["tags/面试题/index.html","bf2e8776c12df832e3e13544e1a39504"]];
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







