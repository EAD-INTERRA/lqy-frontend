<template>
  <div class="sidebar  h-[100vh]">
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

          <!-- Investor -->
          <NuxtLink to="/stakeholders"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/stakeholders' }">
            <img src="/assets/images/side-stakeholder-icon.svg" alt="" />
            Stakeholders
          </NuxtLink>

          <!-- Margin Dropdown -->
          <div class="w-[250px]">
            <button type="button" @click="showMargin = !showMargin"
              class="flex  justify-between flex-row  hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 rounded-md px-2 py-2 font-bold text-white w-full text-opacity-50 cursor-pointer focus:outline-none"
              :class="{ 'bg-[rgba(255,255,255,0.1)]': ['/finance/bank-interest-accrued', '/finance/management-fee-earned-by-broker'].includes($route.path) }">
              <img src="/assets/images/finance-icon.svg" alt="" />
              Finance
              <svg :class="['ml-auto transition-transform', showMargin ? 'rotate-90' : '']" width="16" height="16"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div v-if="showMargin" class=" pl-5 mt-2">
              <NuxtLink to="/finance/bank-interest-accrued"
                class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 rounded-md px-2  py-2 font-normal text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as  rounded-md"
                :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/bank-interest-accrued' }">
                Bank Interest Accrued
              </NuxtLink>
              <NuxtLink to="/finance/lending-interest-accrued"
                class="flex mt-2 flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as  rounded-md"
                :class="{ 'bg-[mt-2 rgba(255,255,255,0.1)]': $route.path === '/finance/lending-interest-accrued' }">
                Lending Interest Accrued
              </NuxtLink>
              <NuxtLink to="/finance/management-fee-earned-by-broker"
                class="flex mt-2 flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as  rounded-md"
                :class="{ 'bg-[mt-2 rgba(255,255,255,0.1)]': $route.path === '/finance/management-fee-earned-by-broker' }">
                Management Fee Earned By Broker
              </NuxtLink>
              <NuxtLink to="/finance/management-fee-earned-by-bank"
                class="flex mt-2 flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as  rounded-md"
                :class="{ 'bg-[mt-2 rgba(255,255,255,0.1)]': $route.path === '/finance/management-fee-earned-by-bank' }">
                Management Fee Earned By Bank
              </NuxtLink>
              <NuxtLink to="/finance/maintainance-call"
                class="flex mt-2 flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as  rounded-md"
                :class="{ 'bg-[mt-2 rgba(255,255,255,0.1)]': $route.path === '/finance/maintainance-call' }">
                Maintainance Call
              </NuxtLink>

            </div>
          </div>
 
          <NuxtLink to="/profit-rate"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/profit-rate' }">
            <img src="/assets/images/profit.svg" alt="" />
            Profit Rate
          </NuxtLink>
          
          <NuxtLink to="/margin-list"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/margin-list' }">
            <img src="/assets/images/margin-list.svg" alt="" />
            Margin List
          </NuxtLink>
          <!-- Report -->
          <div class="">
            <NuxtLink to=""
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '' }">
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