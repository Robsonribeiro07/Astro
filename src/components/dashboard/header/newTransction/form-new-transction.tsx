"use client"
import {  useNewTransction } from "@/hooks/use-new-transction";
import Button from "./button-submit";
import Input from "./input-form";
import { SelectIconmeOutcome } from "./select-iconme-outcome";
import { Controller } from "react-hook-form";

    export function FormNewTransction() {

        const {handleSubmit, register, control, isSubmitting} = useNewTransction()

      
        return (
            
            <form action="" className=" gap-4 mt-5 grid-cols-2 grid" onSubmit={handleSubmit}>
                <Input  register={register("Description")} Icons="Description" placeholder="Descriçao" description="Descriçao"/>
                <Input  register={register("Amount")} Icons="Price" placeholder="Preço" description="Preço" typeInput={'number'}/>
                <Input  register={register("Category")}  Icons="" placeholder="Categoria" description="Categoria"/>
                
               <Controller 
               name="TypeTransction" 
               control={control} 
               render={({field}) => {
                const {value, onChange} = field

                return <SelectIconmeOutcome value={value} handleOnchange={onChange}/>

               }}/>

            <div className="flex justify-end  col-span-2 ">
            <Button disabed={isSubmitting}/>
            </div>
                
            </form>
        )
    }