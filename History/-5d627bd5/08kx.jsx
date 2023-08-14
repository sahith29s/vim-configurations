import { create } from 'zustand'

const useBearStore = create((set) => ({

    text : "",
    setText : () => set((state) => ({text : state.text })),

}));


export default useBearStore;

