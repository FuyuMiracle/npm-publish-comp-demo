import fyList from "./index.vue";

fyList.install = function (app) {
	app.component("fyList", fyList);
};

export { fyList };
export default fyList;
