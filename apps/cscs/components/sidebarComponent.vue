<template>
  <div class="sidebar h-[100%]">
    <div>
      <img src="~/assets/images/lqyLogo.svg" />
    </div>
    <div class="sidebarDiv ">
      <div class="overview">
        <p class="overviewText text-ox text-left">Quick Access</p>
        <div class="dashboardDiv">
          <NuxtLink
            to="/"
            class="flex flex-row sidebarLink text-ox mr-9 "
            exact-active-class="text-theme-as border-l-[5px] border-theme-as rounded-b-[15px] rounded-t-[15px] ">
            <img src="~/assets/images/dashboard-icon.svg" />Dashboard
          </NuxtLink>
        </div>
      </div>
      <div class="overview">
        <p class="overviewText text-ox text-left">FI Group</p>
        <div class="dashboardDiv mr-[-1%]">
          <div v-for="(option, index) in options" :key="option.to">
            <NuxtLink
              :to="option.to"
              :class="{
                'flex flex-row p-2 font-bold text-ox text-white text-opacity-50 gap-2 mr-[-1%] cursor-pointer': true,
                'rounded-t-[15px]': isActive(index) && index === 0,
                'border-theme-as': isActive(index),
                'rounded-b-[15px]':
                  isActive(index) && index === options.length - 1,
              }"
              exact-active-class="text-theme-as border-l-[5px] border-theme-as mr-[-1%]">
              <img :src="isActive(index) ? option.src2 : option.src" alt="" />
              {{ option.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="overview">
        <p class="overviewText text-ox text-left">Broker Group</p>
        <div class="dashboardDiv mr-[-1%]">
          <NuxtLink
            to=""
            class="flex flex-row sidebarLink text-ox cursor-pointer"
            exact-active-class="text-theme-as border-l-[5px] border-theme-as rounded-b-[15px] rounded-t-[15px]">
            <img src="/assets/images/FI-profile.svg" />Broker revenue
          </NuxtLink>
        </div>
      </div>
      <div class="overview">
        <p class="overviewText text-ox text-left">Margin and security</p>
        <div class="dashboardDiv">
          <NuxtLink
            to="/Maintenance"
            class="flex flex-row sidebarLink text-ox h-fit mr-[-7%]"
            exact-active-class="text-theme-as border-l-[5px] border-theme-as  rounded-t-[15px]">
            <img src="~/assets/images/notification-icon.svg" />Maintenance call
          </NuxtLink>
          <NuxtLink
            to="/Security-Lending"
            class="flex flex-row sidebarLink text-ox"
            exact-active-class="text-theme-as border-l-[5px] border-theme-as rounded-b-[15px]">
            <img src="~/assets/images/setting.svg" /> Sec. lending interest
          </NuxtLink>
        </div>
      </div>
      <div class="overview">
        <p class="overviewText text-ox text-left">Account</p>
        <div class="dashboardDiv">
          <NuxtLink
            to=""
            class="flex flex-row sidebarLink text-ox cursor-pointer"
            exact-active-class="text-theme-as border-l-[5px] border-theme-as rounded-t-[15px]">
            <img src="~/assets/images/setting.svg" />More Info
          </NuxtLink>
          <NuxtLink to="" class="flex flex-row sidebarLink text-ox h-fit">
            <img src="~/assets/images/notification-icon.svg" />Notification
            <span class="rounded-full bg-red-900 px-2 h-fit items-center mr-4"
              >3</span
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();

const options = [
  {
    to: "",
    src: "assets/images/FI-profile.svg",
    src2: "assets/images/FI-profile.svg",
    title: "FI profile",
  },
  {
    to: "/FI-interest",
    src: "assets/images/notification-icon.svg",
    src2: "assets/images/notification-icon.svg",
    title: "FI interest accrued",
  },
  {
    to: "",
    src: "assets/images/setting.svg",
    src2: "assets/images/setting.svg",
    title: "FI fee revenue",
  }
];

const isActive = (index: number): boolean => {
  return options[index] && route.path === options[index].to;
};
</script>
