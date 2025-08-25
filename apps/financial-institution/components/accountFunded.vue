
<template>
    <div class=" space-y-6">
      <section class="mb-4">
        <section class="grid grid-cols-3 w-full gap-6 mb-4">
    <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
      <div>
        <p class="font-ox text-ox-xs">Total Number of Brokers</p>
        <p class="font-ox font-bold text-left text-ox-lg">{{ totalCount }}</p>
      </div>
    </div>
    <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
      <div>
        <p class="font-ox text-ox-xs">Total Funded Amount</p>
        <p class="font-ox font-bold text-left text-ox-lg">{{ formatCurrency(totalFundedAmount) }}</p>
      </div>
    </div>
    <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
      <div>
        <p class="font-ox text-ox-xs">Number of Accounts Funded</p>
        <p class="font-ox font-bold text-left text-ox-lg">{{ totalAccountsFunded }}</p>
      </div>
    </div>
  </section>
  
        <div class="bg-white shadow-lg p-5 rounded-lg mb-2.5">
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
              <span>{{ row.values[2] }}</span>
            </template>
            <template #cell-3="{ row }">
              <span>{{ row.values[3] }}</span>
            </template>
            <template #cell-4="{ row }">
              <button
                @click="openDetails(row.raw)"
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
        </div>
      </section>
      
    </div>
</template>
<script lang="ts" setup>
  import { ref, computed } from "vue";
  import BaseTable from "../../../packages/ui/components/BaseTable.vue";
  import BasePagination from "../../../packages/ui/components/BasePagination.vue";
  
  const activeTab = ref(1);
  
  const headers = [
  "S/N",
  "Name of Broker",
  "Amount Funded",
  "Number of Accounts Funded",
  "Action"
];

// Helper: random name generator
function generateRandomName() {
  const firstNames = ["John", "Jane", "Alex", "Chris", "Taylor", "Jordan", "Morgan", "Pat", "Sam", "Lee"];
  const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Martinez"];
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

// Helper: random integer
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate 20 brokers dynamically
const brokers = ref(
  Array.from({ length: 20 }, () => ({
    name: generateRandomName(),
    amountFunded: randomInt(500000, 5000000), // NGN 500k - 5M
    accountsFunded: randomInt(1, 50)
  }))
);

const currentPage = ref(1);
const pageSize = ref(10);

const totalCount = computed(() => brokers.value.length);

const totalFundedAmount = computed(() =>
  brokers.value.reduce((sum, b) => sum + (b.amountFunded || 0), 0)
);

const totalAccountsFunded = computed(() =>
  brokers.value.reduce((sum, b) => sum + (b.accountsFunded || 0), 0)
);

const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return brokers.value.slice(start, end).map((broker, index) => ({
    values: [
      start + index + 1, // S/N
      broker.name, // Name of Broker
      formatCurrency(broker.amountFunded), // Amount Funded
      broker.accountsFunded, // Number of Accounts Funded
      null // Action placeholder
    ],
    raw: broker
  }));
});

function setCurrentPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
  
const emit = defineEmits(["open-details"]);


function openDetails(request) {
  emit("open-details", request); // send request to parent
}
  
  const currencyFormatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  });
  
  function formatCurrency(value) {
    return currencyFormatter.format(value);
  }
  </script>
  