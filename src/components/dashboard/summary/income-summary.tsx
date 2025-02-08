"use client"
import { UseGetRevenue } from "@/hooks/use-get-revenue";
import { CircleChevronUp } from "lucide-react";

export function IncomeSummary() {

    const {totalIncome} = UseGetRevenue()

    return ( 
        <div className="w-[25rem] h-[8rem] rounded-xl shadow-lg border border-background text-textColor flex flex-col justify-between" >
            
            
            <div className="flex justify-between px-3 py-3 text-primary">
                <p className="font-[500] text-[1.1rem]">Entradas</p>
                <CircleChevronUp  color="green"/>

            </div>

            <p className="text-xl font-[500] text-primary px-3 pb-3">{totalIncome}</p>
        </div>
    )
}