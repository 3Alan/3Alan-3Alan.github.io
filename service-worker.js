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

var precacheConfig = [["404.html","fb4c4434d08bfcbd934b055e0e757407"],["about/index.html","72f159044e66c8c2efab3f56399b6783"],["archives/2020/05/index.html","7dd4ac02b4d25e4cbeedc79d605251ba"],["archives/2020/05/page/2/index.html","aa2275841b7410547cbce90b60bef299"],["archives/2020/06/index.html","5bb2b140a9cca57f76d1180f9ed6c0a2"],["archives/2020/07/index.html","8dc43098e46fa01d7be374c245f48578"],["archives/2020/11/index.html","3e6cd1f1c719df26920bbf0092d0c460"],["archives/2020/index.html","24dc9c68871941c2442226a51625f34c"],["archives/2020/page/2/index.html","5e3ba4591c0d67416e7b5a066432e6d7"],["archives/2021/01/index.html","9eafcbe23e27c4efaef300b011f1a3d5"],["archives/2021/06/index.html","790fa8e2c8435a03ca4ae006da48dfc6"],["archives/2021/08/index.html","52b793778e08d0c08d65cabee0671812"],["archives/2021/09/index.html","ac4bcbbfb08462c4b8ae39a6bc967087"],["archives/2021/index.html","889086fb86183d38f40682f8f7dc0965"],["archives/index.html","c65e9258390ea0da554bbd665bd6d92b"],["archives/page/2/index.html","c65e9258390ea0da554bbd665bd6d92b"],["archives/page/3/index.html","c65e9258390ea0da554bbd665bd6d92b"],["categories/Hexo博客/index.html","19a353715032b60a777a0d9ccd301a1e"],["categories/index.html","17f8f3473cb86091c6c5e46e43d73818"],["categories/前端/React/index.html","f3aa6a72ef82afc0a2585540a225ddfc"],["categories/前端/TypeScript/index.html","5e27dde6eaaac7bdf45d2be56218f2c6"],["categories/前端/index.html","12f5553c734c3c70d0d43cedec9a9925"],["categories/前端/page/2/index.html","ec7bc8259db4d643edcccd4810fac6fa"],["categories/前端/webpack4-0学习总结/index.html","e0e712ffd078d44e44276068977b045f"],["categories/前端/工作/index.html","545cec2ff99261f223036e541b3a2ee6"],["categories/前端/面试造轮/index.html","404a4ceee3bcfd1cec095f19a7af342f"],["categories/效率工具/index.html","3b838d1e6c01f9243962de47f67f0d29"],["categories/测试分类/index.html","8a7db6bc9dc057f148a683e0f11340ae"],["categories/算法/index.html","1b6b2a927e2a88447ffaa6cb944614da"],["categories/算法/树/index.html","134e1033e195f167fc6014fbdad52ad9"],["categories/记录生活/2020/index.html","c6307b30ed7694d7ae2e23a439afa9c7"],["categories/记录生活/index.html","5902f7234dd326ce2b856a7f24a0ef18"],["categories/黑苹果/index.html","dc82ecb87fb9a0759816c3aac2600ffd"],["css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["css/style.css","2417f18c2b7d1674f39e97f273536641"],["friends/index.html","e92c7975181111da70eadd9021d855f8"],["index.html","4d02b8887bb9f1bb5449f6d2fc0972ba"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","f8743967f177497d7afc5152a84641c3"],["page/2/index.html","998ff8fe92900debb115e4b16fc54c1d"],["page/3/index.html","815b8207f08fe5eb0a7b650f36481246"],["posts/20802113/index.html","83c21440cccdcf240a43e205a1633167"],["posts/24b4915a/index.html","d2fcbf25ca9e6ff86fad28748399e468"],["posts/35b500c6/index.html","bf4e839b45a63f451938c3b9a2363887"],["posts/3901d9e/index.html","2c73c91d0439f68f5fbf5bb3392a2648"],["posts/3b0a6cbe/index.html","bbf2a2b806962c05b5b023a67bcd6982"],["posts/52a641e4/index.html","d8825442f3a76036de27c1fe0879c98a"],["posts/66d3b164/index.html","ad687ccd34978a43261dd08f376eec37"],["posts/6af865/index.html","88d77385be9dd6395dcd121b1f39aa27"],["posts/6c0c371f/index.html","056d1337c6572daa07893bfbd0450506"],["posts/829819a3/index.html","158eb142c46c3b1f9527b0b10c4da6c2"],["posts/832ac07a/index.html","58d69aa9b51e05f936c560e0e85345b0"],["posts/84d16999/index.html","f820e00a2c19b351146ecac5b43f34ee"],["posts/92c49d45/index.html","4af25c2d7ba395f9438b83574edf4dba"],["posts/b050203a/index.html","1b787b5886f79adffd72516ba35c0898"],["posts/b4c78541/index.html","bc7f0d8066cd9f3dd71f465916aac59d"],["posts/c05e5480/index.html","d93b804b24fb8ee908567c8a695697ad"],["posts/cf86baf1/index.html","9bed346ab41c33e657ca0fe02886e390"],["posts/d4ddb122/index.html","1e2b49e3dce6ae601a29b13b8a248ebf"],["posts/d8051f67/index.html","25a4e45b39ecf3a75402fcb05cf9362d"],["posts/f032f0/index.html","ae2ed082b7e00d3c83c09344cf5b5895"],["posts/f9d92613/index.html","a23fba6c4c887ae2d766157d5b10c962"],["posts/fc7889ef/index.html","157a0a41a080597a5f5aecb4c76ee662"],["posts/ff905629/index.html","96765c13081574090e305a7bb5736fce"],["tags/DIY博客/index.html","1341e4ef12d2849fb77287b45b225c15"],["tags/Guide/index.html","5a339a7274c9ce5029130a8d0dc5553c"],["tags/Hexo/index.html","b957da5a94a18d5ec9a07ed019562aee"],["tags/Hexo评论系统/index.html","1aec73b3b41c6d53fb883901fcbc8946"],["tags/Next-js/index.html","d4a1faa96b1e2b9fc34c9d03ebf07a00"],["tags/React/index.html","dfc1839e18a520393d778bf33e43f037"],["tags/ReactHook/index.html","68f0a760b911bea2d5ba0881921bf94a"],["tags/TypeScript/index.html","c87c61bfa081673de82e5847698bbb50"],["tags/Typora/index.html","70550e3c792a89847e123e5cb88dd85c"],["tags/Valine国际版/index.html","d3231d2f112416c80be6e9d26bff143c"],["tags/index.html","73aee357ce529d6d19010327d316a9ed"],["tags/jwt/index.html","5cf568442ddeaee44a10e28853ca3e17"],["tags/webpack4-0/index.html","29b8715667345f53efd8f54b43ab00c9"],["tags/博客/index.html","b437b6eacd4eca55f26d595cd44dc6fe"],["tags/工作/index.html","9fdf24440d02e3f9534616e745a70029"],["tags/工具/index.html","cdf13d8d65e0f3e0e2e9eada400a2c87"],["tags/树/index.html","532f9df77f90d86c3be6dba4710c1f27"],["tags/测试标签/index.html","d587a6736d98781818e2d7ba497e22c2"],["tags/算法/index.html","dfbd661e31ed641021f2f800d3164d2a"],["tags/组件库/index.html","1020d331d06ce6744fb4d73561181c52"],["tags/自动化测试/index.html","3a96bb5334ec53ffee974deabf3a6aa9"],["tags/装机/index.html","d6ba7c167a48b0c479fc9ac040840664"],["tags/记录生活/index.html","b9519a0ec2223f235900c8c62bb27a0a"],["tags/部署/index.html","5fc3032cfc82a79220de9d6f388c659b"],["tags/阿里云/index.html","f2a85406f7b9c39bbd739af6ab10f68d"],["tags/面试题/index.html","f53fd92d6056502e6404d1061d12543d"],["tags/黑苹果/index.html","5be3b61cdd24827dd2797d970175f99b"]];
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







