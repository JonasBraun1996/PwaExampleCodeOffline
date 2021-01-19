var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/index.html'
];

self.addEventListener('load', function() {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }, function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}); 

self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (const windowClient of windowClients) {
      windowClient.navigate(windowClient.url)
    }
  })
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
