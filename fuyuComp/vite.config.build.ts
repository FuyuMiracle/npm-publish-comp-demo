import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";
// 打包后的目录
// https://vitejs.dev/config/
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
	//配置打包入口 https://cn.vitejs.dev/guide/build.html#library-mode
	build: {
		lib: {
			entry: resolve(__dirname, "./src/packages/index.ts"), //入口
			name: "fuyu-comp", //组件名
			fileName: (format) => `fuyu-comp.${format}.ts`,
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ["vue"],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: "Vue",
				},
				// dir: resolve(__dirname, 'dist') //打包输出目录
			},
		},
	},
});
