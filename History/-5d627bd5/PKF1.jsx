import { create } from 'zustand'

const useBearStore = create((set) => ({

    text : "",
    setText : (inputText) => set((state) => ({text : inputText})),
    words : text.split(" ")

}));


export default useBearStore;

