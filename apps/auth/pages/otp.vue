<template>
  <section class="hero bg h-[100vh] w-full">
    <div class="flex flex-col w-full md:w-full mx-auto">
      <div class="hidden md:flex font-ubuntu pt-5 pl-5 text-[50px] pb-5 font-bold">
        <h1 class="l-color">L</h1>
        <h1 class="customWhite">Q</h1>
        <h1 class="y-color">Y</h1>
        <!-- <img src="url(/_nuxt/public/assets/images/auth-bg.svg)" /> -->
      </div>
      <div
        class="bg-theme-lb border border-theme-lb shadow-lg rounded-[8px] w-fit mx-[50px] mt-[40%] md:mt-0 md:w-[721px] h-[100%] p-[25px] md:mx-auto">
        <h3 class="customWhite md:pb-8 justify-center text-center font-ubuntu text-xl font-bold">
          OTP
        </h3>
         <form action="" @submit="submitForm">
            <div class="flex flex-col">
              <label
                class="font-ubuntu customWhite text-lg mb-3 text-center font-normal leading-normal"
                >Enter the OTP sent to your mail.</label
              >
              <input
                type="password"
                v-model="otp"
                class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto w-full"
                placeholder=""
                required />
           </div>
          <div class="justify-center text-center mt-6">
            <!-- <button
              class="font-ubuntu form-submit w-[70%] mb-3 h-[55px] p-2.5 dark text-lg font-normal leading-normal">
              Let’s Go...
            </button> -->

            <button
                class="font-ubuntu form-submit w-full h-[40px] md:p-2.5 dark text-sm md:text-lg font-normal leading-normal"
                :disabled="loading">
                <span v-if="loading" class="animate-spin mr-2">
                  <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                </span>
                <span>{{ loading ? 'Logging in...' : 'Let’s Go...' }}</span>
              </button>
            <p class="customWhite pb-8 justify-center text-center text-lg font-ubuntu mt-3">Didn’t get an OTP at “example@mail.com” ? <nuxt-link to="#" class="customOrange">Resend</nuxt-link></p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  StatusCode
} from '~/helpers/statusCodes';
let toast = null;

if (process.client) {
  import('vue-toastification').then(pkg => {
    const useToast = pkg.useToast;
    toast = useToast();
  });
}
const {
  $services
} = useNuxtApp()

const router = useRouter();
const loading = ref(false);
const email = ref("");
const otp = ref("");

const submitForm = async (event: Event) => {
  event.preventDefault();
  loading.value = true;

  const loginData = {
    email: localStorage.getItem("email") || email.value,
    token: otp.value,
  }

  try {
    const result = await $services.auth.verify_login(loginData)
    console.log("result", result);
    if (result.message === "SUCCESSFUL") {
      toast.success(result.body);
      localStorage.setItem("credentials", JSON.stringify(result));
      const authToken = result.body?.access_token;
      localStorage.setItem("authToken", result.body.access_token);
      console.log("authToken, redirect ", authToken);
      // console.log("Store authToken, redirect ", authToken);

      // ✅ Redirect to the dashboard
      const config = useRuntimeConfig();
      console.log("Config:::", config.public.admin);
      const redirectionUrls = {
        SUPERADMIN: config.public.admin,
        Broker: config.public.Broker,
        CSCS: config.public.CSCS,
        Custodian: config.public.Custodian,
        Investor: config.public.Investor,
        Financial_Institutions: config.public.Financial_Institutions
      };

      const role = result.body.role;
      console.log("role", role);
      console.log("Redirection URL:", redirectionUrls[role]);
      if (redirectionUrls[role]) {
        window.location.href = redirectionUrls[role] + "?token=" + authToken;
        localStorage.setItem("Token", result.body.access_token);
        return;
      }
    }
    else toast.error(result.body);
  } catch (error) {
    const err = error.result.data.body
    toast.error(err);
  } finally {
    loading.value = false
  }
}
</script>
