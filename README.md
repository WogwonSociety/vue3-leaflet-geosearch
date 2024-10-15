
# Vue3 Leaflet GeoSearch

This plugin extends the functionality of **vue-leaflet** for Vue 3 by adding a **GeoSearchControl** to your Leaflet maps using `leaflet-geosearch`.

---

## Installation

Dependencies:
- ` @vue-leaflet/vue-leaflet`
- `leaflet`
- `leaflet-geosearch`
- `vite` (Development)

```bash
bun add @wogwon/vue3-leaflet-geosearch
```
---

## Usage

Below is an example of how to integrate this plugin inside a Leaflet map using Vue 3's `<l-map>` component.

### Example

```vue
<template>
  <div style="height: 600px; width: 800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <LeafletGeosearch /> <!-- Add the GeoSearchControl component here -->
    </l-map>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue';
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import GeoSearchControl from '@wogwon/vue3-leaflet-geosearch'; // Import your GeoSearchControl component

// Reactive zoom state
const zoom = ref(2);

// Provide map reference to GeoSearchControl
const map = ref(null);
</script>

<style scoped>
/* Optional styling */
.leaflet-container {
  height: 100%;
  width: 100%;
}
</style>
```

---

## Conclusion

With this setup, you now have a working **GeoSearchControl** integrated into your Vue 3 Leaflet map. Ensure that the map reference is properly provided and injected into the child component for the GeoSearch control to work.

If you encounter any issues, refer to the [leaflet-geosearch documentation](https://github.com/smeijer/leaflet-geosearch) or the [vue-leaflet documentation](https://vue-leaflet.github.io/vue-leaflet/).
