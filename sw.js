// عامل خدمة بسيط — يكفي لتفعيل خاصية "إضافة للشاشة الرئيسية" بمتصفحات أندرويد
const CACHE_NAME = 'collection-system-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
