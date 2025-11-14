<template>
    <div class="min-h-screen bg-gray-50 p-6">
        <!-- Header Section -->
        <div class="mb-6">
            <!-- Back Button -->
            <button type="button" @click="$router.back()" class="flex items-center text-gray-600 mb-4 hover:text-gray-800">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back
            </button>

            <!-- Title and Actions -->
            <p class="font-semibold text-gray-900">{{ accountName }}</p>

        </div>

        <!-- Information Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Left Card -->
            <div class="bg-white rounded-lg flex flex-col gap-4 shadow-sm border border-gray-200 p-6">
                <div class="flex justify-between w-full">
                    <p class="text-sm text-gray-500 mb-1">Investors Name</p>
                    <p class="font-semibold text-gray-900">{{ accountName }}</p>
                </div>

                <div class="flex justify-between w-full">
                    <p class="text-sm text-gray-500 mb-1">Cash Drawn</p>
                    <p class="font-semibold text-gray-900">3,530,029</p>
                </div>

                <div class="flex justify-between w-full">
                    <p class="text-sm text-gray-500 mb-1">CHN No</p>
                    <p class="font-semibold text-gray-900">{{ chn }}</p>
                </div>

                <div class="flex justify-between w-full">
                    <p class="text-sm text-gray-500 mb-1">Acct No</p>
                    <p class="font-semibold text-gray-900">123xxxxxxx</p>
                </div>

            </div>
            <div class="bg-white rounded-lg flex flex-col gap-4 shadow-sm border border-gray-200 p-6">

                <div class="flex justify-between w-full">
                    <p class="text-sm text-gray-500 mb-1">VAS Sec.</p>
                    <p class="font-semibold text-gray-900">₦4,210,765</p>
                </div>

                <div class="flex justify-between w-full">
                    <p class="text-sm text-gray-500 mb-1">ML Value</p>
                    <p class="font-semibold text-gray-900">₦4,210,765</p>
                </div>

                <div class="flex justify-between w-full">
                    <p class="text-sm text-gray-500 mb-1">Interest on Margin</p>
                    <p class="font-semibold text-gray-900">xxxxx</p>
                </div>

                <div class="flex justify-between w-full">
                    <p class="text-sm text-gray-500 mb-1">Interest Due from SL</p>
                    <p class="font-semibold text-gray-900">NXXX</p>
                </div>
            </div>
        </div>

        <!-- Portfolio Table -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-[20px]">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Investors Portfolio List</h2>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full ">
                    <thead class="bg-gray-50">
                        <tr>
                            <th v-for="header in headers" :key="header"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {{ header }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="(row, index) in paginatedRows" :key="index" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="text-blue-600 font-medium cursor-pointer hover:text-blue-800">
                                    {{ row.values[0] }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">{{ row.values[1] }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">{{ row.values[2] }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">{{ row.values[3] }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">{{ row.values[4] }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">{{ row.values[5] }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900">{{ row.values[6] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="px-6 py-4 border-t border-gray-200 ">
                <div class="flex items-center justify-between">
                    <div class="text-sm text-gray-500">
                        Showing {{ startItem }}-{{ endItem }} of {{ totalCount }}
                    </div>
                    <div class="flex items-center space-x-2">
                        <button @click="setCurrentPage(currentPage - 1)" :disabled="currentPage === 1"
                            class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                            Previous
                        </button>

                        <button v-for="page in Math.min(5, totalPages)" :key="page" @click="setCurrentPage(page)"
                            :class="[
                                'px-3 py-1 text-sm border rounded',
                                currentPage === page
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'border-gray-300 hover:bg-gray-50'
                            ]">
                            {{ page }}
                        </button>

                        <span v-if="totalPages > 5" class="px-2 text-gray-500">...</span>

                        <button v-if="totalPages > 5" @click="setCurrentPage(totalPages)" :class="[
                            'px-3 py-1 text-sm border rounded',
                            currentPage === totalPages
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'border-gray-300 hover:bg-gray-50'
                        ]">
                            {{ totalPages }}
                        </button>

                        <button @click="setCurrentPage(currentPage + 1)" :disabled="currentPage === totalPages"
                            class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <marginRequestModal v-if="showModal" :requestId="requestId" :accountName="accountName" :chn="chn"
            :status="status" @close="showModal = false" />



    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();
const requestId = computed(() => route.query.request_id);

const accountName = computed(() => route.query.account_name);
const chn = computed(() => route.query.chn);
const status = computed(() => route.query.status);

const showModal = ref(false)
const selectedRequestId = ref('')
const selectedRequestChn = ref('')
const selectedRequestName = ref('')
const selectedRequestStatus = ref('')

// Table headers
const headers = [
    "Symbol",
    "Balance",
    "Pending",
    "Current Price",
    "Value",
    "ML Value",
    "SL Value"
]

// Sample data
const allRequests = ref([
    {
        request_id: 'REQ12345',
        chn: 'CHN234567',
        status: 'Pending',
        user: {
            profile: {
                first_name: 'Oluchi',
                last_name: 'Johnson'
            }
        }
    }
])

// Pagination
const currentPage = ref(1)
const pageSize = ref(10)

const totalCount = computed(() => 3) // Sample count
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value))
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1)
const endItem = computed(() => Math.min(currentPage.value * pageSize.value, totalCount.value))

const paginatedRows = computed(() => [
    { values: ["TNC", "131,300", "0", "384", "758,039", "3,495,294.90", "728,495.48"] },
    { values: ["SPD", "131,300", "0", "384", "758,039", "3,495,294.90", "728,495.48"] },
    { values: ["AIICO", "131,300", "0", "", "758,039", "3,495,294.90", "728,495.48"] }
])

function setCurrentPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}

const openModal = (requestId, accountName, chn, status) => {
    selectedRequestId.value = requestId
    selectedRequestName.value = accountName
    selectedRequestChn.value = chn
    selectedRequestStatus.value = status
    showModal.value = true
}
</script>