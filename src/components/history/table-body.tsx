"use client"
import { TableBody, TableCell, TableRow } from "../ui/table";
import { useGetDataTransaction } from "@/hooks/use-get-transactions";
import { useStateShowDeleOrRemove } from "@/store/state-show-delete-or-edit";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { ConvertNumberEmReal } from "@/functions/convert-number-em-real";
import { DeleteOrRemoveContent } from "./delete-or-remove/delete-or-remove-content";
import { useEditTranscationContent } from "@/store/edit-transctions";
import { NotFoundTransctions } from "./pagination/notfound-transcation/not-found-transctions";
export function TableBodyContent() {

    const {transctions} = useGetDataTransaction()

    const {handleSetValue: setValue} = useStateShowDeleOrRemove()

    const {setTransactionToEdit} = useEditTranscationContent()

    
    return (
        <TableBody >
            {transctions?.length === 0 ?(
                <NotFoundTransctions/>
            ): (
                transctions?.map((transactions) => {
                   
                    const {Amount,Description,CreateAt, transactionId, TypeTransactions,Category} = transactions


                    const handleSetValue = () => {
                        setValue(transactionId)
                    }

                    const handleValueEdit = () => {
                        console.log('ok')
                        setTransactionToEdit({
                            Amount,
                            Description,
                            Category,
                            transactionId,
                            TypeTransction: TypeTransactions
                        })
                    }

                    
                    return (
                <TableRow key={transactionId} onMouseOver={handleSetValue}>
                        <TableCell className="font-medium w-[40%] p-5">{Description}</TableCell>
                        <TableCell>{ConvertNumberEmReal(Amount)}</TableCell>
                        <TableCell>{TypeTransactions}</TableCell>
                        <TableCell className="text-right relative px-3">{formatDistanceToNow(CreateAt, {
                            locale: ptBR,
                            addSuffix: true})}
                            
                            <DeleteOrRemoveContent id={transactionId} hanleSetEditing={handleValueEdit} />   

                            </TableCell>
                </TableRow>
                        
                    )
                })
            )}
           </TableBody>
    )
}