import create from "zustand"

const useStore = create((set) =>({
    counter : 0,
    increaseCounter : () => set(state =>({counter : state.counter + 1})),
    decreaseCounter : () => set(state =>({counter : state.counter - 1})),
    increaseByTen : () => set(state =>({counter : state.counter + 10})),
    decreaseByTen : () => set(state =>({counter : state.counter - 10})),
}))

export default useStore;
