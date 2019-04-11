import { Component, Vue } from "vue-property-decorator"
import { QuestionItems } from "@/types"

@Component({})
export default class Create extends Vue {
  public title: string = "Create Vote Page"
  public newVoteTitle: string = ""
  public description: string = ""
  public questionItems: QuestionItems[] = [
    {
      question: "",
      answers: []
    }
  ]
}
