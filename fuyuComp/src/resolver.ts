import type {
	ComponentResolveResult,
	ComponentResolver,
} from "unplugin-vue-components/types";

function getIoResolved(name: string): ComponentResolveResult {
	const packageName = "fuyu-comp";

	const style = `${packageName}/dist/style.css`;

	//因为name传入进来时首字母是大写的，但我们的组件首字母是小写的，所以需要对组件首字母大写转小写
	const compName = name.replace(name[0], name[0].toLocaleLowerCase());

	return {
		name: compName,
		from: packageName,
		sideEffects: style,
	};
}

const FuyuCompResolver = (): ComponentResolver => {
	return {
		type: "component",
		resolve: (name) => {
			//name就是组件的名称，name传入进来时，首字母默认就是大写的
			if (name.startsWith("Fy")) {
				//这里对是否为fy开头的组件做一个过滤处理
				return getIoResolved(name);
			}
		},
	};
};

export { FuyuCompResolver };
export default FuyuCompResolver;
