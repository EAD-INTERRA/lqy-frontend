<template>
  <div class="p-4 space-y-6">
    <div class="flex justify-between" v-if="activeTab === 1">
      <div class="text-xl text-[#FF0000] font-bold mb-4 font-ox">
        Lending Interest Accrued
      </div>
    </div>

    <section v-if="activeTab === 1" class="mb-4">
      <!-- <section class="grid grid-cols-1 w-full gap-6 mb-4">
        <div
          class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]"
        >
          <div>
            <p class="font-ox text-ox-xs">Interest Accrued</p>
            <p class="font-ox font-bold text-left text-ox-lg">
              {{ totalInterest }}
            </p>
          </div>
        </div>
      </section> -->

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
  "SL Account",
  "CHN",
  "Interest Accrued"
];

// Sample Nigerian bank names
const banks = [
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
];;

// Helpers
const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomAccount = () =>
  `${randomNum(1000000000, 9999999999)}`;

const randomCHN = () =>
  `CHN-${randomNum(100000, 999999)}`;

const randomInterest = () =>
  (Math.random() * 15).toFixed(2) + "%";

// Generate table data
const generateData = (rows) => {
  return Array.from({ length: rows }, (_, i) => {
    const bank = banks[randomNum(0, banks.length - 1)];
    return {
      sn: i + 1,
      slAccount: `${bank} - ${randomAccount()}`,
      chn: randomCHN(),
      interest: randomInterest()
    };
  });
};

const allRequests = ref(generateData(200));

const currentPage = ref(1);
const pageSize = ref(10);

const totalCount = computed(() => allRequests.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() =>
  Math.min(currentPage.value * pageSize.value, totalCount.value)
);

// Pass to table
const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allRequests.value.slice(start, end).map((request) => ({
    values: [
      request.sn,
      request.slAccount,
      request.chn,
      request.interest
    ],
    raw: request
  }));
});

function setCurrentPage(page) {
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
