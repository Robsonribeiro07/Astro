import api from "@/lib/api"

export interface Transactions {
    Description: string,
    TypeTransactions: "Income" | "Outcome",
    Amount: number,
    Category: string
    CreateAt: string
    _id: string
    transactionId: string

}
interface GetTransactionParams {
    UserId: string,
    page: number,
    Filter?: string
}


export async function GetTransction({
    UserId,
    page = 1,
    Filter}: GetTransactionParams ): Promise<Transactions[]> {
    const response = await api.post('api/get-user-transaction', {
        UserId, 
        page, 
        Filter
    })

    return response.data as Transactions[]
}