<template>
  <div class="p-6 bg-gray-50 min-h-screen mb-[30px]">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-[25%] w-full">
        <NuxtLink to="/trades" class="flex items-center gap-2 text-gray-600 hover:text-gray-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back
        </NuxtLink>
        <h1 class="text-xl font-semibold text-center text-[#10356D]">AAPL (BSL to provide api for this view)</h1>
      </div>

    </div>

    <!-- Metrics Cards -->
    <section class="grid grid-cols-3 w-full gap-4 mb-6">
      <div class="bg-white shadow-md rounded-[12px] px-[32px] py-[16px]">
        <p class="text-sm text-gray-500 mb-1">Current Price</p>
        <p class="text-2xl font-bold text-blue-900 mb-1">₦1,200</p>
        <p class="text-xs text-green-500">+$300 (20%)</p>
      </div>
      <div class="bg-white shadow-md rounded-[12px] px-[32px] py-[16px]">
        <p class="text-sm text-gray-500 mb-1">Your Position</p>
        <p class="text-2xl font-bold text-blue-900 mb-1">100 shares</p>
        <p class="text-xs text-blue-900 ">Market Value: $15,000</p>
      </div>
      <div class="bg-white shadow-md rounded-[12px] px-[32px] py-[16px]">
        <p class="text-sm text-gray-500 mb-1">Maintenance Limit</p>
        <p class="text-2xl font-bold text-blue-900 mb-1">$140.00</p>
        <p class="text-xs text-red-500 bg-red-100 p-1 rounded-lg">1 require attention</p>
      </div>
    </section>

    <!-- Chart Section -->

    <section class="flex gap-[5%] mb-6">
      <div class="w-full rounded-lg bg-white shadow-md rounded-[12px] px-[32px] py-[16px] p-[25px]">
        <LineChart :labels="chartLabels" :datasets="chartDatasets" :title="'LIVE PRICE CHART'" :exposure="'-$21,984'" />
      </div>
    </section>

    <!-- Trading Form -->
    <div class="bg-white rounded-lg p-6 shadow-sm">
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Place Trade Order</h3>
        <p class="text-sm text-gray-600">Submit a new trade request</p>
      </div>

      <div class="grid grid-cols-2 gap-6 mb-6">
        <!-- Order Type -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Order Type</label>
          <select v-model="orderForm.orderType"
            class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
        </div>

        <!-- Trade Type -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Trade Type (Optional)</label>
          <select v-model="orderForm.tradeType"
            class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="Market Order">Market Order</option>
            <option value="Limit Order">Limit Order</option>
            <option value="Stop Order">Stop Order</option>
          </select>
        </div>

        <!-- Quantity -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
          <input v-model="orderForm.quantity" type="number" placeholder="200"
            class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        </div>

        <!-- Price per share -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Price per share</label>
          <input v-model="orderForm.pricePerShare" type="text" placeholder="$12,000"
            class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        </div>
      </div>

      <!-- Order Summary -->
      <div class="border-t pt-6">
        <h4 class="text-lg font-semibold text-gray-900 mb-4">Order Summary</h4>

        <div class="space-y-3 mb-6">
          <div class="flex justify-between">
            <span class="text-gray-600">Action:</span>
            <span class="font-medium">{{ orderForm.orderType }} {{ orderForm.quantity || 23 }} shares</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Security:</span>
            <span class="font-medium">AAPL</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Price:</span>
            <span class="font-medium">${{ orderForm.pricePerShare || '150.25' }}</span>
          </div>
          <div class="flex justify-between border-t pt-3">
            <span class="text-lg font-semibold">Total Value:</span>
            <span class="text-lg font-bold">${{ totalValue }}</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex ml-[50%] w-[50%] mb-[2%] justify-start gap-4">
          <button class="flex-1 px-3 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium">
            Cancel
          </button>
          <button @click="handleSendRequest"
            class="flex-1 px-3 py-3 bg-[#10356D] text-white rounded-md hover:bg-blue-700 font-medium">
            Send Request
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-6 relative">
        <!--  Updated header to show trade confirmation title -->
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-[#10356D]">Trade Request Submitted</h3>
          <button @click="showModal = false" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!--  Added subtitle text -->
        <p class="text-gray-600 text-sm">Your Trade request has been sent to Broker OMS</p>

        <!--  Added status section with executed badge -->
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm font-medium text-gray-700">Status</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              Executed
            </span>
          </div>
          <p class="text-gray-700">Order executed successfully!</p>
        </div>

        <!--  Updated action buttons to match design -->
        <div class="flex gap-3 pt-4">
          <button @click="showModal = false"
            class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium">
            Cancel
          </button>
          <NuxtLink to="/trades"
            class="flex-1 px-6 py-3 bg-[#10356D] text-white rounded-md hover:bg-blue-700 font-medium">
            View Trades Page
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showModal = ref(false)

const orderForm = ref({
  orderType: 'Buy',
  tradeType: 'Market Order',
  quantity: 23,
  pricePerShare: '150.25'
})

const modalData = ref({
  investorName: 'Oluchi Johnson',
  vasSec: '₦42,000,000',
  chnNumber: 'CHN123456',
  mlValue: '₦42,000,000'
})

const totalValue = computed(() => {
  const quantity = orderForm.value.quantity || 23
  const price = parseFloat(orderForm.value.pricePerShare?.replace('$', '') || '150.25')
  return (quantity * price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
})

function handleSendRequest() {
  // <CHANGE> Open modal with dummy data when Send Request is clicked
  showModal.value = true
}

const chartData = ref([
  {
    name: "Equities",
    count: 12,
  },
  {
    name: "Bonds",
    count: 50,
  },
  {
    name: "Derivatives",
    count: 20,
  },
  {
    name: "Other Assets",
    count: 18,
  },
]);

const chartColors = ["#E0903F", "#65C569", "#AC65C5", "#6373F8"]; // External colors array

const chartLabels = ref([
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00"
]);
const chartDatasets = ref([
  {
    label: "Series A",
    data: [50, 75, 25, 50, 75, 50, 55, 60, 75, 100],
    borderColor: "rgba(16, 53, 109, 1)",
    backgroundColor: "rgba(16, 53, 109, 0.2)",
    fill: false,
  },
  {
    label: "Series B",
    data: [0, 48, 75, 39, 16, 25, 30, 40, 50, 60],
    borderColor: "rgba(238, 46, 46, 1)",
    backgroundColor: "rgba(238, 46, 46, 0.2)",
    fill: false,
  },
]);
</script>