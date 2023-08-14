import { create } from "zustand"

const useCounter = create((set) => {
    return {
        productsArrary: [],
        setProductsArrary: () => set((state) => ({ counter: state.counter + 1 })),
    };
});