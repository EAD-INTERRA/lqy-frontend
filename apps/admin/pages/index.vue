<template>
  <div class="p-4 space-y-6 mx-auto ">
    <section class="grid grid-cols-2 lg:grid-cols-4 w-full lg:mr-6 gap-3">
    <div
      v-for="(item, index) in stats"
      :key="index"
      class="bg-white shadow-lg rounded-[12px] px-[10px] py-[20px] md:p-[15px] h-fit flex items-center"
    >
      <div class="w-[20%]">
        <img :src="item.icon" />
      </div>
      <div class="flex flex-col font-normal font-ox justify-between w-[80%]">
        <p class="text-[11px] md:text-ox-xs">{{ item.label }}</p>
        <div class="flex justify-between items-end md:text-[16px] text-[13px] lg:mr-4">
          <b class="text-[24px] transition-all duration-500 ease-in-out">{{ item.value }}</b>
          <span
            class="md:text-ox-xs text-[12px]"
            :class="item.change >= 0 ? 'text-green-700' : 'text-red-700'"
          >
            {{ item.change.toFixed(2) }}%
          </span>
        </div>
      </div>
    </div>
  </section>

    <section class="w-full rounded-[12px] shadow-xl bg-white">
    <div class="p-6 lg:p-8">
      <!-- Header -->
      <div class="flex justify-between mb-6">
        <p class="bg-gray-100 font-semibold w-fit text-sm md:text-lg px-2 md:px-3 py-1 rounded-[5px]">
          Security Lending
        </p>
        <button
          class="border border-solid border-blue-500 text-white text-sm md:text-base bg-blue-500 px-3 lg:px-6 py-1 rounded-[5px]"
        >
          View all
        </button>
      </div>

      <!-- Loader -->
      <div v-if="loading" class="flex justify-center py-6 fade-in">
        <div class="loader"></div>
      </div>

      <!-- Table with fade transition -->
      <transition name="fade">
        <table v-if="!loading" key="table" class="table-fixed w-full">
          <thead>
            <tr class="text-gray-500 text-sm font-normal border-b">
              <th class="text-left py-2  w-[80%]">Name</th>
              <th class="text-left py-2  w-[10%]">CHN Number</th>
              <th class="text-left py-2  w-[10%]">Interest Accrued</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, index) in tableData"
              :key="index"
              :class="index % 2 !== 0 ? 'bg-gray-50' : ''"
              class="transition-all duration-500 ease-in-out"
            >
              <td class="py-3  w-[80%] font-bold">
                <p>{{ row.name }}</p>
              </td>
              <td class=" w-[10%]">
                <p>{{ row.chnMasked }}</p>
              </td>
              <td class=" w-[10%]"> 
                <p class="text-green-500 font-medium">
                  ${{ row.interest.toLocaleString() }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </transition>
    </div>
  </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { StatusCode } from "~/helpers/statusCodes";

let toast = null;
const { $services } = useNuxtApp();
const route = useRoute();

onMounted(async () => {
  if (process.client) {
    const pkg = await import("vue-toastification");
    const useToast = pkg.useToast;
    toast = useToast();
  }

  refreshData(); // first load
  setInterval(refreshData, 40000); // refresh every 5s
  generateRandomStats();
  setInterval(generateRandomStats, 40000); // refresh every 5s
});

interface StatItem {
  label: string;
  icon: string;
  value: number;
  change: number;
}

const stats = ref<StatItem[]>([
  {
    label: "Total Stakeholders",
    icon: "/assets/images/stakeholders.svg",
    value: 0,
    change: 0,
  },
  {
    label: "Total Accounts",
    icon: "/assets/images/accounts.svg",
    value: 0,
    change: 0,
  },
  {
    label: "Active Trades",
    icon: "/assets/images/trades.svg",
    value: 0,
    change: 0,
  },
  {
    label: "Orders Daily",
    icon: "/assets/images/daily-order.svg",
    value: 0,
    change: 0,
  },
]);

const generateRandomStats = () => {
  stats.value = stats.value.map((stat) => ({
    ...stat,
    value: Math.floor(Math.random() * 1000), // random number 0–999
    change: parseFloat((Math.random() * 10 - 5).toFixed(2)), // -5% to +5%
  }));
};

const tableData = ref([]);
const loading = ref(true);

function getRandomName() {
  const firstNames = ["John", "Jane", "Alex", "Emily", "Chris", "Sarah", "Michael", "Sophia"];
  const lastNames = ["Doe", "Smith", "Brown", "Johnson", "Taylor", "Lee", "Williams", "Davis"];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
    lastNames[Math.floor(Math.random() * lastNames.length)]
  }`;
}

function getRandomCHN() {
  const fullNumber = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join("");
  return {
    full: fullNumber,
    masked: "*".repeat(8)
  };
}

function getRandomInterest() {
  return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; // $1,000 - $5,000
}

function generateTableData() {
  return Array.from({ length: 7 }, () => {
    const chn = getRandomCHN();
    return {
      name: getRandomName(),
      chnFull: chn.full,
      chnMasked: chn.masked,
      interest: getRandomInterest(),
    };
  });
}

function refreshData() {
  loading.value = true;
  setTimeout(() => {
    tableData.value = generateTableData();
    loading.value = false;
  }, 800);
}


</script>

<style scoped>
/* Loader effect */
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Smooth fade in/out for table */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>