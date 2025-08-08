<template>
  <div class="sidebar  h-[100vh]">
    <div>
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
          <div>
            <button type="button" @click="showMargin = !showMargin"
              class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 rounded-md px-2 py-2 font-bold text-white w-full text-opacity-50 cursor-pointer focus:outline-none"
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
          <div>
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
</template>
<script setup>
const showMargin = ref(false);
const showHistory = ref(false);
const handleLogout = () => {
  localStorage.clear(); // Clear all local storage
  // Redirect to login or home page
  window.location.href = "https://lqy-auth.interranetworks.com/"; // Adjust the path as necessary
};
</script>