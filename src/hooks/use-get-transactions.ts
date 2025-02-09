import { GetTransction, Transactions } from "@/api/use-get-transcations";
import { usePaginationState } from "@/store/state-current-page";
import { useFiterInput } from "@/store/use-filter";
import { useQuery } from "@tanstack/react-query";
import { useGetQueryKey } from "./use-get-query-key";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import queryClient from "@/lib/queryClient";

export function useGetDataTransaction() {
    
    const {currentPage} = usePaginationState()

    const {filter} = useFiterInput()

    const {queryKey} = useGetQueryKey()


    const {user} = useUser()



    const {data, isFetching} = useQuery({
        queryKey: queryKey,
        queryFn: () => GetTransction({UserId: user!.id, page: currentPage, Filter: filter  }),
        staleTime: 300000,
        enabled:!!user,
        
        refetchOnWindowFocus: false
    })

   

    if(isFetching && !data) return {
        transctions: []
    }

    if(isFetching) return {isFetching}

    
    return {transctions: data, isFetching: false}
}