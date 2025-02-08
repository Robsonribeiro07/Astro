import { GetUserData } from "@/api/get-user-data";
import { usePaginationState } from "@/store/state-current-page";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function useGetDataUser() {

    const {setTotalPage, } = usePaginationState()

    const {user} = useUser()
    
    
    const {data, isFetching,isError, isSuccess} = useQuery({
        queryKey: ['user'],
        queryFn: () => GetUserData({UserId: user!.id}),
        refetchOnWindowFocus: false,
        enabled: !!user
    })

    
    useEffect(() => {

        if(isSuccess && !isFetching && data) {

            if(data.transactions.length === 0) return
            setTotalPage(data.transactions.length)
        }
    },[data?.transactions.length, isFetching, isSuccess, setTotalPage,data?.transactions, data  ])
    if(isError) return {isError}

    if(isFetching) return {isFetching}

    return {userData: data, isFetching: false}
}