"use client"
import { Pagination, PaginationContent, PaginationItem } from "../../ui/pagination";
import { usePaginationState } from "@/store/state-current-page";
import { PrevPage } from "./prev-page";
import { NextPage } from "./next-page";

export function Paginations() {

    const {totalPage, currentPage} = usePaginationState()





    return (
        <Pagination className="mt-5 w-full justify-end">
           <PaginationContent>
              <PrevPage/>
    
             <PaginationItem>
              {currentPage} / {totalPage}

           </PaginationItem>
    
          <NextPage/>
    
          </PaginationContent>
        </Pagination>

    )
}