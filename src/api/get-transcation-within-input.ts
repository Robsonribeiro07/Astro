import api from "@/lib/api"

export interface Transactions {
    Description: string,
    TypeTransactions: "Income" | "Outcome",
    Amount: number,
    Category: string
    CreateAt: string
    _id: string

}

export async function GetTransctionWithFilter({UserId, Title}: {UserId: string, Title: string}) {
    const response = await api.post('api/get-user-transaction', {
        UserId, Title
    })

    return response.data as Transactions[]
}