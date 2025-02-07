import api from "@/lib/api"

interface GetUserData {
    UserId: string
}

export interface Transactions {
    Description: string,
    TypeTransactions: "Income" | "Outcome",
    Amount: number,
    Category: string
    CreateAt: string
    transactionId: string,
    _id: string

}
export interface ResponseGetUser {
    id: string,
    transactions: Transactions[]

}
export async function GetUserData({ UserId}: GetUserData) {
    
    const response = await api.post('api/get-user-data',{
        UserId
    })

    return response.data as ResponseGetUser;
}