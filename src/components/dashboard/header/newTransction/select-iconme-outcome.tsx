"use client"
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";


interface ValueSelectProps {
    value: string,
    handleOnchange: (value: string) => void
}
export function SelectIconmeOutcome({value, handleOnchange}: ValueSelectProps) {


    const ButtonSelectedIncome = value === "Income" ? "dark:bg-background text-background-foreground bg-purple-500 "  : "bg-transparent text-background"
    const ButtonSelectedoutCome = value === "Outcome" ? "dark:bg-background text-background-foreground bg-purple-500" : "bg-transparent text-background"




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