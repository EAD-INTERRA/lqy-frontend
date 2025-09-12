<template>
  <div class="sidebar  h-[100vh] w-[inherit]">
    <div>
      <img src="~/assets/images/lqyLogo.svg">
    </div>
    <div class="">
      <div class="overview">
        <div class="dashboardDiv space-y-2">
          <!-- Overview -->
          <NuxtLink to="/"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/' }">
            <img src="/assets/images/overview-icon.svg" alt="" />
            Overview
          </NuxtLink>

          <!-- Margin Dropdown -->
          <div class="w-[250px]">
            <button type="button" @click="showMargin = !showMargin"
              class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 rounded-md px-2 py-2 font-bold text-white w-full text-opacity-50 cursor-pointer focus:outline-none"
              :class="{ 'bg-[rgba(255,255,255,0.1)]': ['/finance/bank-interest-accrued', '/finance/management-fee-earned-by-broker'].includes($route.path) }">
              <img src="/assets/images/finance-icon.svg" alt="" />
              Finance
              <svg :class="['ml-auto transition-transform', showMargin ? 'rotate-90' : '']" width="16" height="16"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div v-if="showMargin" class=" pl-5 mt-2">
              <NuxtLink to="/finance/security-lending"
                class="flex mt-2 flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as  rounded-md"
                :class="{ 'bg-[mt-2 rgba(255,255,255,0.1)]': $route.path === '/finance/security-lending' }">
                Security Lending
              </NuxtLink>
              <NuxtLink to="/finance/management-fee-earned"
                class="flex mt-2 flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as  rounded-md"
                :class="{ 'bg-[mt-2 rgba(255,255,255,0.1)]': $route.path === '/finance/management-fee-earned' }">
                Management Fee Earned
              </NuxtLink>
              <NuxtLink to="/finance/maintainance-call"
                class="flex mt-2 flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as  rounded-md"
                :class="{ 'bg-[mt-2 rgba(255,255,255,0.1)]': $route.path === '/finance/maintainance-call' }">
                Maintainance Call
              </NuxtLink>

            </div>
          </div>
 
          <NuxtLink to="/interest-rate"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/interest-rate' }">
            <img src="/assets/images/profit.svg" alt="" />
            Profit List
          </NuxtLink>
          <NuxtLink to="/funding"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/funding' }">
            <img src="/assets/images/funding.svg" alt="" />
            Funding
          </NuxtLink>

          <div class="">
            <NuxtLink to="/"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/' }">
            <img src="/assets/images/notification.svg" alt="" />
            Notification 
          </NuxtLink>

          <!-- Settings -->
          <NuxtLink to="/settings"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/settings' }">
            <img src="/assets/images/settings.svg" alt="" />
            Settings
          </NuxtLink>
          </div>

          <!-- Log Out -->
          <button @click="handleLogout"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/logout' }">
            <img src="/assets/images/logout.svg" alt="" />
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