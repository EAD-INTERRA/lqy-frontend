
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <div v-if="showLayout" class="flex flex-row w-full h-screen">
      <!-- Backdrop (visible on mobile when sidebar is open) -->
      <div v-if="isSidebarOpen" @click.self="closeSidebar"
        class="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"></div>

      <!-- Sidebar -->
      <!-- <div class="w-full md:w-[20%]"> -->
      <div class="">
        <SidebarComponent class="fixed top-0 left-0 z-10" :isSidebarOpen="isSidebarOpen" @close-sidebar="closeSidebar" />
      </div>

      <!-- Main Content -->
      <div class="flex-1 bg-theme-bg w-full lg:w-[80%] overflow-clip px-4">
        <HeaderComponent class="w-full" :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
        <NuxtPage class="w-full h-full mt-4" />
      </div>
    </div>

    <!-- No layout for [...all].vue (404) -->
    <div v-else class="w-full h-screen">
      <NuxtPage class="w-full h-full" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const isSidebarOpen = ref(false)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
const closeSidebar = () => {
  isSidebarOpen.value = false
}

const route = useRoute()
const showLayout = computed(() => route.name !== 'all') // Hide sidebar+header on [...all].vue
</script>
