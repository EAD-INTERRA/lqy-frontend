<template>
  <div class="flex h-screen bg-theme-sidebar text-gray-100">
    <!-- Sidebar -->
    <div class="h-full w-[260px] flex flex-col border-r border-gray-600">
      <!-- Logo Section -->
      <div class="py-6 px-4">
        <div class="flex items-center gap-2">
          <img
            src="/assets/images/resmas-logo.svg"
            alt="RESMAT logo"
            class="h-12 w-12"
          />
          <div>
            <h1 class="text-[20px] font-bold font-pop leading-tight">SaveMama</h1>
            <p class="text-[16px] font-pop">
              Emergency Care, <span class="font-bold">Anywhere.</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Menu Items (scrollable if overflow) -->
      <div
        class="flex-1 overflow-y-auto px-4 py-6 space-y-4 text-[16px] font-pop"
      >
        <NuxtLink
          to="/"
          title="Dashboard"
          class="rounded-xl w-full flex gap-4 items-center text-white hover:bg-white/10 py-3 px-4 cursor-pointer"
        >
          <img
            src="../assets/images/resmas-dashboard-icon.svg"
            alt="Dashboard"
            class="w-5 h-5"
          />
          Dashboard
        </NuxtLink>

        <NuxtLink
          to="/"
          title="Drivers"
          class="rounded-xl w-full flex gap-4 items-center text-white hover:bg-white/10 py-3 px-4 cursor-pointer"
        >
          <img
            src="../assets/images/resmas-drivers.svg"
            alt="Drivers"
            class="w-5 h-5"
          />
          Drivers
        </NuxtLink>
        <NuxtLink
          to="/payment"
          title="Users"
          class="rounded-xl w-full flex gap-4 items-center text-white hover:bg-white/10 py-3 px-4 cursor-pointer"
        >
          <img
            src="../assets/images/resmas-users.svg"
            alt="Users"
            class="w-5 h-5"
          />
          Payment & Claims
        </NuxtLink>
        <NuxtLink
          to="/users"
          title="Users"
          class="rounded-xl w-full flex gap-4 items-center text-white hover:bg-white/10 py-3 px-4 cursor-pointer"
        >
          <img
            src="../assets/images/resmas-users.svg"
            alt="Users"
            class="w-5 h-5"
          />
          Users
        </NuxtLink>

        <NuxtLink
          to="/"
          title="Facilities"
          class="rounded-xl w-full flex gap-4 items-center text-white hover:bg-white/10 py-3 px-4 cursor-pointer"
        >
          <img
            src="../assets/images/resmas-facilities.svg"
            alt="Facilities"
            class="w-5 h-5"
          />
          Facilities
        </NuxtLink>

        <NuxtLink
          to="/"
          title="Notification Logs"
          class="rounded-xl w-full flex gap-4 items-center text-white hover:bg-white/10 py-3 px-4 cursor-pointer"
        >
          <img
            src="../assets/images/resmas-notification-log.svg"
            alt="Notifications"
            class="w-5 h-5"
          />
          Notification Logs
        </NuxtLink>

        <NuxtLink
          to="/"
          title="Audit Trail"
          class="rounded-xl w-full flex gap-4 items-center text-white hover:bg-white/10 py-3 px-4 cursor-pointer"
        >
          <img
            src="../assets/images/resmas-audit-trail.svg"
            alt="Audit"
            class="w-5 h-5"
          />
          Audit Trail
        </NuxtLink>

        <NuxtLink
          to="/"
          title="Settings"
          class="rounded-xl w-full flex gap-4 items-center text-white hover:bg-white/10 py-3 px-4 cursor-pointer"
        >
          <img
            src="../assets/images/resmas-settings.svg"
            alt="Settings"
            class="w-5 h-5"
          />
          Settings
        </NuxtLink>

        <NuxtLink
          to="/"
          title="Help Center"
          class="rounded-xl w-full flex gap-4 items-center text-white hover:bg-white/10 py-3 px-4 cursor-pointer"
        >
          <img
            src="../assets/images/resmas-help.svg"
            alt="Help Center"
            class="w-5 h-5"
          />
          Help Center
        </NuxtLink>
      </div>

      <!-- user -->
      <div class="px-4 pb-6 pt-4 space-y-4 border-t border-gray-600">
        <NuxtLink
          to="/"
          title="Help Center"
          class="rounded-xl w-full flex gap-4 items-center text-white cursor-pointer"
        >
          <img
            src="../assets/images/resmas-userIcon.svg"
            alt="Help Center"
            class="w-8 h-8"
          />
          <div class="flex flex-col font-pop">
            <h1 class="font-semibold text-[16px]">James Iburi</h1>
            <p class="text-[16px] text-white text-[16px]">Administrator</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { createPinia } from "pinia";
import { useAuthStore } from "../../../packages/stores/authStore";

const pinia = createPinia();
const authStore = useAuthStore(pinia);

const logout = () => {
  authStore.logout();

  // localStorage.clear(); // Clears all local storage data
  // window.location.href = "http://localhost:3000"; // Redirects to localhost:3000
  // window.location.href = "https://dadin.interranetworks.com/login"; // Redirects to localhost:3000
};
</script>
