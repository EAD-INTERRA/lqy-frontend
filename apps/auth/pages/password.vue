<template>
  <section class="hero custom-container bg h-[100vh] p-[16px] md:p-[64px] lg:p-[64px] xl:py-[64px] xl:px-[198px] ">
    <div class="w-full md:w-full mx-auto  ">
      <div class="flex justify-center md:hidden sm:hidden font-ubuntu text-[50px] pb-5 font-bold">
         <h1 class="l-color">L</h1>
        <h1 class="customWhite">Q</h1>
        <h1 class="y-color">Y</h1>
       <!-- <img src="url(/_nuxt/public/assets/images/auth-bg.svg)" /> -->
      </div>
      <div class="customBorder shadow-lg rounded-[8px]   p-[24px] sm:py-[64px] sm:px-[198px] md:py-[64px] md:px-[98px] lg:px-[198px]">
        <h3
          class="customWhite pb-8 justify-center text-center font-ubuntu text-xl font-bold">
          Password Registration
        </h3>
        <!-- <hr class="pb-6" /> -->
        <form>
          <div
            class="grid grid-cols-1"
            >
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >User Name</label
              >
              <input
                type="text"
                class="form-control form-input"
                placeholder="enter username"
                required />
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >Password</label
              >
              <input
                type="password"
                class="form-control form-input"
                placeholder="********"
                required />
            </div>
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-xs font-normal leading-normal"
                >Confirm Password</label
              >
              <input
                type="password"
                class="form-control form-input"
                placeholder="********"
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
