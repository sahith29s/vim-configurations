import { create } from 'zustand'

const useBearStore = create((set) => ({

    text: "",
    setText: (inputText) => set((state) => ({ text: inputText })),
    totalNumberOfWords: "",

    setTotalNumberOfWords: (text) => {

        let removedSpaceText = text.split(" ")
        removedSpaceText = removedSpaceText.filter((element) =>{
            return element !== "";
        })
        let words = removedSpaceText.length

        set((state) => ({ totalNumberOfWords:  words}))
    }


}));

// let removedSpaceText = text.split(" ")
// removedSpaceText = removedSpaceText.filter((element) =>{
//     return element !== "";
// })


export default useBearStore;

