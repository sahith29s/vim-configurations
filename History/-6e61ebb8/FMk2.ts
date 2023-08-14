import { create } from "zustand"

const useCounter = create((set) => {
    return {
        productsArray: [15],
        ProductArray : () : any=> set((state : any) => ({ productsArrary: state.productsArrary.append(10) })),
    };
});

export default useCounter