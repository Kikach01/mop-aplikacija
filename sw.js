const CACHE_NAME = 'mop-mjerenje-v3';
const urlsToCache = [
  './MOP_clean.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  // Slike uređaja
  './GA5000.jpg',
  './Optima-Biogas.png',
  // Slike odlagališta
  './Krizevci.jpg',
  './Koprivnica.jpg',
  './Virovitica.jpg',
  './Grubisno-Polje.jpg',
  './Belisce.jpg',
  './Beli-Manastir.jpg',
  './Pag.jpg',
  './Otocac.jpg',
  './Zadar.jpg',
  './Karepovac.jpg',
  './Knin.jpg',
  './Obrovac.jpg',
  './Labin.jpg',
  './Zapresic.jpg',
  './Griza.jpg',
  './Cres.jpg',
  './Bedekovcina.jpg',
  './Rovinj.jpg',
  './Pazin.jpg',
  './Biljane-Donje.jpg',
  'https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js'
];

// Instalacija Service Workera
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache otvoren');
        return cache.addAll(urlsToCache);
      })
  );
});

// Aktivacija Service Workera
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Brišem stari cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Dohvaćanje resursa
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Vraća cache ako postoji, inače dohvaća s mreže
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          response => {
            // Provjeri je li odgovor valjan
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Kloniraj odgovor
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          }
        );
      })
  );
});
