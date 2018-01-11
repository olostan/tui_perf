importScripts('https://unpkg.com/workbox-sw@2.1.1/build/importScripts/workbox-sw.dev.v2.1.1.js');
const workboxSW = new WorkboxSW({clientsClaim: true});

workboxSW.precache([
    '/',
    'lazy-load.js',
]);

workboxSW.router.registerRoute(
    /http.*\.js$/,
    workboxSW.strategies.cacheFirst({cacheableResponse: {statuses: [0, 200]}})
  );
workboxSW.router.registerRoute(
    /http.*\.css$/,
    workboxSW.strategies.cacheFirst({cacheableResponse: {statuses: [0, 200]}})
);

workboxSW.router.registerRoute(
    /http.*\.(jpg|png)$/,
    workboxSW.strategies.cacheFirst({
      cacheName: 'images-cache',
      cacheExpiration: {
        maxEntries: 40,
        //maxAgeSeconds: 7 * 24 * 60 * 60,
        maxAgeSeconds: 604800,
      },
      cacheableResponse: {statuses: [0, 200]},
    })
);
