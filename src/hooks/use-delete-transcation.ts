import { DeleteTransactions } from "@/api/delete-transctions";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useGetQueryKey } from "./use-get-query-key";
import queryClient from "@/lib/queryClient";
import { ResponseGetUser, Transactions } from "@/api/get-user-data";
import { useUser } from "@clerk/nextjs";

export function useDeleteTranscation() {
   

    const {queryKey} = useGetQueryKey()

    const {user} = useUser()
    const { mutate } = useMutation({
        mutationFn: DeleteTransactions,
        onSuccess: () => {
            toast.success('Transação excluída com sucesso')
        },
        onMutate: (Variable) => {
            const {transactionId} = Variable

            const AllTransctions = queryClient.getQueryData(queryKey)

            const User = queryClient.getQueryData(['user'])

            if(AllTransctions) {

                queryClient.setQueryData(queryKey, (transction: Transactions[]) => {

                     const updateTranscation = transction.filter(transction => transction.transactionId !== transactionId)

                     return updateTranscation



                })

                if(User) {
                    queryClient.setQueryData(['user'], (data: ResponseGetUser) => {
                        const updateUserTransactions = data.transactions.filter(transction => transction.transactionId !== transactionId)

                        

                        return {...data, transactions: updateUserTransactions}
                    })
                }
            }


        },
        onError: () => {
            toast.error('Ocorreu um erro ao excluir a transação')
        }
    })

    const hadleDeletetTransactions = ({transactionId}: {transactionId: string}) => {
        if(!user) return
        mutate({transactionId, UserId: user?.id})
    }



    return { hadleDeletetTransactions }

}