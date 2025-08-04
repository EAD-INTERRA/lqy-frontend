<template>
  <div class="p-4 space-y-6 ">
    <section class="mb-4">
      <div class="text-xl text-[#FF0000] font-semibold mb-4">Margin Status</div>
      <div class="bg-white shadow-lg p-5 lg:p-5 rounded-lg lg:rounded-2xl mb-2.5">
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
              class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white capitalize">
              {{ row.values[3] }}
            </span>
            <span v-else-if="row.values[3]?.toLowerCase() === 'pending'"
              class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-orange-500 text-white capitalize">
              {{ row.values[3] }}
            </span>
            <span v-else-if="row.values[3]?.toLowerCase() === 'rejected'"
              class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-red-500 text-white capitalize">
              {{ row.values[3] }}
            </span>
            <span v-else>
              {{ row.values[3] }}
            </span>
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
import { onMounted, ref, computed } from 'vue';
import BaseTable from '../../../packages/ui/components/BaseTable.vue';
import BasePagination from '../../../packages/ui/components/BasePagination.vue';

if (process.client) {
  import("vue-toastification").then((pkg) => {
    const useToast = pkg.useToast;
    toast = useToast();
  });
}
let toast = null;
const allCount = ref("");
const { $services } = useNuxtApp();
const loading = ref(false);
const allRequests = ref([]);

// Table headers
const headers = [
  "S/N",
  "Account Name",
  "CHN Number",
  "Status"
];

// Pagination logic
const currentPage = ref(1);
const pageSize = ref(10);

const totalCount = computed(() => allRequests.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() =>
  Math.min(currentPage.value * pageSize.value, totalCount.value)
);

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allRequests.value.slice(start, end).map((request, index) => ({
    values: [
      start + index + 1,
      `${request.user.profile?.first_name || ''} ${request.user.profile?.last_name || ''}`,
      request.chn,
      request.status,
    ],
    raw: request,
  }));
});

function setCurrentPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

onMounted(async () => {
  try {
    loading.value = true;
    const response = await $services.base.getAllMarginRequests();
    allCount.value = response.body.count || 0;
    allRequests.value = response.body.records || [];
  } catch (error) {
    console.error("Error fetching profiles:", error);
    toast.error("Failed to fetch profiles");
  } finally {
    loading.value = false;
  }
});
</script>