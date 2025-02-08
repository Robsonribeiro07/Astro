import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ButtonDeleteOrRemove } from "./button-delete-or-remove";
import { useStateShowDeleOrRemove } from "@/store/state-show-delete-or-edit";
import { RemoveTranscation } from "./remove-transcation";
import { EditTransction } from "../edit-transcation/edit-transction";

interface DeleOrRemoveContent {
    id: string
    hanleSetEditing: () => void

}

export function DeleteOrRemoveContent({id, hanleSetEditing}: DeleOrRemoveContent) {

    const {isValue, open, toggle} = useStateShowDeleOrRemove()

    const IsValueIgual = isValue === id 

    if(!IsValueIgual) return null
    return (
        <DropdownMenu open={open} onOpenChange={() => {
            toggle()
            hanleSetEditing()
        }}>
            <DropdownMenuTrigger >
                <ButtonDeleteOrRemove/>
            </DropdownMenuTrigger>

            <DropdownMenuContent className=" p-0  flex flex-col bg-background  mt-1">
                <EditTransction/>
                <RemoveTranscation transactionId={id}/>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}