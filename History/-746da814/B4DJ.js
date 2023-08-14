import { create } from 'zustand'

const useStore = create((set) => ({
    text : "This is text",
    setText: (text) => set((state) => ({ text : text })),

}))


export default useStore;