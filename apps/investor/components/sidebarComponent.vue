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
          <NuxtLink to="/trades"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/trades' }">
            <img src="~/assets/images/trade-icon.svg" alt="" />
            Trades
          </NuxtLink>
          <!-- Report -->
          <NuxtLink to="/portfolio"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md  text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
            exact-active-class="text-theme-as  rounded-md"
            :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === '/portfolio' }">
            <img src="~/assets/images/trade-icon.svg" alt="" />
            Portfolio
          </NuxtLink>
          <NuxtLink
          to=""
          title="Notifications"
          class="rounded-xl w-[250px] flex gap-4 items-center text-white hover:bg-white/10 py-3 px-4 cursor-pointer"
        >
          <img
            src="../assets/images/notification-icons.svg"
            alt="Notifications"
            class="w-5 h-5"
          />
          Notifications
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