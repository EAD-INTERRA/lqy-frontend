<template>
  <div class="p-4 space-y-6">
    <section class="mb-4 rounded-[14px] shadow-lg p-4">
      <p class="bg-theme-tb font-semibold w-fit text-lg px-3 py-1 rounded mb-4">
        Security Lending
      </p>

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
          <span>{{ row.values[3] }}</span>
        </template>
        <template #cell-4="{ row }">
          <span>{{ row.values[4] }}</span>
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
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import BaseTable from "../../../packages/ui/components/BaseTable.vue";
  import BasePagination from "../../../packages/ui/components/BasePagination.vue";
// Headers for BaseTable
const headers = ["Asset Name", "Asset ID", "Current Value (₦)", "Category", "Owner"];

// Loading state
const loading = ref(false);

// Auto-generate rows
const rows = ref(
  Array.from({ length: 25 }, (_, i) => ({
    values: [
      `Asset ${i + 1}`,
      `ASSET-${Math.floor(1000 + Math.random() * 9000)}`,
      Math.floor(Math.random() * 5000000) + 100000,
      ["Equities", "Bonds", "Derivatives", "Other"][Math.floor(Math.random() * 4)],
      ["John Doe", "Jane Smith", "Alice", "Bob"][Math.floor(Math.random() * 4)],
    ],
    raw: {}, // raw object to pass to View button
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

// Pagination handler
function setCurrentPage(page: number) {
  currentPage.value = page;
}

// Example view handler
function openDetails(row: any) {
  console.log("View row:", row);
}
</script>
