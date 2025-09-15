<template>
  <div class="p-4 space-y-6">
    <!-- Top Metrics Cards -->
    <section class="grid grid-cols-3 gap-6 mb-8">
      <div class="bg-white shadow-md rounded-[12px] px-[32px] py-[16px]">
        <p class="text-gray-500 text-sm mb-2">Account Balance</p>
        <p class="text-3xl font-bold text-gray-900">$754,583,492</p>
      </div>
      <div class="bg-white shadow-md rounded-[12px] px-[32px] py-[16px]">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-gray-500 text-sm mb-2">30 Days Profit</p>
            <div class="flex items-center gap-2">
              <!-- Added small chart visualization -->
              <svg width="60" height="20" viewBox="0 0 60 20" class="mr-2">
                <path d="M0,15 Q15,5 30,8 T60,3" stroke="#10b981" stroke-width="2" fill="none" />
                <path d="M0,15 Q15,5 30,8 T60,3 L60,20 L0,20 Z" fill="#10b981" fill-opacity="0.1" />
              </svg>
            </div>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold text-gray-900">+$21,736</p>
            <p class="text-sm text-green-600">+1.23%</p>
          </div>
        </div>
      </div>
      <div class="bg-white shadow-md rounded-[12px] px-[32px] py-[16px]">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-gray-500 text-sm mb-2">Over All Profit</p>
            <div class="flex items-center gap-2">
              <!-- Added small chart visualization -->
              <svg width="60" height="20" viewBox="0 0 60 20" class="mr-2">
                <path d="M0,5 Q15,15 30,12 T60,17" stroke="#ef4444" stroke-width="2" fill="none" />
                <path d="M0,5 Q15,15 30,12 T60,17 L60,20 L0,20 Z" fill="#ef4444" fill-opacity="0.1" />
              </svg>
            </div>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold text-gray-900">-$102,304</p>
            <p class="text-sm text-red-600">-25.23%</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Chart Section -->
    <section class="flex">
      <div class="w-[75%] rounded-md bg-white shadow-md rounded-[12px] px-[32px] py-[16px] p-[25px]">
        <LineChart :labels="chartLabels" :datasets="chartDatasets" />
      </div>
      <div class="w-[25%] flex flex-col items-center space-y-8">
        <span class="font-ox text-ox-md text-center">Asset Allocation</span>
        <DoughnutChart :data="chartData" :colors="chartColors" />
      </div>
    </section>

    <!-- Bottom Section -->
    <section class="flex gap-6">
      <!-- Recent Trade Activity -->
      <div class="w-[70%] bg-white shadow-md rounded-[12px] px-[32px] py-[16px]">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Recent Trade Activity</h3>
        <p class="text-sm text-gray-500 mb-6">Latest trade requests and executions</p>

        <div class="space-y-4">
          <div class="flex items-center justify-between py-3 rounded-[8px] p-3 bg-gray-50">
            <div>
              <p class="font-semibold text-gray-900">Buy AAPL</p>
              <p class="text-sm text-gray-500">investor@mail.com</p>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm text-gray-500">04:00 PM</span>
              <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Pending</span>
              <NuxtLink to="/investor-portfolio"
                class="text-sm text-gray-500 hover:text-gray-700 border border-gray-500 px-3 py-2 rounded-md">View →
              </NuxtLink>
            </div>
          </div>

          <div class="flex items-center justify-between py-3 rounded-[8px] p-3 bg-gray-50">
            <div>
              <p class="font-semibold text-gray-900">Buy AAPL</p>
              <p class="text-sm text-gray-500">investor@mail.com</p>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm text-gray-500">04:00 PM</span>
              <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Pending</span>
              <NuxtLink to="/investor-portfolio"
                class="text-sm text-gray-500 hover:text-gray-700 border border-gray-500 px-3 py-2 rounded-md">View →
              </NuxtLink>
            </div>
          </div>

          <div class="flex items-center justify-between py-3 rounded-[8px] p-3 bg-gray-50">
            <div>
              <p class="font-semibold text-gray-900">Buy AAPL</p>
              <p class="text-sm text-gray-500">investor@mail.com</p>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm text-gray-500">04:00 PM</span>
              <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Pending</span>
              <NuxtLink to="/investor-portfolio"
                class="text-sm text-gray-500 hover:text-gray-700 border border-gray-500 px-3 py-2 rounded-md">View →
              </NuxtLink>
            </div>
          </div>

          <div class="flex items-center justify-between py-3 rounded-[8px] p-3 bg-gray-50">
            <div>
              <p class="font-semibold text-gray-900">Buy AAPL</p>
              <p class="text-sm text-gray-500">investor@mail.com</p>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm text-gray-500">04:00 PM</span>
              <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Pending</span>
              <NuxtLink to="/investor-portfolio"
                class="text-sm text-gray-500 hover:text-gray-700 border border-gray-500 px-3 py-2 rounded-md">View →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Performance Summary -->
      <div class="w-[30%] bg-white shadow-md rounded-[12px] px-[32px] py-[16px]">
        <h3 class="text-lg font-semibold text-gray-900 mb-6">Performance Summary</h3>

        <div class="space-y-8 ">
          <div class="text-center rounded-[8px] p-3 bg-white shadow-md rounded-[12px] mb-4">
            <p class="text-sm text-gray-500 mb-2">Total Trades Processed</p>
            <p class="text-4xl font-bold text-blue-600">4</p>
          </div>

          <div class="text-center rounded-[8px] p-3 bg-white shadow-md rounded-[12px] mb-4">
            <p class="text-sm text-gray-500 mb-2">Average Processing Time</p>
            <p class="text-3xl font-bold text-blue-600">2.4 mins</p>
          </div>

          <div class="text-center rounded-[8px] p-3 bg-white shadow-md rounded-[12px]">
            <p class="text-sm text-gray-500 mb-2">Client Satisfaction</p>
            <p class="text-3xl font-bold text-blue-600">98.5%</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from 'stores/authStore';
import { createPinia } from 'pinia';

const pinia = createPinia();
pinia.use(useAuthStore);
const route = useRoute();
const authStore = useAuthStore(pinia);

if (process.client) {
  authStore.login();
  authStore.checkAuth();
}



const recentTrades = ref([
  { action: "Buy AAPL", email: "investor@mail.com", time: "04:00 PM", status: "accepted" },
  { action: "Buy AAPL", email: "investor@mail.com", time: "04:00 PM", status: "Pending" },
  { action: "Buy AAPL", email: "investor@mail.com", time: "04:00 PM", status: "Executed" },
  { action: "Buy AAPL", email: "investor@mail.com", time: "04:00 PM", status: "accepted" },
]);

const performanceMetrics = ref({
  totalTrades: 4,
  avgProcessingTime: "2.4 mins",
  clientSatisfaction: "98.5%"
});

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
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
]);
const chartDatasets = ref([
  {
    label: "Series A",
    data: [65, 59, 80, 81, 56, 55, 100],
    borderColor: "rgba(16, 53, 109, 1)",
    backgroundColor: "rgba(16, 53, 109, 0.2)",
    fill: false,
  },
  {
    label: "Series B",
    data: [28, 48, 40, 19, 86, 27, 90],
    borderColor: "rgba(238, 46, 46, 1)",
    backgroundColor: "rgba(238, 46, 46, 0.2)",
    fill: false,
  },
]);
</script>
