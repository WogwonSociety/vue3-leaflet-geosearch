<script lang="ts" setup>
import { onMounted, onBeforeUnmount, inject } from 'vue';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import { Map } from 'leaflet';

// Inject the map instance from the parent <l-map>
const map: Map = inject<Map>('leafletRef');

// Ensure the map instance is injected properly
if (!map) {
  throw new Error('Leaflet map instance not found. Make sure this component is used inside <l-map>.');
}

// GeoSearch provider and control options
const provider = new OpenStreetMapProvider();
const searchControl = GeoSearchControl({
  provider,
  style: 'bar',
  showMarker: true,
  retainZoomLevel: false,
  autoClose: true,
  searchLabel: 'Enter address',
});

// Mount the control on the map when the component is ready
onMounted(() => {
  map.addControl(searchControl);
  searchControl.getContainer().onclick = e => { e.stopPropagation(); };
});

// Remove the control from the map before the component is destroyed
onBeforeUnmount(() => {
  map.removeControl(searchControl);
});
</script>

<template>
  <!-- No internal map, just integrates as a child -->
  <div/>
</template>

<style scoped>
/* Optional styling for better control layout */
</style>