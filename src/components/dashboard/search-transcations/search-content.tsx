'use client'
import { useFiterInput } from "@/store/use-filter";
import Button from "./button";
import Input from "./input";
import LimpaFiltro from "./reset-filter";

export function SearchContent() {

    const {filter} = useFiterInput()
 
    return (
        <div className={`flex items-center gap-10 w-f`}>
            <Input/>
            {filter && (
                <LimpaFiltro/>
            )}
            <Button/>
        </div>
    )
}