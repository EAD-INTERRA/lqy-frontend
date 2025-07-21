<template>
  <section
    class="hero custom-container bg h-[100vh] p-[16px] md:p-[64px] lg:p-[64px] xl:py-[64px] xl:px-[198px]">
    <div class="w-full md:w-full mx-auto">
      <div
        class="hidden md:flex justify-center  font-ubuntu text-[50px] pb-5 font-bold">
        <h1 class="l-color">L</h1>
        <h1 class="customWhite">Q</h1>
        <h1 class="y-color">Y</h1>
        <!-- <img src="url(/_nuxt/public/assets/images/auth-bg.svg)" /> -->
      </div>
      <div
        class="customBorder shadow-lg rounded-[8px] mt-[40%] md:mt-0 p-[24px] sm:py-[64px] sm:px-[198px] md:py-[64px] md:px-[98px] lg:px-[198px]">
        <h3
          class="customWhite pb-2 justify-center text-center font-ubuntu text-xl font-bold">
          Authenticate your account
        </h3>
        <!-- <hr class="pb-6" /> -->
        <form>
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-lg mb-3 text-center font-normal leading-normal"
                >Enter the OTP sent to your mail.</label
              >
              <input
                type="password"
                class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto w-full"
                placeholder=""
                required />
           </div>
          <div class="justify-center text-center mt-6">
            <button
              class="font-ubuntu form-submit w-[70%] mb-3 h-[55px] p-2.5 dark text-lg font-normal leading-normal">
              Let’s Go...
            </button>
            <p class="customWhite pb-8 justify-center text-center text-lg font-ubuntu mt-3">Didn’t get an OTP at “example@mail.com” ? <nuxt-link to="#" class="customOrange">Resend</nuxt-link></p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
