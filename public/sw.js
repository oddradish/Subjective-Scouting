if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let c={};const o=e=>s(e,t),r={module:{uri:t},exports:c,require:o};n[t]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/361-6f2165c4e816f680.js",revision:"untDvlVjYWGowE7Xauoak"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"untDvlVjYWGowE7Xauoak"},{url:"/_next/static/chunks/main-b82de7430d8403b8.js",revision:"untDvlVjYWGowE7Xauoak"},{url:"/_next/static/chunks/pages/_app-39821f118bc6c9f1.js",revision:"untDvlVjYWGowE7Xauoak"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"untDvlVjYWGowE7Xauoak"},{url:"/_next/static/chunks/pages/index-8f5f13f19c7c9756.js",revision:"untDvlVjYWGowE7Xauoak"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"untDvlVjYWGowE7Xauoak"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"untDvlVjYWGowE7Xauoak"},{url:"/_next/static/css/3986012fbb12dde4.css",revision:"untDvlVjYWGowE7Xauoak"},{url:"/_next/static/untDvlVjYWGowE7Xauoak/_buildManifest.js",revision:"untDvlVjYWGowE7Xauoak"},{url:"/_next/static/untDvlVjYWGowE7Xauoak/_middlewareManifest.js",revision:"untDvlVjYWGowE7Xauoak"},{url:"/_next/static/untDvlVjYWGowE7Xauoak/_ssgManifest.js",revision:"untDvlVjYWGowE7Xauoak"},{url:"/favicon-16x16.png",revision:"425e587f41e11324e3cfef8e6f09c792"},{url:"/favicon-32x32.png",revision:"85a25525ab5c86b6714f0cff4b284f3c"},{url:"/favicon.ico",revision:"33fdbac95cb860fdfb9052fbe86420e7"},{url:"/icons/icon-1024x1024.png",revision:"65d752215e61fb9973751ce0377da63b"},{url:"/icons/icon-144x144.png",revision:"437f521e0d0ed1040d6a38813a4f6b14"},{url:"/icons/icon-192x192.png",revision:"3269b427472043584a493b10be099831"},{url:"/icons/icon-36x36.png",revision:"5cb62894fc45b85bef82d6180335b2e6"},{url:"/icons/icon-384x384.png",revision:"4ae0685b16c80a9cdf9323b036c753ef"},{url:"/icons/icon-48x48.png",revision:"a80ea16413aeb3477b03d34f44f50f53"},{url:"/icons/icon-512x512.png",revision:"0a799e9c6f5f5cc99e1c5fab72823dfe"},{url:"/icons/icon-72x72.png",revision:"62ba109017f55753a5c274923e18e544"},{url:"/icons/icon-96x96.png",revision:"5e8dee714f0a1d1d5b01113a1dc57ffb"},{url:"/manifest.json",revision:"f03166105e71c9b014c9632b13ad06f9"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));