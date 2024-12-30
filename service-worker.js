// Cache name
const CACHE_NAME = "static";

// Files to cache
const urlsToCache = [
    "./index.html",
    "./offline.html",
    "./static/icons/icon-ocms-144.png",
    "./static/icons/icon-ocms-256.png",
    "./static/icons/icon-ocms-512.png",
    "./static/screenshots/Screenshot-wide.png",
    "./static/screenshots/Screenshot-narrow.png"
];

// Install the service worker
self.addEventListener("install", event => {
    console.log("installed")
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("Opened cache");
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener("activate", event => {
    console.log("Service Worker Activated", event);
    // Force the service worker to take control of the page immediately
    // event.waitUntil(self.clients.claim());
});

self.addEventListener("push", event => {
    if (event.data) {
        const payload = event.data.json();
        console.log("payload: ",payload)
        self.registration.showNotification(payload.title, {
            body: payload.body,
            icon:"./static/icons/icon-512.png",
            badge:"./static/icons/icon-256.png"
            
        });
    } else {
        console.log("Push event but no data.");
    }
});
