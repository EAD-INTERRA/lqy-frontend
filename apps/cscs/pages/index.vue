<template>
    <div class="p-4 pt-[50px] space-y-6 ">
        <section class="grid grid-cols-4 w-full gap-6">
            <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <div>
                    <p class="font-ox text-ox-xs">Total Request </p>
                    <p class="font-ox font-bold text-center text-ox-lg">{{ allCount || 0 }}</p>
                </div>
                <img src="../assets/images/total-request.svg" class="rounded-full" alt="icon" />

            </div>
            <div class=" bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <img src="../assets/images/accepted-request.svg" class="rounded-full" alt="icon" />
                <div>
                    <p class="font-ox text-ox-xs">Approved Request </p>
                    <p class="font-ox font-bold text-center text-ox-lg">{{ acceptedCount || 0 }}</p>
                </div>
            </div>
            <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <img src="../assets/images/rejected-request.svg" class="rounded-full" alt="icon" />
                <div>
                    <p class="font-ox text-ox-xs">Pending Request </p>
                    <p class="font-ox font-bold text-center text-ox-lg">{{ pendingCount || 0 }}</p>
                </div>
            </div>
            <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <img src="../assets/images/rejected-request.svg" class="rounded-full" alt="icon" />
                <div>
                    <p class="font-ox text-ox-xs">Rejected Request </p>
                    <p class="font-ox font-bold text-center text-ox-lg">{{ rejectedCount || 0 }}</p>
                </div>
            </div>

        </section>

        <section class="mb-4">
            <div class="bg-white shadow-lg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]">
                <div class=" mb-6">
                    <p class=" bg-theme-bc text-gray-500 bg-opacity-25 bolder w-fit  text-lg px-3 py-1 rounded-[5px] font-bold ">
                        Verification Request</p>
                </div>
                <table class="table-fixed w-[100%]">
                    <thead>
                        <tr
                            class=" text-gray-500 font-ox text-base font-normal leading-normal border-b-[0.1px] border-black">
                            <th class="w-48 pt-2 pb-2 hidden lg:table-cell text-left pl-2">User Type</th>
                            <th class="w-48 pt-2 pb-2 hidden lg:table-cell text-left pl-2">User Name</th>
                            <th class="w-48 pt-2 pb-2 hidden lg:table-cell text-left">Company Name</th>
                            <th class="w-48 pt-2 pb-2 hidden lg:table-cell text-left">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr class="rowText text-black  font-ox text-base font-normal leading-normal">
                            <td class=" hidden lg:table-cell text-center font-bold">
                                <p class="text-left pl-2">Financial Institution</p>
                            </td>
                            <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                                <dl class="lg:hidden ">
                                    <dt class="sr-only">Name</dt>
                                    <dd class="text-black font-ox text-base font-normal leading-normal">
                                        <div class="flex">
                                            <!-- <img src="../assets/images/agilents-tech.svg" class="rounded-full" alt="icon" /> -->
                        <!-- <NuxtLink to="/" class="font-ox text-ox-md font-bold ml-2 leading-6">Jon Doe
                                            </NuxtLink>
                                        </div>
                                    </dd>
                                </dl>
                                <dl class="lg:hidden">
                                    <dt class="sr-only">Name</dt>
                                    <dd>
                                        <div class="flex "> -->
                        <!-- <img src="/assets/images/tick.svg" class="rounded-full" alt="icon" /> -->
                        <!-- <NuxtLink to="/"
                                                class="font-ox text-ox-sm font-bold ml-2 text-left leading-6">Jon Doe
                                            </NuxtLink>
                                        </div>
                                    </dd>
                                </dl>
                                <div class="flex pl-2"> -->
                        <!-- <img src="/assets/images/profileImage.svg" class="rounded-full w-6" alt="icon" /> -->
                        <!-- <NuxtLink to="/" class="font-ox text-ox-sm font-bold ml-2 text-left leading-6">Jon
                                        Doe</NuxtLink>
                                </div>

                            </td>
                            <td class=" hidden lg:table-cell text-center font-bold">
                                <p class="text-left">Jondoe incorporated</p>
                            </td>
                            <td class=" hidden lg:table-cell text-center font-normal py-2">
                                <p class="text-left font-semibold">+234 34547639</p>
                                <p class="text-left text-blue-500">jondoe@mail.com</p>
                            </td>

                        </tr> -->
                        <tr class="rowText text-black  font-ox text-base font-normal leading-normal">
                            <td colspan="4" class="hidden lg:table-cell text-center py-4">
                                <div class="flex flex-col items-center">
                                    <div
                                        class="w-16 h-16 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h3 class="text-lg font-medium text-gray-900 mb-2">No records found
                                    </h3>
                                    <p class="text-gray-500">There are no items to display at the moment.</p>
                                </div>
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

import { onMounted, ref } from 'vue';
import { useToast } from "vue-toastification";

const toast = useToast();
const loading = ref(false);
const profiles = ref([]);
const pendingCount = ref("");
const acceptedCount = ref("");
const rejectedCount = ref("");
const allCount = ref("");

// Fetch and Init
onMounted(async () => {
    //   fetchProfiles()
    try {
        // Simulate fetching data
        const response = await $services.base.getProfiles();
        console.log("Profiles fetched:", response);
        profiles.value = response.body.results || [];

        const pendingRequests = await $services.base.getPendingMarginRequests();
        // console.log("Pending Margin Requests fetched:", pendingRequests);
        pendingCount.value = pendingRequests.body.count || 0;

        const acceptedRequests = await $services.base.getAcceptedMarginRequests();
        // console.log("Accepted Margin Requests fetched:", acceptedRequests);
        acceptedCount.value = acceptedRequests.body.count || 0;

        const rejectedRequests = await $services.base.getRejectedMarginRequests();
        // console.log("Rejected Margin Requests fetched:", rejectedRequests);
        rejectedCount.value = rejectedRequests.body.count || 0;

        const allRequests = await $services.base.getAllMarginRequests();
        // console.log("All Margin Requests fetched:", allRequests);
        allCount.value = allRequests.body.count || 0;

    } catch (error) {
        console.error("Error fetching profiles:", error);
        toast.error("Failed to fetch profiles");
    }
});

const { $services } = useNuxtApp();

if (!$services || !$services.base) {
    console.error("Base service is not available");
    //   return;
}





</script>
