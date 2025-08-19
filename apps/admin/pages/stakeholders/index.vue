<template>
  <div class="p-4 space-y-6">
    <section class="mb-4">
      <div class="bg-white shadow-lg p-5 lg:p-5 rounded-lg lg:rounded-2xl mb-2.5">
        <BaseTable
          :headers="headers"
          :rows="paginatedRows"
          :loading="loading"
          :showCheckbox="false"
          class="!font-ox !font-bold"
        >
          <template #cell-0="{ row }">
            <span>{{ row.values[0] }}</span>
          </template>
          <template #cell-1="{ row }">
            <span>{{ row.values[1] }}</span>
          </template>
          <template #cell-2="{ row }">
            <span class="text-[#155DFC]">{{ row.values[2] }}</span>
          </template>
          <template #cell-3="{ row }">
            <span>{{ formatDate(row.values[3]) }}</span>
          </template>
          <template #cell-4="{ row }">
            <span
              v-if="row.values[4] == true"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#027A48]/20 text-[#027A48] capitalize"
            >
              {{ row.values[4] }}
            </span>

            <span
              v-else-if="row.values[4] == false"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-500/20 text-orange-500 capitalize"
            >
              {{ row.values[4] }}
            </span>

            <span
              v-else-if="row.values[4]?.toLowerCase() === 'rejected'"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#B42318]/20 text-[#B42318] capitalize"
            >
              {{ row.values[4] }}
            </span>
          </template>
          <template #cell-5="{ row }">
            <button
              @click="openModal(row.raw)"
              class="border border-[#000000]/10 text-black px-4 py-1 rounded-lg font-ox text-14 transition-transform duration-200 ease-in-out hover:bg-gray-50 hover:scale-105"
            >
              View
            </button>
          </template>
        </BaseTable>

        <BasePagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          :startItem="startItem"
          :endItem="endItem"
          :totalCount="totalCount"
          @update:page="setCurrentPage"
        />

        <!-- Modal -->
        <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            class="bg-white rounded-lg shadow-lg w-fit p-6 space-y-6 relative"
          >
            <!-- Close Button -->
            <div class="flex justify-between items-center">
              <button
                @click="showModal = false"
                class="absolute right-3 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <!-- Modal Content -->
            <div class="space-y-4">
                <div class="grid grid-cols-2 font-ub font-medium gap-3 py-4">
              <div>
                <h3 class="text-[14px]">Company Name</h3>
                <span class="text-[20px]">{{selectedStakeholder.company_name}}</span>
              </div>
              <div>
                <h3 class="text-[14px]">Business Type</h3>
                <span class="text-[20px]">{{selectedStakeholder.type}}</span>
              </div>
              <div>
                <h3 class="text-[14px]">First Name</h3>
                <span class="text-[20px] capitalize">{{selectedStakeholder.first_name}}</span>
              </div>
              <div>
                <h3 class="text-[14px]">Last Name</h3>
                <span class="text-[20px] capitalize">{{selectedStakeholder.last_name}}</span>
              </div>
              <div>
                <h3 class="text-[14px]">Country</h3>
                <span class="text-[20px]">{{selectedStakeholder?.state.country_code}}</span>
              </div>
              <div>
                <h3 class="text-[14px]">State</h3>
                <span class="text-[20px]">{{selectedStakeholder?.state.name}}</span>
              </div>
              <div>
                <h3 class="text-[14px]">Town/City</h3>
                <span class="text-[20px]">{{selectedStakeholder.city}}</span>
              </div>
              <div>
                <h3 class="text-[14px]">Email</h3>
                <span class="text-[20px]">{{selectedStakeholder.email}}</span>
              </div>
           
            </div>
               <div class="border rounded-md w-fit flex items-center justify-between bg-gray-100 px-3 py-2">
    <!-- File icon -->
    <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           stroke-width="1.5" 
           stroke="currentColor" 
           class="w-6 h-6 text-gray-600">
        <path stroke-linecap="round" stroke-linejoin="round" 
          d="M12 4.5v15m6-6-6 6-6-6" />
      </svg>
      <span class="text-gray-700">Download file</span>
    </div>

    <!-- File size + download button -->
    <div class="flex items-center space-x-3 ml-4">
      <!-- <span class="text-gray-500 text-sm">(2mb)</span> -->
      <button 
        class="hover:bg-gray-200 p-1 rounded transition"
        @click="downloadFile"
      >
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24" 
             stroke-width="2" 
             stroke="currentColor" 
             class="w-5 h-5 text-gray-600">
          <path stroke-linecap="round" stroke-linejoin="round" 
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
        </svg>
      </button>
    </div>
  </div>
              <div class="flex justify-start gap-4 pt-4">
              <button @click="approve(selectedStakeholder.user.id, true )"
                class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" 
                :disabled="activeloading"
                :class="activeloading ? 'border border-blue-400 cursor-not-allowed' : 'border border-blue-500 hover:border border-blue-600'">
                <template v-if="activeloading">
                  <span>Approving...</span>
                </template>
                <template v-else>
                  Approve
                </template>
              </button>
              <button @click="handleReject(selectedStakeholder.user.id, false)"
                class="w-full px-4 py-2 border border-red-500 text-red-500 rounded hover:border border-red-600"
                :disabled="loading"
                :class="loading ? 'border border-red-400 cursor-not-allowed' : 'border border-red-500 hover:border border-red-600'">
                <template v-if="loading">
                  <span>Rejecting...</span>
                </template>
                <template v-else>
                  Reject
                </template>
              </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End Modal -->
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { StatusCode } from "../../helpers/statusCodes"
import BaseTable from "../../../packages/ui/components/BaseTable.vue";
import BasePagination from "../../../packages/ui/components/BasePagination.vue";

