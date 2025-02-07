"use client"
import {create} from 'zustand'
interface StateModalNewTransactions {
    open: boolean,
    toggle: () => void,
    close: () => void,
}

export const useStateModal = create<StateModalNewTransactions>((set) => ({
    open: false,
    toggle: () => set(state => ({...state, open:!state.open })),
    close: () => set(state => ({...state, open: false })),
}))