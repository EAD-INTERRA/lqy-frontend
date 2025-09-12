<template>
    <div class="px-4 mx-auto">
    
      <div class="flex">
        <section class="w-[70%] rounded-md bg-theme-cg">
          <div class=" px-[20px]  lg:p-[10px] rounded-[10px] w-full">
                         <img class="mx-auto my-6" src="/assets/images/tb.png" alt="graph" />

          </div>
          <div class="bg-white shadow-md w-[94%] ml-6 p-[20px] rounded-[10px]">
            <p class="text-black mt-[20px] mb-[10px] font-ox font-semibold">
              Treasury Bill Rates
            </p>
            <table class="border-collapse w-full border mx-auto border-slate-500 ...">
              <thead>
                <tr class="bg-theme-tb text-xs font-ox ">
                  <th class="border border-slate-600 ... px-[30px] py-[15px] ">Issue Date</th>
                  <th class="border border-slate-600 ... px-[30px] py-[15px]">Tender</th>
                  <th class="border border-slate-600 ... px-[30px] py-[15px]">Security Type</th>
                  <th class="border border-slate-600 ... px-[30px] py-[15px]">Discount Rate</th>
                  <th class="border border-slate-600 ... px-[30px] py-[15px]">Interest Rate</th>
                </tr>
              </thead>
              <tbody class="">
                <tr>
                  <td class="border border-slate-700 px-[10px] ">01 Jan 2024</td>
                  <td class="border border-slate-700 px-[10px]">1883</td>
                  <td class="border border-slate-700 px-[10px]">91 DAY BILL</td>
                  <td class="border border-slate-700 px-[10px]">27.2488</td>
                  <td class="border border-slate-700 px-[10px]">29.2419</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">01 Jan 2024</td>
                  <td class="border border-slate-700 px-[10px]">1883</td>
                  <td class="border border-slate-700 px-[10px]">91 DAY BILL</td>
                  <td class="border border-slate-700 px-[10px]">27.2488</td>
                  <td class="border border-slate-700 px-[10px]">29.2419</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">01 Jan 2024</td>
                  <td class="border border-slate-700 px-[10px]">1883</td>
                  <td class="border border-slate-700 px-[10px]">91 DAY BILL</td>
                  <td class="border border-slate-700 px-[10px]">27.2488</td>
                  <td class="border border-slate-700 px-[10px]">29.2419</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">01 Jan 2024</td>
                  <td class="border border-slate-700 px-[10px]">1883</td>
                  <td class="border border-slate-700 px-[10px]">91 DAY BILL</td>
                  <td class="border border-slate-700 px-[10px]">27.2488</td>
                  <td class="border border-slate-700 px-[10px]">29.2419</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">01 Jan 2024</td>
                  <td class="border border-slate-700 px-[10px]">1883</td>
                  <td class="border border-slate-700 px-[10px]">91 DAY BILL</td>
                  <td class="border border-slate-700 px-[10px]">27.2488</td>
                  <td class="border border-slate-700 px-[10px]">29.2419</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">01 Jan 2024</td>
                  <td class="border border-slate-700 px-[10px]">1883</td>
                  <td class="border border-slate-700 px-[10px]">91 DAY BILL</td>
                  <td class="border border-slate-700 px-[10px]">27.2488</td>
                  <td class="border border-slate-700 px-[10px]">29.2419</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">01 Jan 2024</td>
                  <td class="border border-slate-700 px-[10px]">1883</td>
                  <td class="border border-slate-700 px-[10px]">91 DAY BILL</td>
                  <td class="border border-slate-700 px-[10px]">27.2488</td>
                  <td class="border border-slate-700 px-[10px]">29.2419</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">01 Jan 2024</td>
                  <td class="border border-slate-700 px-[10px]">1883</td>
                  <td class="border border-slate-700 px-[10px]">91 DAY BILL</td>
                  <td class="border border-slate-700 px-[10px]">27.2488</td>
                  <td class="border border-slate-700 px-[10px]">29.2419</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
  
        <section class="w-[28%] mt-7 flex flex-col items-center">
          <div
            class="bg-white shadow-md p-[20px] mx-9 gap-4 flex flex-col rounded-[10px]">
            <p class="text-black font-ox font-bold">
              Proposed Security Lending Rate
            </p>
            <div class="flex flex-col gap-4">
              <input class="m-auto flex justify-between text-base align-middle font-normal text-white px-[10px] w-full py-[5px] bg-white border border-gray border-solid rounded-[10px]" placeholder="Interest rate" />
              <input class="m-auto flex justify-between text-base align-middle font-normal text-white px-[10px] w-full py-[5px] bg-white border border-gray border-solid rounded-[10px]" placeholder="Financial Institution Spread" />
              <input class="m-auto flex justify-between text-base align-middle font-normal text-white px-[10px] w-full py-[5px] bg-white border border-gray border-solid rounded-[10px]" placeholder="LQY Admin Fee" />
              <div
                class="m-auto flex justify-between text-base align-middle font-normal text-white px-[10px] w-full py-[5px] ">
                <p class="text-sm text-black my-auto">758.43</p>
                <div
                  class=" flex gap-2">
                  <buttom class="cursor-pointer bg-gray-300 px-2 my-auto rounded-[3px] text-red-500 text-lg font-bold">-</buttom>
                  <buttom class="cursor-pointer bg-gray-300 px-2 my-auto rounded-[3px] text-red-500 text-lg font-bold">+</buttom>
                </div>
              </div>
              <div class="flex text-[14px] justify-start ml-2 mb-3">=$758.43</div>
              <div class="m-auto">
                <buttom
                  class="cursor-pointer text-base font-normal text-white my-5 px-[100px] py-[10px] bg-blue-400 border border-gray border-solid rounded-[10px]"
                  >Update</buttom
                >
              </div>
              <div class="flex text-[14px] justify-end mr-2 mt-2">
                Last updated 01/05/2024 08:06 (UTC)
              </div>
            </div>
          </div>
          <div class="bg-white shadow-md w-[82%] p-[20px] mt-10  rounded-[10px]">
                <p class="text-black font-ox font-bold">Related Indicators</p>
                <div class="text-black font-ox font-semibold mb-1 mt-3">Treasury Yield Curve</div>
                
          <table class="border-collapse w-full border mx-auto border-slate-500 ...">
              
              <tbody class="">
                <tr>
                  <td class="border border-slate-700 px-[10px] ">1M TR</td>
                  <td class="border border-slate-700 px-[10px]">5.453%</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">1Y TR</td>
                  <td class="border border-slate-700 px-[10px]">5.453%</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">10Y TR</td>
                  <td class="border border-slate-700 px-[10px]">5.453%</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">10Y 3M TR</td>
                  <td class="border border-slate-700 px-[10px]">5.453%</td>
                </tr>
  
                <tr>
                  <td class="border border-slate-700 px-[10px] ">10-2Y TR</td>
                  <td class="border border-slate-700 px-[10px]">5.453%</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">20Y TR</td>
                  <td class="border border-slate-700 px-[10px]">5.453%</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">3M TR</td>
                  <td class="border border-slate-700 px-[10px]">5.453%</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">30Y TR</td>
                  <td class="border border-slate-700 px-[10px]">5.453%</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">5Y TR</td>
                  <td class="border border-slate-700 px-[10px]">5.453%</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">6M TR</td>
                  <td class="border border-slate-700 px-[10px]">5.453%</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 px-[10px] ">7Y TR</td>
                  <td class="border border-slate-700 px-[10px]">5.453%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup></script>
  