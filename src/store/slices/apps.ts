import { StateCreator } from "zustand"
import axios from 'axios'
import { App } from "../../domain/app"

// interface AppsResponse {
//   data: App[];
// }

const getApps = async() => {
  try {
    const res = await axios.get<App[]>(`${process.env.REACT_APP_API_URL}/app`)
    console.log("🚀 ~ file: apps.ts ~ line 13 ~ getApps ~ res", res)
    return res.data
  } catch (err) {
    console.log("🚀 ~ file: apps.ts ~ line 14 ~ getApps ~ err", err)    
  }
}

export interface AppsSlice {
  apps: App[],
  fetchApp: () => void
}

export const createAppsSlice: StateCreator<
  AppsSlice,
  [],
  [],
  AppsSlice
> = (set) => ({
  apps: [],
  fetchApp: async() => {
    const res = await getApps()
    set({apps: res})
  }
})
