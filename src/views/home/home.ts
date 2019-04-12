import { Component, Vue } from "vue-property-decorator";
import router from "@/router";

@Component({})
export default class Home extends Vue {
  public title: string = "Vue Enquete App"

  public linkCreatePage() {
    router.push("/create")
  }
}
