import { create } from "zustand"

const useCounter = create((set) => {
    return {
        productsArray: [10],
        addToProductsArray: (product): any => set((state: any) => ({ productsArray: [...state.productsArray, product] })), 
    };
});

export default useCounter