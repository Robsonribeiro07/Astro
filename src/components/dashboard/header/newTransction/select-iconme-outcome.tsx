"use client"
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";
import { useState } from "react";


interface ValueSelectProps {
    value: string,
    handleOnchange: (value: string) => void
}
export function SelectIconmeOutcome({value, handleOnchange}: ValueSelectProps) {


    const ButtonSelectedIncome = value === "Income" ? "bg-white text-black" : "bg-transparent "
    const ButtonSelectedoutCome = value === "Outcome" ? "bg-white text-black" : "bg-transparent"




    return (
        
        <RadioGroup value={value} onValueChange={handleOnchange} className="w-full flex h-full">
        <RadioGroupItem value="Income" className="flex flex-1">
         <Button type="button" className={`${ButtonSelectedIncome} flex-1 h-full`}>
            <ChevronUpCircle/>
            Income
        </Button>
        </RadioGroupItem>

        <RadioGroupItem value={"Outcome"} className="flex flex-1">
         <Button type="button"  className={`${ButtonSelectedoutCome} flex-1 h-full `}>
            <ChevronDownCircle/>
            Outcome
        </Button>
        </RadioGroupItem>
    </RadioGroup>
    )
}