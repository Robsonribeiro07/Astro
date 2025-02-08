import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { EditTransactionForm } from "./edit-transaction-form";
import { useEditTranscationContent } from "@/store/edit-transctions";

export function EditTransction() {

    const {openModalEdit, toggleModalEdit} = useEditTranscationContent()
    return (
        <Dialog open={openModalEdit} onOpenChange={toggleModalEdit}>
            <DialogTrigger>
            <Button className="w-full hover:bg-white hover:text-black pr-8">
            <Edit/>
            Editar
           </Button>
  
                
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="font-[500]">
                        Aqui voce pode editar a transiçao   
                    </DialogTitle>
                </DialogHeader>


            <EditTransactionForm/>
            </DialogContent>
        </Dialog>
        
    )
}