import { Ref } from 'vue';

export type DataTableRef = Ref<null | {
  currentPageFirstIndex: number
  currentPageLastIndex: number
  clientItemsLength: number
  maxPaginationNumber: number
  currentPaginationNumber: number
  isFirstPage: boolean
  isLastPage: boolean
  nextPage: () => void
  prevPage: () => void
  updatePage: (page: number) => void
  rowsPerPageOptions: number[]
  rowsPerPageActiveOption: number
  updateRowsPerPageActiveOption: (e: number) => void
}>