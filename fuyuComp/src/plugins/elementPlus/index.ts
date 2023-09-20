import "element-plus/dist/index.css";
import en from "element-plus/es/locale/lang/en";

const install = (app, opts = {}) => {
	app.provide("$locale", opts.locale ? opts.locale : en);
};

export default {
	install,
};
