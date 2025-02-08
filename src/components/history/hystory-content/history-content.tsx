"use client"
import { useGetDataTransaction } from "@/hooks/use-get-transactions";
import { Table, TableHead, TableHeader, TableRow } from "../../ui/table";
import { TableBodyContent } from "../table-body";
import { HistoryContentSkeleton } from "../loading-history-content";
import { useStateShowDeleOrRemove } from "@/store/state-show-delete-or-edit";

export function HistoryContent() {

     const {transctions} = useGetDataTransaction()

     const {clearValue} = useStateShowDeleOrRemove()
    
    return (
        transctions ? (
            <Table onMouseLeave={clearValue} className="overflow-hidden">
            <TableHeader>
                <TableRow>
                    <TableHead>Descriçao</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-end">Date</TableHead>
                </TableRow>
            </TableHeader>


            <TableBodyContent/>           
           

        </Table>
        ) : (
            <HistoryContentSkeleton />
        )
    )
}