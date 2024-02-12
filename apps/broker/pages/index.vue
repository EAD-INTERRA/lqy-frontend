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
            <DoughnutChart :data="chartData" :colors="chartColors"/>
        </div>
    </section>
    
    <section>
    
    </section>
</div>
</template>


<script lang="ts" setup>

const chartData = ref([
  { name: 'Equities', count: 12 },
  { name: 'Bonds', count: 50 },
  { name: 'Derivatives', count: 20 },
  { name: 'Other Assets', count: 18 },
]);

const chartColors = ['#E0903F', '#65C569', '#AC65C5', '#6373F8']; // External colors array

const chartLabels = ref(['January', 'February', 'March', 'April', 'May', 'June', 'July']);
const chartDatasets = ref([
  {
    label: 'Series A',
    data: [65, 59, 80, 81, 56, 55, 100],
    borderColor: 'rgba(16, 53, 109, 1)',
    backgroundColor: 'rgba(16, 53, 109, 0.2)',
    fill: false,
  },
  {
    label: 'Series B',
    data: [28, 48, 40, 19, 86, 27, 90],
    borderColor: 'rgba(238, 46, 46, 1)',
    backgroundColor: 'rgba(238, 46, 46, 0.2)',
    fill: false,
  },
]);
</script>
