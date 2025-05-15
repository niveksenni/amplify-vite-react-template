import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import PinyVite from '@pinegrow/piny-vite' // <-- import the plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), PinyVite()]
})
