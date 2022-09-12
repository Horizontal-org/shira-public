const mockQuestions = [
  {
    content: "Question 1",
    answer: 'phising',
    app: 'Gmail'
  },
  {
    content: "Question 2",
    answer: 'legitimate',
    app: 'Whatsapp'
  },
]

export const getQuiz = async() => {
  return mockQuestions;
}