let toast = null;
if (process.client) {
  import("vue-toastification").then((pkg) => {
    const useToast = pkg.useToast;
    toast = useToast();
  });
}

const { $services } = useNuxtApp();

const headers = ["S/N", "Profile ID", "Role", "Created At", "Status", " "];
const allRequests = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const loading = ref(false);
const activeloading = ref(false);
const showModal = ref(false);
const selectedStakeholder = ref<any>(null);

const totalCount = computed(() => allRequests.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() =>
  Math.min(currentPage.value * pageSize.value, totalCount.value)
);

function openModal(request: any) {
  selectedStakeholder.value = request;
  console.log("NWEWE",selectedStakeholder.value)
  showModal.value = true;
}
const downloadFile = () => {
  // Replace with your file URL
  const link = document.createElement("a")
  link.href = "/path/to/your/file.pdf"
  link.download = "myfile.pdf"
  link.click()
}

function setCurrentPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allRequests.value.slice(start, end).map((request, index) => ({
    values: [
      start + index + 1,
      `${request.profile_id}`,
      request.type,
      request.created_at,
      `${request.user.status}`,
      null,
    ],
    raw: request,
  }));
});

// const sh =  $services.stakeholder.getShareholders();
// console.log(sh)
onMounted(async () => {
  try {
    // loading.value = true;
    console.log("WHOOO");
    const response = await $services.shareholder.getShareholders();
    console.log(response);
    allRequests.value = response.body.records || [];
  } catch (error) {
    console.log("Error fetching stakeholder", error);
    if (toast) toast.error("Failed to fetch profiles");
  } finally {
    loading.value = false;
  }
});

const formatDate = (
  dateString: string,
  locale = "en-UK",
  options = {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
  }
): string => {
  const date = new Date(dateString);
  const dateFormatter = new Intl.DateTimeFormat(locale, options);
  return dateFormatter.format(date);
};

// let stakeholders: Ref<Shareholder[]> = ref([]);

const approve = async (shareholderId, status) => {
  activeloading.value = true;
  const approveData = {
    status: status,
  };

  try {
    const response = await $services.shareholder.approveShareholder(
      shareholderId,
      approveData
    );
    if (response.code === StatusCode.SUCCESS) {
      toast.success("SUCCESS");
      setTimeout(async () => {
        showModal.value = false;
      const res = await $services.shareholder.getShareholders();
      allRequests.value = res.body.records || [];
     }, 5000);
      
    }
  } catch (err) {
    console.log(err);
  }
};
</script>
