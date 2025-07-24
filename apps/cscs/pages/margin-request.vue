<template>
    <div class="p-4 space-y-6 ">
        <section class="mb-4">
            <div class="text-xl text-[#FF0000] font-semibold mb-4">Margin Request</div>

            <div class="bg-white shadow-lg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]">

                <table class="table-fixed w-[100%]">
                    <thead>
                        <tr
                            class=" text-gray-500 font-ox text-base font-normal leading-normal border-b-[0.1px] border-black">
                            <th class="w-80 pt-2 pb-2 hidden lg:table-cell text-left">S/N</th>
                            <th class="w-80 pt-2 pb-2 hidden lg:table-cell text-left">Account Name</th>
                            <th class="w-80 pt-2 pb-2 hidden lg:table-cell text-left">CHN Number</th>
                            <th class="w-80 pt-2 pb-2 hidden lg:table-cell text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="allRequests.length > 0" v-for="(allRequest, index) in allRequests"
                            class="rowText text-gray-500  font-ox text-base font-normal leading-normal">

                            <td class=" hidden lg:table-cell text-center font-bold">
                                <p class="text-left">{{ index + 1 }}</p>
                            </td>
                            <td class=" lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                                <p class="text-left">{{ allRequest.user.profile?.first_name }} {{
                                    allRequest.user.profile?.last_name }}
                                </p>
                            </td>
                            <td class=" lg:table-cell mt-5 text-center font-bold  lg:pt-2 pb-2">
                                <p class="text-left">{{ allRequest.chn }}</p>
                            </td>
                            <td class=" flex mt-5 text-center justify-center items-center">
                               <button @click="showModal(allRequest)" class="border border-solid border-blue-500 text-blue-500 text-ox text-base bg-white px-2 lg:px-6 rounded-[5px]">View</button>
                            </td>
                        </tr>

                        <tr v-else class="rowText text-gray-500  font-ox text-base font-normal leading-normal">
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
                                    <h3 class="text-lg font-medium text-gray-900 mb-2">No request found
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
const allCount = ref("");
const { $services } = useNuxtApp();
const loading = ref(false);
const allRequests = ref([]);


onMounted(async () => {
    //   fetchProfiles()
    try {
        const response = await $services.base.getAllMarginRequests();
        console.log("All Margin Requests fetched:", response);
        allCount.value = response.body.count || 0;
        allRequests.value = response.body.rows || [];

    } catch (error) {
        console.error("Error fetching profiles:", error);
        toast.error("Failed to fetch profiles");
    }
});

const handleApprove = async (id) => {
    try {
        const response = await $services.base.approveMarginRequest(id);
        if (response.message === 'SUCCESSFUL' || response.code === 200) {
            toast.success('Margin request approved successfully!');
            // Optionally, refresh the list of requests
            onMounted();
        } else {
            toast.error('Failed to approve margin request: ' + (response.message || 'Unknown error'));
        }
    } catch (error) {
        console.error("Error approving margin request:", error);
        toast.error("Failed to approve margin request");
    }
};

const handleDecline = async (id) => {
    try {
        const response = await $services.base.declineMarginRequest(id);
        if (response.message === 'SUCCESSFUL' || response.code === 200) {
            toast.success('Margin request declined successfully!');
            // Optionally, refresh the list of requests
            onMounted();
        } else {
            toast.error('Failed to decline margin request: ' + (response.message || 'Unknown error'));
        }
    } catch (error) {
        console.error("Error declining margin request:", error);
        toast.error("Failed to decline margin request");
    }
};  
</script>
