export interface createEnqueteInputType {
  enqueteTitle: string,
  description?: string,
  answerItems: string,
  selectableNumber: number
}

export interface createEnqueteResultType {
  data: {
    createEnquete: createEnqueteInputType
  }
}
