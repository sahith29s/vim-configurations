import { create } from 'zustand'

const useStore = create((set) => ({
    text : "This is text and stuff",
    setText: (text) => set((state) => ({ text : "sahith"})),

}))


export default useStore;