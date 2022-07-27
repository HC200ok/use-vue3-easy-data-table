<template>
  <EasyDataTable
    ref="dataTable"
    v-model:server-options="serverOptions"
    :headers="headers"
    :items="items"
    :server-items-length="serverItemsLength"
    hide-footer
    :loading="loading"
  />

  <div class="customize-footer">
    <div class="customize-index">
      <!-- In server-side mode, please use serverItemsLength prop not clientItemsLength variable !!! -->
      Now displaying: {{currentPageFirstIndex}} ~ {{currentPageLastIndex}} of {{serverItemsLength}}
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
</template>

<script setup lang="ts">
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import { mockServerItems } from "./mock";
import { ref, watch } from "vue";
import { usePagination } from "./useVue3EasyDataTable";
import type { UsePaginationReturn } from '../types/index'

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Address", value: "address" },
  { text: "Height", value: "height", sortable: true },
  { text: "Weight", value: "weight", sortable: true },
  { text: "Age", value: "age", sortable: true },
  { text: "Favourite sport", value: "favouriteSport" },
  { text: "Favourite fruits", value: "favouriteFruits" },
];

const items = ref<Item[]>([]);

const loading = ref(false);
const serverItemsLength = ref(0);
const serverOptions = ref<ServerOptions>({
  page: 1,
  rowsPerPage: 5,
  sortBy: 'age',
  sortType: 'desc',
});

const loadFromServer = async () => {
  loading.value = true;
  const {
    serverCurrentPageItems,
    serverTotalItemsLength,
  } = await mockServerItems(serverOptions.value, 101);
  items.value = serverCurrentPageItems;
  serverItemsLength.value = serverTotalItemsLength;
  loading.value = false;
};

// initial load
loadFromServer();

watch(serverOptions, (value) => { loadFromServer(); }, { deep: true });

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
