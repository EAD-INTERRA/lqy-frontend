<template>
    <div class="p-4 pt-[50px] space-y-6 ">
        <section class="grid grid-cols-4 w-full gap-6">
            <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <div>
                    <p class="font-ox text-ox-xs">Cash Draw </p>
                    <p class="font-ox font-bold text-left text-ox-lg">₦ {{ allCount || 0 }}</p>
                </div>
                <!-- <img src="../assets/images/total-request.svg" class="rounded-full" alt="icon" /> -->

            </div>
            <div class=" bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <!-- <img src="../assets/images/accepted-request.svg" class="rounded-full" alt="icon" /> -->
                <div>
                    <p class="font-ox text-ox-xs">Value of Ass. Sec </p>
                    <p class="font-ox font-bold text-left text-ox-lg">₦ {{ acceptedCount || 0 }}</p>
                </div>
            </div>
            <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <!-- <img src="../assets/images/rejected-request.svg" class="rounded-full" alt="icon" /> -->
                <div>
                    <p class="font-ox text-ox-xs">ML Value </p>
                    <p class="font-ox font-bold text-left text-ox-lg">₦ {{ pendingCount || 0 }}</p>
                </div>
            </div>
            <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <!-- <img src="../assets/images/rejected-request.svg" class="rounded-full" alt="icon" /> -->
                <div>
                    <p class="font-ox text-ox-xs">SL Value </p>
                    <p class="font-ox font-bold text-left text-ox-lg">₦ {{ rejectedCount || 0 }}</p>
                </div>
            </div>

        </section>

        <section class="mb-4">
            <div class="bg-white shadow-lg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]">
                <div class="flex items-center justify-between mb-6">
                    <p
                        class=" bg-gray-300 text-gray-500 bg-opacity-25 bolder w-fit  text-lg px-3 py-1 rounded-[5px] font-bold ">
                        Broker List</p>

                    <!-- <button @click="handleAddProfile" class="bg-theme-bc text-white px-4 py-2 rounded-md float-right">
                        Margin Check
                    </button> -->
                </div>
                <BaseTable :headers="headers" :rows="paginatedRows" :loading="loading" :showCheckbox="false" class="">
                    <template #cell-0="{ row }">
                        <span>{{ row.values[0] }}</span>
                    </template>
                    <template #cell-1="{ row }">
                        <span>{{ row.values[1] }}</span>
                    </template>
                    <template #cell-2="{ row }">
                        <span>{{ row.values[2] }}</span>
                    </template>
                    <template #cell-3="{ row }">
                        <span v-if="row.values[3]?.toLowerCase() === 'accepted'"
                            class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white">
                            {{ row.values[3] }}
                        </span>
                        <span v-else-if="row.values[3]?.toLowerCase() === 'pending'"
                            class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-orange-500 text-white">
                            {{ row.values[3] }}
                        </span>
                        <span v-else-if="row.values[3]?.toLowerCase() === 'rejected'"
                            class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-red-500 text-white">
                            {{ row.values[3] }}
                        </span>
                        <span v-else>
                            {{ row.values[3] }}
                        </span>
                    </template>
                    <template #cell-7="{ row }">
                        <!-- <NuxtLink
                            :to="`/margin-portfollio?request_id=${row.raw.request_id}&account_name=${row.raw.user.profile?.first_name || ''} ${row.raw.user.profile?.last_name || ''}&chn=${row.raw.chn}&status=${row.raw.status}`"
                            class="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50">
                            View
                        </NuxtLink> -->
                         <NuxtLink
                            :to="`/capital-broker?company_name=${row.values[1]}`"
                            class=" font-semibold text-red-500 px-4 py-1 rounded hover:bg-red-50">
                            View
                        </NuxtLink>
                    </template>
                </BaseTable>

                <!-- Pagination -->
                <BasePagination :currentPage="currentPage" :totalPages="totalPages" :startItem="startItem"
                    :endItem="endItem" :totalCount="totalCount" @update:page="setCurrentPage" />

            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import BaseTable from '../../../packages/ui/components/BaseTable.vue'
import BasePagination from '../../../packages/ui/components/BasePagination.vue'
import { useToast } from "vue-toastification";


const toast = useToast();
const { $services } = useNuxtApp();
const loading = ref(false);
const allBrokers = ref([]);
const profiles = ref([]);
const pendingCount = ref("");
const acceptedCount = ref("");
const rejectedCount = ref("");
const allCount = ref("");

// const headers = [
//     "S/N",
//     "Brokers",
//     "Broker Code",
//     "Cash Drawn",
//      "Value of Ass. Sec.",
//     "ML Value",
//     "SL Value",
//     "Action",
// ];

const headers = [
    "S/N",
    "Brokers",
    "Broker Code",
    "Cash Drawn",
    "Value of Ass. Sec.",
    "ML Value",
    "SL Value",
    "Action",
];


// Fetch and Init
onMounted(async () => {
    try {
        // Fetch all brokers
        console.log("Fetching brokers...");
        const brokers = await $services.base.getBrokers();
        console.log("Brokers fetched:", brokers);
        allBrokers.value = brokers.body.records || [];
    } catch (error) {
        console.error("Error fetching brokers:", error);
        toast.error("Failed to fetch Records");
    }
});

const paginatedRows = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return allBrokers.value.slice(start, end).map((broker, index) => ({
        values: [
            start + index + 1,
            // `${broker.first_name || ''} ${broker.last_name || ''}`,
            `${broker.company_name || ''}`,
            broker.code || 'XXXX', // Broker Code (use another field if needed)
            broker.cash_drawn || '3,400,389',
            broker.value_of_assured_security || '14,009,493',
            broker.ml_value || '48,493,932',
            broker.sl_value || '14,009,493',
            null, // Placeholder for Action column
        ],
        raw: broker,
    }));
});
// Pagination logic
const currentPage = ref(1);
const pageSize = ref(10);
const totalCount = computed(() => allBrokers.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() =>
    Math.min(currentPage.value * pageSize.value, totalCount.value)
);

function setCurrentPage(page: number) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}
// Pagination logic End


</script>
