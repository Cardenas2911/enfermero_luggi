import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  site: 'https://cardenas2911.github.io',
  base: '/enfermero_luggi',
  vite: {
    plugins: [tailwindcss()]
  }
});