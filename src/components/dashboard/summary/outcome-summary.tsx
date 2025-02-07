"use client"
import { UseGetRevenue } from "@/hooks/use-get-revenue";
import { CircleChevronDown } from "lucide-react";

export function OutComeSummary() {


    const {totalOutcome} = UseGetRevenue()
    return ( 
        <div className="w-[25rem] h-[8rem] rounded-xl shadow-lg border border-[#262626] text-textColor flex flex-col justify-between ">
            
            <div className="flex justify-between px-3 py-3 font-[500] text-[1.1rem]">
                <p>Saida</p>
                <CircleChevronDown  color="red"/>

            </div>

            <p className="text-xl font-[500] text-textColor px-3 pb-3">
            {totalOutcome}
            </p>
        </div>
    )
}