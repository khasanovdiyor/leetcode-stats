import Vue from "vue";
import App from "./App.vue";
import { createProvider } from "./vue-apollo";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
