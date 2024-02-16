import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'VueButtonYy',
      fileName: (format) => `vue-button-yy.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      globals: {
        vue: 'Vue'
      }
    }
  },
  plugins: [vue()],
})
