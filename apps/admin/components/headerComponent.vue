<template>
    <div class="flex hide">
        <!-- <sidebarComponent class="hidden" id="sidebar" /> -->
        <sidebarComponent class=" hide " />
        <div class="header flex gap-10 ">
            <!-- <div class=" " v-on:click="toggleMenu()" > -->
                <!-- <img src="~/assets/images/headerSetting-icon.svg"> -->
            <!-- </div> -->
            <div class="headerSearchBar  flex">
                <nuxt-link to="" class=""><img src="~/assets/images/search.svg"></nuxt-link>
                <p class="searchText text-ox">Search</p>
            </div>
            <div class=" flex gap-6">
                <nuxt-link to="" class=""><img src="~/assets/images/headerSetting-icon.svg"></nuxt-link>
                <nuxt-link to="" class=""><img src="~/assets/images/headerBell-icon.svg"></nuxt-link>
                <nuxt-link to="" class=""><img src="~/assets/images/logout.svg"></nuxt-link>
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts" setup>
 function toggleMenu(): void {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        if (sidebar.classList.contains("hidden")) {
            sidebar.classList.remove("hidden");
        } else {
            sidebar.classList.add("hidden");
        }
    }
}



  
  </script>