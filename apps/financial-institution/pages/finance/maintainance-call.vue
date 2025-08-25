<template>
  <div class="p-4 space-y-6">
    <section class="mb-4">
      <div
        class="shadow-lg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]"
      >
        <div class="flex justify-between">
          <p class="bg-theme-tb font-semibold w-fit text-lg px-3 py-1 rounded-[5px] mb-6">
            Maintenance
          </p>
        </div>

        <BaseTable
          :headers="headers"
          :rows="paginatedRows"
          :loading="loading"
          :showCheckbox="false"
          class="!font-ox !font-bold"
        >
          <template #cell-0="{ row }">
            <span>{{ row.values[0] }}</span>
          </template>
          <template #cell-1="{ row }">
            <span>{{ row.values[1] }}</span>
          </template>
          <template #cell-2="{ row }">
            <span>{{ row.values[2].toLocaleString() }}</span>
          </template>
          <template #cell-3="{ row }">
            <span>{{ row.values[3].toLocaleString() }}</span>
          </template>
          <template #cell-4="{ row }">
            <span>{{ row.values[4].toLocaleString() }}</span>
          </template>
          <template #cell-5="{ row }">
            <span>{{ row.values[5].toLocaleString() }}</span>
          </template>
          <template #cell-6="{ row }">
            <span>{{ row.values[6].toLocaleString() }}</span>
          </template>
        </BaseTable>

        <BasePagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          :startItem="startItem"
          :endItem="endItem"
          :totalCount="totalCount"
          @update:page="setCurrentPage"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import BaseTable from "../../../packages/ui/components/BaseTable.vue";
import BasePagination from "../../../packages/ui/components/BasePagination.vue";
const headers = [
  "Name",
  "CHN Number",
  "Cash Drawn ($)",
  "Value of Securities ($)",
  "Margin Lending Value ($)",
  "Security Lending Value ($)",
  "Maintenance Requirement ($)",
];

function generateRandomName() {
  const firstNames = ["John", "Jane", "Alex", "Chris", "Taylor", "Jordan", "Morgan", "Pat", "Sam", "Lee"];
  const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Martinez"];
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

const loading = ref(false);

const rows = ref(
  Array.from({ length: 20 }, (_, i) => ({
    values: [
      generateRandomName(),
      `CHN-${Math.floor(100000 + Math.random() * 900000)}`,
      Math.floor(Math.random() * 50000) + 10000,
      Math.floor(Math.random() * 1000000) + 100000,
      Math.floor(Math.random() * 500000) + 50000,
      Math.floor(Math.random() * 100000) + 10000,
      Math.floor(Math.random() * 50000) + 5000,
    ],
    raw: {},
  }))
);

// Pagination logic
const currentPage = ref(1);
const pageSize = 10;
const totalCount = computed(() => rows.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize));
const startItem = computed(() => (currentPage.value - 1) * pageSize + 1);
const endItem = computed(() => Math.min(currentPage.value * pageSize, totalCount.value));
const paginatedRows = computed(() =>
  rows.value.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize)
);

function setCurrentPage(page: number) {
  currentPage.value = page;
}
</script>
