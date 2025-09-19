<template>
  <div class="flex justify-between h-fit bg-white shadow-sm p-2 gap-4 w-[100%]">
    <div class="hidden md:block relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none border-r-1">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input type="search" id="search"
        class="block w-full ps-12 py-2 bg-gray-100 text-sm text-gray-900 border border-gray-300 rounded-[20px] bg-white focus:ring-gray-500 focus:border-gray-900"
        placeholder="Search" required />
    </div>

    <div class="flex md:hidden items-center gap-4">
      <!-- Sidebar Toggle Button (visible on small screens) -->
      <button @click="emit('toggle-sidebar')" class="lg:hidden text-black focus:outline-none">
        <svg v-if="!isSidebarOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h1 class="text-[22px] font-pop font-semibold text-black whitespace-nowrap">
        {{ currentPageTitle }}
      </h1>
    </div>
    <div class="flex gap-6">
      <nuxt-link to="" class=""><img src="~/assets/images/headerSetting-icon.svg" /></nuxt-link>
      <nuxt-link to="" class=""><img src="~/assets/images/headerBell-icon.svg" /></nuxt-link>
      <nuxt-link to="" class=""><img src="~/assets/images/logout.svg" /></nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  isSidebarOpen: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['toggle-sidebar'])

</script>
