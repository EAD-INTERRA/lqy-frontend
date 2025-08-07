<template>
  <div class="mx-auto p-4">
    <button  @click="$emit('go-back')" class="text-black text-[18px] hover:underline mb-4 inline-block flex h-fit"
      ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7144 10.6161H7.39019L10.3382 7.40652C10.461 7.2774 10.5589 7.12295 10.6263 6.95218C10.6937 6.78141 10.7291 6.59774 10.7306 6.41188C10.7321 6.22603 10.6996 6.04171 10.6349 5.86969C10.5703 5.69767 10.4748 5.54139 10.3541 5.40997C10.2334 5.27854 10.0898 5.17461 9.93185 5.10423C9.77385 5.03385 9.60456 4.99844 9.43385 5.00005C9.26314 5.00167 9.09444 5.04028 8.93759 5.11364C8.78073 5.187 8.63887 5.29363 8.52027 5.42732L3.37771 11.0262C3.25798 11.1562 3.16299 11.3107 3.09817 11.4807C3.03336 11.6508 3 11.8331 3 12.0172C3 12.2013 3.03336 12.3836 3.09817 12.5537C3.16299 12.7237 3.25798 12.8782 3.37771 13.0082L8.52027 18.6071C8.76275 18.8621 9.0875 19.0031 9.42459 18.9999C9.76169 18.9968 10.0841 18.8496 10.3225 18.59C10.5609 18.3305 10.6961 17.9794 10.699 17.6124C10.7019 17.2454 10.5724 16.8919 10.3382 16.6279L7.39019 13.4155H19.7144C20.0553 13.4155 20.3823 13.2681 20.6234 13.0056C20.8645 12.7431 21 12.387 21 12.0158C21 11.6446 20.8645 11.2885 20.6234 11.026C20.3823 10.7636 20.0553 10.6161 19.7144 10.6161Z" fill="#1F2A37"/>
</svg>
 Back</button>

    <div class="mb-4">
      <h3 class="text-2xl font-semibold">New Funding Request</h3>
      <span class="text-gray-600">Submit a funding request on behalf of an investor</span>
    </div>

    <section class="mb-6">
      <div class="bg-white shadow-custom-heavy p-5 rounded-[16px]">
        <h3 class="font-ox text-black/85 text-[14px] mb-4">Request Details</h3>

        <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-6 font-ub">
          <!-- Left column -->
          <div class="space-y-4">
            <!-- CHN -->
            <div>
              <label for="chn" class="block text-[14px] font-ub text-black"
                >CHN Number</label
              >
              <input
                id="chn"
                v-model="form.chn"
                type="text"
                placeholder="Enter CHN number"
                class="form-input"
              />
              <p v-if="errors.chn" class="text-red-500 text-sm mt-1">{{ errors.chn }}</p>
            </div>

            <!-- Amount -->
            <div>
              <label for="amount" class="block text-[14px] font-ub text-black"
                >Amount (NGN)</label
              >
              <input
                id="amount"
                v-model="form.amount"
                type="number"
                placeholder="Enter amount"
                class="form-input"
              />
              <p v-if="errors.amount" class="text-red-500 text-sm mt-1">
                {{ errors.amount }}
              </p>
            </div>

            <!-- Tenure -->
            <div>
              <label for="tenure" class="block text-[14px] font-ub text-black"
                >Tenure (Months)</label
              >
              <select v-model="form.tenure" id="tenure" class="form-input">
                <option value="" disabled>Select tenure</option>
                <option v-for="n in [3, 6, 9, 12, 18, 24]" :key="n" :value="n">
                  {{ n }} months
                </option>
              </select>
              <p v-if="errors.tenure" class="text-red-500 text-sm mt-1">
                {{ errors.tenure }}
              </p>
            </div>
          </div>

          <!-- Right column -->
          <div class="space-y-4">
            <div>
              <label for="purpose" class="block text-[14px] font-ub text-black"
                >Purpose of Loan</label
              >
              <textarea
                id="purpose"
                v-model="form.purpose"
                rows="7"
                placeholder="Describe the purpose of the loan"
                class="form-input"
              ></textarea>
              <p v-if="errors.purpose" class="text-red-500 text-sm mt-1">
                {{ errors.purpose }}
              </p>
            </div>
          </div>
        </form>

        <!-- Actions -->
        <div class="mt-6 flex flex-col sm:flex-row justify-end gap-3">
          <button
            @click="submitForm"
            type="submit"
            class="bg-[#10356D] shadow-lg text-white py-2 px-[5%] rounded-md hover:bg-[#10356D]/90 transition flex items-center justify-center"
          >
            Submit Request
          </button>
          <button
            @click="resetForm"
            type="button"
            class="shadow-lg text-[#10356D] py-2 px-[3%] rounded-md hover:bg-gray-200/90 border border-gray-400 transition flex items-center justify-center"
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-6 shadow-lg w-[90%] max-w-sm text-center">
        <div class="flex items-center justify-center mb-4">
          <div class="bg-green-500 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 class="text-lg font-semibold text-gray-800">Request Sent</h2>
        <p class="text-gray-500 text-sm mt-1">Your funding request has been submitted.</p>
        <button
          @click="$emit('go-back')"
          class="mt-4 bg-[#10356D] text-white py-2 px-6 rounded hover:bg-[#10356D]/90"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const form = ref({
  chn: "",
  amount: "",
  tenure: "",
  purpose: "",
});

const errors = ref({});
const loading = ref(false);
const showModal = ref(false);

const resetForm = () => {
  form.value = {
    chn: "",
    amount: "",
    tenure: "",
    purpose: "",
  };
  errors.value = {};
};

const validateForm = () => {
  errors.value = {};

  if (!form.value.chn) errors.value.chn = "CHN number is required";
  if (!form.value.amount || isNaN(form.value.amount) || form.value.amount <= 0)
    errors.value.amount = "Valid amount is required";
  if (!form.value.tenure) errors.value.tenure = "Please select a tenure";
  if (!form.value.purpose || form.value.purpose.length < 10)
    errors.value.purpose = "Purpose must be at least 10 characters";

  return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
  if (!validateForm()) return;

  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    showModal.value = true; // Show success modal
    resetForm();
  }, 1500);
};
</script>

<style scoped>
.form-input {
  @apply block w-full px-3 py-3 rounded-md shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm bg-black/10 text-black placeholder-gray-400;
}
</style>
