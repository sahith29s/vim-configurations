import { create } from "zustand"

const useCounter = create((set) => {
    return {
        productsArray: [],
        addToProductsArray: (item : object): any => set((state: any) => ({ productsArray: [...state.productsArray, Object] })), 
    };
});

export default useCounter