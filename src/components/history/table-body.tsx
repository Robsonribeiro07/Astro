"use client"
import { TableBody, TableCell, TableRow } from "../ui/table";
import { useGetDataTransaction } from "@/hooks/use-get-transactions";
import { useStateShowDeleOrRemove } from "@/store/state-show-delete-or-edit";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { ConvertNumberEmReal } from "@/functions/convert-number-em-real";
import { NotFoundTransctions } from "./not-found-transctions";
import { DeleteOrRemoveContent } from "./delete-or-remove/delete-or-remove-content";
export function TableBodyContent() {

    const {transctions} = useGetDataTransaction()

    const {handleSetValue: setValue} = useStateShowDeleOrRemove()


    
    return (
        <TableBody >
            {transctions?.length === 0 ?(
                <NotFoundTransctions/>
            ): (
                transctions?.map((transactions) => {
                   
                    const {Amount,Description,CreateAt, transactionId, TypeTransactions} = transactions


                    const handleSetValue = () => {
                        setValue(transactionId)
                    }
                    return (
                <TableRow key={transactionId} onMouseOver={handleSetValue}>
                        <TableCell className="font-medium w-[40%] p-5">{Description}</TableCell>
                        <TableCell>{ConvertNumberEmReal(Amount)}</TableCell>
                        <TableCell>{TypeTransactions}</TableCell>
                        <TableCell className="text-right relative px-3">{formatDistanceToNow(CreateAt, {
                            locale: ptBR,
                            addSuffix: true})}
                            
                            <DeleteOrRemoveContent id={transactionId}/>   

                            </TableCell>
                </TableRow>
                        
                    )
                })
            )}
           </TableBody>
    )
}