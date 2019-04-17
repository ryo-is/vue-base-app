import { Component, Vue } from "vue-property-decorator"
import router from "@/router"

@Component({})
export default class Home extends Vue {
  public title: string = "アンケートさん"

  /**
   * アンケート作成ページに遷移
   */
  public linkCreatePage() {
    router.push("/create")
  }
}
