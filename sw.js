/* Piano Rush service worker.
   De app zelf wordt van het netwerk gehaald als dat binnen anderhalve seconde
   lukt, anders uit de opslag. Zo landen updates vanzelf en werkt offline ook. */
const CACHE = "pianorush";
const BESTANDEN = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(BESTANDEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

function metTimeout(request, ms) {
  return new Promise((klaar, mislukt) => {
    const timer = setTimeout(() => mislukt(new Error("te langzaam")), ms);
    fetch(request).then(
      (res) => {
        clearTimeout(timer);
        klaar(res);
      },
      (err) => {
        clearTimeout(timer);
        mislukt(err);
      }
    );
  });
}

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const isPagina = e.request.mode === "navigate" || e.request.destination === "document";

  if (isPagina) {
    e.respondWith(
      metTimeout(e.request, 1500)
        .then((res) => {
          const kopie = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", kopie));
          return res;
        })
        .catch(() => caches.match("./index.html", { ignoreSearch: true }))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(e.request)
        .then((res) => {
          const kopie = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, kopie));
          return res;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
