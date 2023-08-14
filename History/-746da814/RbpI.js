import { create } from 'zustand'

const useStore = create((set) => ({
    text : "",
    setText: (text) => set((state) => ({ text : text })),

}))


export default useStore;