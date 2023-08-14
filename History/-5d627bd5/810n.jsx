import { create } from 'zustand'

const useBearStore = create((set) => ({

    text : "",
    getText : () => set((state) => ({text : state.text })),

}));


export default useBearStore;

