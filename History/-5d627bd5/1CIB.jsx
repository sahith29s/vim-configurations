import { create } from 'zustand'

const useBearStore = create((set) => ({

    text : "",
    setText : (inputText) => set((state) => ({text : inputText})),
    totalNumberOfWords : "",
    setTotalNumberOfWords: (inputText) => set((state) => ({totalNumberOfWords : inputText})),


}));


export default useBearStore;

