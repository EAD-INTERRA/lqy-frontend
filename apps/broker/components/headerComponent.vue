<template>
<div class="flex hide">
    <div class="header flex gap-4 ">
        <div class="relative ">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none border-r-1">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="search" id="search" class="block w-full ps-12 py-2 bg-gray-100 text-sm text-gray-900 border border-gray-300 rounded-[20px] bg-white focus:ring-gray-500 focus:border-gray-900" placeholder="Search" required>
        </div>
        <div class=" flex gap-6">
            <nuxt-link to="" class=""><img src="~/assets/images/headerSetting-icon.svg"></nuxt-link>
            <nuxt-link to="" class=""><img src="~/assets/images/headerBell-icon.svg"></nuxt-link>
            <nuxt-link to="" class=""><img src="~/assets/images/logout.svg"></nuxt-link>
        </div>
    </div>
</div>
</template>

  
<script lang="ts">
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
