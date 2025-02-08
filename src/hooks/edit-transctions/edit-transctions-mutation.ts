import { EditTransctions } from "@/api/edit-transactions"
import { useEditTranscationContent } from "@/store/edit-transctions"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { useGetQueryKey } from "../use-get-query-key"
import { EditTranscationLocalState } from "./functions/edit-transction-local-state"
import { EditTranscationLocalStateUser } from "./functions/edit-transcation-local-state-user"
import queryClient from "@/lib/queryClient"


export function useEditTransctionsMutation() {

    const {closeModal, setTransactionToEdit} = useEditTranscationContent()

    const {queryKey} = useGetQueryKey()

    

    const {mutate} = useMutation({
        mutationFn: EditTransctions,
        onSuccess: (_, variable,) => {
            const {
                Amount,
                Category,
                Description,
                transactionId,
                TypeTransction
            } = variable

            setTransactionToEdit({
                Amount: Amount,
                Category: Category,
                Description: Description,
                transactionId: transactionId,
                TypeTransction: TypeTransction,

            })
            toast.success('sucess')
            closeModal()
        },
        onMutate: (Variable) => {
          const {Amount, Category,Description,transactionId,TypeTransction} = Variable
            
           const {AllTranscations} =  EditTranscationLocalState({
                Amount: Amount.toString(),
                Category: Category,
                Description: Description,
                transactionId: transactionId,
                TypeTransction: TypeTransction,
                queryKey: queryKey

            })
            

            const {AllTransactionsUser} = EditTranscationLocalStateUser({
                Amount: Amount.toString(),
                Category: Category,
                Description: Description,
                transactionId: transactionId,
                TypeTransction: TypeTransction,
                queryKey: 'user'

            })

            return {AllTransactionsUser, AllTranscations }


            
        },
        onError: (_, __, context) => {
            if(context) {
                const {AllTransactionsUser,AllTranscations} =  context

                queryClient.setQueryData(queryKey, AllTranscations)
                queryClient.setQueryData(['user'], AllTransactionsUser)
            }
            toast.error('error')
        },
        
    })


    return { mutate }

    
}