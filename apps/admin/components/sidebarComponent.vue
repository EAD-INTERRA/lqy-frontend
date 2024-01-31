<template>
    <div class="sidebar h-[100vh]">
        <div>
            <img src="~/assets/images/lqyLogo.svg">
        </div>
        <div class="sidebarDiv">
            <div class="overview">
                <p class="overviewText  text-ox text-left">Overview</p>
                <div class="dashboardDiv">
                    <NuxtLink to="/" class="flex flex-row sidebarLink text-ox"><img src="~/assets/images/dashboard-icon.svg">Dashboard</NuxtLink>
                    <NuxtLink to="/stakeholders" class="flex flex-row sidebarLink text-ox"><img src="~/assets/images/stakeholder-icon.svg">Stakeholders</NuxtLink>
                    <NuxtLink to="" class="flex flex-row sidebarLink text-ox"><img src="~/assets/images/simple-icons_webmoney.svg">Financial Institution</NuxtLink>
                    <NuxtLink to="" class="flex flex-row sidebarLink text-ox"><img src="~/assets/images/simple-icons_iobroker.svg">Broker</NuxtLink>
                    <NuxtLink to="" class="flex flex-row sidebarLink text-ox"><img src="~/assets/images/css-icon.svg">CSCS</NuxtLink>
                    <NuxtLink to="" class="flex flex-row sidebarLink text-ox"><img src="~/assets/images/interest-icon.svg">Interest Rate</NuxtLink>
                    <NuxtLink to="" class="flex flex-row sidebarLink text-ox"><img src="~/assets/images/margin-icon.svg">Margin list</NuxtLink>
                    <NuxtLink to="" class="flex flex-row sidebarLink text-ox"><img src="~/assets/images/margin-icon.svg">Create Stakeholders</NuxtLink>
                </div>
    
            </div>
            <div class="overview">
                <p class="overviewText  text-ox text-left">Account</p>
                <div class="dashboardDiv">
                    <NuxtLink to="" class="flex flex-row sidebarLink text-ox h-fit">
                        <img src="~/assets/images/notification-icon.svg">Notification
                        <span class="rounded-full bg-red-900 px-2 h-fit items-center">3</span></NuxtLink>
                    <NuxtLink to="" class="flex flex-row sidebarLink text-ox"><img src="~/assets/images/setting.svg">Settings
                    </NuxtLink>
                    <NuxtLink to="" class="flex flex-row sidebarLink text-ox"><img src="~/assets/images/logout.svg">Log Out</NuxtLink>
                </div>
    
            </div>
        </div>
    </div>
    </template>
    
    <script lang="ts" setup>
    
    </script>
    