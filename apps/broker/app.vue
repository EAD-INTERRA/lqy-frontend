<template>
<div>
    <NuxtLayout >
        <div class="flex">
            <div class="">
                <sidebarComponent />
            </div>
           <div class="w-[100%]">
            <headerComponent class="relative" />
            <NuxtPage class="overflow-scroll h-[95vh] pb-3 "/>
           </div>
        </div>
    </NuxtLayout>
</div>
</template>
