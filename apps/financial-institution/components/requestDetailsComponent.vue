<template>
  <div class="mx-auto p-4">
    <!-- Back Button -->
    <button
      @click="$emit('go-back')"
      class="text-black text-[18px] hover:underline mb-4 inline-block flex h-fit"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.7144 10.6161H7.39019L10.3382 7.40652C10.461 7.2774 10.5589 7.12295 10.6263 6.95218C10.6937 6.78141 10.7291 6.59774 10.7306 6.41188C10.7321 6.22603 10.6996 6.04171 10.6349 5.86969C10.5703 5.69767 10.4748 5.54139 10.3541 5.40997C10.2334 5.27854 10.0898 5.17461 9.93185 5.10423C9.77385 5.03385 9.60456 4.99844 9.43385 5.00005C9.26314 5.00167 9.09444 5.04028 8.93759 5.11364C8.78073 5.187 8.63887 5.29363 8.52027 5.42732L3.37771 11.0262C3.25798 11.1562 3.16299 11.3107 3.09817 11.4807C3.03336 11.6508 3 11.8331 3 12.0172C3 12.2013 3.03336 12.3836 3.09817 12.5537C3.16299 12.7237 3.25798 12.8782 3.37771 13.0082L8.52027 18.6071C8.76275 18.8621 9.0875 19.0031 9.42459 18.9999C9.76169 18.9968 10.0841 18.8496 10.3225 18.59C10.5609 18.3305 10.6961 17.9794 10.699 17.6124C10.7019 17.2454 10.5724 16.8919 10.3382 16.6279L7.39019 13.4155H19.7144C20.0553 13.4155 20.3823 13.2681 20.6234 13.0056C20.8645 12.7431 21 12.387 21 12.0158C21 11.6446 20.8645 11.2885 20.6234 11.026C20.3823 10.7636 20.0553 10.6161 19.7144 10.6161Z"
          fill="#1F2A37"
        />
      </svg>
      Back
    </button>

    <!-- Header -->
    <div class="flex justify-between">
      <div class="flex">
        <div class="mb-4">
          <h3 class="text-2xl font-semibold">Request Details</h3>
          <span class="text-gray-600">CHN123454</span>
        </div>
        <div class="rounded-full h-fit py-1 px-3 bg-[#FFFAEB] text-[#B54708] font-medium">
          Pending
        </div>
      </div>
      <div class="flex gap-3">
        <button
          @click="openModal()"
          class="bg-[#10356D] w-[150px] shadow-lg text-white py-2 px-4 h-fit rounded-lg hover:bg-[#10356D]/90 transition flex items-center justify-center"
        >
          Approve
        </button>
        <button
          @click="openRejectModal()"
          class="bg-[#EE2E2E] w-[150px] shadow-lg text-white py-2 px-4 h-fit rounded-lg hover:bg-[#EE2E2E]/90 transition flex items-center justify-center"
        >
          Reject
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <section class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-6">
        <!-- Request Info -->
        <div class="bg-white shadow-lg p-5 rounded-[16px] border">
          <h3
            class="font-ox font-bold text-black/85 text-[16px] mb-4 border-b border-gray-300 py-2"
          >
            Request Information
          </h3>
          <div class="grid grid-cols-2 font-ub font-medium gap-3 py-4">
            <div>
              <h3 class="text-[12px]">CHN Number</h3>
              <span class="text-[20px]">CHN123456</span>
            </div>
            <div>
              <h3 class="text-[12px]">Amount Requested</h3>
              <span class="text-[20px]">&#8358; 42,000,000</span>
            </div>
            <div>
              <h3 class="text-[12px]">Tenure</h3>
              <span class="text-[20px]">36 Months</span>
            </div>
            <div>
              <h3 class="text-[12px]">Date Submitted</h3>
              <span class="text-[20px]">July 30th, 2025</span>
            </div>
          </div>
        </div>

        <!-- Purpose -->
        <div class="bg-white shadow-lg border p-5 rounded-[16px]">
          <h3
            class="font-ox font-bold text-black/85 text-[16px] mb-4 border-b border-gray-300 py-2"
          >
            Purpose of Loan
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iusto
            laboriosam blanditiis consequuntur nihil impedit delectus dolorem optio
            provident iure omnis, labore quia ratione ea nam voluptates dicta officiis.
            Quod.
          </p>
        </div>
      </div>

      <!-- Status Timeline -->
      <!-- Status Timeline -->
      <div class="bg-white shadow-lg border p-5 rounded-[16px] h-fit">
        <h3
          class="font-ox font-bold text-black/85 text-[16px] mb-4 border-b border-gray-300 py-2"
        >
          Status Timeline
        </h3>

        <div class="space-y-6">
          <!-- Request Submitted -->
          <div class="flex items-start space-x-3">
            <span class="w-[40px] h-[40px] mt-1 rounded-full bg-green-300/50"></span>
            <div>
              <h4 class="font-medium text-[20px]">Request Submitted</h4>
              <p class="text-gray-600 font-medium text-[14px]">
                Funding request has been submitted
              </p>
              <p class="text-gray-500 text-[14px] mt-1">July 30th, 2025 at 05:25 PM</p>
            </div>
          </div>

          <!-- Under Review -->
          <div class="flex items-start space-x-3">
            <span class="w-[40px] h-[40px] mt-1 rounded-full bg-blue-300/50"></span>
            <div>
              <h4 class="font-medium text-[20px]">Under Review</h4>
              <p class="text-gray-600 font-medium text-[14px]">
                Request is being reviewed by finance team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 space-y-6 relative">
        <!-- Close Button -->
        <div class="flex justify-between items-center">
          <h3 class="font-ox text-[14px] text-black/80">Approve Funding Request</h3>
          <button
            @click="showModal = false"
            class="absolute right-3 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <!-- Modal Content -->
        <div class="space-y-4">
          <!-- Dynamic Marginability Info Box -->
          <div class="bg-white shadow-lg p-5 rounded-[16px] border">
          <h3
            class="font-ox font-bold text-black/85 text-[14px] mb-4 border-b border-gray-300 py-2"
          >
            Request Information
          </h3>
          <div class="grid grid-cols-2 font-ub font-medium gap-3 py-4">
            <div>
              <h3 class="text-[10px]">CHN Number</h3>
              <span class="text-[20px]">CHN123456</span>
            </div>
            <div>
              <h3 class="text-[10px]">Amount Requested</h3>
              <span class="text-[20px]">&#8358; 42,000,000</span>
            </div>
            <div>
              <h3 class="text-[10px]">Tenure</h3>
              <span class="text-[20px]">36 Months</span>
            </div>
            <div>
              <h3 class="text-[10px]">Date Submitted</h3>
              <span class="text-[20px]">July 30th, 2025</span>
            </div>
          </div>
        </div>
        </div>
        <div class="space-y-4">
          <div>
              <label for="amount" class="block text-[14px] font-ub text-black"
                >Amount (NGN)</label
              >
              <input
                id="amount"
                type="number"
                placeholder="Enter amount"
                class="form-input w-full bg-gray-200 p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label for="purpose" class="block text-[14px] font-ub text-black"
                >Approval Note</label
              >
              <textarea
                id="purpose"
                rows="4"
                placeholder="Add Approval Note"
                class="form-input w-full bg-gray-200 p-2 border rounded-lg"
                required
              ></textarea>
            </div>
            </div>
            <div class="mt-6 flex flex-col sm:flex-row justify-end gap-3">
          
          <button
            @click="resetForm"
            type="button"
            class="shadow-lg text-[#10356D] py-2 px-[3%] rounded-md hover:bg-gray-200/90 border border-gray-400 transition flex items-center justify-center"
          >
            Cancel
          </button>
          <button
            @click="openSuccessModal('Approved')"
            type="submit"
            class="bg-[#10356D] shadow-lg text-white py-2 px-[5%] rounded-md hover:bg-[#10356D]/90 transition flex items-center justify-center"
          >
            Approve Request
          </button>
        </div>
      </div>
      <div>
        
      </div>
      
    </div>
     <div
      v-if="showRejectModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 space-y-6 relative">
        <!-- Close Button -->
        <div class="flex justify-between items-center">
          <h3 class="font-ox text-[14px] text-black/80">Reject Funding Request</h3>
          <button
            @click="showRejectModal = false"
            class="absolute right-3 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <!-- Modal Content -->
        <div class="space-y-4">
          <!-- Dynamic Marginability Info Box -->
          <div class="bg-white shadow-lg p-5 rounded-[16px] border">
          <h3
            class="font-ox font-bold text-black/85 text-[14px] mb-4 border-b border-gray-300 py-2"
          >
            Request Information
          </h3>
          <div class="grid grid-cols-2 font-ub font-medium gap-3 py-4">
            <div>
              <h3 class="text-[10px]">CHN Number</h3>
              <span class="text-[20px]">CHN123456</span>
            </div>
            <div>
              <h3 class="text-[10px]">Amount Requested</h3>
              <span class="text-[20px]">&#8358; 42,000,000</span>
            </div>
            <div>
              <h3 class="text-[10px]">Tenure</h3>
              <span class="text-[20px]">36 Months</span>
            </div>
            <div>
              <h3 class="text-[10px]">Date Submitted</h3>
              <span class="text-[20px]">July 30th, 2025</span>
            </div>
          </div>
          
        </div>
        <div class="space-y-4">
            <div>
              <label for="purpose" class="block text-[14px] font-ub text-black"
                >Rejection Note</label
              >
              <textarea
                id="purpose"
                rows="4"
                placeholder="Add any not about the rejection"
                class="form-input w-full bg-gray-200 p-2 border rounded-lg"
                required
              ></textarea>
            </div>
            </div>
        </div>
        <div class="mt-6 flex flex-col sm:flex-row justify-end gap-3">
          
          <button
            @click="resetForm"
            type="button"
            class="shadow-lg text-[#10356D] py-2 px-[3%] rounded-md hover:bg-gray-200/90 border border-gray-400 transition flex items-center justify-center"
          >
            Cancel
          </button>
          <button
            @click="openSuccessModal('Rejected')"
            type="submit"
            class="bg-[#EE2E2E] shadow-lg text-white py-2 px-[5%] rounded-md hover:bg-[#EE2E2E]/90 transition flex items-center justify-center"
          >
            Reject
          </button>
        </div>
      </div>
      <div>
        
      </div>
    </div>
    <div
      v-if="showSuccessModal"
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
        <p class="text-gray-500 text-sm mt-1">Request {{ status }}</p>
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
const status = ref('');
const showModal = ref(false);
const showRejectModal = ref(false);
const showSuccessModal = ref(false);

function openModal() {
    showModal.value = true;
}

function openRejectModal() {
    showRejectModal.value = true;
}

function openSuccessModal(state){
  status.value = state;

  showSuccessModal.value = true;
   showModal.value = false;
 showRejectModal.value = false;
}
</script>