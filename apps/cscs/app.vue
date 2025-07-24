<template>
<div>
    <NuxtLayout >
        <div class="flex">
            <div class="">
                <sidebarComponent />
            </div>
           <div class="w-[100%]">
            <headerComponent class="relative" />
            <NuxtPage class="overflow-scroll h-[95vh] pb-3 pt-[50px] pl-[20px] "/>
           </div>
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
      console.log("HEYYY");
      
    }
    else{
    authStore.checkAuth();}
}


</script>
