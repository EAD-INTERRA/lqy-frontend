<template>
  <div class="p-4 space-y-6">
    <section class="grid grid-cols-3 w-3/4 gap-4">
      <div class="bg-theme-cg rounded-[12px] px-[32px] py-[16px]">
        <p class="font-ox text-ox-xs">Account Balance</p>
        <p class="font-ox font-bold text-ox-lg">$754,434.90</p>
      </div>
      <div class="bg-theme-cg rounded-[12px] p-[16px]">
        <div class="flex font-normal font-ox justify-between">
          <p class="text-ox-xs">30 Days Profit</p>
          <div class="flex flex-col items-end mr-4">
            <b>+ $23,331</b>
            <span class="text-ox-xs text-green-700">+1.23%</span>
          </div>
        </div>
      </div>
      <div class="bg-theme-cg rounded-[12px] p-[16px]">
        <div class="flex font-normal font-ox justify-between">
          <p class="text-ox-xs">Overall Loss</p>
          <div class="flex flex-col items-end mr-4">
            <b>- $123,331</b>
            <span class="text-ox-xs text-red-700">-24.23%</span>
          </div>
        </div>
      </div>
    </section>

    <section class="flex">
      <div class="w-[75%] rounded-md bg-theme-cg p-[25px]">
        <LineChart :labels="chartLabels" :datasets="chartDatasets" />
      </div>
      <div class="w-[25%] flex flex-col items-center space-y-8">
        <span class="font-ox text-ox-md text-center">Asset Allocation</span>
        <DoughnutChart :data="chartData" :colors="chartColors" />
      </div>
    </section>

    <section class="mb-4">
      <div
        class="bg-theme-cg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]">
        <div class="mb-6">
          <p
            class="bg-theme-bc bg-opacity-25 bolder w-fit text-lg px-3 py-1 rounded-[5px]">
            Assets
          </p>
        </div>
        <table class="table-fixed w-[100%]">
          <thead>
            <tr
              class="text-black font-ox text-base font-normal leading-normal border-b-[0.1px] border-black">
              <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Name</th>
              <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Price</th>
              <th class="w-32 pt-2 pb-2 hidden lg:table-cell">Change(%)</th>
              <th class="w-32 pt-2 pb-2 hidden lg:table-cell">Volume</th>
              <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Market Cap</th>
              <th class="w-48 pt-2 pb-2 hidden lg:table-cell text-left">
                Sector
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="rowText text-black font-ox text-base font-normal leading-normal">
              <td
                class="text-center flex flex-col gap-0 lg:gap-2 w-full mt-1 pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Name</dt>
                  <dd
                    class="text-black font-ox text-base font-normal leading-normal">
                    <div class="flex">
                      <img
                        src="/assets/images/agilents-tech.svg"
                        class="rounded-full"
                        alt="icon" />
                      <NuxtLink
                        to="/"
                        class="font-ox text-ox-md font-bold ml-2 leading-6"
                        >Agilents Technologies</NuxtLink
                      >
                    </div>
                  </dd>
                </dl>
                <dl class="lg:hidden">
                  <dt class="sr-only">Name</dt>
                  <dd>
                    <div class="flex">
                      <img
                        src="/assets/images/agilents-tech.svg"
                        class="rounded-full"
                        alt="icon" />
                      <NuxtLink
                        to="/"
                        class="font-ox text-ox-sm font-bold ml-2 leading-6"
                        >Agilents Technologies</NuxtLink
                      >
                    </div>
                  </dd>
                </dl>
                <div class="flex">
                  <img
                    src="/assets/images/agilents-tech.svg"
                    class="rounded-full"
                    alt="icon" />
                  <NuxtLink
                    to="/"
                    class="font-ox text-ox-sm font-bold ml-2 leading-6"
                    >Agilents Technologies</NuxtLink
                  >
                </div>
              </td>
              <td class="hidden lg:table-cell text-center font-bold">
                <p>230.32 USD</p>
              </td>
              <td class="hidden lg:table-cell text-center font-bold">
                <p class="text-green-500">+1.3%</p>
              </td>
              <td class="lg:table-cell mt-5 text-center font-bold lg:pt-2 pb-2">
                <p>2.324M</p>
              </td>
              <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                <p>234.9B USD</p>
              </td>
              <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                <p>Health Technology</p>
              </td>
            </tr>
            <tr
              class="rowText text-black-900 font-bold font-ox text-base font-normal leading-normal">
              <td
                class="text-center flex flex-col gap-0 lg:gap-2 w-full mt-1 pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Name</dt>
                  <dd
                    class="text-black font-ox text-base font-normal leading-normal">
                    <div class="flex">
                      <img
                        src="/assets/images/agilents-tech.svg"
                        class="rounded-full"
                        alt="icon" />
                      <NuxtLink
                        to="/"
                        class="font-ox text-ox-md font-bold ml-2 leading-6"
                        >Agilents Technologies</NuxtLink
                      >
                    </div>
                  </dd>
                </dl>
                <dl class="lg:hidden">
                  <dt class="sr-only">Name</dt>
                  <dd>
                    <div class="flex">
                      <img
                        src="/assets/images/agilents-tech.svg"
                        class="rounded-full"
                        alt="icon" />
                      <NuxtLink
                        to="/"
                        class="font-ox text-ox-sm font-bold ml-2 leading-6"
                        >Agilents Technologies</NuxtLink
                      >
                    </div>
                  </dd>
                </dl>
                <div class="flex">
                  <img
                    src="/assets/images/agilents-tech.svg"
                    class="rounded-full"
                    alt="icon" />
                  <NuxtLink
                    to="/"
                    class="font-ox text-ox-sm font-bold ml-2 leading-6"
                    >Agilents Technologies</NuxtLink
                  >
                </div>
              </td>
              <td class="hidden lg:table-cell text-center font-bold">
                <p>230.32 USD</p>
              </td>
              <td class="hidden lg:table-cell text-center font-bold">
                <p class="text-green-500">+1.3%</p>
              </td>
              <td class="lg:table-cell mt-5 text-center font-bold lg:pt-2 pb-2">
                <p>2.324M</p>
              </td>
              <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                <p>234.9B USD</p>
              </td>
              <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                <p>Health Technology</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex';
import { setWithExpiry, getWithExpiry } from '/packages/shared-lib';

const route = useRoute();
const store = useStore();
const token = route.query.token;
const expiresIn = 3600;


onMounted(() => {
  if (process.client) {
    console.log('Token:', token);
    console.log('Expires In:', expiresIn);

    // Login
    store.dispatch('login', { token, expiresIn });

    // Logout
    store.dispatch('logout');

    // Check Auth
    store.dispatch('checkAuth');
  }
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
