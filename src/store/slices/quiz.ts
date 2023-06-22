import { StateCreator } from "zustand"
import { getQuiz } from "../../fetch/quiz";
import { Quiz } from "../../domain/quiz";
import { Question } from "../../domain/question";


export interface QuizSlice {
  fetchQuiz: (
    apps: string[],
    fieldsOfWork: string[]
  ) => void;
  quiz: Question[],
  correctedQuestions: Question[],
  setCorrectQuestions: (question: Question) => void
}

export const createQuizSlice: StateCreator<
  QuizSlice,
  [],
  [],
  QuizSlice
> = (set) => ({  
  fetchQuiz: async (apps, fieldsOfWork) => { 
    const res = await getQuiz(apps, fieldsOfWork)
    set({quiz: res})
  },
  quiz: [],
  correctedQuestions: [],
  setCorrectQuestions: (question) => {
    set(state => ({correctedQuestions: [...state.correctedQuestions, question]}))
  }
})
