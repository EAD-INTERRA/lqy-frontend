<template>
  <div class="p-4 pt-[50px] space-y-6 ">
    <section class="mb-4">
      <div class="bg-white shadow-lg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]">
        <div class="flex items-center justify-between mb-6">
          <p class=" bg-theme-bc text-gray-500 bg-opacity-25 bolder w-fit  text-lg px-3 py-1 rounded-[5px] font-bold ">
            Trade History</p>
        </div>
        <BaseTable :headers="headers" :rows="paginatedRows" :loading="loading" :showCheckbox="false" class="">
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
            <span v-if="row.values[3]?.toLowerCase() === 'accepted'"
              class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white">
              {{ row.values[3] }}
            </span>
            <span v-else-if="row.values[3]?.toLowerCase() === 'pending'"
              class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-orange-500 text-white">
              {{ row.values[3] }}
            </span>
            <span v-else-if="row.values[3]?.toLowerCase() === 'rejected'"
              class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-red-500 text-white">
              {{ row.values[3] }}
            </span>
            <span v-else>
              {{ row.values[3] }}
            </span>
          </template>
        </BaseTable>

        <!-- Pagination -->
        <BasePagination :currentPage="currentPage" :totalPages="totalPages" :startItem="startItem" :endItem="endItem"
          :totalCount="totalCount" @update:page="setCurrentPage" />

      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import BaseTable from '../../../packages/ui/components/BaseTable.vue'
import BasePagination from '../../../packages/ui/components/BasePagination.vue'
if (process.client) {
  import("vue-toastification").then((pkg) => {
    const useToast = pkg.useToast;
    toast = useToast();
  });
}
let toast = null;
const { $services } = useNuxtApp();
const loading = ref(false);
const allInvestors = ref([]);
const profiles = ref([]);
const pendingCount = ref("");
const acceptedCount = ref("");
const rejectedCount = ref("");
const allCount = ref("");

const headers = [
  "Transaction Id",
  "Asset",
  "Date",
  "Amount",
  "Status",

];


// Fetch and Init
onMounted(async () => {
  //   fetchProfiles()
  try {
    
    // Fetch profiles
    const response = await $services.base.getProfiles();
    console.log("Profiles fetched:", response);
    profiles.value = response.body.results || [];

  } catch (error) {
    console.error("Error fetching profiles:", error);
    toast.error("Failed to fetch Records");
  }
});

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allInvestors.value.slice(start, end).map((request, index) => ({
    values: [
      start + index + 1,
      `${request.user.profile?.first_name || ''} ${request.user.profile?.last_name || ''}`,
      request.chn,
      request.status,
    ],
    raw: request,
  }));
});

// Pagination logic
const currentPage = ref(1);
const pageSize = ref(10);
const totalCount = computed(() => allInvestors.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() =>
  Math.min(currentPage.value * pageSize.value, totalCount.value)
);

function setCurrentPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
// Pagination logic End


</script>
