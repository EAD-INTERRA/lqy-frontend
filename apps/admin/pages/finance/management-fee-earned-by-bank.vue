<template>
    <div class="p-4 space-y-6">
      <div class="flex justify-between" v-if="activeTab === 1">
        <div class="text-xl text-[#FF0000] font-bold mb-4 font-ox">
          Management Fee Earned by Bank
        </div>
      </div>
  
      <section v-if="activeTab === 1" class="mb-4">
        <section class="grid grid-cols-3 w-full gap-6 mb-4">
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
              <p class="font-ox text-ox-xs">Interest Accrued</p>
              <p class="font-ox font-bold text-left text-ox-lg">
                  {{ formatCurrency(totalManagementFeeEarned) }}
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
    "Bank",
    "Cash Drawn",
    "Value of Ass. Sec",
    "Management Fee Earned"
  ];
  
  
  const nigerianBanks = [
    "Access Bank PLC.",
    "Guarantee Trust Bank PLC",
    "Zenith Bank PLC",
    "First Bank PLC",
    "Union Bank PLC",
    "United Bank of Africa PLC",
    "Fidelity Bank PLC",
    "Sterling Bank PLC",
    "Polaris Bank PLC",
    "Wema Bank PLC",
    "Unity Bank PLC"
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
  </script>
  