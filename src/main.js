import { createApp } from "vue";
import App from "./App.vue";

//Import Pinia into your config file
import { createPinia } from "pinia";

import "./assets/main.css";

createApp(App).use(createPinia()).mount("#app");
