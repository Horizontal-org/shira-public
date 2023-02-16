import { StateCreator } from "zustand"
import axios from 'axios'

export interface AnalyticsSlice {
  ci: any;
  setCi: (ci: any) => void
}

export const createAnalyticsSlice: StateCreator<
  AnalyticsSlice,
  [],
  [],
  AnalyticsSlice
> = (set) => ({
  ci: null,
  setCi: (ci) => {    
    set({ci})
  }
})
