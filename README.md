# 🌍 Vue3-Leaflet-Geosearch 📍

Welcome to **[Wogwon Societies](https://www.wogwon.com)** GeoSearch plugin! This plugin extends Leaflet with Vue 3 compatibility, making maps +
geosearch easy. Let's gooo! 🚀

## ⚡️ Features

- GeoSearch with Leaflet and Vue 3 🌍
- Lightweight and simple to use
- Perfect for maps and search-driven apps

## 📦 Installation

```bash
npm install @wogwonsociety/vue3-leaflet-geosearch
```


## 🎯 Usage

```vue
import { defineComponent } from 'vue';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import GeoSearch from '@wogwonsociety/vue3-leaflet-geosearch';

export default defineComponent({
  components: {
    LMap,
    LTileLayer,
    LMarker,
    GeoSearch
  },
  setup() {
    const center = [51.505, -0.09];
    return { center };
  }
});
```

In your template:
```vue
<l-map :zoom="13" :center="center">
  <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <geo-search></geo-search>
</l-map>
```

## 🔧 Configuration
This plugin is zero-config by default but extendable to your heart's content.

## 👏 Credits
This project is an extension of the awesome vue2-leaflet-geosearch by @fega. Huge thanks for laying the groundwork! 🙌


## 🎉 Join Wogwon Society
We're building software we love. Feel free to fork, suggest ideas, or contribute! Wogwon Society GitHub 💻

