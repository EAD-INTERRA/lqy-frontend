<template>
    <div class="min-h-screen  p-6">
        <!-- Header Section -->
        <div class="mb-6 flex flex-col gap-4 items-left">
            <!-- Back Button -->
            <button type="button" @click="$router.back()" class="flex items-center text-black-600 hover:text-black-800">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back
            </button>

            <!-- Title and CHN -->
            <div class="flex flex-col">
                <h1 class="text-2xl font-semibold text-black-900">Portfolio Details</h1>
                <p class="text-black-500 text-sm">CHN123456</p>
            </div>
        </div>

        <!-- <CHANGE> Combined information card with 2x4 grid layout -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <div class="grid grid-cols-2 gap-x-16 gap-y-6">
                <!-- Left Column -->
                <div class="flex justify-between">
                    <p class="text-sm text-black-500">Investors Name</p>
                    <p class="font-semibold text-black-900">Oluchi Johnson</p>
                </div>

                <div class="flex justify-between">
                    <p class="text-sm text-black-500">VAS Sec.</p>
                    <p class="font-semibold text-black-900">₦4,210,765</p>
                </div>

                <div class="flex justify-between">
                    <p class="text-sm text-black-500">Cash Drawn</p>
                    <p class="font-semibold text-black-900">3,530,029</p>
                </div>

                <div class="flex justify-between">
                    <p class="text-sm text-black-500">ML Value</p>
                    <p class="font-semibold text-black-900">₦4,210,765</p>
                </div>

                <div class="flex justify-between">
                    <p class="text-sm text-black-500">CHN No</p>
                    <p class="font-semibold text-black-900">xxxxx123</p>
                </div>

                <div class="flex justify-between">
                    <p class="text-sm text-black-500">Interest on Margin</p>
                    <p class="font-semibold text-black-900">xxxxx</p>
                </div>

                <div class="flex justify-between">
                    <p class="text-sm text-black-500">Acct No</p>
                    <p class="font-semibold text-black-900">123xxxxxxx</p>
                </div>

                <div class="flex justify-between">
                    <p class="text-sm text-black-500">Interest Due from SL</p>
                    <p class="font-semibold text-black-900">NXXX</p>
                </div>
            </div>
        </div>

        <!-- <CHANGE> Assets Table with search functionality -->
        <div class="bg-white rounded-lg shadow-md mb-[20px]">
            <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-black-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                        </path>
                    </svg>
                    <h2 class="text-lg font-semibold text-black-900">Assets</h2>
                </div>

                <!-- Search Bar -->
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-black-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input v-model="searchQuery" type="text" placeholder="Search"
                        class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64">
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th v-for="header in headers" :key="header"
                                class="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                                {{ header }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="(row, index) in paginatedRows" :key="index" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="text-black-900 font-medium">
                                    {{ row.values[0] }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-black-900">{{ row.values[1] }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-black-900">{{ row.values[2] }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-black-900">{{ row.values[3] }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-black-900">{{ row.values[4] }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-black-900">{{ row.values[5] }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-black-900">{{ row.values[6] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="px-6 py-4 border-t border-gray-200">
                <div class="flex items-center justify-between">
                    <div class="text-sm text-black-500">
                        Showing {{ startItem }}-{{ endItem }} of {{ totalCount }}
                    </div>
                    <div class="flex items-center space-x-2">
                        <button @click="setCurrentPage(currentPage - 1)" :disabled="currentPage === 1"
                            class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                            Previous
                        </button>

                        <button v-for="page in visiblePages" :key="page" @click="setCurrentPage(page)" :class="[
                            'px-3 py-1 text-sm border rounded',
                            currentPage === page
                                ? 'bg-[#2E66E3] text-white border-[#2E66E3]'
                                : 'border-gray-300 hover:bg-gray-50'
                        ]">
                            {{ page }}
                        </button>

                        <span v-if="totalPages > 5" class="px-2 text-black-500">...</span>

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
const searchQuery = ref('')

// <CHANGE> Updated table headers to match the image
const headers = [
    "Symbol",
    "Balance",
    "Pending",
    "Current Price",
    "Value",
    "ML Value",
    "SL Value"
]

// Pagination
const currentPage = ref(1)
const pageSize = ref(10)

const totalCount = computed(() => 300) // <CHANGE> Updated to match "1-10 of 300"
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value))
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1)
const endItem = computed(() => Math.min(currentPage.value * pageSize.value, totalCount.value))

// <CHANGE> Updated sample data to match the image with TNC, SPD, AAPL stocks
const paginatedRows = computed(() => [
    { values: ["TNC", "$10,000", "0", "$8.3", "$10,000", "$10,000", "$10,000"] },
    { values: ["SPD", "$10,000", "4", "$10.1", "$10,000", "$10,000", "$10,000"] },
    { values: ["AAPL", "$10,000", "0", "$4.21", "$10,000", "$10,000", "$10,000"] }
])

// <CHANGE> Added visible pages computation for better pagination display
const visiblePages = computed(() => {
    const pages = []
    const start = Math.max(1, currentPage.value - 2)
    const end = Math.min(totalPages.value, start + 4)

    for (let i = start; i <= end; i++) {
        pages.push(i)
    }
    return pages
})

function setCurrentPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}

const openModal = (requestId, accountName, chn, status) => {
    showModal.value = true
}
</script>