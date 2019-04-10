import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"
import "./plugins/element.js"

import Amplify from "aws-amplify"
import awsExports from "@/aws-exports.js"
Amplify.configure(awsExports)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
