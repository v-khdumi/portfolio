// vite.config.js
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy
} from "file:///workspaces/portfolio/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///workspaces/portfolio/node_modules/vite/dist/node/index.js";
import jsconfigPaths from "file:///workspaces/portfolio/node_modules/vite-jsconfig-paths/dist/index.mjs";
import mdx from "file:///workspaces/portfolio/node_modules/@mdx-js/rollup/index.js";
import remarkFrontmatter from "file:///workspaces/portfolio/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///workspaces/portfolio/node_modules/remark-mdx-frontmatter/index.js";
import rehypeImgSize from "file:///workspaces/portfolio/node_modules/rehype-img-size/index.js";
import rehypeSlug from "file:///workspaces/portfolio/node_modules/rehype-slug/index.js";
import rehypePrism from "file:///workspaces/portfolio/node_modules/@mapbox/rehype-prism/index.js";
var vite_config_default = defineConfig({
  assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.glsl"],
  build: {
    assetsInlineLimit: 1024
  },
  server: {
    port: 7777
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: "public" }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react"
    }),
    remixCloudflareDevProxy(),
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/route.js", { index: true });
        });
      }
    }),
    jsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9wb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi93b3Jrc3BhY2VzL3BvcnRmb2xpby92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vd29ya3NwYWNlcy9wb3J0Zm9saW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQge1xuICB2aXRlUGx1Z2luIGFzIHJlbWl4LFxuICBjbG91ZGZsYXJlRGV2UHJveHlWaXRlUGx1Z2luIGFzIHJlbWl4Q2xvdWRmbGFyZURldlByb3h5LFxufSBmcm9tICdAcmVtaXgtcnVuL2Rldic7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBqc2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtanNjb25maWctcGF0aHMnO1xuaW1wb3J0IG1keCBmcm9tICdAbWR4LWpzL3JvbGx1cCc7XG5pbXBvcnQgcmVtYXJrRnJvbnRtYXR0ZXIgZnJvbSAncmVtYXJrLWZyb250bWF0dGVyJztcbmltcG9ydCByZW1hcmtNZHhGcm9udG1hdHRlciBmcm9tICdyZW1hcmstbWR4LWZyb250bWF0dGVyJztcbmltcG9ydCByZWh5cGVJbWdTaXplIGZyb20gJ3JlaHlwZS1pbWctc2l6ZSc7XG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tICdyZWh5cGUtc2x1Zyc7XG5pbXBvcnQgcmVoeXBlUHJpc20gZnJvbSAnQG1hcGJveC9yZWh5cGUtcHJpc20nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBhc3NldHNJbmNsdWRlOiBbJyoqLyouZ2xiJywgJyoqLyouaGRyJywgJyoqLyouZ2xzbCddLFxuICBidWlsZDoge1xuICAgIGFzc2V0c0lubGluZUxpbWl0OiAxMDI0LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA3Nzc3LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgbWR4KHtcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtbcmVoeXBlSW1nU2l6ZSwgeyBkaXI6ICdwdWJsaWMnIH1dLCByZWh5cGVTbHVnLCByZWh5cGVQcmlzbV0sXG4gICAgICByZW1hcmtQbHVnaW5zOiBbcmVtYXJrRnJvbnRtYXR0ZXIsIHJlbWFya01keEZyb250bWF0dGVyXSxcbiAgICAgIHByb3ZpZGVySW1wb3J0U291cmNlOiAnQG1keC1qcy9yZWFjdCcsXG4gICAgfSksXG4gICAgcmVtaXhDbG91ZGZsYXJlRGV2UHJveHkoKSxcbiAgICByZW1peCh7XG4gICAgICByb3V0ZXMoZGVmaW5lUm91dGVzKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmVSb3V0ZXMocm91dGUgPT4ge1xuICAgICAgICAgIHJvdXRlKCcvJywgJ3JvdXRlcy9ob21lL3JvdXRlLmpzJywgeyBpbmRleDogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIGpzY29uZmlnUGF0aHMoKSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUDtBQUFBLEVBQy9PLGNBQWM7QUFBQSxFQUNkLGdDQUFnQztBQUFBLE9BQzNCO0FBQ1AsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8saUJBQWlCO0FBRXhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLGVBQWUsQ0FBQyxZQUFZLFlBQVksV0FBVztBQUFBLEVBQ25ELE9BQU87QUFBQSxJQUNMLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsZUFBZSxDQUFDLENBQUMsZUFBZSxFQUFFLEtBQUssU0FBUyxDQUFDLEdBQUcsWUFBWSxXQUFXO0FBQUEsTUFDM0UsZUFBZSxDQUFDLG1CQUFtQixvQkFBb0I7QUFBQSxNQUN2RCxzQkFBc0I7QUFBQSxJQUN4QixDQUFDO0FBQUEsSUFDRCx3QkFBd0I7QUFBQSxJQUN4QixNQUFNO0FBQUEsTUFDSixPQUFPLGNBQWM7QUFDbkIsZUFBTyxhQUFhLFdBQVM7QUFDM0IsZ0JBQU0sS0FBSyx3QkFBd0IsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUFBLFFBQ3BELENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
