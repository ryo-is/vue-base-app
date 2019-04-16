import { API, graphqlOperation } from "aws-amplify"
import dyajs from "dayjs"
import {
  EnqueteType,
  CreateEnqueteResultType,
  GetEnqueteResultType,
  QueryEnqueteAnswerResultType
} from "@/types"

const enqueteItems: string = `
id
enqueteTitle
description
answerItems
selectableNumber
`
const enqueteAnswerItems: string = `
id
answer_time
answers
`

export class EnqueteAppAPIClass {

  /**
   * アンケート作成
   * @param {String} enqueteTitle
   * @param {String} description
   * @param {String[]} answerItems
   * @param {Number} selectableNumberInput
   */
  public static async createEnquete(
    enqueteTitle: string,
    description: string,
    answerItems: string[],
    selectableNumberInput: number
  ) {
    try {
      const descriptionInput: string | null = (description !== "") ? description : null
      const gqlParam: string = `
        mutation create {
          createEnquete(
            input: {
              enqueteTitle: "${enqueteTitle}"
              description: "${descriptionInput}"
              answerItems: ${this.makeArrayBody(answerItems)}
              selectableNumber: ${selectableNumberInput}
            }
          ) {
            ${enqueteItems}
          }
        }
      `
      await API.graphql(graphqlOperation(gqlParam)) as CreateEnqueteResultType
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * アンケート取得
   * @param {String} enqueteId
   */
  public static async getEnquete(enqueteId: string): Promise<EnqueteType> {
    try {
      const gqlParam: string = `
        query get {
          getEnquete(id: "${enqueteId}") {
            ${enqueteItems}
          }
        }
      `
      const result: GetEnqueteResultType
        = await API.graphql(graphqlOperation(gqlParam)) as GetEnqueteResultType
      return result.data.getEnquete
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * アンケート回答作成
   * @param {String} id
   * @param {String[]} answerItems
   */
  public static async createEnqueteAnswer(
    id: string,
    answerItems: string[]
  ) {
    try {
      const gqlParam: string = `
        mutation create {
          createEnqueteAnswer(
            input: {
              id: "${id}"
              answer_time: "${dyajs().format("YYYY/MM/DD HH:mm:ss")}"
              answers: ${this.makeArrayBody(answerItems)}
            }
          ) {
            ${enqueteAnswerItems}
          }
        }
      `
      await API.graphql(graphqlOperation(gqlParam))
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * アンケート結果取得
   * @param {String} id
   */
  public static async queryEnqueteAnswer(id: string) {
    try {
      const gqlParam: string = `
        query query {
          queryEnqueteAnswers(id: "${id}") {
            items {
              ${enqueteAnswerItems}
            }
          }
        }
      `
      const result: QueryEnqueteAnswerResultType
        = await API.graphql(graphqlOperation(gqlParam)) as QueryEnqueteAnswerResultType
      console.log(result)
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * 配列用生成用
   * @param array
   */
  private static makeArrayBody(array: any[]) {
    let returnBody: string = "["
    for (let i: number = 0; i < array.length; i++) {
      returnBody = `${returnBody}"${array[i]}"`
      if (i !== array.length - 1) {
        returnBody += ","
      }
    }
    return returnBody + "]"
  }
}
