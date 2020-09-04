const CACHE = "dev";
const URL = [
    '/',
    '/styles/styles.css',
    '/script/webpack-bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/main.7da412c63c1fffc91b84.hot-update.js',
    '/main.db3a3f178afb4daf2130.hot-update.js'
];
const self = this;

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("Cached!");
            return cache.addAll(URL);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener("activate", (event) => {
    const newCache = [];
    newCache.push(CACHE);
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!newCache.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            )
        )
    );
});
