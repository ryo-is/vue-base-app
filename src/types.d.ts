export interface EnqueteType {
  id?: string,
  enqueteTitle: string,
  description?: string,
  answerItems: string[],
  selectableNumber: number
}

export interface CreateEnqueteResultType {
  data: {
    createEnquete: EnqueteType
  }
}

export interface GetEnqueteResultType {
  data: {
    getEnquete: EnqueteType
  }
}

export interface EnqueteAnswerType {
  id: string,
  answer_time: string,
  answers: string[]
}

export interface QueryEnqueteAnswerResultType {
  data: {
    queryEnqueteAnswers: {
      items: EnqueteAnswerType[]
    }
  }
}

export interface AnswerNumbersType {
  name: string
  answerNumber: number
}

export interface EnqueteHistoriesType {
  enqueteIds: string[]
}
