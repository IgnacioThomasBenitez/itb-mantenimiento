import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/static'; // ← esta es la clave

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static', // ← indicamos que es un sitio estático
  adapter: vercel(),
});
