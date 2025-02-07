import { create } from "zustand";

interface StateShowDeleteOrRemove {
    isValue: string,
    handleSetValue: (value: string) => void,
    clearValue: () => void
    open: boolean,
    toggle: () => void

}

export const useStateShowDeleOrRemove = create<StateShowDeleteOrRemove>((set, get) => ({
    isValue: '',
    handleSetValue: (value) => set({ isValue: value }),
    clearValue: () => {
        const currentStateModal = get().open

        if(currentStateModal) return

        set({ isValue: '' })
    },
    open: false,
    toggle: () => set(state => ({ open:!state.open })),

}))