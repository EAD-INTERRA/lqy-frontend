<template>
  <div :class="[
    'lg:relative fixed top-0 left-0 h-screen lg:w-full w-[80%] bg-theme-sidebar text-white border-r border-gray-600 transition-transform duration-300 ease-in-out z-50',
    isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
  ]" @click.stop>
    <!-- Close button for mobile -->
    <button v-if="isSidebarOpen"
      class="flex md:hidden absolute top-1 mr-[-6px] right-4 p-2 rounded-full hover:bg-gray-200 focus:outline-none z-50"
      @click="$emit('close-sidebar')" aria-label="Close sidebar">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <!-- Logo -->
    <div class="sidebar  h-[100vh]">
      <div class="mt-5 md:mt-0">
        <img src="~/assets/images/lqyLogo.svg">
      </div>
      <div class="sidebarDiv">
        <div class="overview">
          <div class="dashboardDiv space-y-2">
            <!-- Overview -->
            <NuxtLink to="/"
              class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
              exact-active-class="text-theme-as  rounded-md"
              :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/' }">
              <img src="~/assets/images/overview-icon.svg" alt="" />
              Overview
            </NuxtLink>

            <!-- Investor -->
            <NuxtLink to="/investor"
              class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
              exact-active-class="text-theme-as  rounded-md"
              :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/investor' }">
              <img src="~/assets/images/investor-icon.svg" alt="" />
              Investor
            </NuxtLink>

            <!-- Margin Dropdown -->
            <div class="w-[250px]">
              <button type="button" @click="showMargin = !showMargin"
                class="flex flex-row w-full hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 rounded-md px-2 py-2 font-bold text-white w-full text-opacity-50 cursor-pointer focus:outline-none"
                :class="{ 'bg-[rgba(255,255,255,0.1)]': ['/margin-request', '/margin-check'].includes($route.path) }">
                <img src="~/assets/images/other-margin-icon.svg" alt="" />
                Margin
                <svg :class="['ml-auto transition-transform', showMargin ? 'rotate-90' : '']" width="16" height="16"
                  fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div v-if="showMargin" class=" pl-5 mt-2">
                <NuxtLink to="/margin-check"
                  class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 rounded-md px-2  py-2 font-normal text-white text-opacity-50 cursor-pointer"
                  exact-active-class="text-theme-as  rounded-md"
                  :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/margin-check' }">
                  Margin Status
                </NuxtLink>
                <NuxtLink to="/margin-request"
                  class="flex mt-2 flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                  exact-active-class="text-theme-as  rounded-md"
                  :class="{ 'bg-[mt-2 rgba(255,255,255,0.1)]': $route.path === '/margin-request' }">
                  Margin Request
                </NuxtLink>

              </div>
            </div>
            <NuxtLink to="/funding"
              class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
              exact-active-class="text-theme-as  rounded-md"
              :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/funding' }">
              <img src="/assets/images/funding.svg" alt="" />
              Funding
            </NuxtLink>
            <!-- History Dropdown -->
            <div class="w-[250px]">
              <button type="button" @click="showHistory = !showHistory"
                class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white w-full text-opacity-50 cursor-pointer focus:outline-none"
                :class="{ 'bg-[rgba(255,255,255,0.1)]': ['/trading-history', '/history'].includes($route.path) }">
                <img src="~/assets/images/history-icon.svg" alt="" />
                History
                <svg :class="['ml-auto transition-transform', showHistory ? 'rotate-90' : '']" width="16" height="16"
                  fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div v-if="showHistory" class="pl-5">
                <NuxtLink to="/trade-history"
                  class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                  exact-active-class="text-theme-as  rounded-md"
                  :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/trading-history' }">
                  <!-- <img src="~/assets/images/stakeholder-icon.svg" alt="" /> -->
                  Trading History
                </NuxtLink>
                <NuxtLink to="/transaction-history"
                  class="flex mt-2 flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                  exact-active-class="text-theme-as  rounded-md"
                  :class="{ 'mt-2 bg-[rgba(255,255,255,0.1)]': $route.path === '/transaction-history' }">
                  <!-- <img src="~/assets/images/stakeholder-icon.svg" alt="" /> -->
                  Transaction History
                </NuxtLink>
              </div>
            </div>

            <!-- Report -->
            <NuxtLink to="/"
              class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
              exact-active-class="text-theme-as  rounded-md"
              :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/' }">
              <img src="~/assets/images/report-icon.svg" alt="" />
              Report
            </NuxtLink>

            <!-- Settings -->
            <NuxtLink to="/settings"
              class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
              exact-active-class="text-theme-as  rounded-md"
              :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/settings' }">
              <img src="~/assets/images/settings-icon.svg" alt="" />
              Settings
            </NuxtLink>

            <!-- Log Out -->
            <button @click="handleLogout"
              class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
              exact-active-class="text-theme-as  rounded-md"
              :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/logout' }">
              <img src="~/assets/images/logout.svg" alt="" />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../../../packages/stores/authStore'

defineProps({
  isSidebarOpen: {
    type: Boolean,
    required: true
  }
})
const showMargin = ref(false);
const showHistory = ref(false);
const handleLogout = () => {
  localStorage.clear(); // Clear all local storage
  // Redirect to login or home page
  window.location.href = "https://lqy-auth.interranetworks.com/"; // Adjust the path as necessary
};
</script>

<style scoped>
.sidebar-link {
  @apply rounded-xl w-full flex gap-4 items-center text-white hover:bg-white/10 py-3 px-4 cursor-pointer;
}

.modal-link {
  @apply flex items-center gap-2 px-4 py-2 text-[16px] w-full rounded-md hover:bg-gray-200;
}
</style>