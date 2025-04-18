'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ec263aa81c38da40b1bd69fa2ccdbaab",
"version.json": "725c7d6471537b14bceae2729ed71b76",
"index.html": "3cbbcadcc5b13890dd61d6abb4e20e1f",
"/": "3cbbcadcc5b13890dd61d6abb4e20e1f",
"CNAME": "de32263b205bb492d29df6a34362069d",
"main.dart.js": "49d3a05de539c1da07733a9307bbbba5",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7d60343dda217aea56625ef308c6ef8b",
"assets/resources/lang/pt.json": "246dc6265e48c3ab4f224142e937dceb",
"assets/resources/lang/en.json": "73c02b92d15f46c4d16890d55bf6ad3d",
"assets/AssetManifest.json": "8ce00e9dad7e7deccdcf1fbc51c0c167",
"assets/NOTICES": "d852cac33e5af485d0347ff55444b5dc",
"assets/FontManifest.json": "45a3e3b4913663d0d82fd87bf8e272fc",
"assets/AssetManifest.bin.json": "39b2b3ca3ca951b5974307e26e437730",
"assets/packages/flame_splash_screen/assets/layer1.png": "31625c711892b1d250fe3bb58ad32850",
"assets/packages/flame_splash_screen/assets/layer3.png": "24a8fdc53b85d6d749cc2857c708de49",
"assets/packages/flame_splash_screen/assets/layer2.png": "51efb74c8ec5a2fd21f622392678f607",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1f508457ba5249103277eca34bec80d1",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/fonts/font_pixel.ttf": "5fcd6c657ffa8a6791632c705f0944ea",
"assets/assets/images/smoke_explosin.png": "555a8a42b72e662af232dc2092103c2a",
"assets/assets/images/tiled/tile_set.png": "ee2500bc8bfdbfab012db5018b3969e2",
"assets/assets/images/tiled/tileSet.json": "9facbfcc6501b75e510defc058fe1797",
"assets/assets/images/tiled/map.json": "f7a95d719a4ae84366b84593381a0602",
"assets/assets/images/joystick_background.png": "2eef7b32e484d81f07eeb405b39c83a4",
"assets/assets/images/keyboard_tip.png": "3cb49ccd23380c09b95e1784d6c5b837",
"assets/assets/images/emote/emote_interregacao.png": "9afe746a2fdb43b7d126270712911544",
"assets/assets/images/emote/emote_dots.png": "be3fbdff0238dc988be233225c230e75",
"assets/assets/images/emote/emote_love.png": "16913278e27883e8075a9b58af09e5f0",
"assets/assets/images/emote/emote_exclamacao.png": "8b1897ae92f3a077e0aadaef2626d65a",
"assets/assets/images/joystick_atack.png": "a525ebd6bd0a9014c513884b7811f019",
"assets/assets/images/health_ui.png": "219e39516312f2f6bc264357497b99cb",
"assets/assets/images/enemy/imp/imp_run_right.png": "c309ba53677834ee89b49b2ca809f19a",
"assets/assets/images/enemy/imp/imp_idle.png": "fd0a267c699d58df27658a67a1df9c98",
"assets/assets/images/enemy/imp/imp_run_left.png": "f92f71d23122eea1b6de55830f2f5dcc",
"assets/assets/images/enemy/imp/imp_idle_left.png": "6f2711ec02e91aeec1e74c0d0978c117",
"assets/assets/images/enemy/atack_effect_top.png": "df3eeb246450bf06de6dfc325d0bdbd0",
"assets/assets/images/enemy/goblin/goblin_run_right.png": "565c2f9a0bb01a9c56975664f8cd375c",
"assets/assets/images/enemy/goblin/goblin_run_left.png": "05863189b562610b17a062114c7849a9",
"assets/assets/images/enemy/goblin/goblin_idle.png": "8c97e935786b994c3cff4008212381b9",
"assets/assets/images/enemy/goblin/goblin_idle_left.png": "a7563675f85ed259b2d0aae50ded196b",
"assets/assets/images/enemy/atack_effect_left.png": "9c99ad913fcc75ce253f8db53faa846f",
"assets/assets/images/enemy/atack_effect_bottom.png": "aaeb1a8e791a0f15ba911e1d2540ab32",
"assets/assets/images/enemy/boss/boss_run_left.png": "ed663ba496619ace977619bacf9ba60b",
"assets/assets/images/enemy/boss/boss_idle_left.png": "2c676458b5c2c1f4c835d3a29bceeb4f",
"assets/assets/images/enemy/boss/boss_run_right.png": "e7509da7b9d5aa375ec12c916c6731bc",
"assets/assets/images/enemy/boss/boss_idle.png": "f722e5ea7c26f7613b885c0421a1922d",
"assets/assets/images/enemy/atack_effect_right.png": "15831f9ccee22a845e854ccb3d18f6e5",
"assets/assets/images/enemy/mini_boss/mini_boss_run_right.png": "0c646c8bd124d0ccb516160a34442f53",
"assets/assets/images/enemy/mini_boss/mini_boss_idle.png": "c209ff336493312f3ac00bf473b9f059",
"assets/assets/images/enemy/mini_boss/mini_boss_idle_left.png": "bb3328289e788dc55212923e8636bcc6",
"assets/assets/images/enemy/mini_boss/mini_boss_run_left.png": "f3ad68ec82c01c8c637594eee1410dcf",
"assets/assets/images/joystick_atack_selected.png": "5196050c562862a670e7757392710c4d",
"assets/assets/images/crypt.png": "8e55febc1e2563a9d7ba4b48625ba88d",
"assets/assets/images/items/bomb_anim_spritesheet.png": "da3b744bbf6d70d8d82c717ca7bf0078",
"assets/assets/images/items/stair_nextlevel.png": "779e0df7810b0e8b4fdbf49ab3aab96b",
"assets/assets/images/items/potion_red.png": "49cc98d9207a350b8266765ee890d09e",
"assets/assets/images/items/door_closed.png": "c6ede55672762276cc71eca8cfe8a3e9",
"assets/assets/images/items/key_silver.png": "7a3dc96e5dfb0e5000bad51da22e9fa7",
"assets/assets/images/items/torch_spritesheet.png": "858f57abd642f0303de50d719532f198",
"assets/assets/images/items/door_open.png": "430f6d0439652b87ce68ed84af5fb8c7",
"assets/assets/images/items/spikes.png": "17b9e2041471cf40cc10cf4357e33bed",
"assets/assets/images/items/chest_spritesheet.png": "bcc8785d27d816e23eca114dd4e708ed",
"assets/assets/images/joystick_atack_range.png": "ff4ce744c80e383080ad2316ba0a9b9b",
"assets/assets/images/joystick_atack_range_selected.png": "06f85cdc0deaf633e544f0ad9f0c75f8",
"assets/assets/images/explosion.png": "6969a53851107eb6c133a49cddbad3c3",
"assets/assets/images/npc/wizard.png": "a8b090d2853a2035fc48c9fd78ca9a71",
"assets/assets/images/npc/kid_idle_left.png": "de8286bb5fe4f2284391197ceaef0361",
"assets/assets/images/npc/wizard_idle_left.png": "d007579b66fc0760964f6e894ab245ab",
"assets/assets/images/npc/kid_idle_right.png": "43e730b096bc0165a0ac3fa87e42e61f",
"assets/assets/images/joystick_knob.png": "c088b1ce385c20537c22dc2d4d39245a",
"assets/assets/images/player/knight_idle_left.png": "e4ddca181210b0cf9555331aaf2af512",
"assets/assets/images/player/fireball_top.png": "e9a76f3ea950d6bc22f8f4cd3a22d7e3",
"assets/assets/images/player/knight_run_left.png": "ce9f3ad71135b459f6b66c892b5b9e30",
"assets/assets/images/player/explosion_fire.png": "81a3691935a18a30572870b759ad1683",
"assets/assets/images/player/atack_effect_top.png": "7b01845d595c3803a07567ee87710658",
"assets/assets/images/player/atack_effect_left.png": "5b5475da758d76f79c34429f70f7f6af",
"assets/assets/images/player/atack_effect_bottom.png": "e2406062be291971a034123fdd1757f9",
"assets/assets/images/player/fireball_right.png": "aaa2c18fe241c16e95be131619693b80",
"assets/assets/images/player/fireball_left.png": "cb3370c9039ec112af7bee6edf3e342d",
"assets/assets/images/player/atack_effect_right.png": "39b3d8583205c90284cd60f0e018f29d",
"assets/assets/images/player/knight_run.png": "9cac5c91f943ba81915573bd93060d4d",
"assets/assets/images/player/crypt.png": "8e55febc1e2563a9d7ba4b48625ba88d",
"assets/assets/images/player/knight_idle.png": "191737282656dd3c8851a2dd3dfc1c0c",
"assets/assets/images/player/fireball_bottom.png": "05522f950d8d60e15615ee9705ff2ef0",
"assets/assets/play_again.png": "9f76b916b2f41060feb788b2f7deefb6",
"assets/assets/audio/attack_enemy.mp3": "95c6ab8e9515377506e4f88ed660fa14",
"assets/assets/audio/battle_boss.mp3": "5c10fe38fddf586c9d694d8a28aa8a57",
"assets/assets/audio/attack_player.mp3": "ecb761207d8dccc6ff5814906211d47c",
"assets/assets/audio/explosion.wav": "4ca7bc18a6487c7f43ddc9f739691c9a",
"assets/assets/audio/sound_interaction.wav": "02583765123656547a68bcb7dc7ebcc3",
"assets/assets/audio/sound_bg.mp3": "603c391173ab8f849d737d0fa4fa0261",
"assets/assets/audio/attack_fire_ball.wav": "49601c8eb5ba3a0148d60a178cd6a06f",
"assets/assets/game_over.png": "664f7f622ca4bcc7781ce556b3e95df8",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
