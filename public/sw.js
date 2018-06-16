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
          './images/paper-plane.svg',
          './images/idea.svg',
          './images/desk-lamp.svg',
          './images/stopwatch.svg',
          './images/pie-chart.svg',
        ])
      })
  )
})

self.addEventListener('activate', () => {
  console.log('service worker has been activated')
})

self.addEventListener('fetch', event => {
  console.log(event.request.url)
  console.log(event.request)
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        console.log(`serving ${event.request} from cache`)
        return response || fetch(event.request)
      })
  )
})
