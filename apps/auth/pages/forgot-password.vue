<template>
  <section class="hero bg min-h-screen flex items-center justify-center px-4 py-8 md:px-16 lg:px-32 relative">
    <!-- Logo at top-left corner on md+ screens -->
    <div class="hidden md:flex font-ubuntu text-[50px] font-bold absolute top-4 left-6 z-10">
      <h1 class="l-color">L</h1>
      <h1 class="customWhite">Q</h1>
      <h1 class="y-color">Y</h1>
    </div>
    <div class="w-full max-w-md md:max-w-xl mx-auto">
      <div class="bg-theme-lb border border-theme-lb shadow-lg rounded-[8px] p-6 sm:p-10 md:p-12">
        <h3 class="customWhite pb-8 text-center font-ubuntu text-xl font-bold">
          Forgot Password
        </h3>
        <p class="text-white mb-5 text-center text-sm md:text-base">A link will be sent to your email to help reset your
          password.</p>
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-1 gap-4">
            <div class="flex flex-col">
              <label class="font-ubuntu text-white text-sm font-normal leading-normal mb-2">Email</label>
              <input type="email" v-model="email"
                class="form-control text-white bg-theme-lb rounded-[8px] h-[40px] px-3 py-2 w-full"
                placeholder="********@gmail.com" required />
            </div>
          </div>
          <div class="mt-6">
            <button type="submit" :disabled="loading"
              class="w-full font-ubuntu bg-white text-black h-[50px] rounded-lg flex justify-center items-center space-x-2 transition hover:bg-theme-lb disabled:opacity-60 disabled:cursor-not-allowed">
              <template v-if="loading">
                <svg class="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </template>
              <template v-else>
                <span>send link</span>
              </template>
            </button>
            <p class="customWhite pb-8 justify-center text-right text-lg font-ubuntu mt-3 mr-3">
              Back to
              <NuxtLink to="/" class="customOrange">Login</NuxtLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { StatusCode } from '~/helpers/statusCodes';

let toast = null;
if (process.client) {
  import('vue-toastification').then(pkg => {
    const useToast = pkg.useToast;
    toast = useToast();
  });
}
const { $services } = useNuxtApp();

const router = useRouter();
const loading = ref(false);
const email = ref("");
if (process.client) {
  email.value = localStorage.getItem("email") || "";
}

const submitForm = async (event: Event) => {
  event.preventDefault();
  loading.value = true;
  const Data = {
    email: email.value,
  };
  // console.log("Data", Data);
  try {
    const result = await $services.auth.forgotPassword(Data);
    console.log("Login Result", result)
    if (result.message === "SUCCESSFUL") {
      toast.success(result.body);
      // router.push("/otp");
    } else toast.error(result.body);
  } catch (error) {
    const err = error?.response?.data?.body;
    toast.error(err);
  } finally {
    loading.value = false;
  }
};
</script>
