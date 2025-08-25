<template>
  <div class="p-4 flex flex-col items-center  h-screen">
    <div class="text-xl text-[#FF0000] font-bold font-ox mb-4 text-left w-full">Margin Request</div>
    <form class="bg-white shadow-xl p-[50px] mt-[15%]  lg:p-10 rounded-lg w-[50%]   shadow-lg" @submit.prevent="submitMarginRequest">
      <div class="mb-4">
        <label for="chn" class="block text-[18px] font-ub text-[#00000] mb-1">
          CHN Number
        </label>
        <input
          id="chn"
          type="text"
          v-model="chn"
          placeholder="Enter customer's CHN number"
          maxLength="12"
          class="block w-full px-3 py-4 rounded-md shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm bg-black/10 mt-5 text-black placeholder-gray-400"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-[#10356D] mt-[30px] shadow-lg text-white py-4 px-4 rounded-md hover:bg-[#10356D]/90 transition flex items-center justify-center"
        :disabled="loading"
      >
        <span v-if="loading" class="animate-spin mr-2">
          <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
        </span>
        <span>{{ loading ? 'Requesting...' : 'Request Margin Activation' }}</span>
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let toast = null;
if (process.client) {
  import('vue-toastification').then(pkg => {
    const useToast = pkg.useToast;
    toast = useToast();
  });
}

const { $services } = useNuxtApp();
const loading = ref(false);
const chn = ref('');

const submitMarginRequest = async () => {
  loading.value = true;
  try {
    const response = await $services.base.margin_request(chn.value);
    console.log("response", response);
    if (response.message === 'SUCCESSFUL' || response.code === 200) {
      toast && toast.success('Margin request sent successfully!');
      chn.value = '';
    } else {
      toast && toast.error('Failed to send margin request: ' + (response.message || 'Unknown error'));
    }
  } catch (error: any) {
    toast && toast.error('An error occurred while sending the margin request.');
  } finally {
    loading.value = false;
  }
};
</script>