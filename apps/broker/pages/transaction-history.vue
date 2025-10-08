<template>
  <div class="p-4 pt-[50px] space-y-6 overflow-y-auto">
    <section class="mb-4">
      <div class="bg-white shadow-lg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]">
        <div class="flex items-center justify-between mb-6">
          <p class="bg-theme-bc text-gray-500 bg-opacity-25 bolder w-fit text-lg px-3 py-1 rounded-[5px] font-bold">
            Transaction History
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
              v-if="row.values[4]?.toLowerCase() === 'accepted'"
              class="inline-flex w-1/2 text-center justify-center items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white capitalize"
            >
              {{ row.values[4] }}
            </span>
            <span
              v-else-if="row.values[4]?.toLowerCase() === 'pending'"
              class="inline-flex w-1/2 text-center justify-center items-center px-3 py-1 rounded-md text-sm font-medium bg-orange-500 text-white capitalize"
            >
              {{ row.values[4] }}
            </span>
            <span
              v-else-if="row.values[4]?.toLowerCase() === 'rejected'"
              class="inline-flex w-1/2 text-center justify-center items-center px-3 py-1 rounded-md text-sm font-medium bg-red-500 text-white capitalize"
            >
              {{ row.values[4] }}
            </span>
            <span v-else>
              {{ row.values[4] }}
            </span>
          </template>
          <template #cell-5="{ row }">
            <button
              @click="viewTransaction(row.raw)"
              class="border border-gray-300 text-black px-4 py-1 rounded-md font-ox text-sm hover:bg-gray-100 transition"
            >
              View
            </button>
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

interface Transaction {
  transactionId: string;
  transactionType: string;
  date: string;
  amount: number;
  status: "accepted" | "pending" | "rejected" | string;
}

const loading = ref(false);
const allTransactions = ref<Transaction[]>([]);

const headers = [
  "Transaction Id",
  "Transaction Type",
  "Date",
  "Amount",
  "Status",
  "Action",
];

// Random 12-char alphanumeric ID generator
function generateRandomId(length = 12): string {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Dummy data generator
function generateDummyTransactions(count = 50): Transaction[] {
  const statuses = ["accepted", "pending", "rejected"];
  const transactionTypes = ["Deposit", "Withdrawal"];
  const now = Date.now();

  return Array.from({ length: count }, () => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const type = transactionTypes[Math.floor(Math.random() * transactionTypes.length)];
    const amount = +(Math.random() * 5000 + 500).toFixed(2);
    const date = new Date(
      now - Math.floor(Math.random() * 90 * 24 * 60 * 60 * 1000) // random date in last 90 days
    )
      .toISOString()
      .split("T")[0];

    return {
      transactionId: `#${generateRandomId(12)}`,
      transactionType: type,
      date,
      amount,
      status,
    };
  });
}

allTransactions.value = generateDummyTransactions();

const currentPage = ref(1);
const pageSize = ref(10);

const totalCount = computed(() => allTransactions.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() => Math.min(currentPage.value * pageSize.value, totalCount.value));

const paginatedRows = computed(() =>
  allTransactions.value
    .slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
    .map((item) => ({
      values: [
        item.transactionId, 
        item.transactionType,
        item.date,
        `₦${item.amount.toLocaleString()}`,
        item.status,
        null
      ],
      raw: item,
    }))
);

function setCurrentPage(page: number) {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
}

function viewTransaction(transaction: Transaction) {
  // Example: You can open a modal or route to a details page here
  alert(`Viewing transaction ${transaction.transactionId} (${transaction.transactionType})`);
}
</script>
