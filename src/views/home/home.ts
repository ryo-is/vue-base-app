import { Component, Vue } from "vue-property-decorator";
import router from "@/router";

@Component({})
export default class Home extends Vue {
  public title: string = "Vue Vote App"

  public linkCreatePage() {
    router.push("/")
  }
}
