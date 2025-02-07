import { GetTransction } from "@/api/use-get-transcations";
import { usePaginationState } from "@/store/state-current-page";
import { useFiterInput } from "@/store/use-filter";
import { useQuery } from "@tanstack/react-query";
import { useGetQueryKey } from "./use-get-query-key";

export function useGetDataTransaction() {
    
    const {currentPage} = usePaginationState()

    const {filter} = useFiterInput()

    const {queryKey} = useGetQueryKey()




    const {data, isFetching, isError} = useQuery({
        queryKey: queryKey,
        queryFn: () => GetTransction({UserId: '13', page: currentPage, Filter: filter  }),
        staleTime: 300000,
        
        refetchOnWindowFocus: false
    })

    if(isError) return {isError}

    if(isFetching) return {isFetching}

    return {transctions: data, isFetching: false}
}