import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "./index.html"),
                "js/jquery.min": path.resolve(__dirname, "./src/assets/js/jquery.min.js"),
                "css/style": path.resolve(__dirname, "./src/assets/css/style.css"),
            },
        },
    },
});
