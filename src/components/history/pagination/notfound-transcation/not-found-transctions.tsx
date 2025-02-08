import { TableCell, TableRow } from "@/components/ui/table";
import { useFiterInput } from "@/store/use-filter";

export function NotFoundTransctions() {

    const {filter} = useFiterInput()

    const IsFilter = filter !== undefined ? 'Nenhuma transação encontrada' : 'Nenhuma transaçao que tal adiciona uma para começar'
    return (
        <TableRow className="">
                    <TableCell className="text-center w-[40%] p-5" colSpan={4}>{IsFilter}</TableCell>
      </TableRow>
    )
}