import { StateCreator } from "zustand"
import { getQuiz } from "../../fetch/quiz";
import { Quiz } from "../../domain/quiz";
import { Question } from "../../domain/question";


export interface QuizSlice {
  fetchQuiz: (
    apps: string[],
    fieldsOfWork: string[]
  ) => void;
  quiz: Question[]
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
  quiz: []
})
