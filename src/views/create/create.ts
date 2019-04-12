import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Create extends Vue {
  public title: string = "Create Enquete Page"
  public newEnqueteTitle: string = ""
  public description: string = ""
  public answerItems: string[] = ["Apple", "Banana", "Orange"]
  public addAnswerItemText: string = ""

  // 選択肢の追加
  public addAnswerItem() {
    this.answerItems.push(this.addAnswerItemText)
    this.addAnswerItemText = ""
  }

  // アンケート作成
  public submitCreateEnquete() {
    console.log(this.answerItems);
  }
}
