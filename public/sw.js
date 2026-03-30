self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('bolus-cache-v1').then((cache) => 
      cache.addAll([
        '/',
        '/favicon.ico'
      ])
    )
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => 
      Promise.all(
        cacheNames.map((cache) => 
          caches.delete(cache)
        )
      )
    )
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => 
      response || fetch(e.request)
    )
  );
});