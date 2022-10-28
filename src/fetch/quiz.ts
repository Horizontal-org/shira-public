import axios from "axios"
import { App } from "../domain/app"
import { FieldOfWork } from "../domain/field_of_work"
import { Question } from "../domain/question"
import { Quiz } from "../domain/quiz"

// const mockQuestions = [
//   {
//     content: "Question 1",
//     answer: 'phising',
//     app: 'Gmail'
//   },
//   {
//     content: "Question 2",
//     answer: 'legitimate',
//     app: 'Whatsapp'
//   },
// ]

export const getQuiz = async(apps:string[], fieldsOfWork: string[]) => {
  const res = await axios.get<Question[]>(`${process.env.REACT_APP_API_URL}/question?apps=${apps.join(',')}`)
  return res.data
}