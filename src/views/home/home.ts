import { Component, Vue } from "vue-property-decorator";
import router from "@/router";

@Component({})
export default class Home extends Vue {
  public title: string = "アンケートさん"

  public linkCreatePage() {
    router.push("/create")
  }
}
