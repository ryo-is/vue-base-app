import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/helloWorld/HelloWorld.vue"; // @ is an alias to /src
import router from "@/router";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public title: string = "Vue Vote App"

  public linkCreatePage() {
    router.push("/")
  }
}
