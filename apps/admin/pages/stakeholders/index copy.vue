<template>
  <div class="p-6 space-y-6">
    <!-- Header Section -->
    <div class="space-y-2">
      <h1 class="text-2xl font-bold text-gray-900">Stakeholders</h1>
      <p class="text-gray-600">This is the list of all stakeholders on the system</p>
    </div>

    <!-- Tabs Section -->
    <div class="bg-gray-50 p-1 rounded-lg inline-flex space-x-1">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        :class="[
          'px-4 py-2 rounded-md text-sm font-medium transition-colors',
          activeTab === tab.key
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Main Content Section -->
    <section class="mb-4">
      <div class="bg-white shadow-lg p-5 lg:p-5 rounded-lg lg:rounded-2xl mb-2.5">
        <!-- Table Header with Filters -->
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="text-gray-700 font-medium">Stake Holders List</span>
          </div>
          
          <div class="flex items-center space-x-3">
            <!-- Status Filter -->
            <select
              v-model="statusFilter"
              class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Approved</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
            
            <!-- More Filters Button -->
            <button class="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 text-sm hover:bg-gray-50">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>More filters</span>
            </button>
            
            <!-- Search Input -->
            <div class="relative">
              <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search"
                class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
          </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 px-4 font-medium text-gray-600">Profile ID</th>
                <th class="text-left py-3 px-4 font-medium text-gray-600">Role</th>
                <th class="text-left py-3 px-4 font-medium text-gray-600">Company Name</th>
                <th class="text-left py-3 px-4 font-medium text-gray-600">Created At</th>
                <th class="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th class="text-left py-3 px-4 font-medium text-gray-600"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in paginatedRows"
                :key="index"
                class="border-b border-gray-100 hover:bg-gray-50"
              >
                <td class="py-4 px-4 font-medium">{{ item.profile_id }}</td>
                <td class="py-4 px-4">{{ item.type }}</td>
                <td class="py-4 px-4 text-blue-600">{{ item.company_name }}</td>
                <td class="py-4 px-4 text-gray-600">{{ formatDate(item.created_at) }}</td>
                <td class="py-4 px-4">
                  <span
                    :class="getStatusClass(item.user?.status)"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium capitalize"
                  >
                    {{ getStatusText(item.user?.status) }}
                  </span>
                </td>
                <td class="py-4 px-4">
                  <button
                    @click="openModal(item)"
                    class="border border-gray-200 text-gray-700 px-4 py-1 rounded-lg text-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-300"
                  >
                    View Profile
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <div class="text-sm text-gray-600">
            Showing {{ startItem }}-{{ endItem }} of {{ totalCount }}
          </div>
          
          <div class="flex items-center space-x-2">
            <button
              @click="setCurrentPage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="setCurrentPage(page)"
              :class="[
                'px-3 py-1 border rounded text-sm',
                page === currentPage
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-gray-300 hover:bg-gray-50'
              ]"
            >
              {{ page }}
            </button>
            
            <span v-if="totalPages > 5" class="px-2 text-gray-500">...</span>
            
            <button
              @click="setCurrentPage(totalPages)"
              v-if="totalPages > 5 && currentPage < totalPages - 2"
              class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50"
            >
              {{ totalPages }}
            </button>
            
            <button
              @click="setCurrentPage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>

        <!-- Modal -->
        <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          @click.self="showModal = false"
        >
          <div class="bg-white rounded-lg shadow-lg w-fit max-w-2xl p-6 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <!-- Close Button -->
            <button
              @click="showModal = false"
              class="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-xl"
            >
              ✕
            </button>

            <!-- Modal Content -->
            <div class="space-y-4 pr-8">
              <div class="grid grid-cols-2 font-medium gap-6 py-4">
                <div>
                  <h3 class="text-sm text-gray-600 mb-1">Company Name</h3>
                  <span class="text-lg">{{ selectedStakeholder?.company_name }}</span>
                </div>
                <div>
                  <h3 class="text-sm text-gray-600 mb-1">Business Type</h3>
                  <span class="text-lg">{{ selectedStakeholder?.type }}</span>
                </div>
                <div>
                  <h3 class="text-sm text-gray-600 mb-1">First Name</h3>
                  <span class="text-lg capitalize">{{ selectedStakeholder?.first_name }}</span>
                </div>
                <div>
                  <h3 class="text-sm text-gray-600 mb-1">Last Name</h3>
                  <span class="text-lg capitalize">{{ selectedStakeholder?.last_name }}</span>
                </div>
                <div>
                  <h3 class="text-sm text-gray-600 mb-1">Country</h3>
                  <span class="text-lg">{{ selectedStakeholder?.state?.country_code }}</span>
                </div>
                <div>
                  <h3 class="text-sm text-gray-600 mb-1">State</h3>
                  <span class="text-lg">{{ selectedStakeholder?.state?.name }}</span>
                </div>
                <div>
                  <h3 class="text-sm text-gray-600 mb-1">Town/City</h3>
                  <span class="text-lg">{{ selectedStakeholder?.city }}</span>
                </div>
                <div>
                  <h3 class="text-sm text-gray-600 mb-1">Email</h3>
                  <span class="text-lg">{{ selectedStakeholder?.email }}</span>
                </div>
              </div>
              
              <!-- Download File Section -->
              <div class="border rounded-md w-fit flex items-center justify-between bg-gray-100 px-3 py-2">
                <div class="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c0 .621-.504 1.125-1.125 1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <span class="text-gray-700">Download file</span>
                </div>
                <button 
                  class="hover:bg-gray-200 p-1 rounded transition ml-4"
                  @click="downloadFile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                  </svg>
                </button>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex justify-start gap-4 pt-4">
                <button 
                  @click="approve(selectedStakeholder?.user?.id, true)"
                  class="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed" 
                  :disabled="activeloading"
                >
                  <span v-if="activeloading">Approving...</span>
                  <span v-else>Approve</span>
                </button>
                <button 
                  @click="handleReject(selectedStakeholder?.user?.id, false)"
                  class="flex-1 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="loading"
                >
                  <span v-if="loading">Rejecting...</span>
                  <span v-else>Reject</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { StatusCode } from "../../helpers/statusCodes";

