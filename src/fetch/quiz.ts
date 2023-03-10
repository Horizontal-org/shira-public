import axios from "axios"
import { App } from "../domain/app"
import { FieldOfWork } from "../domain/field_of_work"
import { Question } from "../domain/question"
import { Quiz } from "../domain/quiz"

export const getQuiz = async(apps:string[], fieldsOfWork: string[]) => {
  console.log("🚀 ~ file: quiz.ts:8 ~ getQuiz ~ fieldsOfWork:", fieldsOfWork)
  const res = await axios.get<Question[]>(`${process.env.REACT_APP_API_URL}/question/quiz?fieldsOfWork=${fieldsOfWork.join(',')}&apps=${apps.join(',')}`)
  return res.data
}