<template>
  <div class="mx-auto p-4">
    <!-- Back Button -->
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

    <!-- Investor Info -->
    <section class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Left Column -->
      <div class="space-y-6">
        <div class="bg-white shadow-custom-heavy px-[5%] py-5 rounded-[16px] space-y-3">
          <div class="flex items-center space-x-3">
            <p class="w-[30%] font-bold text-[14px] text-black/50">Investor Name</p>
            <h4 class="w-[70%] font-bold text-[18px] text-black/80">{{ investor }}</h4>
          </div>
          <div class="flex items-center space-x-3">
            <p class="w-[30%] font-bold text-[14px] text-black/50">Cash Withdrawn</p>
            <h4 class="w-[70%] font-bold text-[18px] text-black/80">
              {{ formatCurrency(Number(cashDrawn)) }}
            </h4>
          </div>
          <div class="flex items-center space-x-3">
            <p class="w-[30%] font-bold text-[14px] text-black/50">CHN No.</p>
            <h4 class="w-[70%] font-bold text-[18px] text-black/80">{{ chnNo }}</h4>
          </div>
          <div class="flex items-center space-x-3">
            <p class="w-[30%] font-bold text-[14px] text-black/50">Account No.</p>
            <h4 class="w-[70%] font-bold text-[18px] text-black/80">{{ accNo }}</h4>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="space-y-6">
        <div class="bg-white shadow-custom-heavy px-[5%] py-5 rounded-[16px] space-y-3">
          <div class="flex items-center space-x-3">
            <p class="w-[30%] font-bold text-[14px] text-black/50">VAS Sec</p>
            <h4 class="w-[70%] font-bold text-[18px] text-black/80">
              {{ formatCurrency(Number(vasSec)) }}
            </h4>
          </div>
          <div class="flex items-center space-x-3">
            <p class="w-[30%] font-bold text-[14px] text-black/50">ML Value</p>
            <h4 class="w-[70%] font-bold text-[18px] text-black/80">
              {{ formatCurrency(Number(mlv)) }}
            </h4>
          </div>
          <div class="flex items-center space-x-3">
            <p class="w-[30%] font-bold text-[14px] text-black/50">Interest on Margin</p>
            <h4 class="w-[70%] font-bold text-[18px] text-black/80">
              {{ formatCurrency(mlInterest) }}
            </h4>
          </div>
          <div class="flex items-center space-x-3">
            <p class="w-[30%] font-bold text-[14px] text-black/50">Interest Due from SL</p>
            <h4 class="w-[70%] font-bold text-[18px] text-black/80">
              {{ formatCurrency(Number(slv)) }}
            </h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Table -->
    <section class="mb-4">
      <div class="bg-white shadow-custom-heavy p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]">
        <div class="flex items-center justify-between mb-6">
          <p class="bg-gray-300 text-gray-500 bg-opacity-25 w-fit text-lg px-3 py-1 rounded-[5px] font-bold">
            Investors Portfolio List
          </p>
        </div>

        <BaseTable
          :headers="headers"
          :rows="paginatedRows"
          :loading="loading"
          :showCheckbox="false"
        >
          <template #cell-0="{ row }">
            <span class="text-blue-700 underline">{{ row.values[0] }}</span>
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
import { ref, computed } from "vue"
import BaseTable from "../../../packages/ui/components/BaseTable.vue"
import BasePagination from "../../../packages/ui/components/BasePagination.vue"

const props = defineProps<{
  investor: string
  cashDrawn: string | number
  chnNo: string
  accNo: string
  vasSec: string | number
  mlv: string | number
  slv: string | number
  interestM: string | number
  interestS: string | number
}>()

// Computed ML interest
const mlInterest = computed(() => Number(props.mlv) * 0.15)

// Currency formatter
const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(amount)

// ---------- Table Setup ----------
const headers = [
  "Symbol",
  "Balance",
  "Pending",
  "Current Price",
  "Value",
  "ML Value",
  "SL Value",
]

const generatePortfolio = (count = 25) => {
  const symbols = ["GTCO", "ZENITH", "MTNN", "BUAFOODS", "DANGCEM", "SEPLAT", "UBA"]
  return Array.from({ length: count }).map(() => {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)]
    const balance = Math.floor(Math.random() * 1000) + 50
    const pending = Math.floor(Math.random() * 50)
    const price = Math.floor(Math.random() * 200) + 50
    const value = balance * price
    const mlValue = value * 0.3
    const slValue = value * 0.2

    // 👇 Convert into "values" array format for BaseTable
    return {
      values: [
        symbol,
        balance,
        pending,
        formatCurrency(price),
        formatCurrency(value),
        formatCurrency(mlValue),
        formatCurrency(slValue),
      ],
      raw: { symbol, balance, pending, price, value, mlValue, slValue },
    }
  })
}

const rows = ref(generatePortfolio())

// ---------- Pagination ----------
const currentPage = ref(1)
const pageSize = 5

const totalCount = computed(() => rows.value.length)
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize))

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return rows.value.slice(start, start + pageSize)
})

const startItem = computed(() => (currentPage.value - 1) * pageSize + 1)
const endItem = computed(() =>
  Math.min(currentPage.value * pageSize, totalCount.value)
)

const setCurrentPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const loading = ref(false)
</script>
