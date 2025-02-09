import { PaginationItem, PaginationNext } from "@/components/ui/pagination";
import { usePaginationState } from "@/store/state-current-page";

export function NextPage() {
    const { setNextPage, isEndPage } = usePaginationState();
    
    const textColorClass = isEndPage ? 'text-[gray]' : 'text-primary';
    
    return (
        <PaginationItem>
            <PaginationNext 
                onClick={setNextPage}
                className={textColorClass}
                data-testid='next-page'
            />
        </PaginationItem>
    );
}