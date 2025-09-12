<template>
  <div class="flex flex-col md:flex-row gap-[5%] p-4 mt-[50px] lg:mt-[10px] mb-5 mx-auto lg:ml-6">

    <!-- Profile Section -->
    <section class="w-full md:w-[35%]">
      <div class="flex">
        <div class="text-black font-ox font-bold py-2.5 pr-2">
          My Profile
        </div>
        <div class="rounded-full bg-green-500 w-[20px] h-[20px] my-auto mr-2"></div>
      </div>
      <div class="bg-theme-dg w-full h-fit rounded-[5px] mt-1 mb-3 py-[30px] ">
        <img class="mx-auto rounded-full w-[150px]" src="/assets/images/profileImage.svg" alt="profile image" />
        <div class="flex gap-1 text-lg font-bold justify-center">
          {{ userProfile?.first_name || 'First' }} {{ userProfile?.last_name || 'Last' }}
          <img src="/assets/images/tick.svg" />
        </div>
        <p class="text-sm text-center">
          {{ userProfile?.company_name || 'Company Name' }}
        </p>
        <div class="justify-center mt-5 md:justify-end flex mr-5">
          <button class="border border-solid border-black rounded-[10px] py-0 px-3">Edit</button>
        </div>
      </div>

      <!-- Personal Info -->
      <div class="flex">
        <div class="text-black font-ox font-bold py-2.5 pr-2">
          Personal Information
        </div>
        <div class="rounded-full bg-green-500 w-[20px] h-[20px] my-auto mr-2"></div>
      </div>
      <div class="bg-theme-dg w-full h-fit rounded-[5px] mt-1 py-[30px] ">
        <div class="flex flex-col gap-1">
          <div class="px-6">
            <label class="text-opacity-45 font-semibold">Firstname</label>
            <div class="text-lg font-bold">{{ userProfile?.first_name || '-' }}</div>
          </div>
          <div class="px-6">
            <label class="text-opacity-45 font-semibold">Lastname</label>
            <div class="text-lg font-bold">{{ userProfile?.last_name || '-' }}</div>
          </div>
          <div class="px-6">
            <label class="text-opacity-45 font-semibold">Email</label>
            <div class="text-sm font-bold text-blue-500">{{ userProfile?.email || '-' }}</div>
          </div>
          <div class="px-6">
            <label class="text-opacity-45 font-semibold">Phone</label>
            <div class="text-lg font-bold text-blue-500">{{ userProfile?.phone_number || '-' }}</div>
          </div>
        </div>
        <div class="justify-center mt-5 md:justify-end flex mr-5">
          <button class="border border-solid border-black rounded-[10px] py-0 px-3">Edit</button>
        </div>
      </div>
    </section>

    <!-- Address Section -->
    <section class="w-full md:w-[60%] h-fit mr-3">
      <div class="flex">
        <div class="text-black font-ox font-bold py-2.5 pr-2">
          Address
        </div>
        <div class="rounded-full bg-green-500 w-[20px] h-[20px] my-auto mr-2"></div>
      </div>
      <div class="bg-theme-dg w-full h-fit rounded-[5px] mt-1 py-[30px] ">
        <div class="flex flex-col gap-3">
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label class="text-opacity-45 font-semibold">Country</label>
            <div class="text-lg font-bold">{{ userProfile?.country?.name || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label class="text-opacity-45 font-semibold">State</label>
            <div class="text-lg font-bold">{{ userProfile?.state?.name || userProfile?.state_id || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label class="text-opacity-45 font-semibold">Town/City</label>
            <div class="text-lg font-bold">{{ userProfile?.city || '-' }}</div>
          </div>
        </div>
        <div class="justify-center mt-5 md:justify-end flex pr-6">
          <button class="border border-solid border-black rounded-[10px] py-0 px-3">Edit</button>
        </div>
      </div>

      <!-- Business Info -->
      <div class="flex">
        <div class="text-black font-ox font-bold py-2.5 pr-2">
          Business Information
        </div>
        <div class="rounded-full bg-green-500 w-[20px] h-[20px] my-auto mr-2"></div>
      </div>
      <div class="bg-theme-dg w-full h-fit rounded-[5px] mt-1 py-[30px] ">
        <div class="flex flex-col gap-3">
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label class="text-opacity-45 font-semibold">Business Type</label>
            <div class="text-lg font-bold">{{ userProfile?.type || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label class="text-opacity-45 font-semibold">Tax identification number</label>
            <div class="text-lg font-bold">{{ userProfile?.tax_id || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label class="text-opacity-45 font-semibold">License Number</label>
            <div class="text-lg font-bold">{{ userProfile?.license_number || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label class="text-opacity-45 font-semibold">Capital Adequacy</label>
            <div class="text-lg font-bold">{{ userProfile?.capital_adequacy || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label class="text-opacity-45 font-semibold">Networth</label>
            <div class="text-lg font-bold">{{ userProfile?.networth || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label class="text-opacity-45 font-semibold">Tolerance</label>
            <div class="text-lg font-bold">{{ userProfile?.tolerance || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-col md:grid-cols-2 text-center md:text-left">
            <label class="text-opacity-45 font-semibold">Preferred Asset Class</label>
            <div class="justify-center md:justify-start gap-3 md:gap-1 mt-2 md:mt-0 flex pr-0 md:pr-6">
              <button v-for="(asset, idx) in userProfile?.preferred_asset_class || []" :key="idx"
                class="border border-solid border-blue-500 bg-blue-200 font-semibold rounded-[10px] py-1 px-3">
                {{ asset }}
              </button>
            </div>
          </div>
        </div>
        <div class="justify-center mt-5 md:justify-end flex pr-0 md:pr-6">
          <button class="border border-solid border-black rounded-[10px] py-0 px-3">Edit</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const { $services } = useNuxtApp();

const userProfile = ref("");

const fetchUserProfile = async () => {
  try {
    const response = await $services.auth.getProfile();
    console.log('Fetched user profile:', response);
    userProfile.value = response.body;
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};

onMounted(() => {
  fetchUserProfile();
});
</script>
