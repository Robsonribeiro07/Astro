import { create } from "zustand";

interface FilterTransaction {
    filter: string | undefined,
    setFilter: () => void,
    inputValue: string,
    clearFiltro: () => void,
    setInputValue: (value: string) => void

}

export const useFiterInput = create<FilterTransaction>((set, get) => ({
    filter: undefined,
    inputValue: '',
    setInputValue: (value) => {
        set({ inputValue: value })
    },
    setFilter: () => {
        set({ filter: get().inputValue })
    },
    clearFiltro: () => {
        set({ filter: undefined, inputValue: '' })
    },
   
}))