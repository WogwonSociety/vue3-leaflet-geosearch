import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import {terser} from 'rollup-plugin-terser';

// Plugin to remove any CSS files from the output
function removeCss() {
    return {
        name: 'remove-css',
        transform(code, id) {
            if (id.endsWith('.css')) {
                return ''; // Remove any CSS code
            }
            return null;
        },
        generateBundle(options, bundle) {
            for (const fileName in bundle) {
                if (fileName.endsWith('.css')) {
                    delete bundle[fileName]; // Delete the CSS file from the bundle
                }
            }
        }
    };
}

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
            outDir: 'dist',
            staticImport: true
        }),
        removeCss()
    ],
    build: {
        emptyOutDir: true,
        cssCodeSplit: false,
        lib: {
            entry: './src/LeafletGeosearch.vue',  // Update the path to the correct file name
            name: 'LeafletGeosearch',
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'iife']
        },
        rollupOptions: {
            plugins: [
                terser({
                    format: {
                        comments: false
                    },
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                        pure_funcs: ['performance.mark', 'performance.measure']
                    }
                })
            ],
            external: ['vue', 'leaflet-geosearch', 'vue-leaflet', 'leaflet'],
            output: {
                globals: {
                    vue: 'Vue',
                    leaflet: 'L',
                    'leaflet-geosearch': 'LeafletGeoSearch',
                }
            }
        }
    }
});
