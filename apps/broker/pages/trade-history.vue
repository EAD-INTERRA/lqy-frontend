<template>
  <div class="p-4 pt-[50px] space-y-6 ">
    <section class="mb-4">
      <div
        class="bg-white shadow-lg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]"
      >
        <div class="flex items-center justify-between mb-6">
          <p
            class="bg-theme-bc text-gray-500 bg-opacity-25 bolder w-fit text-lg px-3 py-1 rounded-[5px] font-bold"
          >
            Trade History
          </p>
        </div>

        <BaseTable
          :headers="headers"
          :rows="paginatedRows"
          :loading="loading"
          :showCheckbox="false"
          class=""
        >
          <template #cell-0="{ row }">
            <span>{{ row.values[0] }}</span>
          </template>
          <template #cell-1="{ row }">
            <span>{{ row.values[1] }}</span>
          </template>
          <template #cell-2="{ row }">
            <span>{{ row.values[2] }}</span>
          </template>
          <template #cell-3="{ row }">
            <span>{{ row.values[3] }}</span>
          </template>
          <template #cell-4="{ row }">
            <span
              v-if="row.values[4]?.toLowerCase() === 'completed'"
              class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white"
            >
              {{ row.values[4] }}
            </span>
            <span
              v-else-if="row.values[4]?.toLowerCase() === 'pending'"
              class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-orange-500 text-white"
            >
              {{ row.values[4] }}
            </span>
            <span
              v-else-if="row.values[4]?.toLowerCase() === 'failed'"
              class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-red-500 text-white"
            >
              {{ row.values[4] }}
            </span>
            <span v-else>
              {{ row.values[4] }}
            </span>
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

<script lang="ts" setup>
import { ref, computed } from "vue";
import BaseTable from "../../../packages/ui/components/BaseTable.vue";
import BasePagination from "../../../packages/ui/components/BasePagination.vue";

const loading = ref(false);
const allInvestors = ref([]);

// Headers matching your table columns
const headers = [
  "Transaction Id",
  "Asset",
  "Date",
  "Amount",
  "Status",
];

function generateRandomId(length = 12): string {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Dummy data generator function for demo
function generateDummyData() {
  const statuses = ["completed", "pending", "failed"];
  const assets = ["BTC", "ETH", "ADA", "SOL", "DOT"];
  const dummy = [];
  for (let i = 1; i <= 35; i++) {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomAsset = assets[Math.floor(Math.random() * assets.length)];
    const randomAmount = (Math.random() * 10000 + 1000).toFixed(2);
    // random date in last 60 days
    const randomDate = new Date(
      Date.now() - Math.floor(Math.random() * 60 * 24 * 60 * 60 * 1000)
    );
    dummy.push({
      transactionId: `#${generateRandomId(12)}`,
      asset: randomAsset,
      date: randomDate.toISOString().split("T")[0],
      amount: parseFloat(randomAmount),
      status: randomStatus,
    });
  }
  return dummy;
}

// Initialize with dummy data
allInvestors.value = generateDummyData();

// Pagination setup
const currentPage = ref(1);
const pageSize = ref(10);

const totalCount = computed(() => allInvestors.value.length);
const totalPages = computed(() =>
  Math.ceil(totalCount.value / pageSize.value)
);
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() =>
  Math.min(currentPage.value * pageSize.value, totalCount.value)
);

// Prepare rows for the table pagination slice
const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allInvestors.value.slice(start, end).map((item) => ({
    values: [
      item.transactionId,
      item.asset,
      item.date,
      `₦${item.amount.toLocaleString()}`,
      item.status,
    ],
    raw: item,
  }));
});

// Pagination handler
function setCurrentPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
</script>
