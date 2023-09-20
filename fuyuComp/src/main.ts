import { createApp } from "vue";
import App from "./App.vue";
// import Plugins from "./plugins";
const app = createApp(App);
// for (let key in Plugins) {
// 	console.log("Plugins[key]==", Plugins[key]);
// 	app.use(Plugins[key]);
// }
app.mount("#app");
