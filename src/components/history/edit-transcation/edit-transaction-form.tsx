import Input from "@/components/dashboard/header/newTransction/input-form";
import { SelectIconmeOutcome } from "@/components/dashboard/header/newTransction/select-iconme-outcome";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useEditTransctionHookForm } from "@/hooks/edit-transctions/edit-transction-hook-form";
import { Controller } from "react-hook-form";

export function EditTransactionForm() {

    const {register, handleSubmit, control} = useEditTransctionHookForm()

    return (
        <form className="flex flex-col gap-2 mt-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2">
            <Input Icons="Description" description="Descriçao" placeholder=" descriçao" register={register('Description')}/>

            <Input Icons="Price" description="Preço" placeholder=" Preço"
             register={register('Amount')} typeInput="number"
            />

            <Input Icons="" description="Descriçao" placeholder=" Category"
            register={register('Category')}
            />

            <Controller control={control} name="TypeTransction" 
            render={({field: {onChange,value}}) => {
                return <SelectIconmeOutcome value={value} handleOnchange={onChange}/>
                

            }}/>
   
            </div>
            <div className="w-full flex justify-end gap-2 mt-3">
                <DialogClose asChild>
                <Button>Cancelar</Button>
                </DialogClose>
                <Button className="bg-green-500" type="submit">Confirmar</Button>
            </div>
        </form>
    )
}