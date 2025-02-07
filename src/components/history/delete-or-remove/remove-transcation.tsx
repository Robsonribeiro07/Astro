import { Button } from "@/components/ui/button";
import { useDeleteTranscation } from "@/hooks/use-delete-transcation";
import { Trash } from "lucide-react";


interface RemoveTranscations {
    transactionId: string
}
export function RemoveTranscation({transactionId}: RemoveTranscations) {

    const {hadleDeletetTransactions} = useDeleteTranscation()
    return (
        <Button className="w-full hover:bg-white hover:text-black" onClick={() => hadleDeletetTransactions({transactionId})}>
        <Trash/>
         Remover
       </Button>
        
    )
}