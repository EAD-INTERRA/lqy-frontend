<template>
    <div class="p-4  mx-auto">
      <div class="flex flex-col lg:flex-row">
        <section class="w-fit lg:w-[70%] rounded-md bg-theme-cg">
          <div class="bg-theme-dg p-[20px] lg:p-[40px] rounded-[10px] w-[100%]">
            <div class="flex justify-between pr-9 mb-6">
              <p class="w-fit text-lg px-3 py-1">Current Security Lending Rate</p>
            </div>
            <hr />
            <div class="">
              <div class="w-full rounded-md bg-theme-cg p-[25px]">
               <LineChart :labels="chartLabels" :datasets="chartDatasets" />
              </div>
          <!-- <div class="w-[25%] flex flex-col items-center space-y-8">
              <span class="font-ox text-ox-md text-center">Asset Allocation</span>
              <DoughnutChart :data="chartData" :colors="chartColors"/>
          </div> -->
  
            </div>
          </div>
          <div class="p-[10px] lg:p-[20px] rounded-[10px]">
            <p class="text-black mt-[20px] mb-[10px] font-ox font-bold">
              Current security lending rate in nigeria: -23%
            </p>
            <p class="text-sm">
              As of the latest available information, the current securities
              lending rate in Nigeria is 4.5%. This rate signifies the annual fee
              investors must pay for borrowing securities in the Nigerian
              securities lending market. The lending rate is subject to market
              dynamics, influenced by factors such as the demand for specific
              securities, prevailing economic conditions, and risk considerations.
              Investors and market participants use this real-time rate as a
              crucial benchmark, guiding their decisions in navigating the
              securities lending landscape in Nigeria. For the most accurate and
              current details, it is recommended to check reputable financial news
              sources, market data providers, or consult with relevant financial
              institutions.
            </p>
          </div>
        </section>
  
        <section class="w-[100%] lg:w-[28%] flex flex-col items-center">
          <div class="bg-theme-dg p-[20px] lg:mx-6 my-3 lg:my-0 gap-3 flex flex-col rounded-[10px]">
            <p class="text-black font-ox font-bold ">
              Proposed Security Lending Rate
            </p>
            <div class="flex flex-col gap-2">
              <div class="m-auto flex justify-between text-base align-middle font-normal text-white px-[10px] w-full py-[5px] bg-white border border-gray border-solid  rounded-[10px] ">
                <p class="text-sm text-black my-auto ">758.43</p>
                <div class="bg-gray-300 flex gap-1 px-2 my-auto rounded-[3px] text-red-500 text-lg font-bold">
                  <buttom >-</buttom>
                  <buttom  >+</buttom>
                </div>
              </div>
              <div class="flex text-[14px] justify-start ml-2 ">=₦758.43</div>
              <div class="m-auto">
                <buttom class="text-base font-normal text-white px-[80px] py-[5px] bg-blue-400 border border-gray border-solid  rounded-[10px] ">Update</buttom>
              </div>
              <div class="flex text-[10px] justify-end mr-2 ">Last updated 01/05/2024 08:06 (UTC)</div>
          </div>
          </div>
          <div class="p-[5px] lg:p-[20px] mx-0 lg:mx-6 block rounded-[10px]">
            <p class="text-black font-ox font-bold mt-2 lg:mt-0">Financial Blog</p>
            <div class=" md:grid block lg:block md:grid-cols-2 gap-0 lg:gap-0 md:gap-3">
            <div>
              <div
                class="flex gap-1 text-sm font-semibold mt-5 mb-1 justify-start">
                Stratton Craig
                <img class="w-[6%]" src="~/assets/images/tick.svg" />
                <p class="">2 hours ago</p>
              </div>
              <p class="text-sm text-left">
                As of the latest available information, the current securities
                lending rate in Nigeria is 4.5%. This rate signifies the annual
                fee investors must pay for borrowing securities in the Nigerian
              </p>
            </div>
            <div>
              <div
                class="flex gap-1 text-sm font-semibold mt-5 mb-1 justify-start">
                Stratton Craig
                <img class="w-[6%]" src="~/assets/images/tick.svg" />
                <p class="">2 hours ago</p>
              </div>
              <p class="text-sm text-left">
                As of the latest available information, the current securities
                lending rate in Nigeria is 4.5%. This rate signifies the annual
                fee investors must pay for borrowing securities in the Nigerian
              </p>
            </div>
           
          </div>
          </div>
        </section>
      </div>
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
  
  