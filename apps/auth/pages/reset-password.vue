<template>
  <section class="hero bg min-h-screen flex items-center justify-center px-4 py-8 md:px-16 relative">
    <!-- Logo at top-left corner on md+ screens -->
    <div class="hidden md:flex font-ubuntu text-[50px] font-bold absolute top-4 left-6 z-10">
      <h1 class="l-color">L</h1>
      <h1 class="customWhite">Q</h1>
      <h1 class="y-color">Y</h1>
    </div>

    <!-- Reset Password Card -->
    <div
      class="customBorder shadow-lg rounded-[8px] mt-[40%] md:mt-0 p-[24px] sm:py-[64px] sm:px-[198px] md:py-[64px] md:px-[98px] lg:px-[198px]">
      <h3 class="customWhite pb-8 justify-center text-center font-ubuntu text-xl font-bold">
        Reset Your Password
      </h3>

      <form @submit="submitForm">
        <div class="grid grid-cols-1 gap-4">
          <!-- Password -->
          <div class="w-full flex flex-col relative">
            <label class="font-ubuntu !text-white text-sm font-normal leading-normal my-1 mx-1">
              Password
            </label>
            <input id="password" :type="inputType"
              class="form-control text-white bg-theme-lb rounded-[8px] h-[40px] px-3 pr-10" placeholder="********"
              v-model="password" required />
            <button type="button" @click="togglePassword" aria-label="Toggle password visibility"
              class="absolute right-3 top-9 text-xl bg-transparent focus:outline-none flex items-center p-1">
              <span v-if="inputType === 'password'">
                <!-- Eye icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 customOrange" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 5-4.03 9-9 9S3 17 3 12 7.03 3 12 3s9 4.03 9 9z" />
                </svg>
              </span>
              <span v-else>
                <!-- Eye-off icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 customOrange" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.875 18.825A9.956 9.956 0 0112 19c-4.97 0-9-4.03-9-9 0-1.657.445-3.216 1.225-4.575M6.7 6.7A9.956 9.956 0 0112 5c4.97 0 9 4.03 9 9 0 1.657-.445 3.216-1.225 4.575M15 12a3 3 0 11-6 0 3 3 0 016 0zM3 3l18 18" />
                </svg>
              </span>
            </button>
          </div>

          <!-- Confirm Password -->
          <div class="w-full flex flex-col relative">
            <label class="font-ubuntu !text-white text-sm font-normal leading-normal my-1 mx-1">
              Confirm Password
            </label>
            <input id="confirm-password" :type="confirmInputType"
              class="form-control text-white bg-theme-lb rounded-[8px] h-[40px] px-3 pr-10" placeholder="********"
              v-model="confirmPassword" required />
            <button type="button" @click="toggleConfirmPassword" aria-label="Toggle confirm password visibility"
              class="absolute right-3 top-9 text-xl bg-transparent focus:outline-none flex items-center p-1">
              <span v-if="confirmInputType === 'password'">
                <!-- Eye icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 customOrange" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 5-4.03 9-9 9S3 17 3 12 7.03 3 12 3s9 4.03 9 9z" />
                </svg>
              </span>
              <span v-else>
                <!-- Eye-off icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 customOrange" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.875 18.825A9.956 9.956 0 0112 19c-4.97 0-9-4.03-9-9 0-1.657.445-3.216 1.225-4.575M6.7 6.7A9.956 9.956 0 0112 5c4.97 0 9 4.03 9 9 0 1.657-.445 3.216-1.225 4.575M15 12a3 3 0 11-6 0 3 3 0 016 0zM3 3l18 18" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="justify-center text-center mt-6">
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
              <span>Submit Details</span>
            </template>
          </button>
        </div>
      </form>
    </div>
    <!-- </div> -->
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

let toast = null;
if (process.client) {
  import("vue-toastification").then((pkg) => {
    const useToast = pkg.useToast;
    toast = useToast();
  });
}

const { $services } = useNuxtApp();
const router = useRouter();
const route = useRoute();

// Show/hide logic
const inputType = ref("password");
const togglePassword = () => {
  inputType.value = inputType.value === "password" ? "text" : "password";
};

const confirmInputType = ref("password");
const toggleConfirmPassword = () => {
  confirmInputType.value =
    confirmInputType.value === "password" ? "text" : "password";
};

const loading = ref(false);
const email = ref("");
const token = ref("");
const password = ref("");
const confirmPassword = ref("");

// Extract query params
onMounted(() => {
  if (process.client) {
    email.value = (route.query.email as string) || "";
    token.value = (route.query.token as string) || "";
  }
});

const submitForm = async (event: Event) => {
  event.preventDefault();

  if (password.value !== confirmPassword.value) {
    toast.error("Passwords do not match!");
    return;
  }

  loading.value = true;
  const Data = {
    email: email.value,
    token: token.value,
    password: password.value,
  };

  try {
    const result = await $services.auth.resetPassword(Data);
    if (result.message === "SUCCESSFUL") {
      toast.success(result.body || "Password reset successful!");
      router.push("/login");
    } else {
      toast.error(result.body || "Password reset failed!");
    }
  } catch (error: any) {
    const err = error?.response?.data?.body || "Something went wrong.";
    toast.error(err);
  } finally {
    loading.value = false;
  }
};
</script>
