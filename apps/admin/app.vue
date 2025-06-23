<template>
<div>
    <NuxtLayout class="flex">
        <sidebarComponent />
        <div>
            <headerComponent />
            <NuxtPage />
        </div>
    </NuxtLayout>
</div>
</template>
  
<script lang="ts" setup>
import {
    useAuthStore
} from 'stores/authStore';
import {
    createPinia
} from 'pinia';

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
    //   window.location.reload();
    }
    else{
    authStore.checkAuth();}
}


</script>
