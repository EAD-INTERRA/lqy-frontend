<template>
<div class="p-4 space-y-6 ">
    <section class="grid grid-cols-4 w-fit gap-6">
        <div class="bg-custom-orange flex gap-6 rounded-[12px] w-[265px] px-[30px] py-[16px]">
            <img src="/assets/images/icon-park-solid.svg" class="rounded-full" alt="icon" />
            <div>
                <p class="font-ox text-ox-xs">Pending Request </p>
                <p class="font-ox font-bold text-center text-ox-lg">43,543</p>
            </div>
        </div>
        <div class=" bg-custom-blue flex gap-6 rounded-[12px] w-[265px] px-[30px] py-[16px]">
            <img src="/assets/images/doc-success.svg" class="rounded-full" alt="icon" />
            <div>
                <p class="font-ox text-ox-xs">Total Request </p>
                <p class="font-ox font-bold text-center text-ox-lg">43</p>
            </div>
        </div>
        <div class="bg-custom-red flex gap-6 rounded-[12px] w-[265px] px-[30px] py-[16px]">
            <img src="/assets/images/doc-fail.svg" class="rounded-full" alt="icon" />
            <div>
                <p class="font-ox text-ox-xs">Total Request  </p>
                <p class="font-ox font-bold text-center text-ox-lg">545</p>
            </div>
        </div>
        <div class="bg-custom-purple flex gap-6 rounded-[12px] w-[265px] px-[30px] py-[16px]">
            <img src="/assets/images/doc-fail.svg" class="rounded-full" alt="icon" />
            <div>
                <p class="font-ox text-ox-xs">Total Request  </p>
                <p class="font-ox font-bold text-center text-ox-lg">545</p>
            </div>
        </div>

    </section>

    <section class="mb-4">

        <div class="bg-theme-cg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]">
            <div class="flex justify-between">
                <p class=" bg-theme-tb font-semibold w-fit  text-lg px-3 py-1 rounded-[5px] mb-6">Investors Security</p>
                <p class=" bg-blue-400 text-white font-ox border border-black w-fit  text-lg px-3 py-1 rounded-[5px] mb-6">Margin Check</p>
            </div>
            
            <table class="table-fixed w-[80%]">
                <thead>
                    <tr class=" text-black font-ox text-base font-normal leading-normal border-b-[0.1px] border-black">
                        <th class="w-44 pt-2 pb-2 hidden lg:table-cell text-left">Investors</th>
                        <th class="w-32 pt-2 pb-2 hidden lg:table-cell text-left">Ticker Symbol</th>
                        <th class="w-32 pt-2 pb-2 hidden lg:table-cell text-left">Security Name</th>
                        <th class="w-32 pt-2 pb-2 hidden lg:table-cell text-left ">Quantity</th>
                        <th class="w-36 pt-2 pb-2 hidden lg:table-cell text-left">Market Value ($)</th>
                        <th class="w-32 pt-2 pb-2 hidden lg:table-cell text-left">Asset Class</th>
                        <th class="w-36 pt-2 pb-2 hidden lg:table-cell text-left">DIvidend Yield (%)</th>
                        <th class="w-32 pt-2 pb-2 hidden lg:table-cell text-left">Liquidity Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="rowText text-black  font-ox text-base font-normal leading-normal">
                        <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                            <dl class="lg:hidden ">
                                <dt class="sr-only">Name</dt>
                                <dd class="text-black font-ox text-base font-normal leading-normal">
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-md font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="lg:hidden">
                                <dt class="sr-only">Name</dt>
                                <dd>
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <div class="flex pl-2">
                                <img src="/assets/images/profileImage.svg" class="rounded-full w-7" alt="icon" />
                                <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6 text-left">Jon Doe</NuxtLink>
                            </div>

                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left">AAPL</p>
                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left"> Apple INC.</p>
                        </td>
                        <td class=" lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                            <p class="text-left">
                                500
                            </p>
                        </td>
                        <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                            <p class="text-left">$75,000</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">Equity</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">1.5</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">High</p>
                        </td>
                    </tr>
                    <tr class="rowText bg-theme-tb text-black  font-ox text-base font-normal leading-normal">
                        <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                            <dl class="lg:hidden ">
                                <dt class="sr-only">Name</dt>
                                <dd class="text-black font-ox text-base font-normal leading-normal">
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-md font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="lg:hidden">
                                <dt class="sr-only">Name</dt>
                                <dd>
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <div class="flex pl-2">
                                <img src="/assets/images/profileImage.svg" class="rounded-full w-7 " alt="icon" />
                                <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2  leading-6">Jon Doe</NuxtLink>
                            </div>

                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left">GOOGL</p>
                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left"> Alphabet INC.</p>
                        </td>
                        <td class=" lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                            <p class="text-left">
                               500
                            </p>
                        </td>
                        <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                            <p class="text-left">$75,000</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">Equity</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">1.5</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">High</p>
                        </td>
                    </tr>
                    <tr class="rowText text-black  font-ox text-base font-normal leading-normal">
                        <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                            <dl class="lg:hidden ">
                                <dt class="sr-only">Name</dt>
                                <dd class="text-black font-ox text-base font-normal leading-normal">
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-md font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="lg:hidden">
                                <dt class="sr-only">Name</dt>
                                <dd>
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <div class="flex pl-2">
                                <img src="/assets/images/profileImage.svg" class="rounded-full w-7" alt="icon" />
                                <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6 text-left">Jon Doe</NuxtLink>
                            </div>

                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left">AAPL</p>
                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left"> Apple INC.</p>
                        </td>
                        <td class=" lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                            <p class="text-left">
                                500
                            </p>
                        </td>
                        <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                            <p class="text-left">$75,000</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">Equity</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">1.5</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">High</p>
                        </td>
                    </tr>
                    <tr class="rowText bg-theme-tb text-black  font-ox text-base font-normal leading-normal">
                        <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                            <dl class="lg:hidden ">
                                <dt class="sr-only">Name</dt>
                                <dd class="text-black font-ox text-base font-normal leading-normal">
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-md font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="lg:hidden">
                                <dt class="sr-only">Name</dt>
                                <dd>
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <div class="flex pl-2">
                                <img src="/assets/images/profileImage.svg" class="rounded-full w-7 " alt="icon" />
                                <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2  leading-6">Jon Doe</NuxtLink>
                            </div>

                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left">GOOGL</p>
                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left"> Alphabet INC.</p>
                        </td>
                        <td class=" lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                            <p class="text-left">
                               500
                            </p>
                        </td>
                        <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                            <p class="text-left">$75,000</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">Equity</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">1.5</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">High</p>
                        </td>
                    </tr>
                    <tr class="rowText text-black  font-ox text-base font-normal leading-normal">
                        <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                            <dl class="lg:hidden ">
                                <dt class="sr-only">Name</dt>
                                <dd class="text-black font-ox text-base font-normal leading-normal">
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-md font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="lg:hidden">
                                <dt class="sr-only">Name</dt>
                                <dd>
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <div class="flex pl-2">
                                <img src="/assets/images/profileImage.svg" class="rounded-full w-7" alt="icon" />
                                <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6 text-left">Jon Doe</NuxtLink>
                            </div>

                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left">AAPL</p>
                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left"> Apple INC.</p>
                        </td>
                        <td class=" lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                            <p class="text-left">
                                500
                            </p>
                        </td>
                        <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                            <p class="text-left">$75,000</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">Equity</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">1.5</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">High</p>
                        </td>
                    </tr>
                    <tr class="rowText bg-theme-tb text-black  font-ox text-base font-normal leading-normal">
                        <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                            <dl class="lg:hidden ">
                                <dt class="sr-only">Name</dt>
                                <dd class="text-black font-ox text-base font-normal leading-normal">
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-md font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="lg:hidden">
                                <dt class="sr-only">Name</dt>
                                <dd>
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <div class="flex pl-2">
                                <img src="/assets/images/profileImage.svg" class="rounded-full w-7 " alt="icon" />
                                <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2  leading-6">Jon Doe</NuxtLink>
                            </div>

                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left">GOOGL</p>
                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left"> Alphabet INC.</p>
                        </td>
                        <td class=" lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                            <p class="text-left">
                               500
                            </p>
                        </td>
                        <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                            <p class="text-left">$75,000</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">Equity</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">1.5</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">High</p>
                        </td>
                    </tr>
                    <tr class="rowText text-black  font-ox text-base font-normal leading-normal">
                        <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                            <dl class="lg:hidden ">
                                <dt class="sr-only">Name</dt>
                                <dd class="text-black font-ox text-base font-normal leading-normal">
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-md font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="lg:hidden">
                                <dt class="sr-only">Name</dt>
                                <dd>
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <div class="flex pl-2">
                                <img src="/assets/images/profileImage.svg" class="rounded-full w-7" alt="icon" />
                                <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6 text-left">Jon Doe</NuxtLink>
                            </div>

                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left">AAPL</p>
                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left"> Apple INC.</p>
                        </td>
                        <td class=" lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                            <p class="text-left">
                                500
                            </p>
                        </td>
                        <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                            <p class="text-left">$75,000</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">Equity</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">1.5</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">High</p>
                        </td>
                    </tr>
                    <tr class="rowText bg-theme-tb text-black  font-ox text-base font-normal leading-normal">
                        <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                            <dl class="lg:hidden ">
                                <dt class="sr-only">Name</dt>
                                <dd class="text-black font-ox text-base font-normal leading-normal">
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-md font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="lg:hidden">
                                <dt class="sr-only">Name</dt>
                                <dd>
                                    <div class="flex">
                                        <img src="/assets/images/profileImage.svg" class="rounded-full" alt="icon" />
                                        <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 leading-6">Jon Doe</NuxtLink>
                                    </div>
                                </dd>
                            </dl>
                            <div class="flex pl-2">
                                <img src="/assets/images/profileImage.svg" class="rounded-full w-7 " alt="icon" />
                                <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2  leading-6">Jon Doe</NuxtLink>
                            </div>

                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left">GOOGL</p>
                        </td>
                        <td class=" hidden lg:table-cell text-center font-bold">
                            <p class="text-left"> Alphabet INC.</p>
                        </td>
                        <td class=" lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                            <p class="text-left">
                               500
                            </p>
                        </td>
                        <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                            <p class="text-left">$75,000</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">Equity</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">1.5</p>
                        </td>
                        <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                            <p class="text-left">High</p>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </section>
</div>
</template>

<script lang="ts" setup>
const chartData = ref([{
        name: 'Equities',
        count: 12
    },
    {
        name: 'Bonds',
        count: 50
    },
    {
        name: 'Derivatives',
        count: 20
    },
    {
        name: 'Other Assets',
        count: 18
    },
]);

const chartColors = ['#E0903F', '#65C569', '#AC65C5', '#6373F8']; // External colors array

const chartLabels = ref(['January', 'February', 'March', 'April', 'May', 'June', 'July']);
const chartDatasets = ref([{
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
