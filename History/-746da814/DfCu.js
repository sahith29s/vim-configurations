import { create } from 'zustand'

const useStore = create((set) => ({
    counter : 0,
    increaseCounter : () => set((state) => ({ bears: state.counter + 1 })),
}))