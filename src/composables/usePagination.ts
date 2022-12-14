import { computed } from 'vue';
import type { DataTableRef } from './dataTable'

export function usePagination(
  dataTableRef: DataTableRef,
) {
  // index related
  const currentPageFirstIndex = computed(() => dataTableRef.value?.currentPageFirstIndex);
  const currentPageLastIndex = computed(() => dataTableRef.value?.currentPageLastIndex);
  const clientItemsLength = computed(() => dataTableRef.value?.clientItemsLength);
  
  // pagination related
  const maxPaginationNumber = computed(() => dataTableRef.value?.maxPaginationNumber);
  const currentPaginationNumber = computed(() => dataTableRef.value?.currentPaginationNumber);
  
  const isFirstPage = computed(() => dataTableRef.value?.isFirstPage);
  const isLastPage = computed(() => dataTableRef.value?.isLastPage);
  
  const nextPage = () => {
    dataTableRef.value?.nextPage();
  };
  const prevPage = () => {
    dataTableRef.value?.prevPage();
  };
  const updatePage = (paginationNumber: number) => {
    dataTableRef.value?.updatePage(paginationNumber);
  };

  return {
    currentPageFirstIndex,
    currentPageLastIndex,
    clientItemsLength,
    maxPaginationNumber,
    currentPaginationNumber,
    isFirstPage,
    isLastPage,
    nextPage,
    prevPage,
    updatePage,
  }
}

export type UsePaginationReturn = ReturnType<typeof usePagination>
