//引入组件
import fyCard from "./fyCard/index";
import fyList from "./fyList/index";
import fyConfigProvider from "./fyConfigProvider/index";

//引入全局样式
import "../theme-chalk/index.scss";

//引入插件
import Plugins from "../plugins";

const components = {
	fyCard,
	fyList,
	fyConfigProvider,
};

const install = function (app, opts = {}) {
	//注册插件
	for (let key in Plugins) {
		app.use(Plugins[key], opts);
	}
	//注册组件
	Object.keys(components).forEach((key) => {
		app.component(key, components[key]);
	});
};

//导出组件，让按需使用时可用
export { fyCard, fyList, fyConfigProvider };

//导出全部组件
export default {
	install,
};
