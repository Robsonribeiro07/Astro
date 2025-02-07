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

export async function GetTransction({UserId, page = 1, Filter}: {UserId: string, page: number, Filter?: string} ) {
    const response = await api.post('api/get-user-transaction', {
        UserId, page, Filter
    })

    return response.data as Transactions[]
}