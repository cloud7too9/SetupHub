// Version bei jedem Release erhöhen — der activate-Handler räumt alte Caches ab.
const CACHE_NAME = 'setuphub-v2';
const PRECACHE = ['/', '/index.html', '/favicon.svg', '/manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

async function cachePut(request, response) {
  if (!response.ok) return;
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response.clone());
}

// index.html immer zuerst aus dem Netz: sonst zeigt die App nach einem Deploy
// endlos die alte Version mit den alten Asset-Hashes.
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    await cachePut(request, response);
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached ?? caches.match('/index.html');
  }
}

// Gehashte Build-Assets sind unveränderlich — Cache-Treffer ist immer korrekt.
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  await cachePut(request, response);
  return response;
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  const network = fetch(request)
    .then((response) => {
      cachePut(request, response);
      return response;
    })
    .catch(() => cached);
  return cached ?? network;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // Fonts o.Ä. dem Browser überlassen

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
  } else if (url.pathname.startsWith('/assets/')) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(staleWhileRevalidate(request));
  }
});
