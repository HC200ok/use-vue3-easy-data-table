import { Ref } from 'vue';
export declare type DataTableRef = Ref<null | {
    currentPageFirstIndex: number;
    currentPageLastIndex: number;
    clientItemsLength: number;
    maxPaginationNumber: number;
    currentPaginationNumber: number;
    isFirstPage: boolean;
    isLastPage: boolean;
    nextPage: () => void;
    prevPage: () => void;
    updatePage: (page: number) => void;
}>;
export declare function usePagination(dataTableRef: DataTableRef): {
    currentPageFirstIndex: import("vue").ComputedRef<number | undefined>;
    currentPageLastIndex: import("vue").ComputedRef<number | undefined>;
    clientItemsLength: import("vue").ComputedRef<number | undefined>;
    maxPaginationNumber: import("vue").ComputedRef<number | undefined>;
    currentPaginationNumber: import("vue").ComputedRef<number | undefined>;
    isFirstPage: import("vue").ComputedRef<boolean | undefined>;
    isLastPage: import("vue").ComputedRef<boolean | undefined>;
    nextPage: () => void;
    prevPage: () => void;
    updatePage: (paginationNumber: number) => void;
};
export declare type UsePaginationReturn = ReturnType<typeof usePagination>;
//# sourceMappingURL=usePagination.d.ts.map