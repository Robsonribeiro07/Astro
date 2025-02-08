import { create } from "zustand"

interface StateEditTransctions {
   transactionEdit: Transactions 
   openModalEdit: boolean,
   toggleModalEdit: () => void,
   closeModal: () => void
   setTransactionToEdit: ({}: Transactions) => void

}
interface Transactions {
    transactionId: string,
    Description: string,
    Amount: number,
    Category: string,
    TypeTransction: "Income" | "Outcome",

}

export const useEditTranscationContent = create<StateEditTransctions>((set) => ({
    transactionEdit: {
        transactionId: '',
        Description: '',
        Amount: 0,
        Category: '',
        TypeTransction: "Income"
    },
    openModalEdit: false,
    toggleModalEdit: () => set((state) => ({openModalEdit: !state.openModalEdit}) ),
    closeModal: () => set({ openModalEdit: false }),
    setTransactionToEdit: (transaction: Transactions) => {
        const AmoutConvert = transaction.Amount / 100

        set({ transactionEdit: {...transaction, Amount: AmoutConvert} })
    }
 
}))