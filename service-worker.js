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

var precacheConfig = [["404.html","52c7ae98d68f4530ba1d4b071a108afe"],["about/index.html","dc2caacbc149dabd3e6340a1aece2204"],["archives/2020/05/index.html","41ee149a8c68dcba5c93280868269aca"],["archives/2020/05/page/2/index.html","b5f6051a9b8b24e82da49b6d9a43926a"],["archives/2020/06/index.html","76f2e1b02a952db65a6187352658ee52"],["archives/2020/07/index.html","4b995e63658cabf15c6cf6dd9a369cbf"],["archives/2020/11/index.html","ea94903e9a1e6ff98f110c34d0c6a63b"],["archives/2020/index.html","fc9c012a143d2f3058875bdefb38f958"],["archives/2020/page/2/index.html","b0c2d8a5a83fef55dd560b96dcddbaa9"],["archives/index.html","5c7a056c1405366e1002699a5cfb75fc"],["archives/page/2/index.html","5c7a056c1405366e1002699a5cfb75fc"],["categories/Hexo博客/index.html","bb09530bbe0a368b6749ed6be84c8abf"],["categories/index.html","53aaaa3bea9f31f0584c797a11d09b32"],["categories/前端/React/index.html","327cd131bbb912ae87bba3c0241f0642"],["categories/前端/TypeScript/index.html","b9e449a3d01101d99771ca0f2394990b"],["categories/前端/index.html","d229355583dd56a59892964e7d1f17ea"],["categories/前端/page/2/index.html","16d02a6a4925d27aa3c23cfa8d065605"],["categories/前端/webpack4-0学习总结/index.html","ccb2f4132a55f8c8a685501a5002c5fa"],["categories/前端/面试造轮/index.html","30260e9730fd8ecdb091e3d833eeff5b"],["categories/效率工具/index.html","b7be357f02a22960430c07b9205443bf"],["categories/测试分类/index.html","a34f5b2f6d73842b342bcd3698703daa"],["categories/记录生活/2020/index.html","6e0d2caca0719a3b98bf1388b2778d7d"],["categories/记录生活/index.html","5276662b961542456947690f751d69f4"],["css/first.css","dc6e521f4f0458ee4e29a4a0ca43e0bb"],["css/style.css","3618609a130961585a2dab14f3483a8b"],["friends/index.html","f05dbf55a685dd478351cf7d496467a0"],["index.html","34f36ea6b837a7d619df6bfeca97de82"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","73941c6434ae547a10e30a8771110d00"],["page/2/index.html","08d6ef414f80dbed4e53b64ef1f912ef"],["posts/20802113/index.html","d6b7389567e0c59fecdc3b1cde8ff3c1"],["posts/24b4915a/index.html","5ea5820b646eeede639bdb6792fe6a45"],["posts/35b500c6/index.html","187c52700e11d112923dc38aa9d70bd2"],["posts/3b0a6cbe/index.html","cd64b14914fea0cc5974a7dd2690678f"],["posts/66d3b164/index.html","c24c74581b0d5eb6ded4bbc7ac8046b8"],["posts/829819a3/index.html","feeee9384364e60e603e02239ce9fd12"],["posts/84d16999/index.html","14e50c4b135fd8be75222fe3995dc910"],["posts/b050203a/index.html","2645d8540f7ca3dd73446e7de418edb8"],["posts/b4c78541/index.html","5e9d72e4b98108c1324b2bf9371dcf61"],["posts/c05e5480/index.html","25474ad3b891a568094591b101f044a7"],["posts/cf86baf1/index.html","2ca87d8d012ee78c16be8c1e3d9066aa"],["posts/d4ddb122/index.html","cd7855b4f81a8b9a2e76a0dc39a88da8"],["posts/f032f0/index.html","9d51528d5f3be6226c1a24aa045dc327"],["posts/f9d92613/index.html","ec801408ea965dc380cfcaaa2767f912"],["posts/fc7889ef/index.html","70bb68053222043ad80131dc1784fb4f"],["posts/ff905629/index.html","a085893f8dbc3b43abb53900bd53dfd5"],["tags/DIY博客/index.html","de9f53e6c6e12b5b76e4e92cbd5768cc"],["tags/Hexo/index.html","2a1ece33a49ea651781450e5280adaeb"],["tags/Hexo评论系统/index.html","7252cb1ee0738c656cbffa61d5d7914d"],["tags/React/index.html","f52d5796ed3477fea261c8bb20e7ad58"],["tags/ReactHook/index.html","28801f94b37564debe621d45f5b84567"],["tags/TypeScript/index.html","17f49399123f93686a3aa83edf8fe60c"],["tags/Typora/index.html","14450a63498e3896491c9343ad4f5173"],["tags/Valine国际版/index.html","88901670bf0485d89462f3c61b541b79"],["tags/index.html","7ad7ac488a6ab3f896748170766d70b6"],["tags/jwt/index.html","933d714ffd52e5cf0b6aa1fd3658f24d"],["tags/webpack4-0/index.html","df2e9daf624750a07b51bbce3dbb7894"],["tags/博客/index.html","76cdcad47791ab9cef3467d23dbd20c8"],["tags/工具/index.html","365a4c26e879e70d55e91d26902e28c2"],["tags/测试标签/index.html","7dbf6f70e4075fed691ec3511e41c26f"],["tags/记录生活/index.html","ccaa65746186293fae1f8522a342d641"],["tags/部署/index.html","6e203172a8cab3da6bf1751ca3b4fba2"],["tags/阿里云/index.html","d3434c0e22c638c9d892797bc1defbd1"],["tags/面试题/index.html","b42656182fbf4f699451344dffb01c3e"]];
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







