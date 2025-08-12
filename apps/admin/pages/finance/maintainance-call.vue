<template>
    <div class="p-4 space-y-6">
      <div class="flex justify-between" v-if="activeTab === 1">
        <div class="text-xl text-[#FF0000] font-bold mb-4 font-ox">
          Management Fee Earned by Broker
        </div>
      </div>
  
      <section v-if="activeTab === 1" class="mb-4">
        <section class="grid grid-cols-4 w-full gap-6 mb-4">
          <div
            class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]"
          >
            <div>
              <p class="font-ox text-ox-xs">Cash Drawn</p>
              <p class="font-ox font-bold text-left text-ox-lg">
                {{ formatCurrency(totalCashDrawn) }}
              </p>
            </div>
          </div>
          <div
            class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]"
          >
            <div>
              <p class="font-ox text-ox-xs">Value of Ass. Sec</p>
              <p class="font-ox font-bold text-left text-ox-lg">
                {{ formatCurrency(totalValueOfAssSec) }}
              </p>
            </div>
          </div>
          <div
            class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]"
          >
            <div>
              <p class="font-ox text-ox-xs">ML Value</p>
              <p class="font-ox font-bold text-left text-ox-lg">
                {{ formatCurrency(totalMLValue) }}
              </p>
            </div>
          </div>
           <div
            class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]"
          >
            <div>
              <p class="font-ox text-ox-xs">SL Value</p>
              <p class="font-ox font-bold text-left text-ox-lg">
                {{ formatCurrency(totalSLValue) }}
              </p>
            </div>
          </div>
        </section>
  
        <div class="bg-white shadow-lg p-5 rounded-lg mb-2.5">
          <BaseTable
            :headers="headers"
            :rows="paginatedRows"
            :loading="false"
            :showCheckbox="false"
            class="!font-ox !font-bold m-2"
          >
            <template #cell-0="{ row }">
              <span>{{ row.values[0] }}</span>
            </template>
            <template #cell-1="{ row }">
              <span class="font-bold font-ox">{{ row.values[1] }}</span>
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
  
      <fundingRequestComponent v-if="activeTab === 2" @go-back="activeTab = 1" />
      <requestDetailsComponent v-if="activeTab === 3" @go-back="activeTab = 1" />
    </div>
</template>
<script lang="ts" setup>
  import { ref, computed } from "vue";
  import BaseTable from "../../../packages/ui/components/BaseTable.vue";
  import BasePagination from "../../../packages/ui/components/BasePagination.vue";
  
  const activeTab = ref(1);
  
  const headers = [
  "S/N",
  "Investor Name",
  "CHN",
  "Cash Drawn",
  "Value of Ass. Sec",
  "ML Value",
  "SL Value",
  "Maintenance Requirement",
];

const investorNames = [
  "Chinedu Okafor",
  "Amina Bello",
  "Emeka Nwosu",
  "Funke Adeyemi",
  "Tunde Bakare",
  "Ngozi Eze",
  "Olusegun Adebayo",
  "Zainab Musa",
  "Ifeanyi Onwu",
  "Halima Abubakar",
];

// Generate random CHNs like CHN001, CHN002...
function generateCHN(index: number) {
  return `CHN${(index + 1).toString().padStart(3, "0")}`;
}

function generateInvestorData() {
  return investorNames.map((name, index) => {
    const cashDrawn = Math.floor(Math.random() * (5_000_000 - 500_000 + 1)) + 500_000; // 0.5M to 5M NGN
    const valueOfAssSec = Math.floor(cashDrawn * (Math.random() * (1.5 - 1.0) + 1.0)); // 1x to 1.5x of cash drawn
    const mlValue = Math.floor(cashDrawn * (Math.random() * (0.2 - 0.1) + 0.1)); // 10% to 20% of cash drawn
    const slValue = Math.floor(cashDrawn * (Math.random() * (0.1 - 0.05) + 0.05)); // 5% to 10% of cash drawn
    const maintenanceRequirement = Math.floor(cashDrawn * (Math.random() * (0.15 - 0.07) + 0.07)); // 7% to 15% of cash drawn

    return {
      sn: index + 1,
      investorName: name,
      chn: generateCHN(index),
      cashDrawn,
      valueOfAssSec,
      mlValue,
      slValue,
      maintenanceRequirement,
    };
  });
}

const allRequests = ref(generateInvestorData());

const currentPage = ref(1);
const pageSize = ref(10);

const totalCount = computed(() => allRequests.value.length);

const totalCashDrawn = computed(() =>
  allRequests.value.reduce((sum, r) => sum + r.cashDrawn, 0)
);
const totalValueOfAssSec = computed(() =>
  allRequests.value.reduce((sum, r) => sum + r.valueOfAssSec, 0)
);
const totalMLValue = computed(() =>
  allRequests.value.reduce((sum, r) => sum + r.mlValue, 0)
);
const totalSLValue = computed(() =>
  allRequests.value.reduce((sum, r) => sum + r.slValue, 0)
);
const totalMaintenanceReq = computed(() =>
  allRequests.value.reduce((sum, r) => sum + r.maintenanceRequirement, 0)
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
      request.investorName,
      request.chn,
      formatCurrency(request.cashDrawn),
      formatCurrency(request.valueOfAssSec),
      formatCurrency(request.mlValue),
      formatCurrency(request.slValue),
      formatCurrency(request.maintenanceRequirement),
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
  </script>
  