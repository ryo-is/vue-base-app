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
    this.calcEnqueteAnswer()
  }

  public calcEnqueteAnswer() {
    console.log(this.enqueteAnswers)
  }
}
