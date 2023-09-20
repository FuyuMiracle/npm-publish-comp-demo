import fyConfigProvider from "./index.vue";

fyConfigProvider.install = function (app) {
	app.component("fyConfigProvider", fyConfigProvider);
};
export { fyConfigProvider };
export default fyConfigProvider;
