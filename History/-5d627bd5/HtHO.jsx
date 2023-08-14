import { create } from 'zustand'

const useBearStore = create((set) => ({

    text : "this is text",
    getText : () => set((state) => ({text : state.text })),

}));


export default useBearStore;

