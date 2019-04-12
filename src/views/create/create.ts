import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Create extends Vue {
  public title: string = "Create Enquete Page"
  public enqueteTitle: string = "好きな果物は？"
  public description: string = "次の中から最も好きな果物を答えてください"
  public answerItems: string[] = ["りんご", "バナナ", "オレンジ"]
  public addAnswerItemText: string = ""
  public selectableNumber: number = 1

  // 選択肢の追加
  public addAnswerItem() {
    this.answerItems.push(this.addAnswerItemText)
    this.addAnswerItemText = ""
  }

  // アンケート作成
  public submitCreateEnquete() {
    console.log(this.answerItems)
  }
}
