import { create } from 'zustand'

const useBearStore = create((set) => ({

    text : "",
    setText : (inputText) => set((state) => ({text : state.inputText})),

}));


export default useBearStore;

