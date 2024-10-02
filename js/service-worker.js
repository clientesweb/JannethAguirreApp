const CACHE_NAME = 'ja-bienes-raices-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/app.js',
  '/js/router.js',
  '/js/components/header.js',
  '/js/components/footer.js',
  '/js/components/home.js',
  '/js/components/properties.js',
  '/js/components/contact.js',
  '/js/components/leadForm.js',
  '/img/logo.png',
  'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'
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
      .then((response) => response || fetch(event.request))
  );
});