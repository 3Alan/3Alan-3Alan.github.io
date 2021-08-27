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

var precacheConfig = [["404.html","fb4c4434d08bfcbd934b055e0e757407"],["about/index.html","72f159044e66c8c2efab3f56399b6783"],["archives/2020/05/index.html","d8f381a858ff22ac893993b4082f0f7b"],["archives/2020/05/page/2/index.html","7a4f6adeda2003b4c8e99cd3ae1964ce"],["archives/2020/06/index.html","a5430f0f82f42855f7bf576fca677ad1"],["archives/2020/07/index.html","0ae3e862a19fd584232e51cbcf572c4a"],["archives/2020/11/index.html","5a70d5ebda7f301501b147260de41715"],["archives/2020/index.html","f48fc2675770803d64700687afd0f901"],["archives/2020/page/2/index.html","22606146dbf0a50738afcfc4bde3b9dd"],["archives/2021/01/index.html","3802c920503dd7be888941bbc8e5c143"],["archives/2021/06/index.html","f3442b85c82fe344cf74f5954652ae7c"],["archives/2021/08/index.html","dc9ee56a9044839945754871dad7ba64"],["archives/2021/index.html","89f712d954b845a120bb460080402a44"],["archives/index.html","21d8c1f39f99983b45dbe124d9a02d09"],["archives/page/2/index.html","21d8c1f39f99983b45dbe124d9a02d09"],["archives/page/3/index.html","21d8c1f39f99983b45dbe124d9a02d09"],["categories/Hexo博客/index.html","3d56eb7e64425f224702e9b23e235985"],["categories/index.html","72566f970f887ca93439a8036b4245c3"],["categories/前端/React/index.html","3dd69fef779a0899d9e8f2917c573a79"],["categories/前端/TypeScript/index.html","8a453a8572b684796188eafd55ef3b62"],["categories/前端/index.html","f57e1362bfa4cc4b149a9acb485b0753"],["categories/前端/page/2/index.html","cd3588a8992e9517747934f2f23b1a29"],["categories/前端/webpack4-0学习总结/index.html","869b3cacdd79962dd34c0e68b152007f"],["categories/前端/工作/index.html","cb58bc5adb4702e78d413c7275281739"],["categories/前端/面试造轮/index.html","f0fa5e0e23396111bf1699de07c7ab2d"],["categories/效率工具/index.html","8f9d07848680628435a055951ab3ff90"],["categories/测试分类/index.html","2c7d85125d548d80cd3a282e2dcfdea0"],["categories/记录生活/2020/index.html","e0eb21db5523b243673d8036342bd24e"],["categories/记录生活/index.html","898946a59c5a0f32283b3b8e71bd666c"],["categories/黑苹果/index.html","abac2fe3886af60a109bbdd1aa60ec61"],["css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["css/style.css","2417f18c2b7d1674f39e97f273536641"],["friends/index.html","e92c7975181111da70eadd9021d855f8"],["index.html","9a3b81b57c376cbb1177c116f687c7f8"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","1addee115031d51edf495419bc9782ed"],["page/2/index.html","bd62a7e4d24bea1bff80767ec94c584d"],["page/3/index.html","59fe3478ca60d41bced3fe72128fb84a"],["posts/20802113/index.html","83c21440cccdcf240a43e205a1633167"],["posts/24b4915a/index.html","d2fcbf25ca9e6ff86fad28748399e468"],["posts/35b500c6/index.html","bf4e839b45a63f451938c3b9a2363887"],["posts/3901d9e/index.html","f31d177ff1484724d4d6ac4a749047e6"],["posts/3b0a6cbe/index.html","bbf2a2b806962c05b5b023a67bcd6982"],["posts/66d3b164/index.html","ad687ccd34978a43261dd08f376eec37"],["posts/6af865/index.html","88d77385be9dd6395dcd121b1f39aa27"],["posts/829819a3/index.html","158eb142c46c3b1f9527b0b10c4da6c2"],["posts/832ac07a/index.html","dca82b5fa92716c355f379de46d161ba"],["posts/84d16999/index.html","f820e00a2c19b351146ecac5b43f34ee"],["posts/92c49d45/index.html","4af25c2d7ba395f9438b83574edf4dba"],["posts/b050203a/index.html","7e1f9fc4f13b520783e04863ad2f6d00"],["posts/b4c78541/index.html","bc7f0d8066cd9f3dd71f465916aac59d"],["posts/c05e5480/index.html","d93b804b24fb8ee908567c8a695697ad"],["posts/cf86baf1/index.html","9bed346ab41c33e657ca0fe02886e390"],["posts/d4ddb122/index.html","1e2b49e3dce6ae601a29b13b8a248ebf"],["posts/d8051f67/index.html","ab033fc5704e5807ca60962c135ba6cb"],["posts/f032f0/index.html","ae2ed082b7e00d3c83c09344cf5b5895"],["posts/f9d92613/index.html","a23fba6c4c887ae2d766157d5b10c962"],["posts/fc7889ef/index.html","157a0a41a080597a5f5aecb4c76ee662"],["posts/ff905629/index.html","96765c13081574090e305a7bb5736fce"],["tags/DIY博客/index.html","b97610153c8d1a10a1b30086be3f6290"],["tags/Hexo/index.html","4ee5673bcc7bacf6ad1c0a9a23292ce3"],["tags/Hexo评论系统/index.html","648fc6643cbbacda39d8259cce3e3a09"],["tags/Next-js/index.html","ddacbf97209e454ebff4e156b10e7dab"],["tags/React/index.html","052d7cc58a7b3b0ab55eecbb4e2099ab"],["tags/ReactHook/index.html","e8d2b3bc938f42dcc1d17062a8180b2b"],["tags/TypeScript/index.html","0ed420820af2ffc7741a65dba9635085"],["tags/Typora/index.html","6f56b29b66b1c2fdbf29d73987e711d5"],["tags/Valine国际版/index.html","6baf0d8963764be2bd9bd29f230e8964"],["tags/index.html","5f334582a64728f6c789a57aadff64ea"],["tags/jwt/index.html","36806fade8732930761b9fecdd357e9a"],["tags/webpack4-0/index.html","d207f292aa8dbf0e14aa2f36755d5037"],["tags/博客/index.html","269fc717e443be9ad12a61e258798fcc"],["tags/工作/index.html","5915c990ef6ae6373f43b631023108da"],["tags/工具/index.html","15d79b9f96313086c337ea8733d3d8dc"],["tags/测试标签/index.html","3bc1f13f8ea346c6edcee2355e785afd"],["tags/组件库/index.html","14d4243faa367d58bc840c733e11cdce"],["tags/自动化测试/index.html","f72be85767eb831d3c79959477b01386"],["tags/装机/index.html","52402bb3d50bb0f1a8324d8439cb5f13"],["tags/记录生活/index.html","77d93479193e1e831fc9ebc3d7c5134e"],["tags/部署/index.html","9ec644042e57b433b1ffba58035aab28"],["tags/阿里云/index.html","0508b535f9156d732c133750efb0de56"],["tags/面试题/index.html","c4f09408fa599d506cce50fe33060e84"],["tags/黑苹果/index.html","c4c4cdbf5e12072a85ec40e3dd2c6e39"]];
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







