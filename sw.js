/* MENGU TRIP v1.6 — static-first offline app shell, no remote caching */
const CACHE='mengu-trip-v1.7-persona-20261025';
const CORE=['./','./index.html','./style.css','./app.js','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png'];
const FONT_FILES=['./letters.json','./assets/fonts/NanumSquareNeo-Bold.woff2','./assets/fonts/NanumSquareNeo-ExtraBold.woff2'];
self.addEventListener('install', event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(CORE); // installation fails rather than pretending offline readiness if core is missing
    await Promise.allSettled(FONT_FILES.map(async path=>{const response=await fetch(path,{cache:'reload'});if(response.ok)await cache.put(path,response)}));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('mengu-trip-')&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  if(!['http:','https:'].includes(url.protocol))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const cached=await cache.match(request);
    if(cached)return cached;
    try{
      const response=await fetch(request);
      if(response.ok && response.type==='basic')await cache.put(request,response.clone());
      return response;
    }catch(err){
      if(request.mode==='navigate'){
        const fallback=await cache.match('./index.html');
        if(fallback)return fallback;
      }
      throw err;
    }
  })());
});
