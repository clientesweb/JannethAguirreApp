const CACHE_NAME = 'real-estate-pwa-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/components/header.js',
    '/components/nav.js',
    '/components/home.js',
    '/components/properties.js',
    '/components/contact.js',
    '/components/footer.js',
    '/components/leadForm.js',
    '/properties.json',
    '/logo.png'
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