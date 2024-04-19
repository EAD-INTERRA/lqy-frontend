<template>
  <div class="sidebar h-[100%]">
    <div>
      <img src="~/assets/images/lqyLogo.svg" />
    </div>
    <div class="sidebarDiv">
      <div class="overview">
        <p class="overviewText text-ox text-left">Overview</p>
        <div class="dashboardDiv">
          <div v-for="(option, index) in options" :key="option.to">
            <NuxtLink
              :to="option.to"
              :class="{
                'flex flex-row p-2 font-bold text-ox text-white text-opacity-50 gap-2': true,
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
            <span class="rounded-full bg-red-900 px-2 h-fit items-center mr-4"
              >3</span
            >
          </NuxtLink>
          <NuxtLink to="/settings" class="flex flex-row sidebarLink text-ox" exact-active-class="text-theme-as border-l-[5px] border-theme-as rounded-b-[15px]">
            <img
              src="~/assets/images/setting.svg"
               />More
            Info
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

const route = useRoute();

const options = [
  {
    to: "/",
    src: "assets/images/dashboard-icon.svg",
    src2: "assets/images/dashboard-icon-active.svg",
    title: "Dashboard",
  },
  // {
  //  to: '/FI-profile',
  //  src: 'assets/images/FI-profile.svg',
  //  src2: 'assets/images/FI-profile.svg',
  //  title: 'FI profile'
  // },
  {
    to: "/FI-interest",
    src: "assets/images/notification-icon.svg",
    src2: "assets/images/notification-icon.svg",
    title: "FI interest",
  },
  /*{
      to: '/FI-fee',
      src: 'assets/images/setting.svg',
      src2: 'assets/images/setting.svg',
      title: 'FI revenue'
    },
    {
      to: '/Broker-fee',
      src: 'assets/images/FI-profile.svg',
      src2: 'assets/images/FI-profile.svg',
      title: 'Broker revenue'
    },*/
  {
    to: "/Security-Lending",
    src: "assets/images/notification-icon.svg",
    src2: "assets/images/notification-icon.svg",
    title: "Sec Lending",
  },
];

const isActive = (index: number): boolean => {
  return options[index] && route.path === options[index].to;
};

const authStore = useAuthStore(pinia);

const logout = () => {
    authStore.logout();

}
</script>
