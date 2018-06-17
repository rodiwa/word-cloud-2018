/**
 * service worker to add offline cap, cache assets for performance
 */
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open('word-cloud-v1')
      .then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          './static/js/bundle.js',
          './images/paper-plane.svg',
          './images/idea.svg',
          './images/desk-lamp.svg',
          './images/stopwatch.svg',
          './images/pie-chart.svg',
          './images/favicon.ico',
          './images/helper.svg',
          './images/icon-192x192.png',
          './images/icon-512x512.png',
        ])
      })
  )
})

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== 'word-cloud-v1') {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event
    .respondWith(
      caches
        .match(event.request)
        .then(response => {
          return response || fetch(event.request)
        })
    )
})
