<template>
    <section class="hero custom-container my-10">
        <div class="space-y-6 w-full md:w-full lg:w-1/3 mx-auto">
            <NuxtLink to="https://staging.chainkeeping.com/" class="flex items-center justify-center">
                <img src="~/assets/images/Logo.svg" alt="logo" title="Go Home" />
            </NuxtLink>
    
            <div class="border shadow-lg rounded-[8px] p-[24px] space-y-2">
                <h3 class="font-sen text-sen-sm font-bold text-grayTheme-gray-700">Account Type</h3>
                <p class="font-normal font-dm text-dm-base text-grayTheme-400">Select an account type that best describes you.</p>
                <hr>
                <div class="space-y-4">
                    <div v-for="option in options" :key="option.type" @click="toggleSelected(option.type)" :class="['border rounded-[12px] p-4 cursor-pointer flex flex-row space-x-2', { 'border-1 border-secondary-theme bg-secondary-100': selectedValue === option.type, 'bg-white': selectedValue !== option.type }]">
                        <img :src=" selectedValue === option.type ? option.src2 : option.src" alt="" class="item-start h-fit" >
                        <div>
                            <h3 :class="['font-bold font-dm text-dm-base', { 'text-secondary-theme': selectedValue === option.type, 'text-grayTheme-gray-700': selectedValue !== option.type }]">{{option.title}}</h3>
                            <p :class="['font-normal font-dm text-dm-base', { 'text-primary-theme': selectedValue === option.type, 'text-grayTheme-400': selectedValue !== option.type }]">{{ option.content }}</p>
                        </div>
                    </div>
                    <button @click="continueToPage" class="font-normal font-dm text-dm-md  py-2 px-4 flex items-center border shadow hover:shadow-lg text-white w-full rounded-[6px] justify-center" :class="[ selectedValue ? 'bg-primary-theme' : 'bg-grayTheme-400' ]">
                        Continue
                    </button>
                </div>
            </div>
    
        </div>
    </section>
    </template>
    
    <script lang="ts" setup>
    const options = ref([{
            src: 'assets/images/individual-icon.svg',
            src2: 'assets/images/individual-icon-red.svg',
            title: 'Personal',
            content: 'I am an individual looking to manage my crypto taxes.',
            type: 'individual-sign-up'
        },
        {
            src: 'assets/images/company-icon.svg',
            src2: 'assets/images/company-icon-red.svg',
            title: 'Company',
            content: 'We are a business looking to manage our crypto taxes.',
            type: 'company-sign-up'
        },
        {
            src: 'assets/images/practitioner-icon.svg',
            src2: 'assets/images/practitioner-icon-red.svg',
            title: 'Practitioners',
            content: 'We are a business looking to provide crypto related services to individuals & businesses.',
            type: 'practitioner-pre-sign-up'
        }
    ]);
    
    const selectedValue = ref < string | null > (null);
    const router = useRouter();
    
    const toggleSelected = (value: string) => {
        if (selectedValue.value === value) {
            selectedValue.value = null;
        } else {
            selectedValue.value = value;
        }
    };
    
    const continueToPage = () => {
        if (selectedValue.value) {
            router.push(`/${selectedValue.value}`);
        }
    };
    </script>