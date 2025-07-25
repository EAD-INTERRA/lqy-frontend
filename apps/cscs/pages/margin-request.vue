<template>
  <div class="p-4 space-y-6">
    <section class="mb-4">
      <div class="text-xl text-[#FF0000] font-semibold mb-4">Margin Request</div>

      <div class="bg-white shadow-lg p-5 rounded-lg mb-4">
        <!-- Loading Spinner -->
        <div v-if="loading" class="flex justify-center items-center h-32">
          <svg class="animate-spin h-6 w-6 text-gray-500" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
        </div>

        <!-- Table -->
        <table v-else class="table-fixed w-full">
          <thead>
            <tr class="text-gray-500 font-ox text-base font-normal border-b border-black">
              <th class="w-20 py-2 hidden lg:table-cell text-left">S/N</th>
              <th class="w-60 py-2 text-left">Account Name</th>
              <th class="w-60 py-2 text-left">CHN Number</th>
              <th class="w-40 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-if="allRequests.length > 0"
              v-for="(allRequest, index) in allRequests"
              :key="allRequest.request_id"
              class="text-gray-700 font-ox text-base border-b"
            >
              <td class="hidden lg:table-cell text-left font-bold py-2">{{ index + 1 }}</td>
              <td class="text-left font-medium py-2">
                {{ allRequest.user.profile?.first_name }} {{ allRequest.user.profile?.last_name }}
              </td>
              <td class="text-left font-medium py-2">{{ allRequest.chn }}</td>
              <td class="text-left py-2">
                <button
                  @click="openModal(allRequest.request_id)"
                  class="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50"
                >
                  View
                </button>
              </td>
            </tr>

            <tr v-else>
              <td colspan="4" class="text-center py-6">
                <div class="flex flex-col items-center">
                  <div class="w-16 h-16 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-lg font-medium text-gray-900 mb-2">No request found</h3>
                  <p class="text-gray-500">There are no items to display at the moment.</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Modal -->
    <marginRequestModal
      v-if="showModal"
      :requestId="selectedRequestId"
      @close="showModal = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useToast } from 'vue-toastification';
import marginRequestModal from '../components/marginRequestModal.vue';

const toast = useToast();
const { $services } = useNuxtApp();

const allRequests = ref([]);
const allCount = ref('');
const loading = ref(true);
const showModal = ref(false);
const selectedRequestId = ref('');

onMounted(async () => {
  try {
    const response = await $services.base.getAllMarginRequests();
    allCount.value = response.body.count || 0;
    allRequests.value = response.body.rows || [];
  } catch (error) {
    console.error('Error fetching margin requests:', error);
    toast.error('Failed to fetch margin requests');
  } finally {
    loading.value = false;
  }
});

const openModal = (requestId: string) => {
    console.log('Opening modal for request ID:', requestId);
  selectedRequestId.value = requestId;
  showModal.value = true;
};
</script>