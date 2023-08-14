import { create } from 'zustand'

const useBearStore = create((set) => ({

    text: "",
    setText: (inputText) => set((state) => ({ text: inputText })),


    totalNumberOfWords: 0,
    setTotalNumberOfWords: (text) => {
        let numberWords = text.split(" ")

        numberWords = removedSpaceText.filter((element) => {
            return element !== "";
        })
        numberWords = removedSpaceText.length
        set((state) => ({ totalNumberOfWords: words }))
    },
    
    totalNumberOfLetters: 0,
    setTotalNumberOfLetters: (text) => {
        let numberLetters = text.split("")
        numberLetters = removedSpaceText.filter((element) => {
            return element !== "";
        })
        numberLetters = removedSpaceText.length
        set((state) => ({totalNumberOfLetters : noOfLetter}))
    },
    




}));

// let removedSpaceText = text.split(" ")
// removedSpaceText = removedSpaceText.filter((element) =>{
//     return element !== "";
// })


export default useBearStore;

