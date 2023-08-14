import { create } from 'zustand'

const useStore = create((set) => ({
    text : 1,
    setText: (text) => set((state) => ({ text : "sahith"})),

}))


export default useStore;