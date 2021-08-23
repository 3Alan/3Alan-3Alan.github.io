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

var precacheConfig = [["404.html","fb4c4434d08bfcbd934b055e0e757407"],["about/index.html","72f159044e66c8c2efab3f56399b6783"],["archives/2020/05/index.html","8a5f46c47f699198f374e97c5de4409c"],["archives/2020/05/page/2/index.html","39f8a99bde3479dbfe05327b0d84eeb7"],["archives/2020/06/index.html","1105490b0a12d9f6846a506efa8fd57a"],["archives/2020/07/index.html","e59e11bda2d70677671731183b8f0e19"],["archives/2020/11/index.html","ba85c5bbacee93bf0f5f4c8c1aad9e85"],["archives/2020/index.html","c9bdd645b7449824f9f771473f73c7e3"],["archives/2020/page/2/index.html","3effbd4b80782bac1ef9d390373acb4e"],["archives/2021/01/index.html","c63c33d262dfc76713a52f39c458d7a6"],["archives/2021/06/index.html","637ac01317b4300c99f3087eebe7762a"],["archives/2021/08/index.html","a62571604d860739db21a07e9c829c23"],["archives/2021/index.html","ccbb90a9a947f18fd332e02b246cabb9"],["archives/index.html","d8100f5b5ae599dc4da55c7f446d25eb"],["archives/page/2/index.html","d8100f5b5ae599dc4da55c7f446d25eb"],["archives/page/3/index.html","d8100f5b5ae599dc4da55c7f446d25eb"],["categories/Hexo博客/index.html","23b1112f945f8b27136391b9e8408473"],["categories/index.html","72566f970f887ca93439a8036b4245c3"],["categories/前端/React/index.html","7511c43e3138de182af64e28eeef86c2"],["categories/前端/TypeScript/index.html","5e0bf7b6a3af55c69e92bd45c2b00046"],["categories/前端/index.html","965111be9ac3e7721e7fb9e5f23c5bb3"],["categories/前端/page/2/index.html","cc1d8641fd00e199ef8844a23c5ab37f"],["categories/前端/webpack4-0学习总结/index.html","5144691c76c5c308956e3bdc9da8604b"],["categories/前端/工作/index.html","e2976fb6f6661eae1129e85e49581930"],["categories/前端/面试造轮/index.html","2b47c903f519e9d6c2f19eb633cd8483"],["categories/效率工具/index.html","bf12605deab4e5a23a7771389a6a3940"],["categories/测试分类/index.html","4ea77371e91465091b43fc3c44650506"],["categories/记录生活/2020/index.html","c7cd258848ad2d0720e8da709b7e7b10"],["categories/记录生活/index.html","1be1623b23f02728de8e4a8108eed090"],["categories/黑苹果/index.html","18df45fe74c2d1229dda2ea954cde8c0"],["css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["css/style.css","2417f18c2b7d1674f39e97f273536641"],["friends/index.html","e92c7975181111da70eadd9021d855f8"],["index.html","0fc43ea04db9bd4777a375bfe903cace"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","1187a9334d9411493c8b08d972a592eb"],["page/2/index.html","f674d931e060c709bcc409ddf28c1b98"],["page/3/index.html","186e96e2fcdf439947c5f4a94a0269f9"],["posts/20802113/index.html","83c21440cccdcf240a43e205a1633167"],["posts/24b4915a/index.html","d2fcbf25ca9e6ff86fad28748399e468"],["posts/35b500c6/index.html","bf4e839b45a63f451938c3b9a2363887"],["posts/3901d9e/index.html","f31d177ff1484724d4d6ac4a749047e6"],["posts/3b0a6cbe/index.html","719889229d1ad942278bb95439c62e7c"],["posts/66d3b164/index.html","ad687ccd34978a43261dd08f376eec37"],["posts/6af865/index.html","88d77385be9dd6395dcd121b1f39aa27"],["posts/829819a3/index.html","158eb142c46c3b1f9527b0b10c4da6c2"],["posts/832ac07a/index.html","dca82b5fa92716c355f379de46d161ba"],["posts/84d16999/index.html","f820e00a2c19b351146ecac5b43f34ee"],["posts/92c49d45/index.html","c993be51a5a711ba8d2a5b7668656810"],["posts/b050203a/index.html","eed7364dd68541c54bad1f16692f54a9"],["posts/b4c78541/index.html","bc7f0d8066cd9f3dd71f465916aac59d"],["posts/c05e5480/index.html","d93b804b24fb8ee908567c8a695697ad"],["posts/cf86baf1/index.html","9bed346ab41c33e657ca0fe02886e390"],["posts/d4ddb122/index.html","77c8d1108deae8e88612abcf40b6995f"],["posts/d8051f67/index.html","50e64e11703f06cb60452ac1d0e34764"],["posts/f032f0/index.html","ae2ed082b7e00d3c83c09344cf5b5895"],["posts/f9d92613/index.html","a23fba6c4c887ae2d766157d5b10c962"],["posts/fc7889ef/index.html","157a0a41a080597a5f5aecb4c76ee662"],["posts/ff905629/index.html","96765c13081574090e305a7bb5736fce"],["tags/DIY博客/index.html","6c417add09d833b33fac62cdb83ce906"],["tags/Hexo/index.html","c2999a156e4374fe95c6643e389fbe5f"],["tags/Hexo评论系统/index.html","c8bae2269f793c473c890b13ddcb0c28"],["tags/Next-js/index.html","5790a5a30236dc89b0b8e803926c00eb"],["tags/React/index.html","1ff1604147ef5c6f33b9662108e037e0"],["tags/ReactHook/index.html","4b3de4e694d2bd1f4f372e3cc7709420"],["tags/TypeScript/index.html","fc001bf0e19a7f2c4eee1a2c6223878b"],["tags/Typora/index.html","d64fbc3a51f09a07298d23e4d3fa85aa"],["tags/Valine国际版/index.html","794363061cb93835d1c9e9702951ce01"],["tags/index.html","5f334582a64728f6c789a57aadff64ea"],["tags/jwt/index.html","e93317825737841947bd58ac00d67091"],["tags/webpack4-0/index.html","01727b9c11b4c4b781cd55ad34be0aba"],["tags/博客/index.html","186cde9019963676f6a3b2e01e338964"],["tags/工作/index.html","541c46ca6f2700360bbdc170a44bb020"],["tags/工具/index.html","e6c35d1d8b32adeb040d761f489887ea"],["tags/测试标签/index.html","627acbb927e2a01670e3df97ba25917d"],["tags/组件库/index.html","dadbfd2015a6718a4748ddff6b8704d2"],["tags/自动化测试/index.html","e445df026b8c1ed7feae7debfc89fe83"],["tags/装机/index.html","3c0bda369125f1027c3275a868c177d8"],["tags/记录生活/index.html","b4bb4462ed62d95f0aabfa5461839249"],["tags/部署/index.html","2a15f096e16e2d37eb842c906c466bf7"],["tags/阿里云/index.html","18ca7fba7077420e9e84a783a990d5d6"],["tags/面试题/index.html","9b17a764e65e0230ee2e41119f7cef8f"],["tags/黑苹果/index.html","fcb2057c028a7af3e6315c7da9b94850"]];
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







