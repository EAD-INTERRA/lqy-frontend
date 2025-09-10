<template>
    <div class="p-4 pt-[50px] space-y-6 ">
        <section class="grid grid-cols-3 w-full gap-6">
            <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <div>
                    <p class="font-ox text-ox-xs">Cash Disbursed</p>
                    <p class="font-ox font-bold text-left text-ox-lg">₦ {{ allCount || 0 }}</p>
                </div>
                <!-- <img src="../assets/images/total-request.svg" class="rounded-full" alt="icon" /> -->

            </div>
            <div class=" bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <!-- <img src="../assets/images/accepted-request.svg" class="rounded-full" alt="icon" /> -->
                <div>
                    <p class="font-ox text-ox-xs">Proportion (in %)</p>
                    <p class="font-ox font-bold text-left text-ox-lg">₦ {{ acceptedCount || 0 }}</p>
                </div>
            </div>
            <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <!-- <img src="../assets/images/rejected-request.svg" class="rounded-full" alt="icon" /> -->
                <div>
                    <p class="font-ox text-ox-xs">Interest Accrued</p>
                    <p class="font-ox font-bold text-left text-ox-lg">₦ {{ pendingCount || 0 }}</p>
                </div>
            </div>
        </section>

        <section class="mb-4">
            <div class="bg-white shadow-lg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mb-[10px]">
                <div class="flex items-center justify-between mb-6">
                    <p
                        class=" bg-gray-300 text-red-500 bg-opacity-25 bolder w-fit  text-lg px-3 py-1 rounded-[5px] font-bold ">
                        Financial Interest Accrued</p>

                    <!-- <button @click="handleAddProfile" class="bg-theme-bc text-white px-4 py-2 rounded-md float-right">
                        Margin Check
                    </button> -->
                </div>
                <BaseTable :headers="headers" :rows="paginatedRows" :loading="loading" :showCheckbox="false" class="text-left">
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
const allInvestors = ref([]);
const profiles = ref([]);
const pendingCount = ref("");
const acceptedCount = ref("");
const rejectedCount = ref("");
const allCount = ref("");

const headers = [
    "S/N",
    "Bank",
    "Cash Disbursed",
    "Proportion %",
    "Interest Accrued",
];


// Fetch and Init
onMounted(async () => {
    //   fetchProfiles()
    try {
        // Fetch all investors
        const investors = await $services.base.getAllInvestors();
        allInvestors.value = investors.body.rows || [];
        // Fetch profiles
        const response = await $services.base.getProfiles();
        console.log("Profiles fetched:", response);
        profiles.value = response.body.results || [];
        // Fetch pending margin requests
        const pendingRequests = await $services.base.getPendingMarginRequests();
        // pendingCount.value = pendingRequests.body.count || 0;
        // console.log("Pending Margin Requests fetched:", pendingRequests);
        // Fetch accepted margin requests
        const acceptedRequests = await $services.base.getAcceptedMarginRequests();
        // acceptedCount.value = acceptedRequests.body.count || 0;
        // console.log("Accepted Margin Requests fetched:", acceptedRequests);
        // Fetch rejected margin requests
        const rejectedRequests = await $services.base.getRejectedMarginRequests();
        // rejectedCount.value = rejectedRequests.body.count || 0;
        // console.log("Rejected Margin Requests fetched:", rejectedRequests);
        // Fetch all margin requests
        const allRequests = await $services.base.getAllMarginRequests();
        // allCount.value = allRequests.body.count || 0;
        // console.log("All Margin Requests fetched:", allRequests);

    } catch (error) {
        console.error("Error fetching profiles:", error);
        toast.error("Failed to fetch Records");
    }
});

const paginatedRows = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return allInvestors.value.slice(start, end).map((request, index) => ({
        values: [
            start + index + 1,
            `${request.user.profile?.first_name || ''} ${request.user.profile?.last_name || ''}`,
            request.chn,
            request.status,
        ],
        raw: request,
    }));
});

// Pagination logic
const currentPage = ref(1);
const pageSize = ref(10);
const totalCount = computed(() => allInvestors.value.length);
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
