import { GetTransction } from "@/api/use-get-transcations";
import { usePaginationState } from "@/store/state-current-page";
import { useFiterInput } from "@/store/use-filter";
import { useQuery } from "@tanstack/react-query";
import { useGetQueryKey } from "./use-get-query-key";
import { useUser } from "@clerk/nextjs";

export function useGetDataTransaction() {
    
    const {currentPage} = usePaginationState()

    const {filter} = useFiterInput()

    const {queryKey} = useGetQueryKey()


    const {user} = useUser()



    const {data, isFetching, isSuccess} = useQuery({
        queryKey: queryKey,
        queryFn: () => GetTransction({
            UserId: user!.id, 
            page: currentPage,
            Filter: filter  }),
        staleTime: 300000,
        enabled:!!user,
        

        
        refetchOnWindowFocus: false
    })

   

    if(isSuccess && !data) return {
        transctions: []
    }

        if(isFetching) return {isFetching}

    
    return {transctions: data, isFetching: false}
}