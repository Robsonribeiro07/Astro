import api from "@/lib/api"

 interface DeleteTransactions {
    UserId: string,
    transactionId: string

}

export async function DeleteTransactions({UserId, transactionId}: DeleteTransactions) {
    const response = await api.delete('api/delete-transcations', {
        data: { UserId, transactionId}
    })

    return response.data 
}