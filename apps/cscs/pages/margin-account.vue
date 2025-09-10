<template>
    <div class="p-4 space-y-6">
        <section class="mb-4">
            <div
                class=" bg-gray-300 text-red-500 bg-opacity-25 bolder w-fit  text-lg px-3 py-1 rounded-[5px] font-bold ">
                Margin Accounts</div>
            <div class="bg-white shadow-lg p-5 lg:p-5 rounded-lg lg:rounded-2xl mb-2.5">
                <BaseTable :headers="headers" :rows="paginatedRows" :loading="loading" :showCheckbox="false" class="">
                    <template #cell-0="{ row }">
                        <span>{{ row.values[0] }}</span>
                    </template>
                    <template #cell-1="{ row }">
                        <span class="capitalize font-semibold text-black">{{ row.values[1] }}</span>
                    </template>
                    <template #cell-2="{ row }" >
                        <span class="text-left font-semibold capitalize underline cursor-pointer text-blue-600">{{ row.values[2] }}</span>
                    </template>
                    <template #cell-3="{ row }">
                        <span v-if="row.values[3]?.toLowerCase() === 'accepted'"
                            class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-50  text-green-700  capitalize">
                            Approved
                        </span>
                        <!-- <span v-else-if="row.values[3]?.toLowerCase() === 'pending'"
                            class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-orange-300 text-white capitalize">
                            {{ row.values[3] }}
                        </span> -->
                        <span v-else-if="row.values[3]?.toLowerCase() === 'rejected'"
                            class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-red-50 text-red-700 capitalize">
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
const allRequests = ref([]);

const headers = [
    "S/N",
    "Account Name",
    "CHN Number",
    "Status",
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
    const filtered = allRequests.value.filter(
        req => req.status?.toLowerCase() !== 'pending'
    );
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return filtered.slice(start, end).map((request, index) => ({
        values: [
            start + index + 1,
            `${request.user.profile?.first_name || ''} ${request.user.profile?.last_name || ''}`,
            request.chn,
            request.status,
        ],
        raw: request,
    }));
});

// const paginatedRows = computed(() => {
//     const start = (currentPage.value - 1) * pageSize.value;
//     const end = start + pageSize.value;
//     return allRequests.value.slice(start, end).map((request, index) => ({
//         values: [
//             start + index + 1,
//             `${request.user.profile?.first_name || ''} ${request.user.profile?.last_name || ''}`,
//             request.chn,
//             request.status,
//         ],
//         raw: request,
//     }));
// });


function setCurrentPage(page: number) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}

onMounted(async () => {
    try {
        loading.value = true;
        const response = await $services.base.getAllMarginRequests();
        allRequests.value = response.body.rows || [];
    } catch (error) {
        console.error("Error fetching margin status:", error);
        toast.error("Failed to fetch margin status. Please try again later.");
    } finally {
        loading.value = false;
    }
});
</script>

<style scoped>
.table-fixed {
    table-layout: fixed;
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

button:not(:disabled):hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>