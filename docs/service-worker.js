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

var precacheConfig = [["404.html","09f317e93b8239dfc285fe0681aaa74b"],["browserconfig.xml","92828d62de7f323d11563be3eef26828"],["categories/index.html","6a95965d0fa5f5cf10c2ca0803e0cb3d"],["categories/index.xml","756aad836d631b0a86899916ef8a2ffd"],["css/fonts/miriamlibre-bold.woff","782f877c9086205c979c9f57713b23bd"],["css/fonts/miriamlibre-bold.woff2","c19e5b4c99f6249c9c5cc84f402910c9"],["css/images/arrow_effect.svg","f1f3ac91665d7427c39a7ab4b551cf31"],["css/images/icon-tick.svg","4bab0777ae9f5081c7f29a0d1175c6b1"],["css/images/stripe.svg","ef03fea85121c7139ec140cd9a60d102"],["css/prism.css","2b0c205b40b8af76743806118004bef4"],["css/styles.css","c597067658c912ea42cf803d371d0388"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/browser-chrome-android.svg","a32653815f36daa0d6877798cdfd1dfa"],["images/browser-chrome.svg","86ab1442e7d0796694b584a73488257e"],["images/browser-edge.svg","fd4ab69a946b62784f153b4f729892d9"],["images/browser-firefox-android.svg","5ec1ad3491aad31ac93d5a4fc72c98b7"],["images/browser-firefox.svg","4064d8ab30c474f254a27e4d06b0062f"],["images/browser-ie.svg","c9a6382f7e0f27462dee1cf1699a78aa"],["images/browser-opera.svg","650571954d8269dc63d0679a9deaaa42"],["images/browser-safari-ios.svg","ebcf653ca8f53fd1824969a7fb281c69"],["images/browser-safari.svg","16546b0bcadfc60d4cb71ab9a58fbf19"],["images/favicon-16x16.png","7a99c20d6c00babddd26d03607b8721d"],["images/favicon-32x32.png","129881474a1bf130027bff7a1e89febd"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","81c46feedbfcc6c6dc9495e4fd5adfad"],["images/icon-info.svg","d194a783f7ae013633c3962309dc9fa8"],["images/icon-tag.svg","92da070a2ceacf6dc3c7c6a5e831e5b8"],["images/icon-warning.svg","cc46e345dcb26154c0e7966ea974f19c"],["images/logo.svg","a172954dc719ae6ed89b0a42acb878f5"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/samsung_homescreen.jpg","4462178424f5ce79b5757748ba5f1ec4"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["index.html","c1bf639f40eb17bf37699b4d9fb7e480"],["index.xml","e5e76901d1f92734cd49521551b2050c"],["js/dom-scripts.js","65957d64a520ef783c8c8ee7c4e2a676"],["js/prism.js","fdcc87318070d0b4eb7efdfb99be7bc2"],["js/service-worker-registration.js","a1f2a1b06947660067fda855876f33c5"],["manifest.json","ea80deeb4622020215c3d56dff8e13dc"],["patterns/coding/code-blocks/index.html","c7c247a024f64957f3d3ba6f18783b8d"],["patterns/coding/color-palettes/index.html","0fa04e2e2a43ce5dfee760308a056e92"],["patterns/coding/command-line/index.html","6757cf60eb78453ee1378b87d8d81056"],["patterns/coding/demo-embedding/index.html","fa37410d80b9ba709ef3296224d93898"],["patterns/coding/file-trees/index.html","001b5bcf151bf66a4b83e17fab10b82e"],["patterns/coding/index.html","b8642216988378bc234fdd022990579d"],["patterns/coding/index.xml","fa4f845c083a047da3bebf0801448752"],["patterns/coding/tested/index.html","9e3c17d8bf744d8343bd463f63d89690"],["patterns/coding/writing-inline-demos/index.html","6abfd384471977360bd57bb46199df38"],["patterns/index.html","6def9198903db32c8add978c17f5d90d"],["patterns/index.xml","c10218bb59da637ccc25f188d3d6595e"],["patterns/installation/index.html","30bcb654b4a2055e9749ad1284e92af2"],["patterns/media/including-images/index.html","532800af90020009499404e8494dc402"],["patterns/media/including-videos/index.html","e839a8a8a782db5de8410e181f2c18ed"],["patterns/media/index.html","99565dbdc43a9dda248a41d451290fc1"],["patterns/media/index.xml","62c3ca03659c82513aaf2e1e77576a97"],["patterns/pattern/index.html","84994248d94be612911d558d530c14d2"],["patterns/printing/index.html","d55b01980c04631c5836cc91ffd844cd"],["patterns/serving/index.html","6b757f095413891ac0dcc933f7d97dd3"],["patterns/setup/index.html","125350bbd693f465e9763bc63b0bb250"],["patterns/updating/index.html","e8832639aa4e40b4d2822f69fa5f6ea1"],["patterns/writing/expandable-sections/index.html","64b0d3e558bc3074057d1eb95d939f54"],["patterns/writing/index.html","69da6fc30cbb17b087b982c3ded0e964"],["patterns/writing/index.xml","6007c84a4437c1f5dc4c5172d86e049d"],["patterns/writing/markdown-and-metadata/index.html","387aafbf1ffb7bfc194cddeaec451333"],["patterns/writing/notes-and-warnings/index.html","69da689823018d2682ea0b4cb48dfc45"],["patterns/writing/project-structure/index.html","bb332c92de9b9e2bd071f7f4a428f88d"],["patterns/writing/references/index.html","94856078833c9d3b9d11b3e9d116efcb"],["patterns/writing/snippets/index.html","c69c1fdfc9d8ac63449e57b9a8029e41"],["patterns/writing/tables-of-contents/index.html","4557c0299fadd89a0f3d804382227001"],["print-version/index.html","cb05cbd4876cbbccc0b05a507174f942"],["sitemap.xml","f007bda1ade0f5f37c483ea4ed773920"],["tags/another-tag/index.html","8cf4c0875adb9c83944dc2a1e833643d"],["tags/another-tag/index.xml","0d13ce63603db39a21b209f04156b586"],["tags/example-tag/index.html","ce0bca7618e749014d28ac0c3dd18a7a"],["tags/example-tag/index.xml","c7b5ecf6c0f9f5f0b2bcc61f16a8e257"],["tags/index.html","6e2ef1199f040116bf7e94e00c4bbb6e"],["tags/index.xml","c86877453fe0008458db517474e2746b"],["tags/markdown/index.html","7d23789c3da17c316320202a8907bbf9"],["tags/markdown/index.xml","c4fa6236c065cc4f61c71d412a333d0c"],["tags/metadata/index.html","b657f8277765f0b42ca9043e8dbe5c4d"],["tags/metadata/index.xml","1e66041c578f38afffcdc03c94172aac"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


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







