<template>
    <div class="min-h-screen  p-6">
        <!-- Header Section -->
        <div class="mb-6 flex items-center justify-between">
            <!-- Back Button and Title -->
            <div class="flex items-center gap-4">
                <NuxtLink to="/stakeholders" class="flex items-center text-black-600 hover:text-black-800">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                        </path>
                    </svg>
                    Back to Requests
                </NuxtLink>
            </div>
        </div>

        <!-- Title and Status -->
        <div class="mb-6">
            <div class="flex items-center gap-4 mb-2">
                <h1 class="text-2xl font-semibold text-black-900">Capital Asset LTD</h1>
                <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                    Approved
                </span>
            </div>
            <p class="text-black-500 text-sm">Profile ID: BRK1234</p>
        </div>

        <!-- Brokers Information Section -->
        <div class="bg-white rounded-lg shadow-md mb-8">
            <div class="px-6 py-4 ">
                <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-black-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h2 class="text-lg font-semibold text-black-900">{{ stakeholderType }} Information</h2>
                </div>
            </div>

            <div class="p-6">
                <div class="grid grid-cols-2 gap-x-8 gap-y-6">
                    <!-- <CHANGE> Added brokers information grid layout -->
                    <div>
                        <p class="text-sm text-black-500 mb-1">Profile ID</p>
                        <p class="font-semibold text-black-900">{{ profileId }}</p>
                    </div>

                    <div>
                        <p class="text-sm text-black-500 mb-1">Company Name</p>
                        <p class="font-semibold text-green-600">{{ companyName }}</p>
                    </div>

                    <div>
                        <p class="text-sm text-black-500 mb-1">Full Name</p>
                        <p class="font-semibold text-black-900">{{ fullName }}</p>
                    </div>

                    <div>
                        <p class="text-sm text-black-500 mb-1">Submitted</p>
                        <p class="font-semibold text-black-900">{{ formatDate(date) }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Investors Section -->
        <div v-if="stakeholderType === 'Broker'" class="bg-white rounded-lg shadow-md mb-[20px]">
            <div class="px-6 py-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-black-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                            </path>
                        </svg>
                        <h2 class="text-lg font-semibold text-black-900">Investors</h2>
                    </div>

                    <!-- <CHANGE> Added search functionality -->
                    <div class="relative">
                        <svg class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-black-400"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <input type="text" placeholder="Search" v-model="searchQuery"
                            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
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
                        <!-- <CHANGE> Updated table rows with new data structure -->
                        <tr v-for="(investor, index) in paginatedInvestors" :key="index" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap text-black-900">{{ investor.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-black-900">{{ investor.chn }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-black-900">{{ investor.associatedValue }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-black-900">{{ investor.marginLevel }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-black-900">{{ investor.securityValue }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <!-- <button 
                                    @click="viewInvestor(investor)"
                                    class="text-black-600 hover:text-black-800 px-3 py-1 border border-gray-300 rounded text-sm"
                                >
                                    View
                                </button> -->
                                <NuxtLink :to="`/stakeholders/portfolio-detail`"
                                    class="text-black-600 hover:text-black-800 px-3 py-1 border border-gray-300 rounded text-sm">
                                    View
                                </NuxtLink>
                            </td>
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
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const stakeholderType = route.query.type;
const profileId = route.query.profile_id;
const companyName = route.query.company;
const date = route.query.date;
const fullName = route.query.fullName;
import { ref, computed } from 'vue'

// <CHANGE> Added search functionality
const searchQuery = ref('')

const formatDate = (dateString, locale = "en-UK", options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
}) => {
    const date = new Date(dateString);
    const dateFormatter = new Intl.DateTimeFormat(locale, options);
    return dateFormatter.format(date);
};

// Table headers
const headers = [
    "Investor Name",
    "CHN Number",
    "Value of Associated Security",
    "Margin Lending Level",
    "Security Lending Value",
    "Actions"
]

// <CHANGE> Updated with dummy investor data matching the image
const allInvestors = ref([
    {
        name: "Oluchi Johnson",
        chn: "CHN12345",
        associatedValue: "$10,000",
        marginLevel: "$10,000",
        securityValue: "$10,000"
    },
    {
        name: "Jonnuel Doe",
        chn: "CHN12345",
        associatedValue: "$10,000",
        marginLevel: "$10,000",
        securityValue: "$10,000"
    },
    {
        name: "Jonnuel Doe",
        chn: "CHN12345",
        associatedValue: "$10,000",
        marginLevel: "$10,000",
        securityValue: "$10,000"
    }
])

// Pagination
const currentPage = ref(1)
const pageSize = ref(10)

const totalCount = computed(() => 300) // Sample count matching image
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value))
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1)
const endItem = computed(() => Math.min(currentPage.value * pageSize.value, totalCount.value))

// <CHANGE> Added filtered investors based on search
const filteredInvestors = computed(() => {
    if (!searchQuery.value) return allInvestors.value
    return allInvestors.value.filter(investor =>
        investor.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        investor.chn.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})

const paginatedInvestors = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return filteredInvestors.value.slice(start, end)
})

const visiblePages = computed(() => {
    const pages = []
    for (let i = 1; i <= Math.min(5, totalPages.value); i++) {
        pages.push(i)
    }
    return pages
})

function setCurrentPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}

// <CHANGE> Added view investor function
function viewInvestor(investor) {
    console.log('Viewing investor:', investor)
    // Navigate to investor detail page or open modal
}
</script>