<template>
  <div class="p-4 space-y-6">
    <section class="mb-4">
      <div
        class="bg-white shadow-lg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]"
      >
        <div class="flex justify-between">
          <p class="bg-theme-tb font-semibold w-fit text-lg px-3 py-1 rounded-[5px] mb-6">
            Profit List
          </p>
        </div>

        <!-- Dynamic Responsive Table -->
        <BaseTable
          :headers="headers"
          :rows="paginatedRows"
          :loading="loading"
          :showCheckbox="false"
          class="!font-ox !font-bold"
        >
          <!-- Name Column (Responsive) -->
          <template #cell-0="{ row }">
            <span>{{ row.values[0] }}</span>
          </template>
          <template #cell-1="{ row }">
            <NuxtLink
             :to="`/capital-broker?company_name=${row.values[1]}`" class="font-bold font-ox">{{ row.values[1] }}</NuxtLink>
          </template>
          <template #cell-2="{ row }">
            <span>{{ row.values[2] }}</span>
          </template>
          <template #cell-3="{ row }">
            <span>{{ row.values[3] }} %</span>
          </template>
          <template #cell-4="{ row }">
            <span>{{ row.values[4] }}</span>
          </template>
          <template #cell-5="{ row }">
            <span>{{ row.values[5] }}</span>
          </template>
        </BaseTable>

        <!-- Pagination -->
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

<script setup>
import { ref, computed } from "vue";
import BaseTable from "../../../packages/ui/components/BaseTable.vue";
import BasePagination from "../../../packages/ui/components/BasePagination.vue";
// Table headers
const headers = [
  "S/N",
  "Brokers",
  "Cash Disbursed (₦)",
  "Proportion of Funds (%)",
  "Interest Accrued",
];

// Random generators
const banks = [
   "ARM Securities Limited",
  "Meristem Securities Limited",
  "Chapel Hill Denham Securities",
  "Afrinvest Securities Limited",
  "Cordros Capital Limited",
  "FSDH Securities Limited",
  "Stanbic IBTC Stockbrokers",
  "United Capital Securities Limited",
  "Vetiva Capital Management",
  "CSL Stockbrokers Limited"
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate rows
const totalRows = 50;
const rows = ref(
  Array.from({ length: totalRows }, (_, i) => ({
    values: [
     banks.length  + 1,
      banks[randomNumber(0, banks.length - 1)],
      randomNumber(1000000, 5000000).toLocaleString(),
      randomNumber(10, 100),
      randomNumber(50000, 500000).toLocaleString(),
    ],
    raw: { id: i + 1 },
  }))
);

const loading = ref(false);

// Pagination state
const currentPage = ref(1);
const pageSize = 10;
const totalCount = computed(() => rows.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize));
const startItem = computed(() => (currentPage.value - 1) * pageSize + 1);
const endItem = computed(() => Math.min(currentPage.value * pageSize, totalCount.value));
const paginatedRows = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  return rows.value
    .slice(startIndex, startIndex + pageSize)
    .map((row, i) => ({
      ...row,
      values: [
        startIndex + i + 1, // ✅ Proper serial number
        ...row.values.slice(1),
      ],
    }));
});

function setCurrentPage(page) {
  currentPage.value = page;
}

function openDetails(row) {
  console.log("Open details for:", row);
}


</script>
