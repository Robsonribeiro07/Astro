import { useEditTranscationContent } from "@/store/edit-transctions"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useEditTransctionsMutation } from "./edit-transctions-mutation"
import { useUser } from "@clerk/nextjs"

const newTransctionSchema = z.object({
    Description: z.string().min(2,"no minimo 2 caracteres"),
    Amount: z.string().min(2),
    Category: z.string().min(2, 'no minimo 2 caracteres'),
    TypeTransction: z.enum(["Income", "Outcome"]),
})

export type NewTranscitionSchema = z.infer<typeof newTransctionSchema> & {
    transactionId: string
}

export function useEditTransctionHookForm() {

    const {mutate} = useEditTransctionsMutation()

    const {user} = useUser()


    
    const {transactionEdit: 
        {
            Amount,
            Category,
            Description,
            TypeTransction,
            transactionId,
        }} = useEditTranscationContent()

    const {handleSubmit, register, control} = useForm<NewTranscitionSchema>({

        resolver: zodResolver(newTransctionSchema),
        defaultValues: {
            Amount: Math.abs(Amount).toString(),
            Category,
            Description,
            TypeTransction

        }
    })
    

    const handleEditTransactions = (data: NewTranscitionSchema) => {

        if(!user) return
        const {Amount, Category,Description, TypeTransction} = data

      
            mutate({
            Amount: Number(Amount) * 100,
            Description,
            TypeTransction,
            Category,
            transactionId,
            UserId: user.id
             
            
        })

    }


    return {
        handleSubmit: handleSubmit(handleEditTransactions),
        control,
        register
    }
}