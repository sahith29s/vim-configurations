import { create } from 'zustand'

const useBearStore = create((set) => ({

    text: "",
    setText: (inputText) => set((state) => ({ text: inputText })),
    totalNumberOfWords: "",

    setTotalNumberOfWords: (text) => {

        let words = text.split(" ")

        words = removedSpaceText.filter((element) => {
            return element !== "";
        })

        words = removedSpaceText.length


        set((state) => ({ totalNumberOfWords: words }))
    },
    
    totalNumberOfLetters: "",




}));

// let removedSpaceText = text.split(" ")
// removedSpaceText = removedSpaceText.filter((element) =>{
//     return element !== "";
// })


export default useBearStore;

