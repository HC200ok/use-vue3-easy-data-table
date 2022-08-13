import { computed } from 'vue';
import type { DataTableRef } from './dataTable'

export function useRowsPerPage(
  dataTableRef: DataTableRef,
) {
  const rowsPerPageOptions = computed(() => dataTableRef.value?.rowsPerPageOptions);
  const rowsPerPageActiveOption = computed(() => dataTableRef.value?.rowsPerPageActiveOption);

  const updateRowsPerPageActiveOption = (option: number) => {
    dataTableRef.value?.updateRowsPerPageActiveOption(option);
  };

  return {
    rowsPerPageOptions,
    rowsPerPageActiveOption,
    updateRowsPerPageActiveOption,
  }
}

export type UseRowsPerPageReturn = ReturnType<typeof useRowsPerPage>
