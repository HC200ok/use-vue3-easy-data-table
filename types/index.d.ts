
import { Ref, ComputedRef} from 'vue';

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
}>

export type UsePaginationReturn = {
  currentPageFirstIndex: ComputedRef<number | undefined>
  currentPageLastIndex: ComputedRef<number | undefined>
  clientItemsLength: ComputedRef<number | undefined>
  maxPaginationNumber: ComputedRef<number | undefined>
  currentPaginationNumber: ComputedRef<number | undefined>
  isFirstPage: ComputedRef<boolean | undefined>
  isLastPage: ComputedRef<boolean | undefined>
  nextPage: () => void
  prevPage: () => void
  updatePage: (paginationNumber: number) => void;
}