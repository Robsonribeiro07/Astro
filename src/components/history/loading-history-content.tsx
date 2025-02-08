"use client"
import { Skeleton } from "../ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
export function HistoryContentSkeleton() {
    return (
        <Table className="w-full " data-testid={'skeleton-card'}>
            <TableHeader>
                <TableRow>
                    <TableHead>Descriçao</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-end">Date</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody >
            {Array.from({length: 3}).map((_, i) => {
                return (
                    <TableRow key={i}>
                    <TableCell className="font-medium w-[40%] p-5 ">
                        <Skeleton className="w-[30%] bg-gray-500 h-5"/></TableCell>
                    <TableCell>
                    <Skeleton className="w-[30%] bg-gray-500 h-5"/>
                        </TableCell>
                    <TableCell>
                    <Skeleton className="w-[30%] bg-gray-500 h-5"/>
                    </TableCell>
                    <TableCell className="text-righ flex justify-end">
                    <Skeleton className="w-[30%] bg-gray-500 h-5"/>
                    </TableCell>
            </TableRow>
                )
            })}
                    
           </TableBody>
           
           

        </Table>
    )
}