self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("notifynow-v1").then((cache) =>
      cache.addAll(["/","/index.html","/manifest.json","/css/styles.css","/js/main.js"])
    )
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});