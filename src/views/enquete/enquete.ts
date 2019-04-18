import { Component, Vue, Watch } from "vue-property-decorator"
import { EnqueteAppAPIClass } from "@/gqlServices/enquete_app_api_service"
import {
  EnqueteType,
  EnqueteHistoriesType
} from "@/types"
import router from "@/router"

@Component({})
export default class Enquete extends Vue {
  public enquete: EnqueteType = null
  public enqueteId: string = ""
  public enqueteTitle: string = ""
  public description: string = ""
  public answerItems: string[] = []
  public selectableNumber: number = 0
  public selectedAnswers: string[] = []

  @Watch("enquete") public watchEnquete() {
    this.enqueteTitle = this.enquete.enqueteTitle
    this.description = this.enquete.description
    this.answerItems = this.enquete.answerItems
    this.selectableNumber = this.enquete.selectableNumber
  }

  public async created() {
    this.enqueteId = this.$route.params.enquete_id
    this.enquete = await EnqueteAppAPIClass.getEnquete(this.enqueteId)
    if (this.enquete === null) {
      router.push("/")
    }
  }

  /**
   * Topページに戻る
   */
  public returnTopPage() {
    return router.push("/")
  }

  /**
   * アンケート回答
   */
  public async submitAnswers() {
    if (this.selectedAnswers.length > 0) {
      await EnqueteAppAPIClass.createEnqueteAnswer(this.enqueteId, this.selectedAnswers)
      this.selectedAnswers = []
      const enqueteHistories: EnqueteHistoriesType | null = JSON.parse(localStorage.getItem("history"))
      if (enqueteHistories.enqueteIds.indexOf(this.enqueteId) < 0) {
        enqueteHistories.enqueteIds.push(this.enqueteId)
      }
      localStorage.setItem("history", JSON.stringify(enqueteHistories))
    } else {
      alert("必ず1つ以上選択してください")
    }
  }
}
