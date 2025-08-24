self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("rickroll-cache-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./funny sound.mp3",
        "./Rick Roll.mp4"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
