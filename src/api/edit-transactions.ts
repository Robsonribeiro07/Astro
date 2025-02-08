import api from "@/lib/api"

 interface EditTransctions {
    UserId: string,
    transactionId: string,
    Description: string,
    Amount: number,
    Category: string,
    TypeTransction:  "Income" | "Outcome",

}

export async function EditTransctions({UserId, transactionId,Amount,Category,Description,TypeTransction}: EditTransctions) {
    const response = await api.put('api/edit-transctions', {
         UserId,
         transactionId,
          Amount,
          Category,
          Description,
          TypeTransction,}
    )

    return response.data 
}