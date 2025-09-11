
<template>
    <div class=" space-y-6">
        <button
      @click="$emit('go-back')"
      class="text-black text-[18px] hover:underline mb-4 inline-block flex h-fit"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.7144 10.6161H7.39019L10.3382 7.40652C10.461 7.2774 10.5589 7.12295 10.6263 6.95218C10.6937 6.78141 10.7291 6.59774 10.7306 6.41188C10.7321 6.22603 10.6996 6.04171 10.6349 5.86969C10.5703 5.69767 10.4748 5.54139 10.3541 5.40997C10.2334 5.27854 10.0898 5.17461 9.93185 5.10423C9.77385 5.03385 9.60456 4.99844 9.43385 5.00005C9.26314 5.00167 9.09444 5.04028 8.93759 5.11364C8.78073 5.187 8.63887 5.29363 8.52027 5.42732L3.37771 11.0262C3.25798 11.1562 3.16299 11.3107 3.09817 11.4807C3.03336 11.6508 3 11.8331 3 12.0172C3 12.2013 3.03336 12.3836 3.09817 12.5537C3.16299 12.7237 3.25798 12.8782 3.37771 13.0082L8.52027 18.6071C8.76275 18.8621 9.0875 19.0031 9.42459 18.9999C9.76169 18.9968 10.0841 18.8496 10.3225 18.59C10.5609 18.3305 10.6961 17.9794 10.699 17.6124C10.7019 17.2454 10.5724 16.8919 10.3382 16.6279L7.39019 13.4155H19.7144C20.0553 13.4155 20.3823 13.2681 20.6234 13.0056C20.8645 12.7431 21 12.387 21 12.0158C21 11.6446 20.8645 11.2885 20.6234 11.026C20.3823 10.7636 20.0553 10.6161 19.7144 10.6161Z"
          fill="#1F2A37"
        />
      </svg>
      Back
    </button>
      <section class="mb-4">
        <section class="grid grid-cols-2 w-full gap-6 mb-4">
    <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
      <div>
        <p class="font-ox text-ox-xs">Number of Accounts Funded</p>
        <p class="font-ox font-bold text-left text-ox-lg">{{ totalCount }}</p>
      </div>
    </div>
    <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
      <div>
        <p class="font-ox text-ox-xs">Total Funded Amount</p>
        <p class="font-ox font-bold text-left text-ox-lg">{{ formatCurrency(totalFundedAmount) }}</p>
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
  "Account",
  "Amount Funded"
];

// Helper: random account number generator
function generateAccountNumber() {
  return "ACCT" + Math.floor(100000 + Math.random() * 900000); // e.g., ACCT345678
}

// Helper: random integer
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random accounts
const accounts = ref(
  Array.from({ length: 15 }, () => ({
    account: generateAccountNumber(),
    amountFunded: randomInt(50000, 5000000) // NGN 50k - 5M
  }))
);

const currentPage = ref(1);
const pageSize = ref(10);

const totalCount = computed(() => accounts.value.length);
const totalFundedAmount = computed(() =>
  accounts.value.reduce((sum, acc) => sum + (acc.amountFunded || 0), 0)
);

const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return accounts.value.slice(start, end).map((acc, index) => ({
    values: [
      start + index + 1, // S/N
      acc.account, // Account
      formatCurrency(acc.amountFunded) // Amount Funded
    ],
    raw: acc
  }));
});

function setCurrentPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}  
  function openDetails(request) {
    // Here you can assign request to selectedRequest if needed
    activeTab.value = 3;
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
  