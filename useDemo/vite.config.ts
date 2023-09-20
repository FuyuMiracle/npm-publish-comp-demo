import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import FuyuCompResolver from "fuyu-comp/resolver";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	plugins: [
		vue(),
		Components({
			resolvers: [FuyuCompResolver()],
		}),
		// Components({
		// 	resolvers: [
		// 		(componentName) => {
		// 			if (componentName.startsWith("Fy")) {
		// 				//因为componentName组件名称是大写，而fuyu-comp里的组件名称首字母是小写，所以需要把转成小写
		// 				const name = componentName.replace(
		// 					componentName[0],
		// 					componentName[0].toLocaleLowerCase()
		// 				);
		// 				return {
		// 					name, //组件名称
		// 					from: "fuyu-comp", //组件插件
		// 					sideEffects: "fuyu-comp/dist/style.css", //样式
		// 				};
		// 			}
		// 		},
		// 	],
		// }),
	],
});
