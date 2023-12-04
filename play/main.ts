import { createApp } from "vue";
import App from "./app.vue";
import junui from "@jun-ui/components";
const app = createApp(App);
app.use(junui);
app.mount("#app");
