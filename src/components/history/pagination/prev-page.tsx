import { PaginationItem, PaginationPrevious } from "@/components/ui/pagination";
import { usePaginationState } from "@/store/state-current-page";

export function PrevPage() {

    const {setPreviousPage} = usePaginationState()
    return (
        <PaginationItem>
      <PaginationPrevious  onClick={setPreviousPage}/>
    </PaginationItem>
    )
}