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
    <!-- <div class="flex justify-between">
      <div class="mb-4">
        <h3 class="text-2xl font-semibold">Investor Details</h3>
        <span class="text-gray-600">CHN123454</span>
      </div>
      
    </div> -->

    <!-- Main Content -->
    <section class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-6">
        <!-- Investor Info -->
        <div class="bg-white shadow-custom-heavy p-5 rounded-[16px]">
          <div class="flex justify-between border-b border-gray-300">
            <h3
            class="font-ox font-bold text-black/85 text-[16px] mb-4  py-2"
          >
            Investor Information
          </h3>
          <p class="rounded-full h-fit py-1 px-3 bg-[#FFFAEB] text-[#B54708] font-medium">
        Pending
      </p>
          </div>
          <div class="grid grid-cols-2 font-ub font-medium gap-3 py-4">
            <div>
              <h3 class="text-[14px]">First Name</h3>
              <span class="text-[20px]">John</span>
            </div>
            <div>
              <h3 class="text-[14px]">Last Name</h3>
              <span class="text-[20px]">Doe</span>
            </div>
            <div>
              <h3 class="text-[14px]">Email Address</h3>
              <span class="text-[20px]">johndoe@gmail.com</span>
            </div>
            <div>
              <h3 class="text-[14px]">Last Name</h3>
              <span class="text-[20px]">CHN123456</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Status Timeline -->
      <!-- Status Timeline -->
      <div class="bg-white shadow-custom-heavy p-5 rounded-[16px] h-fit">
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
              <h4 class="font-medium text-[20px]">Created Investor</h4>
              <p class="text-gray-600 font-medium text-[14px]">
                Account credentials sent to investor's email, waiting for activation.
              </p>
              <p class="text-gray-500 text-[14px] mt-1">July 30th, 2025 at 05:25 PM</p>
            </div>
          </div>

          <!-- Under Review -->
          <div class="flex items-start space-x-3">
            <span class="w-[40px] h-[40px] mt-1 rounded-full bg-blue-300/50"></span>
            <div>
              <h4 class="font-medium text-[20px]">Pending Activation</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
