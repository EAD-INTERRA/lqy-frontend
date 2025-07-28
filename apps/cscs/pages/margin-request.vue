<template>
    <div class="p-4 space-y-6">
        <section class="mb-4">
            <div class="text-xl text-[#FF0000] font-semibold mb-4">Margin Request</div>
            <div class="bg-white shadow-lg p-5 rounded-lg mb-4">
                <BaseTable :headers="headers" :rows="paginatedRows" :loading="loading" :showCheckbox="false">
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
                        <button @click="openModal(row.raw.request_id, `${row.raw.user.profile?.first_name || ''} ${row.raw.user.profile?.last_name || ''}`, row.raw.chn,
                            row.raw.status)" class="border border-gray-500 text-gray-500 px-4 py-1 rounded hover:bg-blue-50">
                            View
                        </button>
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
    "S/N",
    "Account Name",
    "CHN Number",
    "Action"
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
            start + index + 1,
            `${request.user.profile?.first_name || ''} ${request.user.profile?.last_name || ''}`,
            request.chn,
            "View"
        ],
        raw: request,
    }));
});

function setCurrentPage(page: number) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}

onMounted(async () => {
    try {
        const response = await $services.base.getAllMarginRequests();
        allRequests.value = response.body.rows || [];
    } catch (error) {
        console.error('Error fetching margin requests:', error);
        toast.error('Failed to fetch margin requests');
    } finally {
        loading.value = false;
    }
});

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