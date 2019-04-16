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
