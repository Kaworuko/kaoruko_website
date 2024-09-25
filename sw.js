const CACHE_NAME = 'offline-cache-v1';
const urlsToCache = [
    '/',
    '/main_text.html',
    '/main_text.css',
    '/main_text.js',
];

// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching offline assets');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch from Cache
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached file or fetch from network
                return response || fetch(event.request);
            })
    );
});
