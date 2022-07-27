<template>
  <EasyDataTable
    ref="dataTable"
    :headers="headers"
    :items="items"
    :rows-per-page="10"
    hide-footer
  />
  
  <div class="customize-footer">
    <div class="customize-index">
      Now displaying: {{currentPageFirstIndex}} ~ {{currentPageLastIndex}} of {{clientItemsLength}}
    </div>
  
    <div class="customize-buttons">
      <span
        v-for="paginationNumber in maxPaginationNumber"
        class="customize-button"
        :class="{'active': paginationNumber === currentPaginationNumber}"
        @click="updatePage(paginationNumber)"
      >
        {{paginationNumber}}
      </span>
    </div>
  
    <div class="customize-pagination">
      <button class="prev-page" @click="prevPage" :disabled="isFirstPage">prev page</button>
      <button class="next-page" @click="nextPage" :disabled="isLastPage">next page</button>
    </div>
  </div>

  <ServerSide/>
</template>

<script setup lang="ts">
import ServerSide from "./ServerSide.vue";
import type { Header, Item } from "vue3-easy-data-table";
import { ref } from 'vue';
import { mockClientItems } from "./mock";
import { usePagination } from "./useVue3EasyDataTable";
import type { UsePaginationReturn } from '../types/index'
// $ref dataTable
const dataTable = ref();

const {
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
}: UsePaginationReturn = usePagination(dataTable)

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Address", value: "address" },
  { text: "Height", value: "height", sortable: true },
  { text: "Weight", value: "weight", sortable: true },
  { text: "Age", value: "age", sortable: true },
  { text: "Favourite sport", value: "favouriteSport" },
  { text: "Favourite fruits", value: "favouriteFruits" },
];

const items: Item[] = mockClientItems(200);
</script>

<style scoped>
.customize-footer {
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.customize-footer div {
  margin: 5px;
}
.customize-button {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 100%;
  cursor: pointer;
  padding: 3px;
  line-height: 20px;
}
.customize-button.active {
  color: #fff;
  background-color: #3db07f;
}
.customize-pagination button {
  margin: 0 5px;
  cursor: pointer;
}
</style>
