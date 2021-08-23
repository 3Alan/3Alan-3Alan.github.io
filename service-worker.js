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

var precacheConfig = [["404.html","fb4c4434d08bfcbd934b055e0e757407"],["about/index.html","72f159044e66c8c2efab3f56399b6783"],["archives/2020/05/index.html","8aaa90f87625831536b67de86ff29cc1"],["archives/2020/05/page/2/index.html","58107d3daadb39cf8eee76cd00eb1d22"],["archives/2020/06/index.html","13938bae2ffc3051fb3795cc4a826732"],["archives/2020/07/index.html","8dfee62569b91ebfb3d4288b050cd5a3"],["archives/2020/11/index.html","994b9d8207848a076ab87f6b327b4f26"],["archives/2020/index.html","78656bb4f8c22a5a027ad255fc722fb5"],["archives/2020/page/2/index.html","5d9f15905b1dd94e480ab742a774b92b"],["archives/2021/01/index.html","27ce550b2e430c9f85e38a998effa612"],["archives/2021/06/index.html","248aef38013c63c1aa15272b7a781168"],["archives/2021/08/index.html","74f133c1269e2c241a30679b75b8b805"],["archives/2021/index.html","179e20ab093fcb16c10749884c608569"],["archives/index.html","39b981f11de63cfc9d8acddf75facfbd"],["archives/page/2/index.html","39b981f11de63cfc9d8acddf75facfbd"],["archives/page/3/index.html","39b981f11de63cfc9d8acddf75facfbd"],["categories/Hexo博客/index.html","e9d3982db7329dc2274567501a5f72aa"],["categories/index.html","72566f970f887ca93439a8036b4245c3"],["categories/前端/React/index.html","5400767384b19884251ede0af76f25f6"],["categories/前端/TypeScript/index.html","d5ca37edb1edb7eb95db12dcd2235d04"],["categories/前端/index.html","bbd1a9dee1e433d86e112b53b46b90d1"],["categories/前端/page/2/index.html","3fd75e24e70c2c58ebfbf01d46e7a04c"],["categories/前端/webpack4-0学习总结/index.html","a69bc05f8d9c76579214757cc77a7cd6"],["categories/前端/工作/index.html","99826b1679ffcb0b317ed2a469e0d510"],["categories/前端/面试造轮/index.html","15bc664fedf404a2c156f76cd76d94dd"],["categories/效率工具/index.html","c0d58612950ec91e1011c9f214abbeb9"],["categories/测试分类/index.html","f56e037eda6e8104c29685dedc88e54d"],["categories/记录生活/2020/index.html","982c733102a7a0446d051ea673839db3"],["categories/记录生活/index.html","47cca9c0f87113d03785b3cec302935d"],["categories/黑苹果/index.html","10db62113795ae8c1321a6bdea41d36e"],["css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["css/style.css","2417f18c2b7d1674f39e97f273536641"],["friends/index.html","e92c7975181111da70eadd9021d855f8"],["index.html","e3a02f15d2e9e2e532b89e4a9b4d533b"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","05a3b1886e5cce8e694d8a2f7852497a"],["page/2/index.html","e474e1e147d512d7f1d0ce69f1fec1ce"],["page/3/index.html","051e3b5a06d457dd2355edd9a42adbc1"],["posts/20802113/index.html","83c21440cccdcf240a43e205a1633167"],["posts/24b4915a/index.html","d2fcbf25ca9e6ff86fad28748399e468"],["posts/35b500c6/index.html","bf4e839b45a63f451938c3b9a2363887"],["posts/3901d9e/index.html","f31d177ff1484724d4d6ac4a749047e6"],["posts/3b0a6cbe/index.html","bbf2a2b806962c05b5b023a67bcd6982"],["posts/66d3b164/index.html","ad687ccd34978a43261dd08f376eec37"],["posts/6af865/index.html","88d77385be9dd6395dcd121b1f39aa27"],["posts/829819a3/index.html","158eb142c46c3b1f9527b0b10c4da6c2"],["posts/832ac07a/index.html","dca82b5fa92716c355f379de46d161ba"],["posts/84d16999/index.html","f820e00a2c19b351146ecac5b43f34ee"],["posts/92c49d45/index.html","4af25c2d7ba395f9438b83574edf4dba"],["posts/b050203a/index.html","7e1f9fc4f13b520783e04863ad2f6d00"],["posts/b4c78541/index.html","bc7f0d8066cd9f3dd71f465916aac59d"],["posts/c05e5480/index.html","d93b804b24fb8ee908567c8a695697ad"],["posts/cf86baf1/index.html","9bed346ab41c33e657ca0fe02886e390"],["posts/d4ddb122/index.html","1e2b49e3dce6ae601a29b13b8a248ebf"],["posts/d8051f67/index.html","50e64e11703f06cb60452ac1d0e34764"],["posts/f032f0/index.html","ae2ed082b7e00d3c83c09344cf5b5895"],["posts/f9d92613/index.html","a23fba6c4c887ae2d766157d5b10c962"],["posts/fc7889ef/index.html","157a0a41a080597a5f5aecb4c76ee662"],["posts/ff905629/index.html","96765c13081574090e305a7bb5736fce"],["tags/DIY博客/index.html","303e0f2d78d52eaff27e5823ea6cfab3"],["tags/Hexo/index.html","d7fde72c2ad37e4f2507a24f920a5297"],["tags/Hexo评论系统/index.html","f0597c1e41f8552e4b4b6a3eff417392"],["tags/Next-js/index.html","b5aeb496019af17bf63e7911e8d17814"],["tags/React/index.html","8f42b702b0880d9d959d9c9cdaedb1a7"],["tags/ReactHook/index.html","a1bf436645b49b955921c6d058a26c30"],["tags/TypeScript/index.html","7d65d0aadc1ab68e55f4a46bec229155"],["tags/Typora/index.html","e82f80724348c4f0b8e6860f06e00d4a"],["tags/Valine国际版/index.html","e4cb03c6bf364135d85167535ae3ff1a"],["tags/index.html","5f334582a64728f6c789a57aadff64ea"],["tags/jwt/index.html","5429979bc9a5213e0c59fda7a6187ad7"],["tags/webpack4-0/index.html","cf512a00e4e734be8220ec93fad647dc"],["tags/博客/index.html","a40aaa51fc550561d0f2e4aedf1df743"],["tags/工作/index.html","0be3a746499bbf601fbd42b6bc22509e"],["tags/工具/index.html","972725c724f53a7b94478d4c0efde599"],["tags/测试标签/index.html","a01e4435c6a4d5db1a572eb59a6f02fa"],["tags/组件库/index.html","26fb747d6b1b0e98e452955e81a86b79"],["tags/自动化测试/index.html","c434e0f4a698abb567aa694a7f51a462"],["tags/装机/index.html","6406e1ee38fc8e1f5be02f138b58eb76"],["tags/记录生活/index.html","7f224f192c2817a390358ed4a6cb1b62"],["tags/部署/index.html","236309b9ac64e183878ac007d85909db"],["tags/阿里云/index.html","208f93a6be43cdb32c71e4d1bcf553b6"],["tags/面试题/index.html","f3be96a7cc586bab7e9285ed98fb2332"],["tags/黑苹果/index.html","e320721802b10c121cf776baa8d4d8df"]];
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







