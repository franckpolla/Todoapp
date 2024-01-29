import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Todoapp/",
  build: {
    outDir: "dist", // Change this to match the desired directory name
  },
});