let toast = null;
if (process.client) {
  import("vue-toastification").then((pkg) => {
    const useToast = pkg.useToast;
    toast = useToast();
  });
}

const { $services } = useNuxtApp();

// Tab configuration
const tabs = [
  { key: 'all', label: 'All' },
  { key: 'broker', label: 'Broker' },
  { key: 'financial_institution', label: 'Financial Institution' },
  { key: 'cscs', label: 'CSCS' }
];

// Reactive data
const activeTab = ref('all');
const allRequests = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const loading = ref(false);
const activeloading = ref(false);
const showModal = ref(false);
const selectedStakeholder = ref(null);
const searchQuery = ref('');
const statusFilter = ref('');

// Computed properties
const filteredRequests = computed(() => {
  let filtered = allRequests.value;

  // Filter by active tab
  if (activeTab.value !== 'all') {
    filtered = filtered.filter(request => {
      const type = request.type?.toLowerCase();
      if (activeTab.value === 'financial_institution') {
        return type === 'financial institution' || type === 'financial_institution';
      }
      return type === activeTab.value;
    });
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(request =>
      request.profile_id?.toLowerCase().includes(query) ||
      request.company_name?.toLowerCase().includes(query) ||
      request.type?.toLowerCase().includes(query) ||
      request.first_name?.toLowerCase().includes(query) ||
      request.last_name?.toLowerCase().includes(query)
    );
  }

  // Filter by status
  if (statusFilter.value) {
    filtered = filtered.filter(request => {
      const status = request.user?.status?.toLowerCase();
      return status === statusFilter.value.toLowerCase();
    });
  }

  return filtered;
});

const totalCount = computed(() => filteredRequests.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() =>
  Math.min(currentPage.value * pageSize.value, totalCount.value)
);

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredRequests.value.slice(start, end);
});

const visiblePages = computed(() => {
  const pages = [];
  const start = Math.max(1, currentPage.value - 2);
  const end = Math.min(totalPages.value, start + 4);
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

// Methods
function openModal(request) {
  selectedStakeholder.value = request;
  showModal.value = true;
}

const downloadFile = () => {
  const link = document.createElement("a");
  link.href = "/path/to/your/file.pdf";
  link.download = "stakeholder-file.pdf";
  link.click();
};

function setCurrentPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

const formatDate = (dateString, locale = "en-UK", options = {
  year: "numeric",
  month: "short",
  day: "2-digit",
}) => {
  const date = new Date(dateString);
  const dateFormatter = new Intl.DateTimeFormat(locale, options);
  return dateFormatter.format(date);
};

const getStatusClass = (status) => {
  const statusLower = status?.toLowerCase();
  switch (statusLower) {
    case 'approved':
    case 'true':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-orange-100 text-orange-800';
    case 'rejected':
    case 'false':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusText = (status) => {
  if (status === true || status === 'true') return 'Approved';
  if (status === false || status === 'false') return 'Rejected';
  return status || 'Pending';
};

const approve = async (shareholderId, status) => {
  activeloading.value = true;
  const approveData = { status: status };

  try {
    const response = await $services.shareholder.approveShareholder(shareholderId, approveData);
    if (response.code === StatusCode.SUCCESS) {
      if (toast) toast.success("Stakeholder approved successfully");
      setTimeout(async () => {
        showModal.value = false;
        const res = await $services.shareholder.getShareholders();
        allRequests.value = res.body.records || [];
      }, 1000);
    }
  } catch (err) {
    console.log(err);
    if (toast) toast.error("Failed to approve stakeholder");
  } finally {
    activeloading.value = false;
  }
};

const handleReject = async (shareholderId, status) => {
  loading.value = true;
  const rejectData = { status: status };

  try {
    const response = await $services.shareholder.approveShareholder(shareholderId, rejectData);
    if (response.code === StatusCode.SUCCESS) {
      if (toast) toast.success("Stakeholder rejected successfully");
      setTimeout(async () => {
        showModal.value = false;
        const res = await $services.shareholder.getShareholders();
        allRequests.value = res.body.records || [];
      }, 1000);
    }
  } catch (err) {
    console.log(err);
    if (toast) toast.error("Failed to reject stakeholder");
  } finally {
    loading.value = false;
  }
};

// Reset to first page when tab changes
watch(activeTab, () => {
  currentPage.value = 1;
});

watch(searchQuery, () => {
  currentPage.value = 1;
});

// Lifecycle
onMounted(async () => {
  try {
    loading.value = true;
    const response = await $services.shareholder.getShareholders();
    allRequests.value = response.body.records || [];
  } catch (error) {
    console.log("Error fetching stakeholder", error);
    if (toast) toast.error("Failed to fetch profiles");
  } finally {
    loading.value = false;
  }
});
</script>