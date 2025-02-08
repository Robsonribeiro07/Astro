import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FormNewTransction } from "./form-new-transction";

export function NewTransctionContent() {
    return (
        
        <DialogContent className="min-w-fit bg-primary">
            <DialogHeader>
                <DialogTitle className="font-[500] text-primary-foreground">
                    Nova transação
                </DialogTitle>
            </DialogHeader>


            <FormNewTransction/>
        </DialogContent>
    )
}