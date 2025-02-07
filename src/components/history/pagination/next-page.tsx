import { PaginationItem, PaginationNext } from "@/components/ui/pagination";
import { usePaginationState } from "@/store/state-current-page";

export function NextPage() {

    const {setNextPage, isEndPage} = usePaginationState()


    const isEndPagee = isEndPage ? 'text-[gray]' : 'text-white'
    return (
        <PaginationItem>
      <PaginationNext onClick={setNextPage} className={isEndPagee} />
       </PaginationItem>
    )
}