import { PaginationItem, PaginationNext } from "@/components/ui/pagination";
import { usePaginationState } from "@/store/state-current-page";

export function NextPage() {

    const {setNextPage, isEndPage} = usePaginationState()


    const isEndPagee = isEndPage ? 'text-[gray]' : 'text-primary'
    return (
        <PaginationItem className="">
      <PaginationNext onClick={setNextPage} className={isEndPagee} data-testid='next-page' />
       </PaginationItem>
    )
}