<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-6 relative">
      <!-- Close Button -->
      <button @click="emit('close')" class="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
        ✕
      </button>

      <div class="space-y-2">
        <div class="flex justify-between">
          <span class="text-sm text-gray-500">Account Name:</span>
          <p class="text-base font-medium">{{ props.accountName }}</p>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-500">CHN No:</span>
          <p class="text-base font-medium">{{ props.chn }}</p>
        </div>

        <div class="flex justify-end gap-4 pt-4">

          <button @click="handleAccept(requestId)"
            class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" :disabled="approveloading"
            :class="approveloading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'">
            <template v-if="approveloading">
              <!-- <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg> -->
              <span>Saving...</span>
            </template>
            <template v-else>
              Approve
            </template>
          </button>
          <button @click="handleReject(props.requestId)"
            class="w-full px-4 py-2 border border-red-500 text-red-500 rounded hover:border border-red-600"
            :disabled="loading"
            :class="loading ? 'border border-red-400 cursor-not-allowed' : 'border border-red-500 hover:border border-red-600'">
            <template v-if="loading">
              <!-- <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg> -->
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
  try {
    const response = await $services.base.acceptMarginRequest(id);
    // console.log('Accept Response:', response);
    if (response.message === 'SUCCESSFUL' || response.code === 200) {
      toast.success('Margin request accepted successfully!');
      emit('close');
    } else {
      toast.error('Acceptance failed: ' + (response.message || 'Unknown error'));
    }
  } catch (error) {
    toast.error('Error accepting request');
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