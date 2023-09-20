import { defineConfig } from "vite";
import path, { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	plugins: [
		vue(),
		dts(), //使用的typescript，需要生成*.d.ts声明文件
	],
	build: {
		minify: true,
		lib: {
			entry: path.resolve(__dirname, "./src/resolver.ts"),
			name: "name",
			fileName: (format) => {
				if (format === "es") {
					return "resolver.mjs";
				} else {
					return "resolver.cjs";
				}
			},
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ["vue"],
			output: {
				dir: path.resolve(__dirname, "./dist"),
			},
		},
		emptyOutDir: false,
	},
});
