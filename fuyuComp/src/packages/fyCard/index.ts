import fyCard from "./index.vue";
fyCard.install = function (app) {
	app.component("fyCard", fyCard);
};

export { fyCard };
export default fyCard;
