<template>
    <div class="p-4 space-y-6">
        <section class="mb-4">
            <div
                class=" bg-gray-300 text-red-500 bg-opacity-25 bolder w-fit  text-lg px-3 py-1 rounded-[5px] font-bold ">
                <div>
                    <p>Portfolio Details </p>
                    <p>CHN234567</p>
                </div>
                <!-- <span v-if="row.values[3]?.toLowerCase() === 'pending'" -->
                <span
                    class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-orange-50  text-orange-700  capitalize">
                    Pending
                </span>
                <button
                    @click="openModal(row.raw.request_id, `${row.raw.user.profile?.first_name || ''} ${row.raw.user.profile?.last_name || ''}`, row.raw.chn, row.raw.status)"
                    class="border border-gray-500 text-gray-500 px-4 py-1 rounded hover:bg-blue-50">
                    Check Marginability
                </button>
            </div>

        </section>
        <section class="grid grid-cols-2 w-full gap-6 mb-4">
            <div class="bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <div>
                    <p class="font-ox text-ox-xs">Investors Name</p>
                    <p>Oluchi Johnson</p>
                </div>
                <div>
                    <p class="font-ox text-ox-xs">Cash Drawn</p>
                    <p>₦3,530,029</p>
                </div>
                <div>
                    <p class="font-ox text-ox-xs">CHN No</p>
                    <p>xxxxx123</p>
                </div>
                <div>
                    <p class="font-ox text-ox-xs">Acct No</p>
                    <p>123xxxxxxx</p>
                </div>
            </div>
            <div class=" bg-white shadow-lg flex gap-6 rounded-[12px] w-full px-[30px] py-[16px]">
                <div>
                    <p class="font-ox text-ox-xs">VAS Sec.</p>
                    <p>₦4,210,765</p>
                </div>
                <div>
                    <p class="font-ox text-ox-xs">ML Value</p>
                    <p>₦4,210,765</p>
                </div>
                <div>
                    <p class="font-ox text-ox-xs">Interest on Margin</p>
                    <p>xxxx</p>
                </div>
                <div>
                    <p class="font-ox text-ox-xs">Interest Due from SL</p>
                    <p>Nxx</p>
                </div>
            </div>
        </section>

        <section class="mb-4">
            <div class="bg-white shadow-lg p-5 rounded-lg mb-4">
                <BaseTable :headers="headers" :rows="paginatedRows" :loading="loading" :showCheckbox="false">
                    <template #cell-0="{ row }">
                        <span>{{ row.values[0] }}</span>
                    </template>
                    <template #cell-1="{ row }">
                        <span class="text-left font-semibold capitalize underline cursor-pointer text-blue-600">{{
                            row.values[1] }}</span>
                    </template>
                </BaseTable>
                <BasePagination :currentPage="currentPage" :totalPages="totalPages" :startItem="startItem"
                    :endItem="endItem" :totalCount="totalCount" @update:page="setCurrentPage" />
            </div>
        </section>
        <!-- Modal -->
        <marginRequestModal v-if="showModal" :requestId="selectedRequestId" :accountName="selectedRequestName"
            :chn="selectedRequestChn" :status="selectedRequestStatus" @close="showModal = false" />
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useToast } from 'vue-toastification';
import marginRequestModal from '../components/marginRequestModal.vue';
import BaseTable from '../../../packages/ui/components/BaseTable.vue';
import BasePagination from '../../../packages/ui/components/BasePagination.vue';

const toast = useToast();
const { $services } = useNuxtApp();

const allRequests = ref([]);
const loading = ref(true);
const showModal = ref(false);

// Table headers
const headers = [
    "Symbol",
    "Balance",
    "Pending",
    "Current Price",
    "Value",
    "ML Value",
    "SL Value"
];

// Pagination logic
const currentPage = ref(1);
const pageSize = ref(10);

const totalCount = computed(() => allRequests.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() =>
    Math.min(currentPage.value * pageSize.value, totalCount.value)
);

const paginatedRows = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return allRequests.value.slice(start, end).map((request, index) => ({
        values: [
            "TNC",
            "131,300",
            request.chn,
            "384",
            "758,039",
            "3,495,294.90",
            "728,495.48",
        ],
        raw: request,
    }));
});

function setCurrentPage(page: number) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}

// onMounted(async () => {
//     try {
//         const response = await $services.base.getAllMarginRequests();
//         allRequests.value = response.body.rows || [];
//     } catch (error) {
//         console.error('Error fetching margin requests:', error);
//         toast.error('Failed to fetch margin requests');
//     } finally {
//         loading.value = false;
//     }
// });



const selectedRequestId = ref('');
const selectedRequestChn = ref('');
const selectedRequestName = ref('');
const selectedRequestStatus = ref('');

const openModal = (requestId: string, accountName: string, chn: string, status: string) => {
    selectedRequestId.value = requestId;
    selectedRequestName.value = accountName;
    selectedRequestChn.value = chn;
    selectedRequestStatus.value = status;
    showModal.value = true;
};
</script>