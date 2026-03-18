import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
  site: 'https://cardenas2911.github.io',
  base: '/enfermero_luggi',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});