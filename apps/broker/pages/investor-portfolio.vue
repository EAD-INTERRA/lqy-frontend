<template>
  <!-- Completely replaced dashboard with trade request review page -->
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <button class="flex items-center gap-2 text-gray-600 hover:text-gray-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Requests
        </button>
      </div>
      <div class="flex gap-3">
        <!-- Added click handlers to show modals -->
        <button @click="showRejectModal = true"
          class="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Reject Trade Request
        </button>
        <button @click="showAcceptModal = true"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Accept Trade Request
        </button>
      </div>
    </div>

    <!-- Title Section -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Trade Request Review</h1>
      <div class="flex items-center gap-4">
        <span class="text-red-600 text-sm font-medium">Urgent - Submitted 2hours ago</span>
        <span class="text-gray-500 text-sm">Order ID: C3924</span>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-3 gap-6 mb-8">
      <!-- Trade Overview -->
      <div class="col-span-2 gap-6 bg-gray-50">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              1
            </div>
            <h2 class="text-lg font-semibold text-gray-900">Trade Overview</h2>
          </div>

          <div class="grid grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label class="text-sm text-gray-500 block mb-1">Security</label>
              <p class="text-lg font-semibold text-gray-900">AAPL</p>
            </div>
            <div>
              <label class="text-sm text-gray-500 block mb-1">Order Type</label>
              <p class="text-lg font-semibold text-green-600">Buy</p>
            </div>
            <div>
              <label class="text-sm text-gray-500 block mb-1">Quantity</label>
              <p class="text-lg font-semibold text-gray-900">100 shares</p>
            </div>
            <div>
              <label class="text-sm text-gray-500 block mb-1">Price $250.00</label>
              <p class="text-lg font-semibold text-gray-900">100 shares</p>
            </div>
            <div>
              <label class="text-sm text-gray-500 block mb-1">Trade Type</label>
              <p class="text-lg font-semibold text-gray-900">Market Order</p>
            </div>
            <div>
              <label class="text-sm text-gray-500 block mb-1">Submitted</label>
              <p class="text-lg font-semibold text-gray-900">Aug 15th, 2025, 10:45:00 AM</p>
            </div>
          </div>

          <!-- Order Summary -->
          <div class=" mt-8 pt-6 border-t border-gray-200">
            <div class="flex justify-between items-center mb-4">
              <div>
                <label class="text-sm text-gray-500 block mb-1">Order Value</label>
                <p class="text-2xl font-bold text-gray-900">$25,000.00</p>
              </div>
              <div class="text-right">
                <label class="text-sm text-gray-500 block mb-1">Fees</label>
                <p class="text-lg font-semibold text-gray-900">$0.00</p>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <label class="text-sm text-gray-500">Total</label>
              <p class="text-2xl font-bold text-gray-900">$25,000.00</p>
            </div>
          </div>
        </div>


        <!-- Risk Assessment -->
        <div class="bg-white rounded-lg shadow-sm p-6 mt-6">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              2</div>
            <h2 class="text-lg font-semibold text-gray-900">Risk Assessment</h2>
          </div>

          <!-- Risk Indicators -->
          <div class="grid grid-cols-3 gap-8 mb-8">
            <div class="text-center bg-gray-50 p-4 rounded-lg">
              <label class="text-sm text-gray-500 block mb-2">Risk Level</label>
              <span class="inline-flex px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Low
                Risk</span>
            </div>
            <div class="text-center bg-gray-50 p-4 rounded-lg">
              <label class="text-sm text-gray-500 block mb-2">Market Status</label>
              <span
                class="inline-flex px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">Open</span>
            </div>
            <div class="text-center bg-gray-50 p-4 rounded-lg">
              <label class="text-sm text-gray-500 block mb-2">Liquidity</label>
              <span
                class="inline-flex px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full font-medium">High</span>
            </div>
          </div>

          <!-- Risk Factors -->
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">Risk Factors:</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                Trade value $25,000
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                Market volatility: low
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                Execution complexity: Medium
              </li>
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                Regulatory compliance: Verified
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- Right Column -->
      <div class="space-y-6">
        <!-- Investor Information -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
            <h2 class="text-lg font-semibold text-gray-900">Investor Information</h2>
          </div>

          <div class="space-y-4">
            <div>
              <label class="text-sm text-gray-500 block mb-1">Email</label>
              <p class="font-semibold text-gray-900">investor@example.com</p>
            </div>
            <div>
              <label class="text-sm text-gray-500 block mb-1">Investor ID</label>
              <p class="font-semibold text-gray-900">inv1</p>
            </div>
            <div>
              <label class="text-sm text-gray-500 block mb-1">Account Status</label>
              <span class="inline-flex px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Active</span>
            </div>
            <div>
              <label class="text-sm text-gray-500 block mb-1">Account Type</label>
              <p class="font-semibold text-gray-900">Standard</p>
            </div>
          </div>
        </div>

        <!-- Market Information -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              1</div>
            <h2 class="text-lg font-semibold text-gray-900">Market Information</h2>
          </div>

          <div class="space-y-4">
            <div>
              <label class="text-sm text-gray-500 block mb-1">Current Price</label>
              <p class="text-xl font-bold text-gray-900">$250.00</p>
            </div>
            <div>
              <label class="text-sm text-gray-500 block mb-1">Day Change</label>
              <p class="font-semibold text-green-600">+2.45 (+1.6%)</p>
            </div>
            <div>
              <label class="text-sm text-gray-500 block mb-1">Volume</label>
              <p class="font-semibold text-gray-900">2.4M</p>
            </div>
            <div>
              <label class="text-sm text-gray-500 block mb-1">52W Range</label>
              <p class="font-semibold text-gray-900">$120.50 - $180.25</p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-6 space-y-3">
            <!-- Added click handlers to show modals -->
            <button @click="showAcceptModal = true"
              class="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Accept Trade Request
            </button>
            <button @click="showRejectModal = true"
              class="w-full border border-red-300 text-red-600 py-3 rounded-lg font-medium hover:bg-red-50 flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Reject Trade Request
            </button>
          </div>
        </div>
      </div>
    </div>



    <!-- Accept Trade Request Modal -->
    <div v-if="showAcceptModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-sm w-full mx-4 relative">
        <button @click="showAcceptModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900">Trade Request Approved</h3>
        </div>
      </div>
    </div>

      <!-- Accept Trade Request Modal -->
    <div v-if="showRejectConfirmModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-sm w-full mx-4 relative">
        <button @click="showRejectConfirmModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900">Trade Request Approved</h3>
        </div>
      </div>
    </div>

    <!-- Reject Trade Request Modal -->
    <div v-if="showRejectModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative">
        <button @click="showRejectModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 class="text-xl font-semibold text-gray-900 mb-2">Reject Trade Request</h3>
        <p class="text-gray-600 mb-6">Your are about to reject this trade request!</p>

        <!-- Trade Summary -->
        <div class="mb-6">
          <h4 class="font-semibold text-gray-900 mb-3">Trade Summary</h4>
          <p class="text-gray-700 mb-1">Buy 100 shares of AAPL at $2,500</p>
          <p class="text-gray-700">Total Value: $25,000.00</p>
        </div>

        <!-- Reject Reason -->
        <div class="mb-6 h-[400px] overflow-y-auto">
          <label class="block text-sm font-medium text-gray-900 mb-3">Reject Reason (Required)</label>
          <div class="space-y-2">
            <label v-for="reason in rejectReasons" :key="reason.id"
              class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
              :class="{ 'border-red-300 bg-red-50': selectedRejectReason === reason.id }">
              <input type="radio" :value="reason.id" v-model="selectedRejectReason" class="sr-only">
              <span class="text-gray-700" :class="{ 'text-red-600': selectedRejectReason === reason.id }">{{ reason.text
              }}</span>
            </label>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3">
          <button @click="showRejectModal = false"
            class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            Cancel
          </button>
          <button @click="confirmReject" class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Reject Trade
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Dummy data for the trade request
const tradeRequest = ref({
  orderId: 'C3924',
  status: 'urgent',
  submittedTime: '2hours ago',
  security: 'AAPL',
  orderType: 'Buy',
  quantity: 100,
  price: 250.00,
  tradeType: 'Market Order',
  submittedDate: 'Aug 15th, 2025, 10:45:00 AM',
  orderValue: 25000.00,
  fees: 0.00,
  total: 25000.00,
  investor: {
    email: 'investor@example.com',
    id: 'inv1',
    accountStatus: 'Active',
    accountType: 'Standard'
  },
  market: {
    currentPrice: 250.00,
    dayChange: '+2.45 (+1.6%)',
    volume: '2.4M',
    range52W: '$120.50 - $180.25'
  },
  risk: {
    level: 'Low Risk',
    marketStatus: 'Open',
    liquidity: 'High',
    factors: [
      'Trade value $25,000',
      'Market volatility: low',
      'Execution complexity: Medium',
      'Regulatory compliance: Verified'
    ]
  }
});

const showAcceptModal = ref(false);
const showRejectModal = ref(false);
const showRejectConfirmModal = ref(false);
const selectedRejectReason = ref('');
 
const rejectReasons = ref([
  { id: 'insufficient-buying-power', text: 'Insufficient buying power' },
  { id: 'security-not-available', text: 'Security not available for trading' },
  { id: 'outside-market-hours', text: 'Outside market hours' },
  { id: 'price-limit-exceeded', text: 'Price limit exceeded' },
  { id: 'risk-assessment-failed', text: 'Risk assessment failed' },
  { id: 'account-restrictions', text: 'Account restrictions apply' },
  { id: 'regulatory-concerns', text: 'Other regulatory concerns' },
  { id: 'insufficient-buying-power-2', text: 'Insufficient buying power' }
]);

const confirmReject = () => {
  showRejectModal.value = false;
  showRejectConfirmModal.value = true;
};
</script>
