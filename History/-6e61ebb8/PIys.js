import { create } from "zustand"

const useCounter = create((set) => {
    return {
        productsArrary: [15],
        setProductsArrary: () => set((state) => ({ productsArrary: state.productsArrary.append(10) })),
    };
});

export default useCounter