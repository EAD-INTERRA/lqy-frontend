<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 relative">
      <!--  Updated header with proper title and close button styling -->
      <div class="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 class="text-lg font-medium text-gray-900">Marginability</h2>
        <button @click="emit('close')" class="text-gray-400 hover:text-gray-600 text-xl">
          ✕
        </button>
      </div>

      <div class="p-6 space-y-6">
        <!--  Added green success alert section -->
        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 class="text-green-800 font-medium mb-2">This account is marginable.</h3>
          <p class="text-green-700 text-sm">
            Based on the current ML Value and total Value, the maintenance limit is <strong>50%</strong>, which
            qualifies the account for margin trading.
          </p>
        </div>

        <!--  Updated Information section with proper 2x2 grid layout -->
        <div class="border border-gray-200 rounded-lg p-4">
          <h3 class="text-gray-700 font-medium mb-4">Information</h3>
          <div class="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <div class="text-sm text-gray-500 mb-1">Investor Name</div>
              <div class="font-medium text-gray-900">{{ props.accountName }}</div>
            </div>
            <div>
              <div class="text-sm text-gray-500 mb-1">VAS Sec.</div>
              <div class="font-medium text-gray-900">₦42,000,000</div>
            </div>
            <div>
              <div class="text-sm text-gray-500 mb-1">CHN Number</div>
              <div class="font-medium text-gray-900">{{ props.chn }}</div>
            </div>
            <div>
              <div class="text-sm text-gray-500 mb-1">ML Value</div>
              <div class="font-medium text-gray-900">₦42,000,000</div>
            </div>
          </div>
        </div>

        <!--  Added note textarea section -->
        <div>
          <label class="block text-sm text-gray-700 mb-2">Note (other reasons, if any)</label>
          <textarea
            class="w-full h-24 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder=""></textarea>
        </div>

        <!--  Updated button layout and styling to match design -->
        <div class="flex gap-4 pt-4">
          <button @click="handleReject(props.requestId)"
            class="flex-1 px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 font-medium" :disabled="loading"
            :class="loading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'">
            <template v-if="loading">
              <span>Rejecting...</span>
            </template>
            <template v-else>
              Decline Request
            </template>
          </button>

          <button @click="handleAccept(requestId)"
            class="flex-1 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
            :disabled="approveloading"
            :class="approveloading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'">
            <template v-if="approveloading">
              <span>Saving...</span>
            </template>
            <template v-else>
              Approve Request
            </template>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const { $services } = useNuxtApp();


const props = defineProps({
  requestId: { type: String, required: true },
  accountName: { type: String, required: true },
  chn: { type: String, required: true },
  status: { type: String, required: false, default: '' }
});

const emit = defineEmits(['close']);

const requestDetails = ref(null);
// const loading = ref(true);
const loading = ref(false);
const approveLoading = ref(false);


const handleAccept = async (id: string) => {
  approveLoading.value = true;
  // setTimeout{
  //   ApprovalSuccessModal
  // }
  try {
    console.log("approving...")
    const response = await $services.base.acceptMarginRequest(id);
    // console.log('Accept Response:', response);
    if (response.message === 'SUCCESSFUL' || response.code === 200) {
      toast.success('Margin request accepted successfully!');
      emit('close');
    } else {
      // toast.error('Acceptance failed: ' + (response.message || 'Unknown error'));
    }
  } catch (error) {
    console.log("error", error.body)
    // toast.error(error.body || 'Error accepting request');
  } finally {
    approveLoading.value = false;
  }
};

const handleReject = async (id: string) => {
  loading.value = true;
  try {
    const response = await $services.base.rejectMarginRequest(id);
    if (response.message === 'SUCCESSFUL' || response.code === 200) {
      toast.success('Margin request rejected successfully!');
      emit('close');
    } else {
      toast.error('Rejection failed: ' + (response.message || 'Unknown error'));
    }
  } catch (error) {
    toast.error('Error rejecting request');
  } finally {
    loading.value = false;
  }
};
</script>