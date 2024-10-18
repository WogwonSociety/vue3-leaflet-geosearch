<template>
  <!-- No template needed as this component interacts directly with the Leaflet map -->
</template>

<script lang="ts">
import {defineComponent, inject, onMounted, onBeforeUnmount} from 'vue';
import {type Map} from 'leaflet';
import {OpenStreetMapProvider, GeoSearchControl} from 'leaflet-geosearch';

export default defineComponent({
  name: 'LeafletGeosearch',
  setup() {
    // Inject the Leaflet map instance
    const leafletRef = inject<Map>('leafletRef');
    if (!leafletRef) {
      throw new Error('Leaflet map instance not found. Make sure this component is used inside a map component.');
    }

    // Create a new provider for OpenStreetMap
    const provider = new OpenStreetMapProvider();

    // Create a new GeoSearch control with the defined options
    const searchControl = GeoSearchControl({
      provider,
      style: 'bar',
      showMarker: true,
      retainZoomLevel: false,
      autoClose: true,
      searchLabel: 'Enter address'
    });

    // Add control to the map when the component is mounted
    onMounted(() => {
      if (leafletRef) {
        leafletRef.addControl(searchControl);
      }

      // Prevent propagation of click events inside the search control container
      const container = searchControl.getContainer();
      if (container) {
        container.onclick = (event: MouseEvent) => {
          event.stopPropagation();
        };
      }
    });

    // Remove control from the map when the component is unmounted
    onBeforeUnmount(() => {
      leafletRef.removeControl(searchControl);
    });
  }
});
</script>