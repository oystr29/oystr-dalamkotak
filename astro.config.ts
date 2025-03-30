// @ts-check
import qwikdev from '@qwikdev/astro';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()],
  vite: {
    plugins: [tailwindcss()],
  },
});
