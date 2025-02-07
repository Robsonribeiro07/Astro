"use client"
import { Header } from "@/components/dashboard/header/header"
import { SearchContent } from "@/components/dashboard/search-transcations/search-content"
import { SumaryContents } from "@/components/dashboard/summary/sumary-contents"
import { HistoryContent } from "@/components/history/history-content"
import { Paginations } from "@/components/history/pagination/pagination"
import { useGetDelay } from "@/hooks/use-get-delay"

function Dashboard() {

    const {IsVisible} = useGetDelay()
    return (
        <div className={`w-[65vw] mx-auto mt-10 flex flex-col gap-5 ${IsVisible}`}>
            <Header/>

            <SumaryContents/>


            <SearchContent/>

            <HistoryContent/>
            <Paginations/>
        </div>
    )
}
export default Dashboard