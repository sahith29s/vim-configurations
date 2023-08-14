import { create } from 'zustand'

const useStore = create((set) => ({
    text : 1,
    setText: () => set((state) => ({ text : state.text + 1})),

}))


export default useStore;