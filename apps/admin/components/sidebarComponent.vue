<template>
  <div class="flex">
    <div class="flex justify-end lg:hidden bg-red-500 w-full z-50">
      <button @click="step = !step" class="text-blue-500">close</button>
    </div>
    <div class="sidebar h-[100vh]" v-if="step">
      <div class="hidden lg:block">
        <img src="~/assets/images/lqyLogo.svg" />
      </div>
      <div class="sidebarDiv lg:mt-0 mt-[50px]">
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
              <span class="rounded-full bg-red-900 px-2 h-fit items-center"
                >3</span
              ></NuxtLink
            >
            <NuxtLink
              to="/settings"
              class="flex flex-row sidebarLink text-ox"
              exact-active-class="text-theme-as border-l-[5px] border-theme-as rounded-b-[15px]"
              ><img src="assets/images/setting.svg" />Settings   
            </NuxtLink>
            <!-- <NuxtLink to="" class="flex flex-row sidebarLink text-ox"
              ><img src="~/assets/images/logout.svg" />Log Out</NuxtLink
            > -->
          </div>
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
    to: "/",
    src: "assets/images/dashboard-icon.svg",
    src2: "assets/images/dashboard-icon-active.svg",
    title: "Dashboard",
  },
  {
    to: "/stakeholders",
    src: "assets/images/stakeholder-icon.svg",
    src2: "assets/images/stakeholder-icon.svg",
    title: "Stakeholders",
  },
  {
    to: "/financial",
    src: "assets/images/simple-icons_webmoney.svg",
    src2: "assets/images/simple-icons_webmoney.svg",
    title: "Financial Institution",
  },
  {
    to: "/broker",
    src: "assets/images/simple-icons_iobroker.svg",
    src2: "assets/images/simple-icons_iobroker.svg",
    title: "Broker",
  },
  {
    to: "/cscs",
    src: "assets/images/css-icon.svg",
    src2: "assets/images/css-icon.svg",
    title: "CSCS",
  },
  {
    to: "/interest-rate",
    src: "assets/images/interest-icon.svg",
    src2: "assets/images/interest-icon.svg",
    title: "Interest Rate",
  },
  {
    to: "/margin-list",
    src: "assets/images/margin-icon.svg",
    src2: "assets/images/margin-icon.svg",
    title: "Margin list",
  },
  /*{
    to: "",
    src: "assets/images/margin-icon.svg",
    src2: "assets/images/margin-icon.svg",
    title: "Create Stakeholders",
  },*/
];

const step = ref(true);

const isActive = (index: number): boolean => {
  return options[index] && route.path === options[index].to;
};
</script>
