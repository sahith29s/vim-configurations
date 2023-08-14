import { create } from 'zustand'

const useBearStore = create((set) => ({

    text: "",
    setText: (inputText) => set((state) => ({ text: inputText })),


    totalNumberOfWords: 0,
    setTotalNumberOfWords: (text) => {
        let numberWords = text.split(" ")

        numberWords = numberWords.filter((element) => {
            return element !== "";
        })
        numberWords = numberWords.length
        set((state) => ({ totalNumberOfWords: numberWords}))
    },
    
    totalNumberOfLetters: 0,
    setTotalNumberOfLetters: (text) => {
        let numberLetters = text.split("")
        numberLetters = numberLetters.filter((element) => {
            return element !== " ";
        })
        numberLetters = numberLetters.length
        set((state) => ({totalNumberOfLetters : numberLetters}))
    },
    




}));

// let removedSpaceText = text.split(" ")
// removedSpaceText = removedSpaceText.filter((element) =>{
//     return element !== "";
// })


export default useBearStore;

