<template>
<div class="p-4">
    <div class="bg-theme-cg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px]">
        <div class=" mb-6">
            <p class=" bg-theme-bc bg-opacity-25 bolder w-fit  text-lg px-3 py-1 rounded-[5px] ">Assets</p>
        </div>
        <table class="table-fixed w-[100%]">
            <thead>
                <tr class=" text-black font-ox text-base font-normal leading-normal border-b-[0.1px] border-black">
                    <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Name</th>
                    <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Price</th>
                    <th class="w-32 pt-2 pb-2 hidden lg:table-cell">Change(%)</th>
                    <th class="w-32 pt-2 pb-2 hidden lg:table-cell ">Volume</th>
                    <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Market Cap</th>
                    <th class="w-48 pt-2 pb-2 hidden lg:table-cell text-left">Sector</th>
                </tr>
            </thead>
            <tbody>
                <tr class="rowText text-black  font-ox text-base font-normal leading-normal">
                    <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                        <dl class="lg:hidden ">
                            <dt class="sr-only">Name</dt>
                            <dd class="text-black font-ox text-base font-normal leading-normal">
                                <div class="flex">
                                    <img src="/assets/images/agilents-tech.svg" class="rounded-full" alt="icon" />
                                    <NuxtLink to="bulk-payments/transactions" class="font-ox text-ox-md font-bold ml-2 leading-6">Agilents Technologies</NuxtLink>
                                </div>
                            </dd>
                        </dl>
                        <dl class="lg:hidden">
                            <dt class="sr-only">Name</dt>
                            <dd>
                                <div class="flex">
                                    <img src="/assets/images/agilents-tech.svg" class="rounded-full" alt="icon" />
                                    <NuxtLink to="bulk-payments/transactions" class="font-ox text-ox-sm font-bold ml-2 leading-6">Agilents Technologies</NuxtLink>
                                </div>
                            </dd>
                        </dl>
                        <div class="flex">
                            <img src="/assets/images/agilents-tech.svg" class="rounded-full" alt="icon" />
                            <NuxtLink to="bulk-payments/transactions" class="font-ox text-ox-sm font-bold ml-2 leading-6">Agilents Technologies</NuxtLink>
                        </div>
    
                    </td>
                    <td class=" hidden lg:table-cell text-center font-bold">
                        <p>230.32 USD</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center font-bold">
                        <p class="text-green-500">+1.3%</p>
                    </td>
                    <td class=" lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                        <p>
                            2.324M
                        </p>
                    </td>
                    <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                        <p>234.9B USD</p>
                    </td>
                    <td class="hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                        <p>Health Technology</p>
                    </td>
                </tr>
                <tr class="rowText text-black-900 font-bold font-ox text-base font-normal leading-normal">
                    <td class="text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                        <dl class="lg:hidden ">
                            <dt class="sr-only">Name</dt>
                            <dd class="text-black font-ox text-base font-normal leading-normal">
                                <div class="flex">
                                    <img src="/assets/images/agilents-tech.svg" class="rounded-full" alt="icon" />
                                    <NuxtLink to="bulk-payments/transactions" class="font-ox text-ox-md font-bold ml-2 leading-6">Agilents Technologies</NuxtLink>
                                </div>
                            </dd>
                        </dl>
                        <dl class="lg:hidden">
                            <dt class="sr-only">Name</dt>
                            <dd>
                                <div class="flex">
                                    <img src="/assets/images/agilents-tech.svg" class="rounded-full" alt="icon" />
                                    <NuxtLink to="bulk-payments/transactions" class="font-ox text-ox-sm font-bold ml-2 leading-6">Agilents Technologies</NuxtLink>
                                </div>
                            </dd>
                        </dl>
                        <div class="flex">
                            <img src="/assets/images/agilents-tech.svg" class="rounded-full" alt="icon" />
                            <NuxtLink to="bulk-payments/transactions" class="font-ox text-ox-sm font-bold ml-2 leading-6">Agilents Technologies</NuxtLink>
                        </div>
    
                    </td>
                    <td class="hidden lg:table-cell text-center font-bold">
                        <p>230.32 USD</p>
                    </td>
                    <td class="hidden lg:table-cell text-center font-bold">
                        <p class="text-green-500">+1.3%</p>
                    </td>
                    <td class="lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                        <p>
                            2.324M
                        </p>
                    </td>
                    <td class="text-center font-bold hidden lg:table-cell pt-2 pb-2">
                        <p>234.9B USD</p>
                    </td>
                    <td class=" hidden lg:table-cell text-left pt-2 pb-2 font-bold">
                        <p>Health Technology</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script lang="ts" setup></script>
