<template>
  <div class="sidebar h-[100%]">
    <div>
      <img src="~/assets/images/lqyLogo.svg" />
    </div>
    <div class="sidebarDiv">
      <div class="overview">
        <p class="overviewText text-ox text-left">Overview</p>
        <div class="dashboardDiv space-y-4 pr-12">
          <div v-for="(option, index) in options" :key="option.to">
            <NuxtLink
              :to="option.to"
              :class="{
                'flex flex-row p-2 font-bold text-ox text-white text-opacity-50 gap-2 cursor-pointer': true,
                'rounded-t-[15px]': isActive(index) && index === 0,
                'border-theme-as': isActive(index),
                'rounded-b-[15px]':
                  isActive(index) && index === options.length - 1,
              }"
              exact-active-class="text-theme-as border-l-[5px] border-theme-as">
              <img :src="isActive(index) ? option.src2 : option.src" alt="" />
              {{ option.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="overview">
        <p class="overviewText text-ox text-left">Account</p>
        <div class="dashboardDiv">
          <NuxtLink to="" class="flex flex-row sidebarLink text-ox h-fit">
            <img src="~/assets/images/notification-icon.svg" />Notification
            <span class="rounded-full bg-red-900 px-2 h-fit items-center mr-3"
              >3</span
            >
          </NuxtLink>
          <NuxtLink
            to="/settings"
            class="flex flex-row sidebarLink text-ox"
            exact-active-class="text-theme-as border-l-[5px] border-theme-as ">
            <img src="~/assets/images/setting.svg" />Settings
          </NuxtLink>
          <NuxtLink to="" class="flex flex-row sidebarLink text-ox "  @click="logout">
            <img src="~/assets/images/logout.svg" />Log Out
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import {
    useAuthStore
} from 'stores/authStore';

import {
    createPinia
} from 'pinia';

const pinia = createPinia();
pinia.use(useAuthStore);
const authStore = useAuthStore(pinia);
const route = useRoute();

const logout = () => {
    authStore.logout();
}

const options = [
  {
    to: "/",
    src: "assets/images/dashboard-icon.svg",
    src2: "assets/images/dashboard-icon-active.svg",
    title: "Dashboard",
  },
  
    {
      to: '',
      src: 'assets/images/stakeholder-icon.svg',
      src2: 'assets/images/stakeholder-icon.svg',
      title: 'SRRA'
    } 
];

const isActive = (index: number): boolean => {
  return options[index] && route.path === options[index].to;
};

</script>
