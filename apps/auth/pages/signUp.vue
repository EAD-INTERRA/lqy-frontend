<template>
  <section class="hero custom-container bg h-full p-[16px] md:p-[64px] lg:p-[64px] xl:py-[64px] xl:px-[128px]">
    <div class="w-full md:w-full mx-auto">
      <div class="flex justify-center md:hidden sm:hidden font-ubuntu text-[50px] pb-5 font-bold">
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
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >Company Name</label
              >
              <input
                type="text"
                class="form-control form-input"
                placeholder="enter company name"
                required />
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >Business Type</label
              >
              <select class="form-control  font-ubuntu form-select form-input">
                <option>select your business type</option>
                <option>Select Language</option>
                <option>Select Language</option>
                <option>Select Language</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >First Name</label
              >
              <input
                type="text"
                class="form-control form-input"
                placeholder="enter first name"
                required />
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >Last Name</label
              >
              <input
                type="text"
                class="form-control form-input"
                placeholder="enter last name"
                required />
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >Country</label
              >
               <select class="form-control  font-ubuntu form-select form-input">
                <option>select a country</option>
                <option>Select Language</option>
                <option>Select Language</option>
                <option>Select Language</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >State</label
              >
                <select class="form-control  font-ubuntu form-select form-input">
                <option>select a state</option>
                <option>Select Language</option>
                <option>Select Language</option>
                <option>Select Language</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >Town/City</label
              >
              <input
                type="text"
                class="form-control form-input"
                placeholder="enter your city"
                required />
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >CAC Document</label
              >
              <div class=" flex">
                <p class="upload font-unbutu customWhite text-xs">Upload</p>
                <input
                type="text"
                class="form-control form-input w-full"
                placeholder=""
                required />
              </div>
              
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >Email</label
              >
              <input
                type="email"
                class="form-control form-input"
                placeholder="enter your email"
                required />
            </div>
            
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >Password</label
              >
              <input
                type="text"
                class="form-control form-input"
                placeholder="enter  your password"
                required />
            </div>
            
          </div>
          <div class=" justify-center text-center  mt-6">
              <button
                class="font-ubuntu form-submit w-full sm:w-6/12 md:w-6/12 p-2.5 dark text-xs font-normal leading-normal">
                Submit Details
              </button>
            </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
