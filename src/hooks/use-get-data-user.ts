import { GetUserData } from "@/api/get-user-data";
import { usePaginationState } from "@/store/state-current-page";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function useGetDataUser() {

    const {setTotalPage, } = usePaginationState()
    
    
    const {data, isFetching,isError, isSuccess} = useQuery({
        queryKey: ['user'],
        queryFn: () => GetUserData({UserId: '13'}),
        refetchOnWindowFocus: false
    })

    
    useEffect(() => {
        if(isSuccess && !isFetching) {
            if(data.transactions.length === 0) return
            setTotalPage(data.transactions.length)
        }
    },[data?.transactions.length, isFetching, isSuccess, setTotalPage  ])
    if(isError) return {isError}

    if(isFetching) return {isFetching}

    return {userData: data, isFetching: false}
}