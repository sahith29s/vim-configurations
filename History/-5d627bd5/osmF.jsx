import { create } from 'zustand'

const useBearStore = create((set) => ({

    text: "",
    setText: (inputText) => set((state) => ({ text: inputText })),
    totalNumberOfWords: "",
    setTotalNumberOfWords: () => {

        let removedSpaceText = text.split(" ")
        removedSpaceText = removedSpaceText.filter((element) =>{
            return element !== "";
        })
        

        set((state) => ({ totalNumberOfWords: { inputText } }))
    }


}));

// let removedSpaceText = text.split(" ")
// removedSpaceText = removedSpaceText.filter((element) =>{
//     return element !== "";
// })


export default useBearStore;

