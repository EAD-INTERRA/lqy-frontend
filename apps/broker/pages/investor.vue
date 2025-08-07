<template>
  <div class="p-4 space-y-6">
    <div class="text-xl text-[#FF0000] font-semibold mb-4">CAPITAL ASSET LTD</div>

    <!-- Summary Cards -->
    <section class="grid grid-cols-4 w-full gap-6">
      <div class="bg-white shadow-custom-heavy flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
        <div>
          <p class="font-ox text-ox-xs">Cash Drawn</p>
          <p class="font-ox font-bold text-left text-ox-lg">{{ allCount }}</p>
        </div>
      </div>
      <div class="bg-white shadow-custom-heavy flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
        <div>
          <p class="font-ox text-ox-xs">Total MLV</p>
          <p class="font-ox font-bold text-left text-ox-lg">{{ formatCurrency(totalMLV) }}</p>
        </div>
      </div>
      <div class="bg-white shadow-custom-heavy flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
        <div>
          <p class="font-ox text-ox-xs">Total VAS</p>
          <p class="font-ox font-bold text-left text-ox-lg">{{ formatCurrency(totalVAS) }}</p>
        </div>
      </div>
      <div class="bg-white shadow-custom-heavy flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
        <div>
          <p class="font-ox text-ox-xs">Total SLV</p>
          <p class="font-ox font-bold text-left text-ox-lg">{{ formatCurrency(totalSLV) }}</p>
        </div>
      </div>
    </section>

    <!-- Table Section -->
    <section class="p-4mb-4">
      <div class="bg-white shadow-custom-heavy p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]">
        <div class="flex items-center justify-between mb-6">
          <p class="bg-gray-300 text-gray-500 bg-opacity-25 bolder w-fit text-lg px-3 py-1 rounded-[5px] font-bold">
            Investors Securities (CSCS)
          </p>
        </div>

        <BaseTable
          :headers="headers"
          :rows="paginatedRows"
          :loading="loading"
          :showCheckbox="false"
        >
        <template #cell-5="{ row }">
            <button
              @click="openModal(row.raw)"
              class="border border-[#000000]/10 text-black px-4 py-1 rounded-lg font-ox text-14 transition-transform duration-200 ease-in-out hover:bg-gray-50 hover:scale-105"
            >
              View
            </button>
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
import { ref, computed, onMounted } from 'vue';
import BaseTable from '../../../packages/ui/components/BaseTable.vue'
import BasePagination from '../../../packages/ui/components/BasePagination.vue'

const { $services } = useNuxtApp();

const loading = ref(false);
const allInvestors = ref([]);
const profiles = ref([]);

const allCount = ref(0);

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

const headers = [
  "Investor Name",
  "CHN Number",
  "Value of Associated Security (VAS)",
  "Margin Lending Value (MLV)",
  "Security Lending Value (SLV)",
  "Action"
];

// Currency formatter
const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 2,
  }).format(amount);

onMounted(async () => {
  try {
    const investors = await $services.base.getAllInvestors();
    const rows = investors.body.rows || [];

    rows.forEach((investor: any) => {
      const vas = Math.floor(Math.random() * 4000000) + 1000000;
      const mlRatio = Math.floor(Math.random() * 71) + 20; // 20–90%
      const mlv = Math.floor((mlRatio / 100) * vas);
      const slv = vas - mlv;

      investor.vas = vas;
      investor.mlv = mlv;
      investor.slv = slv;
    });

    allInvestors.value = rows;
    allCount.value = rows.length;

    const response = await $services.base.getProfiles();
    profiles.value = response.body.results || [];

  } catch (error) {
    console.error("Error fetching data", error);
  }
});

// Total Aggregates
const totalVAS = computed(() =>
  allInvestors.value.reduce((acc, inv) => acc + (inv.vas || 0), 0)
);

const totalMLV = computed(() =>
  allInvestors.value.reduce((acc, inv) => acc + (inv.mlv || 0), 0)
);

const totalSLV = computed(() =>
  allInvestors.value.reduce((acc, inv) => acc + (inv.slv || 0), 0)
);

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allInvestors.value.slice(start, end).map((request, index) => ({
    values: [
      request.name,
      request.chn,
      formatCurrency(request.vas),
      formatCurrency(request.mlv),
      formatCurrency(request.slv),
      null
    ],
    raw: request,
  }));
});
</script>
