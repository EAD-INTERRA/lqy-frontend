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
            <img src="~/assets/images/dashboard-icon.svg" alt="" />
            Overview
          </NuxtLink>
          <!-- Margin Dropdown -->
          <div>
            <button type="button" @click="showMargin = !showMargin"
              class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 rounded-md px-2 py-2 font-bold text-white w-full text-opacity-50 cursor-pointer focus:outline-none"
              :class="{ 'bg-[rgba(255,255,255,0.1)]': ['/margin-request', '/margin-check'].includes($route.path) }">
              <img src="~/assets/images/stakeholder-icon.svg" alt="" />
              Finance
              <svg :class="['ml-auto transition-transform', showMargin ? 'rotate-90' : '']" width="16" height="16"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div v-if="showMargin" class=" pl-5">
              <!-- <NuxtLink to="/history"
                class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 rounded-md px-2  py-2 font-normal text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as  rounded-md"
                :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/history' }">
                Margin Check
              </NuxtLink>
              <NuxtLink to="/margin-request"
                class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                exact-active-class="text-theme-as  rounded-md"
                :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/margin-request' }">
                Margin Request
              </NuxtLink> -->

            </div>
          </div>
          <!-- Investor -->
          <NuxtLink to="/"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/investor' }">
            <img src="~/assets/images/dashboard-icon.svg" alt="" />
            Broker
          </NuxtLink>

          <!-- Investor -->
          <NuxtLink to="/margin-account"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/investor' }">
            <img src="~/assets/images/dashboard-icon.svg" alt="" />
            Margin Account
          </NuxtLink>

          <!-- Investor -->
          <NuxtLink to="/margin-request"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/investor' }">
            <img src="~/assets/images/dashboard-icon.svg" alt="" />
            Margin Request
          </NuxtLink>



          <NuxtLink to="" class="flex flex-row sidebarLink text-ox h-fit">
            <img src="~/assets/images/notification-icon.svg" />Notification
            <span class="rounded-full bg-red-900 px-2 h-fit items-center mr-3">3</span>
          </NuxtLink>

          <!-- Settings -->
          <NuxtLink to="/settings"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/settings' }">
            <img src="~/assets/images/setting.svg" alt="" />
            Settings
          </NuxtLink>

          <!-- Log Out -->
          <NuxtLink to="/logout"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/logout' }">
            <img src="~/assets/images/logout.svg" alt="" />
            Log Out
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";

const showMargin = ref(false);
const showHistory = ref(false);
</script>