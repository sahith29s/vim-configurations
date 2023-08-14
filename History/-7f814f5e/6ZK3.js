import create from "zustand"

import { devtools, persist } from "zustand/middleware"
const useStore = create((set) => ({
    course : 0,
    addCourse : (course) => set((state) => ({courses : state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))