<template>
  <div class="p-8 flex flex-col space-y-6 gap-8">

    <!-- Header Section -->
    <section class="mb-8">
      <div >
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
        <p class="text-gray-600">Here's an overview of your investments at a glance.</p>
      </div>
    </section>

    <section class="grid grid-cols-3 w-full gap-4 mb-8">
      <div class="bg-white shadow-md rounded-[12px] px-[32px] py-[16px]">
        <p class="text-sm text-gray-500 mb-1">Total Portfolio Value</p>
        <p class="text-2xl font-bold text-blue-900 mb-1">₦1,200</p>
        <p class="text-xs text-gray-400">+12% from last month</p>
      </div>
      <div class="bg-white shadow-md rounded-[12px] px-[32px] py-[16px]">
        <p class="text-sm text-gray-500 mb-1">Total P&L</p>
        <p class="text-2xl font-bold text-green-600 mb-1">+₦320</p>
        <p class="text-xs text-green-500 ">+12% overall</p>
      </div>
      <div class="bg-white shadow-md rounded-[12px] px-[32px] py-[16px]">
        <p class="text-sm text-gray-500 mb-1">Active Positions</p>
        <p class="text-2xl font-bold text-blue-900 mb-1">3</p>
        <p class="text-xs text-red-500 bg-red-100 p-1 rounded-lg">1 require attention</p>
      </div>
    </section>

    <section class="flex gap-[5%]">
      <div class="w-[70%] rounded-lg bg-white shadow-md rounded-[12px] px-[32px] py-[16px] p-[25px]">
        <LineChart :labels="chartLabels" :datasets="chartDatasets" />
      </div>
      <div class="w-[25%] flex flex-col items-center space-y-8 rounded-lg bg-white shadow-md rounded-[12px] ">
        <span class="font-ox text-ox-md text-center">Asset Allocation</span>
        <DoughnutChart :data="chartData" :colors="chartColors" />
      </div>
    </section>

    <section class="mb-4 rounded-lg bg-white shadow-md rounded-[12px] ">
      <!-- Recent Alerts -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h3>

        <div class="space-y-4">
          <!-- Maintenance Alert -->
          <div class="flex justify-between items-start bg-red-100 rounded-lg p-4">
            <div class="">
              <h4 class="font-semibold text-red-600">Maintenance Limit Warning</h4>
              <p class="text-sm text-red-600">TSLA position approaching maintenance limit</p>
            </div>
            <span class="text-xs text-gray-400">2 hours ago</span>
          </div>

          <!-- Trade Executed -->
          <div class="flex justify-between items-start border border-gray-400 p-4 rounded-lg">
            <div>
              <h4 class="font-semibold text-gray-900">Trade Executed</h4>
              <p class="text-sm text-gray-600">Bought 100 shares of AAPL at $150.25</p>
            </div>
            <span class="text-xs text-gray-400">2 hours ago</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
// import { useAuthStore } from 'stores/authStore';
// import { createPinia } from 'pinia';

// const pinia = createPinia();
// pinia.use(useAuthStore);
// const route = useRoute();
// const authStore = useAuthStore(pinia);

// if (process.client) {
//   authStore.login();
//   authStore.checkAuth();
// }

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
