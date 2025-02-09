'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { useMutation } from '@tanstack/react-query'
import { NewTrasnction } from '@/api/new-trasnction'
import { toast } from 'sonner'
import queryClient from '@/lib/queryClient'
import { Transactions } from '@/api/get-user-data'
import { useStateModal } from '@/store/state-modal-new-transtions'
import { useGetQueryKey } from './use-get-query-key'
import { GenerateUniqueIdNewTransactions } from '@/functions/generate-uniqueId-new-transactions'
import { useUser } from '@clerk/nextjs'


const newTransctionSchema = z.object({
    Description: z.string().min(2,"no minimo 2 caracteres"),
    Amount: z.string().min(2, "no minimo 2 caracteres"),
    Category: z.string().min(2, 'no minimo 2 caracteres'),
    TypeTransction: z.enum(["Income", "Outcome"])
})
export type NewTranscitionSchema = z.infer<typeof newTransctionSchema>
export function useNewTransction() {

    const {user} = useUser()

    const {close} = useStateModal()

    const {queryKey} = useGetQueryKey()


    

    const {
        handleSubmit,
         register,
         control,
        formState: {isSubmitting}}
         = useForm<NewTranscitionSchema>({
        resolver: zodResolver(newTransctionSchema),
        defaultValues: {
            TypeTransction: 'Income'
        }
    })


   const {mutate} = useMutation({
    mutationFn: NewTrasnction,
    onSuccess: () => {
        toast.success('Transction adcionada com sucesso')
        close()

        
    },
    onSettled: () => {
        queryClient.invalidateQueries({
            queryKey: ['user']
            
        })
        
    },
    onMutate(variables) {
        const {Amount, Description,Category, TypeTransction, transactionId} = variables

        const allTranscations = queryClient.getQueryData(queryKey)


        if(allTranscations) {
            queryClient.setQueryData(queryKey, (data: Transactions[]) => {
                const newTranscations = {
                    Amount,
                    Description,
                    Category,
                    TypeTransactions: TypeTransction,
                    transactionId,
                    CreateAt: new Date().toISOString()
                }
               
                
                const updateTransactions = [newTranscations, ...data]
                
                if(updateTransactions.length > 3) {
                    updateTransactions.pop()
                } 

                return updateTransactions   
            })


            

        }

        return { allTranscations}

    },
    onError: (_,__,contentx) => {
        toast.error('Ocorreu um erro ao adicionar a transção')
        if(contentx) {
            queryClient.setQueryData(queryKey, contentx.allTranscations)
        }
        
    },
    
   })
   

   const handleNewTrasnction = ({Amount, Category, Description, TypeTransction}: NewTranscitionSchema) => {


    const valueNegaviteOrPositv = TypeTransction === 'Income' ? Amount : -Amount
    
    if(!user) return
    mutate({
        Amount: Number(valueNegaviteOrPositv) * 100,
        Description, 
        TypeTransction,
         Category, 
         User: user.id,
         transactionId: GenerateUniqueIdNewTransactions()
        })

   }

    return {
        handleSubmit: handleSubmit(handleNewTrasnction),
        register,
        control,
        isSubmitting
    }
}