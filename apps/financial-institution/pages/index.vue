<script setup lang="ts">
 import BaseTable from "../../../packages/ui/components/BaseTable.vue";
  import BasePagination from "../../../packages/ui/components/BasePagination.vue";
const headers = [
  "User Type",
  "User Name",
  "Company Name",
  "Contact",
]

// Generate mock data
const totalCount = 40
const rows = Array.from({ length: totalCount }, (_, i) => ({
  id: i + 1,
  values: [
    "Financial Institution",
    "Jondoe " + (i + 1),
    "Jondoe Incorporated",
    {
      phone: "+234 34547639",
      email: `jondoe${i + 1}@mail.com`
    }
  ]
}))

// Pagination state
const currentPage = ref(1)
const pageSize = 10
const totalPages = computed(() => Math.ceil(totalCount / pageSize))

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return rows.slice(start, start + pageSize)
})

const startItem = computed(() => (currentPage.value - 1) * pageSize + 1)
const endItem = computed(() =>
  Math.min(currentPage.value * pageSize, totalCount)
)

function setCurrentPage(page: number) {
  currentPage.value = page
}
const brokers = ref([
  {
    name: "Broker A",
    open: true,
    values: [
      { label: "CW", amount: "$874,392.94", color: "text-blue-500" },
      { label: "VAS", amount: "$74,392.94", color: "text-green-500" },
      { label: "VIE", amount: "$504,392.94", color: "text-purple-500" }
    ]
  },
  {
    name: "Broker B",
    open: true,
    values: [
      { label: "CW", amount: "$874,392.94", color: "text-blue-500" },
      { label: "VAS", amount: "$74,392.94", color: "text-green-500" },
      { label: "VIE", amount: "$504,392.94", color: "text-purple-500" }
    ]
  },
  {
    name: "Broker C",
    open: true,
    values: [
      { label: "CW", amount: "$874,392.94", color: "text-blue-500" },
      { label: "VAS", amount: "$74,392.94", color: "text-green-500" },
      { label: "VIE", amount: "$504,392.94", color: "text-purple-500" }
    ]
  },
  {
    name: "Broker D",
    open: true,
    values: [
      { label: "CW", amount: "$874,392.94", color: "text-blue-500" },
      { label: "VAS", amount: "$74,392.94", color: "text-green-500" },
      { label: "VIE", amount: "$504,392.94", color: "text-purple-500" }
    ]
  }
])

// Toggle open/close
function toggleBroker(idx: number) {
  brokers.value[idx].open = !brokers.value[idx].open
}
</script>

<template>
  <div class="min-h-screen">
    <div class="flex gap-6">
      
      <!-- Left/Main Content -->
      <div class="w-[80%] space-y-6">
        
        <!-- Summary Cards -->
        <div class="grid grid-cols-3 gap-6">
        <div
          class="shadow-lg flex gap-6 rounded-[12px] px-[30px] py-[16px]"
        >
          <img src="/assets/images/icon-park-solid.svg" class="rounded-full" alt="icon" />
          <div>
            <p class="font-ox text-ox-xs">Pending Request</p>
            <p class="font-ox font-bold text-center text-ox-lg">43,543</p>
          </div>
        </div>
        <div
          class="shadow-lg flex gap-6 rounded-[12px] px-[30px] py-[16px]"
        >
          <img src="/assets/images/doc-success.svg" class="rounded-full" alt="icon" />
          <div>
            <p class="font-ox text-ox-xs">Total Request</p>
            <p class="font-ox font-bold text-center text-ox-lg">43</p>
          </div>
        </div>
        <div
          class="shadow-lg flex gap-6 rounded-[12px] px-[30px] py-[16px]"
        >
          <img src="/assets/images/doc-fail.svg" class="rounded-full" alt="icon" />
          <div>
            <p class="font-ox text-ox-xs">Total Request</p>
            <p class="font-ox font-bold text-center text-ox-lg">545</p>
          </div>
        </div>
      </div>


        <!-- Verification Requests -->
        <div class="bg-white rounded-xl shadow-md p-6">
          <h2 class="text-lg font-semibold text-gray-700 mb-4">Verification Request</h2>

          <BaseTable
    :headers="headers"
    :rows="paginatedRows"
    :loading="false"
    :showCheckbox="false"
    class="w-full text-left border-collapse font-bold font-ox text-[16px]"
  >
    <!-- User Type -->
    <template #cell-0="{ row }">
      <span class="py-1 font-bold font-ox text-[16px] text-gray-700">{{ row.values[0] }}</span>
    </template>

    <!-- User Name -->
    <template #cell-1="{ row }">
      <span class="py-1 font-bold font-ox text-[16px] text-gray-700">{{ row.values[1] }}</span>
    </template>

    <!-- Company Name -->
    <template #cell-2="{ row }">
      <span class="py-1 font-bold font-ox text-[16px] text-gray-700">{{ row.values[2] }}</span>
    </template>

    <!-- Contact (Phone + Email stacked) -->
    <template #cell-3="{ row }">
      <div class="py-1  font-ox text-[16px]">
        <div>{{ row.values[3].phone }}</div>
        <a
          :href="'mailto:' + row.values[3].email"
          class="text-blue-500 font-bold hover:underline"
        >
          {{ row.values[3].email }}
        </a>
      </div>
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
      </div>

      <!-- Right Sidebar -->
      <div class="space-y-6 w-[20%]">
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
      </div>

    </div>
  </div>
</template>
