import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   lib: {
  //     // Could also be a dictionary or array of multiple entry points
  //     entry: resolve("./", 'src/main.jsx'),
  //     name: 'PROJECT-MANAGEMENT-UNIVERSITY',
  //     // the proper extensions will be added
  //     fileName: 'PROJECT-MANAGEMENT-UNIVERSITY',
  //   },
  //   rollupOptions: {
  //     // make sure to externalize deps that shouldn't be bundled
  //     // into your library
  //     external: ['react'],
  //     output: {
  //       // Provide global variables to use in the UMD build
  //       // for externalized deps
  //       globals: {
  //         react: 'react',
  //       },
  //     },
  //   },
  // },
})
