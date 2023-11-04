import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "img/[name]-[hash][extname]";
          }

          if (/\.(woff|woff2)$/.test(name ?? "")) {
            return "fonts/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "css/[name]-[hash][extname]";
          }

          // default value
          return "others/[name]-[hash][extname]";
        },
      },
    },
  },
});
