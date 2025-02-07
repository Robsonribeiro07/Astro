"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { NewTransctionContent } from "./new-transction-content";
import { Plus } from "lucide-react";
import { useStateModal } from "@/store/state-modal-new-transtions";

export function NewTransctionButton() {

    const {open, toggle} = useStateModal()

    return (
      
     <Dialog onOpenChange={toggle} open={open}>
        <DialogTrigger className="select-none" asChild>
            <Button className="p-5" variant='outline'>
             <Plus/> Nova Transaçao
            </Button>
        </DialogTrigger>

        <NewTransctionContent/>
       </Dialog>
        

        
    )
}