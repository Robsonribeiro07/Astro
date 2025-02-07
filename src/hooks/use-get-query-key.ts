import { usePaginationState } from "@/store/state-current-page";
import { useFiterInput } from "@/store/use-filter";
import { useMemo } from "react";

export function useGetQueryKey() {
   
    const {currentPage} = usePaginationState()

    const {filter} = useFiterInput()
    
    const queryKey = useMemo(() => {
        return ['transactions', currentPage, filter]
    }, [currentPage, filter])

    return { queryKey }
}