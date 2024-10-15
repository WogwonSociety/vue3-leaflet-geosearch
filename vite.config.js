import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: './src/Vue3LeafletGeosearch.vue',
            name: 'Vue3LeafletGeosearch',
            fileName: (format) => `vue3-leaflet-geosearch.${format}.js`,
            formats: ['es', 'iife']
        },
        rollupOptions: {
            external: ['vue', 'leaflet-geosearch', 'vue-leaflet'],
            output: {
                globals: {
                    vue: 'Vue',
                    'leaflet-geosearch': 'LeafletGeoSearch',
                    'vue-leaflet': 'VueLeaflet'
                }
            }
        }
    }
});
