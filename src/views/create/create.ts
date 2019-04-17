import { Component, Vue } from "vue-property-decorator"
import { EnqueteAppAPIClass } from "@/gqlServices/enquete_app_api_service"
import router from "@/router"

@Component({})
export default class Create extends Vue {
  public title: string = "Create Enquete Page"
  public enqueteTitle: string = ""
  public description: string = ""
  public answerItems: string[] = []
  public addAnswerItemText: string = ""
  public selectableNumber: number = 1

  /**
   * 選択肢の追加
   */
  public addAnswerItem() {
    if (this.addAnswerItemText !== "") {
      this.answerItems.push(this.addAnswerItemText)
      this.addAnswerItemText = ""
    }
  }

  /**
   * アンケート作成
   */
  public async submitCreateEnquete() {
    const enqueteId: string = await EnqueteAppAPIClass.createEnquete(
      this.enqueteTitle, this.description, this.answerItems, this.selectableNumber)
    return router.push("/enquete/" + enqueteId)
  }
}
