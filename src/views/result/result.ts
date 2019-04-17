import { Component, Vue, Watch } from "vue-property-decorator"
import { EnqueteAppAPIClass } from "@/gqlServices/enquete_app_api_service"
import {
  EnqueteType,
  EnqueteAnswerType
} from "@/types"
import router from "@/router"

@Component({})
export default class Result extends Vue {
  public enquete: EnqueteType = null
  public enqueteId: string = ""
  public enqueteAnswers: EnqueteAnswerType[] = []
  public enqueteTitle: string = ""
  public description: string = ""
  public answerItems: string[] = []
  public selectableNumber: number = 0
  public selectedAnswers: string[] = []
  public answerNumbers: {[key: string]: number} = {}

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
    this.enqueteAnswers = await EnqueteAppAPIClass.queryEnqueteAnswer(this.enqueteId)
    this.initEnqueteAnswer()
    this.calcEnqueteAnswer()
    EnqueteAppAPIClass.createEnqueteSubscriber(this)
  }

  /**
   * Topページに戻る
   */
  public returnTopPage() {
    return router.push("/")
  }

  /**
   * 回答集計の初期化
   */
  public initEnqueteAnswer() {
    const initAnswerNumbers: {[key: string]: number} = {}
    this.answerItems.forEach((item: string) => {
      initAnswerNumbers[item] = 0
    })
    this.answerNumbers = initAnswerNumbers
  }

  /**
   * 回答集計
   */
  public calcEnqueteAnswer() {
    this.enqueteAnswers.forEach((item: EnqueteAnswerType) => {
      item.answers.forEach((value: string) => {
        this.answerNumbers[value] += 1
      })
    })
  }
}
