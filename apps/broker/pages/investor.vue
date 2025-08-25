<template>
  <div class="px-4 space-y-6">
  <div class="flex justify-between" v-if="activeTab === 1 || activeTab === 2">
    <div class="relative flex justify-between bg-gray-200 rounded-[16px] w-[22%] p-[0.9px]" >
    <span
      class="absolute top-[0.9px] left-[0.9px] h-[calc(100%-1.8px)] rounded-[16px] bg-white shadow-lg transition-all duration-300 ease-in-out"
      :style="{
        width: activeTab === 1 ? '50%' : '50%',
        transform: activeTab === 1 ? 'translateX(0%)' : 'translateX(100%)',
      }"
    ></span>

    <!-- Funding Request Tab -->
    <button 
      @click="activeTab = 1" 
      class="relative z-10 py-2 px-4 rounded-[16px] font-in font-md text-[18px] flex items-center justify-center transition-colors duration-300"
      :class="activeTab === 1 ? 'text-black' : 'text-gray-800'"
    >
      Investors Securities
    </button>

    <!-- Accounts Funded Tab -->
    <button 
      @click="activeTab = 2" 
      class="relative z-10 py-2 px-4 rounded-[16px] font-in font-md text-[18px] flex items-center justify-center transition-colors duration-300"
      :class="activeTab === 2 ? 'text-black' : 'text-gray-800'"
    >
      My Investors
    </button>
  </div>
  <div class="p-[0.9px]" v-if="activeTab === 2">
    <button @click="activeTab = 4" class="bg-[#10356D] font-ox font-bold text-[14px] shadow-lg text-white py-2 px-4 rounded-md hover:bg-[#10356D]/90 transition flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99935 4.16699V10.0003M9.99935 10.0003V15.8337M9.99935 10.0003H15.8327M9.99935 10.0003H4.16602" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        Create Investor
     </button>
  </div>
  </div>
    <div v-if="activeTab === 1" class="space-y-6">
      <!-- <div class="text-xl text-[#FF0000] font-semibold mb-4">CAPITAL ASSET LTD</div> -->

    <!-- Summary Cards -->
    <section class="grid grid-cols-4 w-full gap-6">
      <div class="bg-white shadow-custom-heavy flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
        <div>
          <p class="font-in font-medium text-[#687280] text-[12px]">Cash Drawn</p>
          <p class="font-in font-bold text-left text-ox-lg text-[#10356D]">{{ formatCurrency(totalCashDrawn) }}</p>
        </div>
      </div>
      <div class="bg-white shadow-custom-heavy flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
        <div>
          <p class="font-in font-medium text-[#687280] text-[12px]">Total MLV</p>
          <p class="font-in font-bold text-left text-ox-lg text-[#10356D]">{{ formatCurrency(totalMLV) }}</p>
        </div>
      </div>
      <div class="bg-white shadow-custom-heavy flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
        <div>
          <p class="font-in font-medium text-[#687280] text-[12px]">Total VAS</p>
          <p class="font-in font-bold text-left text-ox-lg text-[#10356D]">{{ formatCurrency(totalVAS) }}</p>
        </div>
      </div>
      <div class="bg-white shadow-custom-heavy flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
        <div>
          <p class="font-in font-medium text-[#687280] text-[12px]">Total SLV</p>
          <p class="font-in font-bold text-left text-ox-lg text-[#10356D]">{{ formatCurrency(totalSLV) }}</p>
        </div>
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

        <BaseTable
          :headers="headers"
          :rows="paginatedRows"
          :loading="loading"
          :showCheckbox="false"
        >
        <template #cell-5="{ row }">
            <button
              @click="openDetails(row.raw)"
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
    <InvestorPortfolio
  v-if="activeTab === 3"
  @go-back="activeTab = 1"
  :investor="investor"
  :cashDrawn="cashDrawn"
  :chnNo="chnNo"
  :accNo="accNo"
  :vasSec="vasSec"
  :mlv="mlv"
  :slv="slv"
  :interestM="interestM"
  :interestS="interestS"
/>

<Investors
  v-if="activeTab === 2"
  @open-details="handleOpenDetails"
/>
<create-investor
  v-if="activeTab === 4"
  @go-back="activeTab = 2"
/>
<ViewInvestor
  v-if="activeTab === 5"
  @go-back="activeTab = 2"
/>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import BaseTable from '../../../packages/ui/components/BaseTable.vue'
import BasePagination from '../../../packages/ui/components/BasePagination.vue'

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

const headers = [
  "S/N",
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
      formatCurrency(request.vas),
      formatCurrency(request.mlv),
      formatCurrency(request.slv),
      null
    ],
    raw: request,
  }));
});

function openDetails(request) {
  
  const mlRatio = Math.floor(Math.random() * 71) + 20; // 20–90%
  const slRatio = Math.floor(Math.random() * 79) + 40; // 20–90%
  console.log(request)
  investor.value = request.name;
  cashDrawn.value = request.mlv;
  chnNo.value = request.chn;
  accNo.value = request.vas;
  vasSec.value = request.vas;
  mlv.value = request.mlv;
  slv.value = request.slv;
  InterestM.value = mlRatio;
  InterestS.value = slRatio;
  activeTab.value = 3;
}

function handleOpenDetails(request) {
  activeTab.value = 5;
}
</script>
