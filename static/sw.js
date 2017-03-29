// self.addEventListener('fetch', function(event) {
//     console.log(event.request.url);
//     // event.respondWith(new Response('hijacked!'));
// });

var cacheName = 'v1';
var cacheFiles = [
    '/css/style.css',
    '/js/script.js',
    '/'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Installed');

    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] caching cacheFiles');
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activated');

    e.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(thisCacheName) {
                if (thisCacheName !== cacheName) {
                    console.log('[serviceWorker] removing cache files from', thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetching', e.request.url );

    // e.respondWith(
    //     caches.match(e.request).then(function(response) {
    //         if (response) {
    //             console.log('[serviceWorker] found in cache', e.request.url);
    //             return response;
    //         }
    //
    //         var requestClone = e.request.clone();
    //         fetch(requestClone).then(function(response) {
    //             if (!response) {
    //                 console.log('[serviceWorker] no response from fetch');
    //                 return response;
    //             }
    //
    //             var responseClone = response.clone();
    //             caches.open(cacheName).then(function(cache) {
    //                 console.log('[serviceWorker] new data new');
    //                 cache.put(e.request, responseClone);
    //                 return response;
    //             });
    //         })
    //         .catch(function(err) {
    //             console.log('[serviceWorker] error fetching & caching new data');
    //         });
    //     })
    // );
});
