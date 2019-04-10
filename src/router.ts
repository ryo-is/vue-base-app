import Vue from "vue"
import Router from "vue-router"
import Home from "./views/home/Home.vue"
import Create from "./views/create/Create.vue"

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
    }
  ],
});
