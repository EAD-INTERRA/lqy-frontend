<template>
  <div class="sidebar h-[100vh]">
    <div>
      <img src="~/assets/images/lqyLogo.svg" />
    </div>
    <div class="sidebarDiv">
      <div class="overview">
        <div class="dashboardDiv space-y-2">
          <template v-for="(item, index) in sidebarLinks" :key="index">
            <!-- Dropdown Menu -->
            <div v-if="item.children">
              <button
                type="button"
                @click="toggleDropdown(item.key)"
                class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer focus:outline-none"
                :class="{ 'bg-[rgba(255,255,255,0.1)]': item.children.some(child => child.to === $route.path) }"
              >
                <img :src="item.icon" alt="" />
                {{ item.label }}
                <svg
                  :class="['ml-auto transition-transform', dropdowns[item.key] ? 'rotate-90' : '']"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div v-if="dropdowns[item.key]" class="pl-5 mt-2 space-y-2">
                <NuxtLink
                  v-for="(child, idx) in item.children"
                  :key="idx"
                  :to="child.to"
                  class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-normal text-white text-opacity-50 cursor-pointer"
                  exact-active-class="text-theme-as rounded-md"
                  :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === child.to }"
                >
                  {{ child.label }}
                </NuxtLink>
              </div>
            </div>

            <!-- Single Link -->
            <NuxtLink
              v-else
              :to="item.to"
              class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
              exact-active-class="text-theme-as rounded-md"
              :class="{ 'bg-[rgba(255,255,255,0.1)]': $route.path === item.to }"
            >
              <img :src="item.icon" alt="" />
              {{ item.label }}
              <span v-if="item.badge" class="rounded-full bg-red-900 px-2 h-fit items-center ml-auto mr-3">
                {{ item.badge }}
              </span>
            </NuxtLink>
          </template>

          <!-- Log Out -->
          <button
            @click="handleLogout"
            class="flex flex-row w-[250px] hover:bg-[rgba(255,255,255,0.1)] rounded-md text-ox items-center gap-2 px-2 py-2 font-bold text-white text-opacity-50 cursor-pointer"
          >
            <img src="~/assets/images/logout.svg" alt="" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const dropdowns = reactive({
  finance: false,
})

function toggleDropdown(key: string) {
  dropdowns[key] = !dropdowns[key]
}

const sidebarLinks = [
  {
    label: 'Overview',
    to: '/',
    icon: '~/assets/images/overview-icon.svg',
  },
  {
    label: 'Finance',
    icon: '~/assets/images/finance-icon.svg',
    key: 'finance',
    children: [
      { label: 'Financial Interest Accrued', to: '/FI-interest' },
      { label: 'Security Lending', to: '/security-lending' },
    ],
  },
  {
    label: 'Broker',
    to: '/broker',
    icon: '~/assets/images/broker-icon.svg',
  },
  {
    label: 'Margin Status',
    to: '/margin-account',
    icon: '~/assets/images/margin-icons.svg',
  },
  {
    label: 'Margin Request',
    to: '/margin-request',
    icon: '~/assets/images/margin-icons.svg',
  },
  {
    label: 'Notification',
    to: '',
    icon: '~/assets/images/notification-icons.svg',
    badge: 3,
  },
  {
    label: 'Settings',
    to: '/settings',
    icon: '~/assets/images/setting.svg',
  },
]

const handleLogout = () => {
  localStorage.clear()
  window.location.href = 'https://lqy-auth.interranetworks.com/'
}
</script>
