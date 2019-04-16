import Vue from "vue"
import Router from "vue-router"
import Home from "./views/home/Home.vue"
import Create from "./views/create/Create.vue"
import Enquete from "./views/enquete/Enquete.vue"
import Result from "./views/result/Result.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/create",
      name: "create",
      component: Create,
    },
    {
      path: "/enquete/:enquete_id",
      name: "enquete",
      component: Enquete,
    },
    {
      path: "/result/:enquete_id",
      name: "result",
      component: Result,
    }
  ],
});
