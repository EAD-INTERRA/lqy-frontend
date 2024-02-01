<template>
<div>
    <NuxtLayout class="flex flex-col">
        
        <div class="flex">
            <sidebarComponent class="w-[15%]"/>
           <div class="w-[85%]">
            <headerComponent />
            <NuxtPage />
           </div>
        </div>
    </NuxtLayout>
</div>
</template>
