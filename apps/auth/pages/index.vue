<template>
  <section class="hero bg h-[100vh] w-full">
    <div class="flex flex-col w-full md:w-full mx-auto ">
      <div class="hidden md:flex font-ubuntu  pt-5 pl-5 text-[50px] pb-5 font-bold">
        <h1 class="l-color">L</h1>
        <h1 class="customWhite">Q</h1>
        <h1 class="y-color">Y</h1>
        <!-- <img src="url(/_nuxt/public/assets/images/auth-bg.svg)" /> -->
      </div>
      <div
        class="bg-theme-lb border border-theme-lb shadow-lg rounded-[8px] w-fit mx-[50px] mt-[40%] md:mt-0 md:w-[721px] h-[100%] p-[50px] md:mx-auto">
        <h3
          class="customWhite md:pb-8 justify-center text-center font-ubuntu text-xl font-bold">
          Login
        </h3>
        <!-- <hr class="pb-6" /> -->
        <form action="" @submit="submitForm">
          <div class="grid grid-cols-1 gap-2 md:gap-5 mt-5 md:px-[80px] w-full">
            <div class="flex flex-col">
              <label
                class="font-ubuntu text-white text-xs md:text-sm font-normal leading-normal my-[5px] mx-[5px]"
                >Email</label
              >
              <input
                type="text"
                class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto"
                placeholder="Enter Email"
                v-model="email"
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
                placeholder="********"
                v-model="password"
                required />
            </div>
            <div class="flex gap-1 md:gap-3 px-2 text-white  text-xs md:text-sm">
              <input type="checkbox"> Show Password
            </div>

            <div class="flex flex-col justify-center text-center mt-3">
              <button
                class="font-ubuntu form-submit w-full h-[55px] md:p-2.5 dark text-sm md:text-lg font-normal leading-normal">
                Login
              </button>
              <p class="customWhite pb-8 justify-center text-center text-lg font-ubuntu mt-3">Don't have an account? <NuxtLink to="/signUp" class="customOrange">SignUp</NuxtLink></p>
            </div>
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
import pkg from 'vue-toastification';

let toast = null;

if (process.client) {
  const { useToast } = pkg;
  toast = useToast();
}

const {
    $services
} = useNuxtApp()

const router = useRouter()
const loading = ref(false);
const email = ref('');
const password = ref('');

let countries: Ref < Country[] > = ref([]);
let roles: Ref < Roles[] > = ref([]);

const submitForm = async (event: Event) => {
    event.preventDefault();
    loading.value = true;

    const loginData = {
        username: email.value,
        password: password.value,
    }
    
    try {
        const result = await $services.login.login(loginData)

        if (result.code === StatusCode.SUCCESS) {
          localStorage.setItem("creditials", JSON.stringify(result.body));
          // toast.success("SUCCESS");
          const config = useRuntimeConfig()
          const redirectionUrls = {
            LQY_Admin: config.public.admin,
            Broker: config.public.Broker, 
            CSCS: config.public.CSCS,
            Custodian: config.public.Custodian,
            Investor: config.public.Investor,
            Financial_Institutions: config.public.Financial_Institutions
          };

          const role = result.body.role
          // Redirect user based on their role
          if (redirectionUrls[role]) {
            window.location.href = redirectionUrls[role];
            localStorage.setItem("creditials", JSON.stringify(result.body));
          }
        }
       else toast.error(result.body);
    } catch (error) {
        const err = error.response.data.body
        toast.error(err);
    } finally {
        loading.value = false
    }
}
</script>
