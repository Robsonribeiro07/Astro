import { TableCell, TableRow } from "../ui/table";

export function NotFoundTransctions() {
    return (
        <TableRow className="">
                    <TableCell className="text-center w-[40%] p-5" colSpan={4}>Nenhuma transaçao encontrada.</TableCell>
                </TableRow>
    )
}