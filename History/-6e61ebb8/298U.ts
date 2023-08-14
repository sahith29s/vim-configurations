import { create } from "zustand"

const useCounter = create((set) => {
    return {
        productsArray: [],
        addToProductsArray: (product : object): any => set((state: any) => ({ productsArray: [...state.productsArray, product] })), 
    };
});

export default useCounter