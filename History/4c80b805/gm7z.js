import create from "zustand"

const useStore = create((set) =>({
    counter : 0,
    increaseCounter : () => set(state =>{})
}))

export default useStore;
