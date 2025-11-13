<template>
  <div class="min-h-screen">
    <!-- <div class="flex gap-6"> -->

    <!-- Left/Main Content -->
    <div class=" space-y-6">

      <!-- Summary Cards -->
      <div class="grid grid-cols-4 gap-6">
        <div class="shadow-lg flex gap-6 rounded-[12px] px-[30px] py-[16px]">
          <!-- <img src="/assets/images/icon-park-solid.svg" class="rounded-full" alt="icon" /> -->
          <div>
            <p class="font-ox text-ox-xs font-bold">Total Number of Brokers</p>
            <p class="font-ox font-bold text-ox-lg">{{ totalCount }}</p>
          </div>
        </div>
        <div class="shadow-lg flex gap-6 rounded-[12px] px-[30px] py-[16px]">
          <!-- <img src="/assets/images/doc-success.svg" class="rounded-full" alt="icon" /> -->
          <div>
            <p class="font-ox text-ox-xs font-bold">Total Cash Drawn</p>
            <p class="font-ox font-bold text-ox-lg">{{ formatCurrency(totalCashDrawn) }}</p>
          </div>
        </div>
        <div class="shadow-lg flex gap-6 rounded-[12px] px-[30px] py-[16px]">
          <!-- <img src="/assets/images/doc-fail.svg" class="rounded-full" alt="icon" /> -->
          <div>
            <p class="font-ox text-ox-xs font-bold">Value of Associated Security</p>
            <p class="font-ox font-bold text-ox-lg">{{ formatCurrency(totalValueOfAssSec) }}</p>
          </div>
        </div>

        <div class="shadow-lg flex gap-6 rounded-[12px] px-[30px] py-[16px]">
          <!-- <img src="/assets/images/doc-fail.svg" class="rounded-full" alt="icon" /> -->
          <div>
            <p class="font-ox text-ox-xs font-bold">Total Interest Earned</p>
            <p class="font-ox font-bold text-ox-lg">{{ formatCurrency(totalManagementFeeEarned) }}</p>
          </div>
        </div>
      </div>


      <!-- Verification Requests -->
      <div class="bg-white rounded-xl shadow-md p-6">
        <h2 class="text-lg font-semibold text-gray-700 mb-4">List of Brokers</h2>
        <BaseTable :headers="headers" :rows="paginatedRows" :loading="false" :showCheckbox="false"
          class="!font-ox !font-bold m-2">
          <template #cell-0="{ row }">
            <span>{{ row.values[0] }}</span>
          </template>
          <template #cell-1="{ row }">
            <NuxtLink
              :to="`/capital-broker?company_name=${row.values[1]}&cash=${row.values[2]}&asset=${row.values[3]}&ml=${row.values[4]}`"
              class="font-bold font-ox">{{ row.values[1] }}</NuxtLink>
          </template>
          <template #cell-2="{ row }">
            <span>{{ row.values[2] }}</span>
          </template>
          <template #cell-3="{ row }">
            <span>{{ row.values[3] }}</span>
          </template>
          <template #cell-4="{ row }">
            <span>{{ row.values[4] }}</span>
          </template>
        </BaseTable>

        <BasePagination :currentPage="currentPage" :totalPages="totalPages" :startItem="startItem" :endItem="endItem"
          :totalCount="totalCount" @update:page="setCurrentPage" />
      </div>
    </div>

    <!-- Right Sidebar -->
    <!-- <div class="space-y-6 w-[20%]">
        <div class="bg-white rounded-xl shadow-md p-6 space-y-4">
          <p class="bg-theme-tb font-semibold w-full text-lg px-3 py-1 rounded-[5px] mb-6">
            List of Brokers
          </p>
          <p class="bg-[#19B6E8]/15 p-2 text-sm text-gray-500 rounded-lg">
            <span class="text-blue-500 font-bold">CW</span> Cash withdrawn<br />
            <span class="text-green-500 font-bold">VAS</span> Value of Associated Security<br />
            <span class="text-purple-500 font-bold">VIE</span> Value of Interest earned
          </p>
          
          <div
          v-for="(broker, idx) in brokers"
          :key="idx"
          class="border-b-2 border-gray-300 space-y-3 mb-2"
        >
          <button
            @click="toggleBroker(idx)"
            class="bg-theme-tb rounded-lg w-full flex justify-between items-center px-6 py-4 text-gray-700 font-semibold"
          >
            {{ broker.name }}
            <span :class="broker.open ? 'rotate-180' : ''" class="transition-transform">⌄</span>
          </button>

          <div v-if="broker.open" class="px-6 pb-4">
            <div
              v-for="(item, j) in broker.values"
              :key="j"
              class="flex justify-between text-sm mb-2"
            >
              <span :class="item.color + ' font-bold'">{{ item.label }}</span>
              <span>{{ item.amount }}</span>
            </div>
          </div>
        </div>
        </div>        
      </div> -->

    <!-- </div> -->
  </div>
