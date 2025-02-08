'use client'
import { UseGetRevenue } from "@/hooks/use-get-revenue";
import { DollarSign } from "lucide-react";


export function TotalSummary() {

    const {totalRevenue} = UseGetRevenue()
    return ( 
        <div className="w-[25rem] h-[8rem] rounded-xl shadow-lg border border-background text-textColor flex flex-col justify-between ">
            
            <div className="flex justify-between px-3 py-3 font-[500] text-[1.1rem] text-primary ">
                <p>Total</p>
                <DollarSign  color="white"/>

            </div>

            <p className="text-xl font-[500] text-primary px-3 pb-3">{totalRevenue}</p>
        </div>
    )
}