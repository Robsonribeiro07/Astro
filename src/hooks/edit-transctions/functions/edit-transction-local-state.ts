import queryClient from "@/lib/queryClient"
import { NewTranscitionSchema } from "../edit-transction-hook-form"
import { Transactions } from "@/api/get-user-data"

export function EditTranscationLocalState ({
        transactionId,
        Description,
        Amount,
        Category,
        TypeTransction,
        queryKey
    }: NewTranscitionSchema & {
        queryKey: (string | number | undefined)[]
    }) {


        const AllTranscations = queryClient.getQueryData<Transactions[]>(queryKey)


            if(AllTranscations) {
                queryClient.setQueryData(queryKey, (data: Transactions[]) => {

                    const newTransctions = {
                        Description,
                        Amount: Number(Amount),
                        TypeTransactions: TypeTransction,
                        Category,
                        CreateAt: new Date().toISOString(),
                        transactionId,
                    }
                     return data.map(transaction => {
                        if(transaction.transactionId === transactionId) {
                            return newTransctions
                        }
                        return transaction
                    })
                    
                })
            }
        
        return { AllTranscations }
     
    
}