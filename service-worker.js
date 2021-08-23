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

var precacheConfig = [["404.html","fb4c4434d08bfcbd934b055e0e757407"],["about/index.html","72f159044e66c8c2efab3f56399b6783"],["archives/2020/05/index.html","f679f6fc798cd277ba8a73e2a8794da5"],["archives/2020/05/page/2/index.html","287e6c8fbf5bf61c7aa2b0c6da8b4788"],["archives/2020/06/index.html","7c2da91f9a2ca0c51320f6936284d615"],["archives/2020/07/index.html","d9b9b28ee6a544dada5fff893ce5606b"],["archives/2020/11/index.html","06dbfb4262119693627387530c5eb15a"],["archives/2020/index.html","e29cb6f45bd966f98f6860fe247ee37b"],["archives/2020/page/2/index.html","77759630137f448c1036a49cbc868785"],["archives/2021/01/index.html","aacde4e6ecb808316c918ddc1b08adfe"],["archives/2021/06/index.html","3a4d31603a302b9ebe236575a48b62eb"],["archives/2021/08/index.html","580d3d5ef82bd258540dfa065e9e8de7"],["archives/2021/index.html","31bc92a9a2423622bfa1deabdc18b39f"],["archives/index.html","cb29b518df285cb49d29be52ad6a72b5"],["archives/page/2/index.html","cb29b518df285cb49d29be52ad6a72b5"],["archives/page/3/index.html","cb29b518df285cb49d29be52ad6a72b5"],["categories/Hexo博客/index.html","06d7d6cfe9df56799fb671a29071e2f9"],["categories/index.html","72566f970f887ca93439a8036b4245c3"],["categories/前端/React/index.html","59ae91de99ce19d4f2a1e762da5cdce9"],["categories/前端/TypeScript/index.html","d87ea24f70ed372bb4a3af916872f23e"],["categories/前端/index.html","93dd691638a448b2ba21e23bdbc58b04"],["categories/前端/page/2/index.html","337c18349c15196a3e12d41f15a22832"],["categories/前端/webpack4-0学习总结/index.html","7f80b7852c8e40556a8275c792fc2406"],["categories/前端/工作/index.html","306fe441ec6ed6d3f56ee4e2e31dccc7"],["categories/前端/面试造轮/index.html","bc2587201efa46ae858da65967e39689"],["categories/效率工具/index.html","e7a2f4ce765481a921c9756dbdf2c85c"],["categories/测试分类/index.html","4fecf1160ac9b55d1a3c029dddd90683"],["categories/记录生活/2020/index.html","75d819ef333366a4edb17613d1765957"],["categories/记录生活/index.html","40a7ae04ec77083f06560aebb649d73e"],["categories/黑苹果/index.html","796f372dbbcad2892557bef37982e534"],["css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["css/style.css","2417f18c2b7d1674f39e97f273536641"],["friends/index.html","e92c7975181111da70eadd9021d855f8"],["index.html","08bffa38f4c2126345cea76e7bb8aca9"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","0bde11d354d17c5be539c48b54149695"],["page/2/index.html","1bad29235b1717d3e31a25e4a1743bac"],["page/3/index.html","b4a2b751d01fd20dbdb4bd67bae024a5"],["posts/20802113/index.html","83c21440cccdcf240a43e205a1633167"],["posts/24b4915a/index.html","d2fcbf25ca9e6ff86fad28748399e468"],["posts/35b500c6/index.html","bf4e839b45a63f451938c3b9a2363887"],["posts/3901d9e/index.html","f31d177ff1484724d4d6ac4a749047e6"],["posts/3b0a6cbe/index.html","bbf2a2b806962c05b5b023a67bcd6982"],["posts/66d3b164/index.html","ad687ccd34978a43261dd08f376eec37"],["posts/6af865/index.html","88d77385be9dd6395dcd121b1f39aa27"],["posts/829819a3/index.html","158eb142c46c3b1f9527b0b10c4da6c2"],["posts/832ac07a/index.html","dca82b5fa92716c355f379de46d161ba"],["posts/84d16999/index.html","f820e00a2c19b351146ecac5b43f34ee"],["posts/92c49d45/index.html","4af25c2d7ba395f9438b83574edf4dba"],["posts/b050203a/index.html","7e1f9fc4f13b520783e04863ad2f6d00"],["posts/b4c78541/index.html","bc7f0d8066cd9f3dd71f465916aac59d"],["posts/c05e5480/index.html","d93b804b24fb8ee908567c8a695697ad"],["posts/cf86baf1/index.html","9bed346ab41c33e657ca0fe02886e390"],["posts/d4ddb122/index.html","1e2b49e3dce6ae601a29b13b8a248ebf"],["posts/d8051f67/index.html","50e64e11703f06cb60452ac1d0e34764"],["posts/f032f0/index.html","ae2ed082b7e00d3c83c09344cf5b5895"],["posts/f9d92613/index.html","a23fba6c4c887ae2d766157d5b10c962"],["posts/fc7889ef/index.html","157a0a41a080597a5f5aecb4c76ee662"],["posts/ff905629/index.html","96765c13081574090e305a7bb5736fce"],["tags/DIY博客/index.html","d65a08f34e69a0607fa20d944713d47d"],["tags/Hexo/index.html","db63b8e5898d5f2a4501ed487ec8ae9d"],["tags/Hexo评论系统/index.html","e5af639345fe30bd1e515b98fa32c359"],["tags/Next-js/index.html","bf5b0d3b05c8012e95c5a6237ff58937"],["tags/React/index.html","8dc4c5f849c49d5a2227f46ecf4d2ebe"],["tags/ReactHook/index.html","d42ef23386bae668dd5098ff3232a75e"],["tags/TypeScript/index.html","806195c868b1a7767313390c108ac1f6"],["tags/Typora/index.html","b45825784f15db64a1cc66b3b42ff8c3"],["tags/Valine国际版/index.html","36abff30c299158a0313396a4914bd09"],["tags/index.html","5f334582a64728f6c789a57aadff64ea"],["tags/jwt/index.html","baaaefb785c1a68afe9fa78c9de4954b"],["tags/webpack4-0/index.html","95c1eae21885df44dd64970b9ec5bd90"],["tags/博客/index.html","59035a263184f2ab34d627d3df17b60c"],["tags/工作/index.html","101a6ea5264a57db62c2ef40cfe35d07"],["tags/工具/index.html","47d9964b3fe62f2f11b1b4bd6e9495a8"],["tags/测试标签/index.html","93157dd4df0043f5fd35a2b0f7202de9"],["tags/组件库/index.html","a27cd7797f8f9414ce76dd085b6f4f5b"],["tags/自动化测试/index.html","a85a9f8bc1a2d853d085a84c992501d7"],["tags/装机/index.html","3173468a9ba9f9612df322ed001b852b"],["tags/记录生活/index.html","f70f722b662bdb83221d5c43863680b3"],["tags/部署/index.html","5f1a6ca664965d301c750e912049ef38"],["tags/阿里云/index.html","4ea6023fa581363dc2f1df50c34cb03b"],["tags/面试题/index.html","e1dcf7d6f4c04a29bfd35d155be2c857"],["tags/黑苹果/index.html","9baa8934ac08b7dfab694af0d404a28d"]];
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







