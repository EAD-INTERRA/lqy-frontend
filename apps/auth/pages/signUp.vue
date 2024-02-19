<template>
  <section class="hero custom-container bg h-full p-[16px] md:p-[64px] lg:p-[64px] xl:py-[64px] xl:px-[128px]">
    <div class="w-full md:w-full mx-auto">
      <div class="hidden md:flex justify-center  font-ubuntu text-[50px] pb-5 font-bold">
         <h1 class="l-color">L</h1>
        <h1 class="customWhite">Q</h1>
        <h1 class="y-color">Y</h1>
       <!-- <img src="url(/_nuxt/public/assets/images/auth-bg.svg)" /> -->
      </div>
      <div class="customBorder shadow-lg rounded-[8px] p-[24px] sm:py-[64px] sm:px-[198px] md:py-[64px] md:px-[98px]">
        <h3
          class="customWhite pb-8 justify-center text-center font-ubuntu text-xl font-bold">
          SignUp
        </h3>
        <!-- <hr class="pb-6" /> -->
        <form>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 lg:gap-x-[48px] md:gap-x-[48px] xl:gap-x-[48px] ">
            <div class="flex flex-col">
              <label
                class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]"
                >Company Name</label
              >
              <input
                type="text"
                class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto"
                placeholder="enter company name"
                required />
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]"
                >Business Type</label
              >
              <select class="form-control  font-ubuntu form-select bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto">
                <option>select your business type</option>
                <option>Select Language</option>
                <option>Select Language</option>
                <option>Select Language</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]"
                >First Name</label
              >
              <input
                type="text"
                class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto"
                placeholder="enter first name"
                required />
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]"
                >Last Name</label
              >
              <input
                type="text"
                class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto"
                placeholder="enter last name"
                required />
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]"
                >Country</label
              >
               <select class="form-control  font-ubuntu form-select bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto">
                <option>select a country</option>
                <option>Select Language</option>
                <option>Select Language</option>
                <option>Select Language</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]"
                >State</label
              >
                <select class="form-control  font-ubuntu form-select bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto">
                <option>select a state</option>
                <option>Select Language</option>
                <option>Select Language</option>
                <option>Select Language</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]"
                >Town/City</label
              >
              <input
                type="text"
                class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto"
                placeholder="enter your city"
                required />
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]"
                >CAC Document</label
              >
              <div class=" flex">
                <p class="upload font-unbutu customWhite text-xs rounded-l-[8px]">Upload</p>
                <input
                type="text"
                class="form-control bg-theme-lb rounded-r-[8px] h-[40px] px-[10px] py-auto w-full"
                placeholder=""
                required />
              </div>
              
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]"
                >Email</label
              >
              <input
                type="email"
                class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto"
                placeholder="enter your email"
                required />
            </div>
            
            <div class="flex flex-col">
              <label
                class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]"
                >Password</label
              >
              <input
                type="text"
                class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto"
                placeholder="enter  your password"
                required />
            </div>
            
          </div>
          <div class=" justify-center text-center  mt-6">
            <button
                class="font-ubuntu form-submit w-full h-[55px] md:p-2.5 dark text-sm md:text-lg font-normal leading-normal">
                Submit Details
              </button>
            </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
