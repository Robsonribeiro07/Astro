import { create } from "zustand";

interface Pagination {
  currentPage: number;
  perPage: number;
  setNextPage: () => void;
  setPreviousPage: () => void;
  totalPage: number
  setTotalPage: (number: number) => void;
  isEndPage: boolean,
  IsStartPage: boolean;
}

export const usePaginationState = create<Pagination>((set, get) => ({
  currentPage: 1,
  totalPage: 1,
  isEndPage: false,
  IsStartPage: true,
  perPage: 3,
  setNextPage: () => {
    const currentPage = get().currentPage
    const totalPage = get().totalPage

    if(totalPage === currentPage) {
      return set({isEndPage: true})
    }

    set({currentPage: currentPage + 1, IsStartPage: false})
  },
  setPreviousPage: () => {
    const currentPage = get().currentPage

    if(currentPage === 1) {
      return set({IsStartPage: true})
    }
    set((state) => ({ currentPage: state.currentPage - 1, isEndPage: false }))
  },
  setTotalPage: (number: number) => {

    const perPage = get().perPage
    const totalPage = Math.ceil(number / perPage)

    set({totalPage: totalPage})
  },

}));
