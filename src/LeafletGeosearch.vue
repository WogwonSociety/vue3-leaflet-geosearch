<script lang="ts" setup>
import {onMounted, onBeforeUnmount, inject} from 'vue';
import {GeoSearchControl, OpenStreetMapProvider} from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import {Map} from 'leaflet';

// Inject the map instance from the parent <l-map>
const map: Map | undefined = inject<Map | undefined>('leafletRef');

// Ensure the map instance is injected properly
if (!map) {
  throw new Error('Leaflet map instance not found. Make sure this component is used inside map component.');
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
  if (!map) {
    console.error('Leaflet map instance not found. Make sure this component is used inside map component.');
    return;
  }
  map.addControl(searchControl);

  let searchControlContainer = searchControl.getContainer();

  if (!searchControlContainer) {
    console.error('Search control container not found');
    return;
  }

  searchControlContainer.onclick = e => {
    e.stopPropagation();
  };
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