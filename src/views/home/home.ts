import { Component, Vue } from "vue-property-decorator"
import router from "@/router"
import { EnqueteAppAPIClass } from "@/gqlServices/enquete_app_api_service"
import {
  EnqueteType,
  EnqueteHistoriesType
} from "@/types"

@Component({})
export default class Home extends Vue {
  public title: string = "アンケート作るんです。"
  public enqueteHistories: EnqueteType[] = []

  public async created() {
    const enqueteHistories: EnqueteHistoriesType | null = JSON.parse(localStorage.getItem("history"))
    const promises: any[] = []
    enqueteHistories.enqueteIds.forEach((id: string) => {
      promises.push(EnqueteAppAPIClass.getEnquete(id))
    })
    this.enqueteHistories = await Promise.all(promises)
    console.log(this.enqueteHistories)
  }

  /**
   * アンケート作成ページに遷移
   */
  public linkCreatePage() {
    return router.push("/create")
  }

  /**
   * 回答ページに遷移
   * @param {String} id
   */
  public linkEnquetePage(id: string) {
    return router.push("/enquete/" + id)
  }

  /**
   * 結果ページに遷移
   * @param {String} id
   */
  public linkResultPage(id: string) {
    return router.push("/result/" + id)
  }
}
