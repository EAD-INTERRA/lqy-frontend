
<template>
  <div class="px-4 space-y-6 overflow-y-auto">
    <div class="flex justify-between" v-if="activeTab === 1">
      <div class="text-xl text-[#FF0000] font-semibold mb-4">Funding Request</div>
      <button @click="activeTab = 2" class="bg-[#10356D] shadow-lg text-white py-2 px-4 rounded-md hover:bg-[#10356D]/90 transition flex items-center justify-center">
        Request Funding
      </button>
    </div>

    <section v-if="activeTab === 1" class="mb-4">
      <section class="grid grid-cols-1 md:grid-cols-5 w-full gap-6 mb-4">
        <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
          <div>
            <p class="font-ox text-ox-xs">Total Amount Requested</p>
            <p class="font-ox font-bold text-left text-ox-lg">{{ formatCurrency(totalAmountRequested) }}</p>
          </div>
        </div>
        <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
          <div>
            <p class="font-ox text-ox-xs">Total Requests</p>
            <p class="font-ox font-bold text-left text-ox-lg">{{ totalCount }}</p>
          </div>
        </div>
        <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
          <div>
            <p class="font-ox text-ox-xs">Approved Requests</p>
            <p class="font-ox font-bold text-left text-ox-lg">{{ approvedCount }}</p>
          </div>
        </div>
        <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
          <div>
            <p class="font-ox text-ox-xs">Pending Requests</p>
            <p class="font-ox font-bold text-left text-ox-lg">{{ pendingCount }}</p>
          </div>
        </div>
        <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
          <div>
            <p class="font-ox text-ox-xs">Rejected Requests</p>
            <p class="font-ox font-bold text-left text-ox-lg">{{ rejectedCount }}</p>
          </div>
        </div>
      </section>

      <div class="bg-white shadow-lg p-5 rounded-lg mb-2.5">
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
            <span>{{ row.values[2] }}</span>
          </template>
          <template #cell-3="{ row }">
            <span>{{ row.values[3] }}</span>
          </template>
          <template #cell-4="{ row }">
            <span
              v-if="row.values[4]?.toLowerCase() === 'approved'"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#027A48]/20 text-[#027A48] capitalize"
            >
              {{ row.values[4] }}
            </span>
            <span
              v-else-if="row.values[4]?.toLowerCase() === 'pending'"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-500/20 text-orange-500 capitalize"
            >
              {{ row.values[4] }}
            </span>
            <span
              v-else-if="row.values[4]?.toLowerCase() === 'rejected'"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#B42318]/20 text-[#B42318] capitalize"
            >
              {{ row.values[4] }}
            </span>
          </template>
          <template #cell-5="{ row }">
            <button
              @click="openDetails(row.raw)"
              class="border border-[#000000]/10 text-black px-4 py-1 rounded-lg font-ox text-14 transition-transform duration-200 ease-in-out hover:bg-gray-50 hover:scale-105"
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

    <fundingRequestComponent v-if="activeTab === 2"  @go-back="activeTab = 1" />
    <requestDetailsComponent v-if="activeTab === 3"  @go-back="activeTab = 1"/>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import BaseTable from "../../../packages/ui/components/BaseTable.vue";
import BasePagination from "../../../packages/ui/components/BasePagination.vue";

const activeTab = ref(1);

const headers = ["S/N", "CHN Number", "Credit Line Amount", "Date Submitted", "Status", "Action"];

const allRequests = ref([
  {
    chn: "CHN001",
    creditLineAmount: 2500000,
    dateSubmitted: "2025-07-15",
    status: "Approved",
  },
  {
    chn: "CHN002",
    creditLineAmount: 1500000,
    dateSubmitted: "2025-07-12",
    status: "Pending",
  },
  {
    chn: "CHN003",
    creditLineAmount: 3500000,
    dateSubmitted: "2025-07-10",
    status: "Rejected",
  },
  {
    chn: "CHN004",
    creditLineAmount: 2000000,
    dateSubmitted: "2025-07-08",
    status: "Approved",
  },
  {
    chn: "CHN005",
    creditLineAmount: 3000000,
    dateSubmitted: "2025-07-05",
    status: "Pending",
  },
]);

const currentPage = ref(1);
const pageSize = ref(10);

const totalCount = computed(() => allRequests.value.length);
const approvedCount = computed(() => allRequests.value.filter(r => r.status.toLowerCase() === "approved").length);
const pendingCount = computed(() => allRequests.value.filter(r => r.status.toLowerCase() === "pending").length);
const rejectedCount = computed(() => allRequests.value.filter(r => r.status.toLowerCase() === "rejected").length);
const totalAmountRequested = computed(() =>
  allRequests.value.reduce((sum, r) => sum + (r.creditLineAmount || 0), 0)
);

const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() => Math.min(currentPage.value * pageSize.value, totalCount.value));

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allRequests.value.slice(start, end).map((request, index) => ({
    values: [
      start + index + 1,            // S/N
      request.chn,                 // CHN Number
      formatCurrency(request.creditLineAmount), // Credit Line Amount
      request.dateSubmitted,       // Date Submitted
      request.status,              // Status
      null,                       // Action (for button)
    ],
    raw: request,
  }));
});

function setCurrentPage(page) {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
}

function openDetails(request) {
  // Here you can assign request to selectedRequest if needed
  activeTab.value = 3;
}

const currencyFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 2,
});

function formatCurrency(value) {
  return currencyFormatter.format(value);
}
</script>
