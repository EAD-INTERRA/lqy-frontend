<template>
<div>
    <NuxtLayout >
        <NuxtLoadingIndicator />
        <div class="flex">
            <div class="">
                <sidebarComponent />
            </div>
           <div class="w-[100%]">
            <headerComponent class="relative" />
            <NuxtPage class="overflow-scroll h-[95vh] pb-3  pt-[50px] pl-[20px]"/>
           </div>
        </div>
    </NuxtLayout>
</div>
</template>
