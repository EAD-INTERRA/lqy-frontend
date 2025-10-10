<template>
  <div class="sidebar h-[100vh]">
    <div>
      <img src="/assets/images/lqyLogo.svg" />
    </div>
    <div class="sidebarDiv">
      <div class="overview">
        <div class="dashboardDiv space-y-2">
          <NuxtLink to="/"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/' }">
            <img src="/assets/images/overview-icon.svg" alt="" />
            Overview
          </NuxtLink>
          <div>
            <button type="button" @click="toggleDropdown('finance')"
              class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer focus:outline-none"
              :class="{ 'bg-[rgba(255,255,255,0.1)]': ['/security-lending', '/FI-interest'].includes($route.path) }">
              <img src="/assets/images/finance-icon.svg" alt="" />
              Finance
              <svg :class="['ml-auto transition-transform', dropdowns.finance ? 'rotate-90' : '']" width="16"
                height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div v-if="dropdowns.finance" class="pl-5 mt-2 space-y-2">
              <NuxtLink to="/security-lending"
                class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as rounded-md"
                :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/security-lending' }">
                Security Lending
              </NuxtLink>
              <!-- <NuxtLink to="/FI-interest"
                class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as rounded-md"
                :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/FI-interest' }">
                Financial Interest Accrued
              </NuxtLink> -->
            </div>
          </div>
          <NuxtLink to="/broker"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/broker' }">
            <img src="/assets/images/broker-icon.svg" alt="" />
            Broker
          </NuxtLink>
          <NuxtLink to="/margin-account"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/margin-account' }">
            <img src="/assets/images/margin-icons.svg" alt="" />
            Margin Accounts
          </NuxtLink>
          <NuxtLink to="/margin-request"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/margin-request' }">
            <img src="/assets/images/margin-icons.svg" alt="" />
            Margin Request
          </NuxtLink>
          <NuxtLink to=""
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as rounded-md">
            <img src="/assets/images/notification-icons.svg" alt="" />
            Notification
            <span class="rounded-full bg-red-900 px-2 h-fit items-center ml-auto mr-3">0</span>
          </NuxtLink>
          <NuxtLink to="/settings"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/settings' }">
            <img src="/assets/images/setting.svg" alt="" />
            Settings
          </NuxtLink>
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

<script lang="ts" setup>
import { reactive } from 'vue'

const dropdowns = reactive({
  finance: false,
})

function toggleDropdown(key: string) {
  dropdowns[key] = !dropdowns[key]
}

const handleLogout = () => {
  localStorage.clear(); // Clear all local storage
  // Redirect to login or home page
  window.location.href = "https://lqy-auth.interranetworks.com/"; // Adjust the path as necessary
};
</script>