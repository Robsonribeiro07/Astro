import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ButtonDeleteOrRemove } from "./button-delete-or-remove";
import { useStateShowDeleOrRemove } from "@/store/state-show-delete-or-edit";
import { EditButton } from "./edit-button";
import { RemoveTranscation } from "./remove-transcation";

interface DeleOrRemoveContent {
    id: string

}
export function DeleteOrRemoveContent({id}: DeleOrRemoveContent) {

    const {isValue, open, toggle} = useStateShowDeleOrRemove()

    const IsValueIgual = isValue === id 

    if(!IsValueIgual) return null
    return (
        <DropdownMenu open={open} onOpenChange={toggle}>
            <DropdownMenuTrigger>
                <ButtonDeleteOrRemove/>
            </DropdownMenuTrigger>

            <DropdownMenuContent className=" p-0  flex flex-col bg-background  mt-1">
                <EditButton/>
                <RemoveTranscation transactionId={id}/>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}