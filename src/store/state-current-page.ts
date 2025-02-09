import { create } from "zustand";

interface Pagination {
  currentPage: number;
  perPage: number;
  totalPage: number;
  isEndPage: boolean;
  isStartPage: boolean;
  setNextPage: () => void;
  setPreviousPage: () => void;
  setTotalPage: (total: number) => void;
  goToPage: (page: number) => void;
  resetPagination: () => void;
}

export const usePaginationState = create<Pagination>((set, get) => ({
  currentPage: 1,
  totalPage: 1,
  isEndPage: false,
  isStartPage: true,
  perPage: 3,

  setNextPage: () => {
    const { currentPage, totalPage } = get();
    
    if (currentPage >= totalPage) {
      set({ isEndPage: true });
      return;
    }

    set({
      currentPage: currentPage + 1,
        isStartPage: false,
        isEndPage: currentPage + 1 === totalPage
    });
  },

  setPreviousPage: () => {
    const { currentPage } = get();
    
    if (currentPage <= 1) {
      set({ isStartPage: true });
      return;
    }

    set({
      currentPage: currentPage - 1,
      isEndPage: false,
      isStartPage: currentPage - 1 === 1
    });
  },

  setTotalPage: (total: number) => {
    const { perPage, currentPage } = get();
    const totalPage = Math.max(1, Math.ceil(total / perPage))

    set({
      totalPage,
      isEndPage: currentPage >= totalPage,
      isStartPage: currentPage <= 1
    });
  },

  goToPage: (page: number) => {
    const { totalPage } = get();
    const newPage = Math.min(Math.max(1, page), totalPage);

    set({
      currentPage: newPage,
      isEndPage: newPage >= totalPage,
      isStartPage: newPage <= 1
    });
  },

  resetPagination: () => {
    set({
      currentPage: 1,
      isEndPage: false,
      isStartPage: true
    });
  },
}));