</template>
<script setup lang="ts">
import BaseTable from "../../../packages/ui/components/BaseTable.vue";
import BasePagination from "../../../packages/ui/components/BasePagination.vue";


const headers = [
  "S/N",
  "Name of Broker",
  "Cash Drawn",
  "Value of Association Security",
  "Interest Earned",
];

const nigerianBanks = [
  "ARM Securities Limited",
  "Meristem Securities Limited",
  "Chapel Hill Denham Securities",
  "Afrinvest Securities Limited",
  "Cordros Capital Limited",
  "FSDH Securities Limited",
  "Stanbic IBTC Stockbrokers",
  "United Capital Securities Limited",
  "Vetiva Capital Management",
  "CSL Stockbrokers Limited"
];

function generateBankData() {
  const banksData = nigerianBanks.map((bank, index) => {
    const cashDrawn = Math.floor(Math.random() * (5_000_000 - 500_000 + 1)) + 500_000; // 0.5M - 5M NGN
    const valueOfAssSec = Math.floor(cashDrawn * (Math.random() * (1.5 - 1.0) + 1.0)); // 1x to 1.5x of cash drawn
    const managementFeeRate = (Math.random() * (5 - 1) + 1) / 100; // 1% to 5%
    const managementFeeEarned = Math.round(cashDrawn * managementFeeRate);

    return {
      sn: index + 1,
      bank,
      cashDrawn,
      valueOfAssSec,
      managementFeeEarned,
    };
  });

  return banksData;
}

const allRequests = ref(generateBankData());

const currentPage = ref(1);
const pageSize = ref(10);

const totalCount = computed(() => allRequests.value.length);

const totalCashDrawn = computed(() =>
  allRequests.value.reduce((sum, r) => sum + r.cashDrawn, 0)
);

const totalValueOfAssSec = computed(() =>
  allRequests.value.reduce((sum, r) => sum + r.valueOfAssSec, 0)
);

const totalManagementFeeEarned = computed(() =>
  allRequests.value.reduce((sum, r) => sum + r.managementFeeEarned, 0)
);

const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() =>
  Math.min(currentPage.value * pageSize.value, totalCount.value)
);

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allRequests.value.slice(start, end).map((request) => ({
    values: [
      request.sn,
      request.bank,
      formatCurrency(request.cashDrawn),
      formatCurrency(request.valueOfAssSec),
      formatCurrency(request.managementFeeEarned),
    ],
    raw: request,
  }));
});

function setCurrentPage(page: number) {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
}

const currencyFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 2,
});

function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}
const brokers = ref([
  {
    name: "Broker A",
    open: true,
    values: [
      { label: "CW", amount: "₦874,392.94", color: "text-blue-500" },
      { label: "VAS", amount: "₦74,392.94", color: "text-green-500" },
      { label: "VIE", amount: "₦504,392.94", color: "text-purple-500" }
    ]
  },
  {
    name: "Broker B",
    open: true,
    values: [
      { label: "CW", amount: "₦874,392.94", color: "text-blue-500" },
      { label: "VAS", amount: "₦74,392.94", color: "text-green-500" },
      { label: "VIE", amount: "₦504,392.94", color: "text-purple-500" }
    ]
  },
  {
    name: "Broker C",
    open: true,
    values: [
      { label: "CW", amount: "₦874,392.94", color: "text-blue-500" },
      { label: "VAS", amount: "₦74,392.94", color: "text-green-500" },
      { label: "VIE", amount: "₦504,392.94", color: "text-purple-500" }
    ]
  },
  {
    name: "Broker D",
    open: true,
    values: [
      { label: "CW", amount: "₦874,392.94", color: "text-blue-500" },
      { label: "VAS", amount: "₦74,392.94", color: "text-green-500" },
      { label: "VIE", amount: "₦504,392.94", color: "text-purple-500" }
    ]
  }
])

// Toggle open/close
function toggleBroker(idx: number) {
  brokers.value[idx].open = !brokers.value[idx].open
}
</script>