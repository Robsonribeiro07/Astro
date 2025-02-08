"use client"

import { Header } from "@/components/dashboard/header/header"
import { SearchContent } from "@/components/dashboard/search-transcations/search-content"
import { SumaryContents } from "@/components/dashboard/summary/sumary-contents"
import { ToggleTheme } from "@/components/dashboard/toggle-theme"
import { Footer } from "@/components/footer"
import { HistoryContent } from "@/components/history/hystory-content/history-content"
import { Paginations } from "@/components/history/pagination/pagination"
import { useDeleyIncialization } from "@/hooks/use-deley-incialization"

function Dashboard() {

    const {isThemeIsready} = useDeleyIncialization()

    if (!isThemeIsready) return null

    return (
        <div className={`w-[65vw] mx-auto mt-10 flex flex-col gap-5 `}>
            <Header/>

            <SumaryContents/>


            <SearchContent/>

            <HistoryContent/>
            <Paginations/>

            <ToggleTheme/>
            <Footer />
        </div>
    )
}
export default Dashboard