import { create } from 'zustand'

const useStore = create((set) => ({
    text : "This is text and stuff what the hack are you even taking ",
    setText: (text) => set((state) => ({ text : text })),

}))


export default useStore;