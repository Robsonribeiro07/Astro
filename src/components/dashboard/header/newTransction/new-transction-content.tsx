import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FormNewTransction } from "./form-new-transction";

export function NewTransctionContent() {
    return (
        
        <DialogContent className="min-w-fit">
            <DialogHeader>
                <DialogTitle className="font-[500]">
                    Nova transação
                </DialogTitle>
            </DialogHeader>


            <FormNewTransction/>
        </DialogContent>
    )
}