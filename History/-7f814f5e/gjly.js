import create from "zustand"

import { devtools, persist } from "zustand/middleware"
const useStore = create((set) => ({
    courses : 0,
    addCourse : (course) => set((state) => ({courses : [... state.courses , course] })),
}))