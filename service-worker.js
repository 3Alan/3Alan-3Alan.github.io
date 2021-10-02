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

var precacheConfig = [["404.html","fb4c4434d08bfcbd934b055e0e757407"],["about/index.html","72f159044e66c8c2efab3f56399b6783"],["archives/2020/05/index.html","4ed8fe44897a4c743806b0f1639fdcfe"],["archives/2020/05/page/2/index.html","38d713d15d1cc7f28229c07d1fccd9be"],["archives/2020/06/index.html","3d698bdb665b0886fc29f8f4ee9b96fb"],["archives/2020/07/index.html","b5ceaf0103e63283715ee2c79515f846"],["archives/2020/11/index.html","3cf72637d340e4526f731806c3182b03"],["archives/2020/index.html","d5ebc677f305561d9efa978a3fe3735f"],["archives/2020/page/2/index.html","3700dbd62f8c48efb004d431661cc96a"],["archives/2021/01/index.html","70f11c6e064586c4d027e382bd4e6a4d"],["archives/2021/06/index.html","1502d63496cd8b5ad15edc4674d0da3e"],["archives/2021/08/index.html","239ac425a0bcc0f30ed9241c0da923e3"],["archives/2021/09/index.html","4d342b4b6cd4458b722c8b57eae071f7"],["archives/2021/index.html","e3962c4459caefbf7cac876a7a67ce2b"],["archives/index.html","ccc8fb7fcba9d52bcaa183e9a5a0e4db"],["archives/page/2/index.html","ccc8fb7fcba9d52bcaa183e9a5a0e4db"],["archives/page/3/index.html","230f7a1332e01b04eaec3c23ca29cc12"],["categories/Hexo博客/index.html","30b7fdd5997beb0f5a686add5064b4cd"],["categories/index.html","17f8f3473cb86091c6c5e46e43d73818"],["categories/前端/React/index.html","3775d000309d6619bd807aa9fd8b731b"],["categories/前端/TypeScript/index.html","377e04f137cc7881c7f1f825d481ae38"],["categories/前端/index.html","d849d7fd621e65aaa857ac32fe6a82d2"],["categories/前端/page/2/index.html","b8391ff849a8b3e1aad2cdba3e02fef5"],["categories/前端/webpack4-0学习总结/index.html","e0a245992ddd58e19deaee8bd59d21d7"],["categories/前端/工作/index.html","403eb44bfec44081dcd5a28a5e610761"],["categories/前端/面试造轮/index.html","45e5588cf32548245d874342e21f89cd"],["categories/效率工具/index.html","a04f8ab8a2be3ae50747e17c9591838f"],["categories/测试分类/index.html","9ae2ac7d93d08abcbc23749e011bce5c"],["categories/算法/index.html","53d34a69480f3b91dc71eb5e7fcddf18"],["categories/算法/树/index.html","54272b4c0f6a1739be5fed87f671c73a"],["categories/记录生活/2020/index.html","7b11ec756c2bc11d06e23c71b4a2d70d"],["categories/记录生活/index.html","ad4919f2cc062d2ce8591a82d3ea9184"],["categories/黑苹果/index.html","6afe3a70ac8702aee390d30771ddaacd"],["css/first.css","0dad0ae9830231c52dfbc1a1f739f027"],["css/style.css","2417f18c2b7d1674f39e97f273536641"],["friends/index.html","e92c7975181111da70eadd9021d855f8"],["index.html","b99c731d620bec2238a64007689c6bee"],["js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["js/issues.js","31c43c2f323daded49b27eb8f9792476"],["js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["list/index.html","dffa9958e7ea75bd77f5776f3dd0deee"],["page/2/index.html","7f48065b8de3a0d2235f477e7e756ea8"],["page/3/index.html","c6b71aedffe0a7573baa9b529a31e009"],["posts/20802113/index.html","83c21440cccdcf240a43e205a1633167"],["posts/24b4915a/index.html","d2fcbf25ca9e6ff86fad28748399e468"],["posts/35b500c6/index.html","bf4e839b45a63f451938c3b9a2363887"],["posts/3901d9e/index.html","2c73c91d0439f68f5fbf5bb3392a2648"],["posts/3b0a6cbe/index.html","bbf2a2b806962c05b5b023a67bcd6982"],["posts/52a641e4/index.html","d8825442f3a76036de27c1fe0879c98a"],["posts/66d3b164/index.html","ad687ccd34978a43261dd08f376eec37"],["posts/6af865/index.html","88d77385be9dd6395dcd121b1f39aa27"],["posts/6c0c371f/index.html","056d1337c6572daa07893bfbd0450506"],["posts/829819a3/index.html","158eb142c46c3b1f9527b0b10c4da6c2"],["posts/832ac07a/index.html","58d69aa9b51e05f936c560e0e85345b0"],["posts/84d16999/index.html","f820e00a2c19b351146ecac5b43f34ee"],["posts/92c49d45/index.html","4af25c2d7ba395f9438b83574edf4dba"],["posts/b050203a/index.html","1b787b5886f79adffd72516ba35c0898"],["posts/b4c78541/index.html","bc7f0d8066cd9f3dd71f465916aac59d"],["posts/c05e5480/index.html","d93b804b24fb8ee908567c8a695697ad"],["posts/cf86baf1/index.html","9bed346ab41c33e657ca0fe02886e390"],["posts/d4ddb122/index.html","1e2b49e3dce6ae601a29b13b8a248ebf"],["posts/d8051f67/index.html","25a4e45b39ecf3a75402fcb05cf9362d"],["posts/f032f0/index.html","ae2ed082b7e00d3c83c09344cf5b5895"],["posts/f9d92613/index.html","a23fba6c4c887ae2d766157d5b10c962"],["posts/fc7889ef/index.html","157a0a41a080597a5f5aecb4c76ee662"],["posts/ff905629/index.html","96765c13081574090e305a7bb5736fce"],["tags/DIY博客/index.html","79891981b020cf4d8ffbef8c3a430787"],["tags/Guide/index.html","3f258cd1220f73b073e58151a551fa49"],["tags/Hexo/index.html","665ac87ffef12e3d74ffb9a1269b863f"],["tags/Hexo评论系统/index.html","9e50be2646dc6dc6ebfede1f689ffaa3"],["tags/Next-js/index.html","9fc17fbbf269507beb2b3b50ba77d141"],["tags/React/index.html","a193422f5e1eef2846df75e546d5a142"],["tags/ReactHook/index.html","81dfe02c2cb3351d1914afa24e476f95"],["tags/TypeScript/index.html","31839b8526770a14f172fa02bbcca79e"],["tags/Typora/index.html","ca93d6dfe100d2aabbefcc1fdea84dfb"],["tags/Valine国际版/index.html","0b0a2a1a609ce20cc9bc897857d39699"],["tags/index.html","73aee357ce529d6d19010327d316a9ed"],["tags/jwt/index.html","60e838526e17db5c92544d24bd694683"],["tags/webpack4-0/index.html","079ce53252ad8d43333002da556fb0e8"],["tags/博客/index.html","77e751e47fed847a7e6e9c584d257a4c"],["tags/工作/index.html","fd5ff050df3a8c9d9d3db1afc4ced741"],["tags/工具/index.html","8e88570fb858c2f893d429b0336faf31"],["tags/树/index.html","910cff1a0fe2669b4e0b90d61c685982"],["tags/测试标签/index.html","919863c1798793b22ab7e934fafea76d"],["tags/算法/index.html","9877a23b88641d04d26e63d4c5d885f5"],["tags/组件库/index.html","de599eea7317041f49d21cd9df3c0436"],["tags/自动化测试/index.html","32df8ef41c22442ccce36dd392ae4f48"],["tags/装机/index.html","ecbf49e58a740fc9e98211d3ae94e1b4"],["tags/记录生活/index.html","f79bdb95aa53c583f2f47ad0990ef9d8"],["tags/部署/index.html","8488e36c1ed9cb060a578cee4218c485"],["tags/阿里云/index.html","a0cd1e82f82da4e637b65e1d62c746a3"],["tags/面试题/index.html","e60ecb421591444221b8b104a5b44701"],["tags/黑苹果/index.html","3a154b9a830f6cd06a80b00ec5c4335a"]];
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







