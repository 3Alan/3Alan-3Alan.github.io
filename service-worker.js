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

var precacheConfig = [["G:/blog/public/404.html","87007ab0482515d6e230fec2b8b8ab1c"],["G:/blog/public/about/index.html","977a4991ab3549041f65b803258725d1"],["G:/blog/public/archives/2020/05/index.html","b81b22c1b882bfb75f53ea621d8fcfb3"],["G:/blog/public/archives/2020/05/page/2/index.html","05da3f71389058dcaabc66f35f849413"],["G:/blog/public/archives/2020/06/index.html","89d99b64eaf5a2230d009ffe2a1e81fa"],["G:/blog/public/archives/2020/index.html","af45c7ffc65f5facaffa940b09ca6431"],["G:/blog/public/archives/2020/page/2/index.html","2a5ffb92ae3ab24daf2d87eba1881df5"],["G:/blog/public/archives/index.html","61ba435bb7aca2ba56aa4bd6fd0676e0"],["G:/blog/public/archives/page/2/index.html","61ba435bb7aca2ba56aa4bd6fd0676e0"],["G:/blog/public/categories/Hexo博客/index.html","70f0acafb81a089136c430d0d68d037f"],["G:/blog/public/categories/index.html","7e4d4d55660f3465c188215eedf9ca89"],["G:/blog/public/categories/前端/React/index.html","ba6194c611c21c732680fd772de5932d"],["G:/blog/public/categories/前端/index.html","af25933e1bac54dbc10385f5a2f57818"],["G:/blog/public/categories/前端/page/2/index.html","333c3a8f3b96b084de5c057aca1ebb7e"],["G:/blog/public/categories/前端/webpack4-0学习总结/index.html","0fbce2ed3a014f0992e3ff65c00cb716"],["G:/blog/public/categories/前端/面试造轮/index.html","6a81da15119c4cee59321a871a7b0855"],["G:/blog/public/categories/效率工具/index.html","9cbad909de0ae3f193106c2c3d1a3ee5"],["G:/blog/public/categories/测试分类/index.html","b8e39bcfc3f09db79e84555d1e716308"],["G:/blog/public/categories/记录生活/2020/index.html","435afc717a337f34256485440cfe6fe2"],["G:/blog/public/categories/记录生活/index.html","c01dc23aa28c251b55195238fdcfeb28"],["G:/blog/public/css/style.css","0af58131892edf319010b09cb0519b0b"],["G:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["G:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["G:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["G:/blog/public/friends/index.html","9dadac1605ab8141144e81e6e79cc5ab"],["G:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["G:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["G:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["G:/blog/public/index.html","443d0418201daa9709e56d2ea478a662"],["G:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["G:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["G:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["G:/blog/public/list/index.html","0419a3a89c1ac46025115351822b92cc"],["G:/blog/public/page/2/index.html","8e9b7c8e2c0274389458d325bc371574"],["G:/blog/public/posts/20802113/index.html","06909f51d9bfc38411a8baced736ee68"],["G:/blog/public/posts/24b4915a/index.html","0b357f20fd930f21112b8d62b6f5234d"],["G:/blog/public/posts/35b500c6/index.html","ffb1195ed0bd7ea6f1c710914e8f2ce0"],["G:/blog/public/posts/3b0a6cbe/index.html","18c51f95e5ee51233822bdbb9a236bb4"],["G:/blog/public/posts/66d3b164/index.html","2952dd9b7e811c47905b3b71cac0d941"],["G:/blog/public/posts/829819a3/index.html","acc4b609745fb7e730b4de67f185a530"],["G:/blog/public/posts/84d16999/index.html","17894b23aa4c667a9ad225ddf40ab251"],["G:/blog/public/posts/b050203a/index.html","3c4e015b0c1065c74273c21c1d088be8"],["G:/blog/public/posts/b4c78541/index.html","6bb3ebf5589f067321f0be2722402e2d"],["G:/blog/public/posts/c05e5480/index.html","f5e5a1e4f033bab7dec7eba89e21ef80"],["G:/blog/public/posts/cf86baf1/index.html","12d8ddc7924b5aa141e0604dd5533af0"],["G:/blog/public/posts/d4ddb122/index.html","52f9b739e52a13031e460cc5450b2592"],["G:/blog/public/posts/f032f0/index.html","1653c0044e65f905a91724933e4cf302"],["G:/blog/public/posts/f9d92613/index.html","add5dddd77a81fa542877b19303e1711"],["G:/blog/public/posts/ff905629/index.html","71621ca02e8079278c853de12df02a07"],["G:/blog/public/tags/DIY博客/index.html","79c29ee9e36fad5968e3b65bb9eb754b"],["G:/blog/public/tags/Hexo/index.html","5f4988dc356aba77669d565ea7acd938"],["G:/blog/public/tags/Hexo评论系统/index.html","51f629aef4cbb1687259cc2c59c79193"],["G:/blog/public/tags/React/index.html","70022b04e18eff784dda2896d0455a3b"],["G:/blog/public/tags/ReactHook/index.html","468a8f2912b1d730b58e96824735fa91"],["G:/blog/public/tags/Typora/index.html","79d7cabbe2547c468276fe61d6251ccd"],["G:/blog/public/tags/Valine国际版/index.html","6ecc09d5ecd74d601afdc6db73a07277"],["G:/blog/public/tags/index.html","001136427a2a8115551ac9bfad4aa390"],["G:/blog/public/tags/jwt/index.html","1967291428ebcc4bec0f978b332ba8bb"],["G:/blog/public/tags/webpack4-0/index.html","a4816cda1336612344ab6409de043cd8"],["G:/blog/public/tags/博客/index.html","6548ab0275820265dd3f77fce56ebed0"],["G:/blog/public/tags/工具/index.html","2aa4e7bb781307bc192209e3ba412c91"],["G:/blog/public/tags/测试标签/index.html","d3c9532a77530f1cb9cc70d6280cdd0a"],["G:/blog/public/tags/记录生活/index.html","49e5d05d53ae21d0dd1e67891c7acafb"],["G:/blog/public/tags/部署/index.html","d4c0fe3c7062ec2939dbc85870c67414"],["G:/blog/public/tags/阿里云/index.html","460dcb7eb777c606f008737cec47715f"],["G:/blog/public/tags/面试题/index.html","06deeb4856bef9a0e2754ae90c709a0a"]];
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







