const CACHE_NAME = 'ja-bienes-raices-v1';
const urlsToCache = [
  '/',
  'index.html',
  'script.js',
  'styles.css',
  'img/Logo-Janneth-Aguirre-2020-ecuador.png',
  'img/favicon-32x32.png',
  'img/icon-192x192.png',
  'img/icon-512x512.png',
  'img/icon-maskable.png',
  'img/favicon-16x16.png',
  'img/apple-touch-icon.png',
  'manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});