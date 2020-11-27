import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueYoutube from "vue-youtube";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faBook,
  faFileCode,
  faStreetView,
  faPoll,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFileWord,
  faFileExcel,
  faFilePowerpoint,
  faFilePdf,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faHome,
  faBook,
  faFileCode,
  faStreetView,
  faPoll,
  faFileWord,
  faFileExcel,
  faFilePowerpoint,
  faFilePdf
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueYoutube);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
