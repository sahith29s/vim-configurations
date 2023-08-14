import { create } from "zustand"

const useCounter = create((set) => {
    return {
        productsArray: [],
        addToProductsArray: (product : any): any => set((state: any) => ({ productsArray: [...state.productsArray, product] })), 
    };
});

export default useCounter