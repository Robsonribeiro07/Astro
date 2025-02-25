import api from "@/lib/api"

interface NewTrasnction {
    User: string,
    Amount: number,
    Description: string,
    transactionId: string,
    Category: string,
    TypeTransction: "Income" | "Outcome"
}
export async function NewTrasnction({
    User,
    Amount, 
    Description,
    Category, 
    TypeTransction,
    transactionId}: NewTrasnction) {

    const response = await api.post<NewTrasnction>('api/new-transactions', {
        data: {
            User,
            Amount,
            Description,
            Category,
            TypeTransction,
            transactionId,
        }
        
    })

    return response.data
    
}