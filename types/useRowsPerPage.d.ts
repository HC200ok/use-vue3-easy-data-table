import type { DataTableRef } from './dataTable';
export declare function useRowsPerPage(dataTableRef: DataTableRef): {
    rowsPerPageOptions: import("vue").ComputedRef<number[] | undefined>;
    rowsPerPageActiveOption: import("vue").ComputedRef<number | undefined>;
    updateRowsPerPageActiveOption: (option: number) => void;
};
export declare type UseRowsPerPageReturn = ReturnType<typeof useRowsPerPage>;
//# sourceMappingURL=useRowsPerPage.d.ts.map