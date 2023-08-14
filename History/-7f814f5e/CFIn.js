import create from "zustand"

import { devtools, persist } from "zustand/middleware"
const useStore = create((set) => ({
    courses : ["lskdjflsd"],
    addCourse : (course) => set((state) => ({courses : [... state.courses , course] })),
}))


export default useStore