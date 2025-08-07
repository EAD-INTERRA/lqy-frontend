<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />

    <div class="flex h-screen overflow-hidden">
      <!-- Sidebar -->
      <aside
        :class="['transition-all duration-300', showSidebar ? 'w-[250px]' : 'w-0']"
        class="bg-white border-r overflow-hidden"
      >
        <SidebarComponent v-if="showSidebar" />
      </aside>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
        <!-- Header -->
        <HeaderComponent class="relative z-10" @toggle-sidebar="toggleSidebar" />

        <!-- Page Content -->
        <main class="flex-1 overflow-y-auto px-5 pt-[60px] pb-4">
          <NuxtPage />
        </main>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";

const showSidebar = ref(true);

function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}
</script>
