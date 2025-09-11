<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />

    <div class="flex h-screen overflow-hidden">
      <!-- Sidebar -->
      <aside
        :class="['transition-all duration-300', showSidebar ? 'w-[15%]' : 'w-0']"
        class="bg-white border-r overflow-hidden"
      >
        <SidebarComponent v-if="showSidebar" />
      </aside>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col w-[85%]">
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

<script lang="ts" setup>
import { useAuthStore } from "stores/authStore";
import { createPinia } from "pinia";

const pinia = createPinia();
pinia.use(useAuthStore);
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore(pinia);

if (process.client) {
  if (authStore.login() == true) {
    router.push({
      path: route.path,
      query: {},
    });
    console.log("HEYYY");
  } else {
    authStore.checkAuth();
  }
}

const showSidebar = ref(true);

function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}
</script>
