<template>
  <div class="px-4 space-y-6 overflow-y-auto">
    <div class="space-y-6">
      <!-- <div class="text-xl text-[#FF0000] font-semibold mb-4">CAPITAL ASSET LTD</div> -->

      <!-- Summary Cards -->
      <section class="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
        <div class="bg-white shadow-custom-heavy flex justify-between gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
          <div>
            <p class="font-in font-medium text-[#687280] text-[12px]">Total Investors</p>
            <p class="font-in font-bold text-left text-ox-lg text-[#155DFC]">{{ totalCashDrawn }}</p>
          </div>
          <img src="/assets/images/investors.svg" alt="">
        </div>
        <div class="bg-white shadow-custom-heavy flex justify-between gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
          <div>
            <p class="font-in font-medium text-[#687280] text-[12px]">Active Investors</p>
            <p class="font-in font-bold text-left text-ox-lg text-[#0E8E3D]">{{ totalMLV }}</p>
          </div>
          <img src="/assets/images/active.svg" alt="">
        </div>
        <div class="bg-white shadow-custom-heavy flex justify-between gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
          <div>
            <p class="font-in font-medium text-[#687280] text-[12px]">Pending Activations</p>
            <p class="font-in font-bold text-left text-ox-lg text-[#FF5F57]">{{ totalVAS }}</p>
          </div>
          <img src="/assets/images/pending.svg" alt="">
        </div>
      </section>

      <!-- Table Section -->
      <section class=" mb-4">
        <div class="bg-white shadow-custom-heavy p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]">
          <div class="flex items-center justify-between mb-6">
            <p class="bg-gray-300 text-gray-500 bg-opacity-25 bolder w-fit text-lg px-3 py-1 rounded-[5px] font-bold">
              Investors Securities (CSCS)
            </p>
          </div>

          <BaseTable :headers="headers" :rows="paginatedRows" :loading="loading" :showCheckbox="false">
            <template #cell-4="{ row }">
              <span
                :class="[
                  row.values[4] === 'Active'
                    ? 'bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold'
                    : 'bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-semibold'
                ]"
              >
                {{ row.values[4] }}
              </span>
            </template>
            <template #cell-5="{ row }">
              <button @click="openDetails(row.raw)"
                class="border border-[#000000]/10 text-black px-4 py-1 rounded-lg font-ox text-14 transition-transform duration-200 ease-in-out hover:bg-gray-50 hover:scale-105">
                View
              </button>
            </template>
          </BaseTable>

          <!-- Pagination -->
          <BasePagination :currentPage="currentPage" :totalPages="totalPages" :startItem="startItem" :endItem="endItem"
            :totalCount="totalCount" @update:page="setCurrentPage" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import BaseTable from '../../../packages/ui/components/BaseTable.vue'
import BasePagination from '../../../packages/ui/components/BasePagination.vue'

defineProps<{ headers: string[] }>();

const { $services } = useNuxtApp();
const investor = ref("")
const cashDrawn = ref("")
const chnNo = ref("")
const accNo = ref("")
const vasSec = ref("")
const mlv = ref("")
const slv = ref("")
const InterestM = ref("")
const InterestS = ref("")


const activeTab = ref(1);
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

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  let hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, '0');
  const ampm = hour >= 12 ? 'pm' : 'am';
  hour = hour % 12 || 12;
  return `${month} ${day}, ${year}, ${hour}:${minute}${ampm}`;
};
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

const totalCashDrawn = computed(() =>
  totalMLV.value + totalSLV.value + totalVAS.value
);

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allInvestors.value.slice(start, end).map((request, index) => ({
    values: [
      request.name,
      request.chn,
      // formatCurrency(request.vas),
      // formatCurrency(request.mlv),
      // formatCurxxrency(request.slv),
      request.email || 'Example@gmail.com',
      formatDate(request.updatedAt) || '',
      request.status || 'Active',
      null
    ],
    raw: request,
  }));
});

const emit = defineEmits(["open-details"]);

function openDetails(request) {
  emit("open-details", request); // send request to parent
}
</script>
