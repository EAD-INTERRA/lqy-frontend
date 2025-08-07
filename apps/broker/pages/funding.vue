<template>
  <div class="p-4 space-y-6">
    <section class="mb-4">
      <div class="text-xl text-[#FF0000] font-semibold mb-4">Funding Request</div>
      <section class="grid grid-cols-5 w-full gap-6">
        <div
          class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]"
        >
          <div>
            <p class="font-ox text-ox-xs">Total Amount Requested</p>
            <p class="font-ox font-bold text-left text-ox-lg">{{ allCount || 0 }}</p>
          </div>
          <!-- <img src="../assets/images/total-request.svg" class="rounded-full" alt="icon" /> -->
        </div>
        <div
          class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]"
        >
          <!-- <img src="../assets/images/accepted-request.svg" class="rounded-full" alt="icon" /> -->
          <div>
            <p class="font-ox text-ox-xs">Total Requests</p>
            <p class="font-ox font-bold text-left text-ox-lg">{{ acceptedCount || 0 }}</p>
          </div>
        </div>
        <div
          class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]"
        >
          <!-- <img src="../assets/images/rejected-request.svg" class="rounded-full" alt="icon" /> -->
          <div>
            <p class="font-ox text-ox-xs">Approved Requests</p>
            <p class="font-ox font-bold text-left text-ox-lg">{{ pendingCount || 0 }}</p>
          </div>
        </div>
        <div
          class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]"
        >
          <!-- <img src="../assets/images/rejected-request.svg" class="rounded-full" alt="icon" /> -->
          <div>
            <p class="font-ox text-ox-xs">Pending Requests</p>
            <p class="font-ox font-bold text-left text-ox-lg">{{ pendingCount || 0 }}</p>
          </div>
        </div>
        <div
          class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]"
        >
          <!-- <img src="../assets/images/rejected-request.svg" class="rounded-full" alt="icon" /> -->
          <div>
            <p class="font-ox text-ox-xs">Rejected Requests</p>
            <p class="font-ox font-bold text-left text-ox-lg">{{ pendingCount || 0 }}</p>
          </div>
        </div>
      </section>
      <div class="bg-white shadow-lg p-5 lg:p-5 rounded-lg lg:rounded-2xl mb-2.5">
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
            <span class="text-[#155DFC]">{{ row.values[2] }}</span>
          </template>
          <template #cell-3="{ row }">
            <span
              v-if="row.values[3]?.toLowerCase() === 'accepted'"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#027A48]/20 text-[#027A48] capitalize"
            >
              {{ row.values[3] }}
            </span>
            <span
              v-else-if="row.values[3]?.toLowerCase() === 'pending'"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-500/20 text-orange-500 capitalize"
            >
              {{ row.values[3] }}
            </span>
            <span
              v-else-if="row.values[3]?.toLowerCase() === 'rejected'"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#B42318]/20 text-[#B42318] capitalize"
            >
              {{ row.values[3] }}
            </span>
          </template>
          <template #cell-4="{ row }">
            <button
              @click="openModal(row.raw)"
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

        <!-- Modal -->
        <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            class="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 space-y-6 relative"
          >
            <!-- Close Button -->
            <div class="flex justify-between items-center">
              <h3 class="font-ox text-[14px] text-black/80">Marginability</h3>
              <button
                @click="showModal = false"
                class="absolute right-3 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <!-- Modal Content -->
            <div class="space-y-4">
              <!-- Dynamic Marginability Info Box -->
              <div
                :class="[
                  'font-ubuntu border rounded-[12px] p-4',
                  isMarginable
                    ? 'border-[#027A48]/25 bg-[#ECFDF3]'
                    : 'border-[#B42318b3] bg-[#FEF3F2]',
                ]"
              >
                <h2
                  :class="[
                    'font-bold text-[16px]',
                    isMarginable ? 'text-[#027A48]' : 'text-[#B42318]',
                  ]"
                >
                  {{
                    isMarginable
                      ? "This account is marginable"
                      : "This account is not marginable"
                  }}
                </h2>
                <p
                  :class="[
                    'text-[14px]',
                    isMarginable ? 'text-[#027A48]/75' : 'text-[#B42318b3]',
                  ]"
                  v-html="
                    isMarginable
                      ? `Based on the current ML Value and total Value, the maintenance limit is <b class='text-[#027A48]'>${marginRatio}%</b> which qualifies the account for margin trading.`
                      : 'The ML to Value ratio is below the required threshold for margin trading eligibility.'
                  "
                />
              </div>

              <!-- Static Info Section -->
              <div
                class="border border-gray-200 bg-white py-2 px-4 space-y-4 shadow-xl rounded-[12px]"
              >
                <div class="border-b border-gray-200 py-2">
                  <h2>Information</h2>
                </div>
                <div class="grid grid-cols-2 gap-2 font-ubuntu font-medium">
                  <div class="flex flex-col">
                    <span class="text-[14px] text-black/50">Investor Name</span>
                    <p class="text-[16px] text-black/75">
                      {{ selectedRequest?.user?.profile?.first_name || "" }}
                      {{ selectedRequest?.user?.profile?.last_name || "" }}
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[14px] text-black/50">VAS Sec.</span>
                    <p class="text-[16px] text-black/75">
                      {{ formatCurrency(vasSecValue) }}
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[14px] text-black/50">CHN Number</span>
                    <p class="text-[16px] text-black/75">
                      {{ selectedRequest?.chn || "" }}
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[14px] text-black/50">ML Value</span>
                    <p class="text-[16px] text-black/75">{{ formatCurrency(mlValue) }}</p>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[14px] text-black/50">Reason for Approval</span>
                    <p class="text-[16px] text-black/75 capitalize">
                      {{ selectedRequest?.status }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Modal -->
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import BaseTable from "../../../packages/ui/components/BaseTable.vue";
import BasePagination from "../../../packages/ui/components/BasePagination.vue";

let toast = null;
if (process.client) {
  import("vue-toastification").then((pkg) => {
    const useToast = pkg.useToast;
    toast = useToast();
  });
}

const { $services } = useNuxtApp();

const headers = ["S/N", "Account Name", "CHN Number", "Status", "Action"];
const allRequests = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const loading = ref(false);
const showModal = ref(false);
const selectedRequest = ref<any>(null);
const vasSecValue = ref(0);
const mlValue = ref(0);
const marginRatio = ref(0);

const isMarginable = computed(() => marginRatio.value >= 50);

watch(selectedRequest, (newVal) => {
  if (newVal) {
    // Generate random VAS value between ₦1,000,000 and ₦5,000,000
    vasSecValue.value = Math.floor(Math.random() * 4000000) + 1000000;

    // ML value is between 20% and 90% of total VAS value
    const randomPercentage = Math.floor(Math.random() * 71) + 20;
    mlValue.value = Math.floor((randomPercentage / 100) * vasSecValue.value);

    marginRatio.value = ((mlValue.value / vasSecValue.value) * 100).toFixed(2);
  }
});

// Format as currency (e.g. ₦1,234,567.00)
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(amount);
};
const totalCount = computed(() => allRequests.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() =>
  Math.min(currentPage.value * pageSize.value, totalCount.value)
);

function openModal(request: any) {
  selectedRequest.value = request;
  showModal.value = true;
}

function setCurrentPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allRequests.value.slice(start, end).map((request, index) => ({
    values: [
      start + index + 1,
      `${request.user.profile?.first_name || ""} ${
        request.user.profile?.last_name || ""
      }`,
      request.chn,
      request.status,
      null,
    ],
    raw: request,
  }));
});

onMounted(async () => {
  try {
    loading.value = true;
    const response = await $services.base.getAllMarginRequests();
    allRequests.value = response.body.records || [];
  } catch (error) {
    console.error("Error fetching profiles:", error);
    if (toast) toast.error("Failed to fetch profiles");
  } finally {
    loading.value = false;
  }
});
</script>
