import queryClient from "@/lib/queryClient"
import { NewTranscitionSchema } from "../edit-transction-hook-form"
import { ResponseGetUser, Transactions } from "@/api/get-user-data"

export function EditTranscationLocalStateUser ({
        transactionId,
        Description,
        Amount,
        Category,
        TypeTransction,
        queryKey
    }: NewTranscitionSchema & {
        queryKey: string
    }) {


        const AllTransactionsUser = queryClient.getQueryData<Transactions[]>([queryKey])

            if(AllTransactionsUser) {
                queryClient.setQueryData([queryKey], (data: ResponseGetUser) => {
                    if(!data) return data 

                    const newTransctions = {
                        Description,
                        Amount: Number(Amount),
                        TypeTransactions: TypeTransction,
                        Category,
                        CreateAt: new Date().toISOString(),
                        transactionId,
                    }
                     
                    const updateTranscation = data.transactions.map((transaction) => {
                        if(transaction.transactionId === transactionId) {
                            return newTransctions
                        }
                        return transaction
                    })
                    return {
                        ...data,
                        transactions: updateTranscation
                    }
                    
                })
            }
        
        return {AllTransactionsUser}
     
    
}