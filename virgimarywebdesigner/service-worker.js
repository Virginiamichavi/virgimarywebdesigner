const CACHE_NAME = 'virgimary-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/estilos/estilos.css',
  '/js/scripts.js',
  '/assets/images/logo.png',
  '/views/servicios.html',
  '/views/proyectos.html',
  '/views/curriculo.html',
  '/views/contacto.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
