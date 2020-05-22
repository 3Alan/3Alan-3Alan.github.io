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

var precacheConfig = [["G:/blog/public/2020/05/12/Typora-PicGo-Gitee（书写博客神器）/index.html","87ad3e09a36ac79ad6b0fba4e4a11330"],["G:/blog/public/2020/05/13/react博客-egg-jwt实现登录系统/index.html","1992d4461c1be6e11a6c4d0a1ddf159c"],["G:/blog/public/2020/05/13/react博客-项目部署/index.html","75e7c0aa11b197b36f1644397f42d0f1"],["G:/blog/public/2020/05/13/test1/index.html","19929d2a24c8a0cea0037f6affc709b2"],["G:/blog/public/2020/05/14/webpack4.0学习总结（一）/index.html","e8457d48748e0ff62335db4dedba4ce6"],["G:/blog/public/2020/05/15/webpack4.0学习总结（二）/index.html","f3d3b509f1d94133d235a1273e0d3c74"],["G:/blog/public/2020/05/16/valine国际版邮件回复/index.html","1936b16b4415cae8b8f9e3bfc3fb02eb"],["G:/blog/public/2020/05/17/webpack4-0学习总结（三）/index.html","cc4b5265f155bc4d6d56cb518b1814fb"],["G:/blog/public/2020/05/18/webpack4-0学习总结（四）/index.html","7dca2908db02aa3590b000c260b543d1"],["G:/blog/public/2020/05/22/记录生活2020-5/index.html","eef649df686ed9c1ebcfcba2a7f35eb0"],["G:/blog/public/404.html","a07a252261e2507e965cd7ca93b6ccde"],["G:/blog/public/about/index.html","6e40bd1d3fd568c8f498516cd08f3860"],["G:/blog/public/archives/2020/05/index.html","5a36d14a66405191353a2818c8726df8"],["G:/blog/public/archives/2020/index.html","d9c961df6b951bae50f02fa24f72b033"],["G:/blog/public/archives/index.html","b1316ab8bee97111a546eefec60aed46"],["G:/blog/public/categories/Hexo博客/index.html","659c3a0acd0d46f5854c117852a4116a"],["G:/blog/public/categories/index.html","7fc46be8378fea93a1a337c0da862130"],["G:/blog/public/categories/前端/React/index.html","a3487bde5caf1a21be5ddbb60a597bdd"],["G:/blog/public/categories/前端/index.html","d6bde89b8396eb9b82d4b125188af3e5"],["G:/blog/public/categories/前端/webpack4-0学习总结/index.html","5cc79d4e4349a46bb97ba9a19054e486"],["G:/blog/public/categories/效率工具/index.html","1b713d545f5d4383f537ee73f75b5ecd"],["G:/blog/public/categories/测试分类/index.html","8a2ff065d122fab009fabe16bc2af775"],["G:/blog/public/categories/记录生活/2020/index.html","3d170eae95e01c56d291ab4330534c7a"],["G:/blog/public/categories/记录生活/index.html","706966ca91ca182b9c942401e684781a"],["G:/blog/public/css/style.css","5d53865bff9f2b0690494ee6ef4c077a"],["G:/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["G:/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["G:/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["G:/blog/public/friends/index.html","18382f0e778fd142f01e077dac79d052"],["G:/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["G:/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["G:/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["G:/blog/public/index.html","710f4c229ef3e464e0129a065f22c2f2"],["G:/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["G:/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["G:/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["G:/blog/public/list/index.html","f4d0d12b0ef95e0e535787841e006352"],["G:/blog/public/tags/Hexo/index.html","43ae0fb8bf373a20099f6f8e1b3ffba9"],["G:/blog/public/tags/React/index.html","14754881f4fd1ffba86cb96bb7d931bb"],["G:/blog/public/tags/ReactHook/index.html","aeac6a8cff26a514ccdcc44498830a15"],["G:/blog/public/tags/Typora/index.html","30e6972a300e6607046b0c8697d7fa74"],["G:/blog/public/tags/index.html","3e046ff21bbeea667b11010e96f9dffe"],["G:/blog/public/tags/jwt/index.html","a86b19a7f3f20a04b53202015365925d"],["G:/blog/public/tags/valine/index.html","d4b9245e49c1feda75e38c8eea82ef8f"],["G:/blog/public/tags/webpack4-0/index.html","f5b7132ed2bc7ea2e51146cabbd9f211"],["G:/blog/public/tags/博客/index.html","ef6bedb8021156a9d63e91f8800827da"],["G:/blog/public/tags/工具/index.html","f96285091bee7991b36007c46390f233"],["G:/blog/public/tags/测试标签/index.html","f2fe01d8144635ef74b14ed2bfb9e021"],["G:/blog/public/tags/记录生活/index.html","7a0b801b821be72df41e21e6ba262f44"],["G:/blog/public/tags/评论系统/index.html","cac65c780a70667197ba98da7af7d17d"],["G:/blog/public/tags/部署/index.html","cdbf7ba933cadf01b97e7062e5e3d767"],["G:/blog/public/tags/阿里云/index.html","4b904e6bd819523d80e234add72d5c4e"]];
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







