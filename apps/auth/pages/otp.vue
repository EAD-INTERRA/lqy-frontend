<template>
  <section class="hero bg min-h-screen flex items-center justify-center px-4 py-8 md:px-16 lg:px-32 relative">
    <!-- Logo at top-left corner on md+ screens -->
    <div class="hidden md:flex font-ubuntu text-[50px] font-bold absolute top-4 left-6 z-10">
      <h1 class="l-color">L</h1>
      <h1 class="customWhite">Q</h1>
      <h1 class="y-color">Y</h1>
    </div>
    <div class="w-full max-w-md md:max-w-xl mx-auto">
      <div class="bg-theme-lb border border-theme-lb shadow-lg rounded-[8px] p-6 sm:p-10 md:p-12 mt-8">
        <!-- <img src="../assets/images/lock.svg" class="flex justify-center mx-auto mb-4" /> -->
        <h3 class="customWhite pb-8 text-center font-ubuntu text-2xl font-bold">
          OTP
        </h3>
        <form @submit="submitForm">
          <div class="flex flex-col w-full">
            <label class="font-ubuntu customWhite text-sm mb-3 text-center font-normal leading-normal">
              Enter the OTP sent to your mail.
            </label>
            <div class="flex justify-center gap-2 mb-4">
              <input
                v-for="(digit, idx) in otpDigits"
                :key="idx"
                ref="otpInput"
                :ref="el => otpRefs[idx] = el"
                type="text"
                inputmode="numeric"
                maxlength="1"
                class="w-10 h-12 text-center text-xl rounded bg-theme-lb text-white border border-theme-lb focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                v-model="otpDigits[idx]"
                @input="onInput(idx, $event)"
                @keydown="onKeydown(idx, $event)"
                @paste="onPaste($event)"
                autocomplete="one-time-code"
              />
            </div>
          </div>
          <div class="flex w-full flex-col items-center justify-center text-center mt-4">
            <button
              class="font-ubuntu form-submit w-[60%] h-[40px] md:p-2.5 dark text-sm md:text-lg hover:bg-theme-lb hover:text-white font-normal leading-normal flex items-center justify-center"
              :disabled="loading">
              <span v-if="loading" class="animate-spin mr-2">
                <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              </span>
              <span>{{ loading ? 'Logging in...' : 'Login' }}</span>
            </button>
            <p class="customWhite pb-8 flex w-full justify-center text-center text-sm font-ubuntu mt-3">
              Didn’t get an OTP at “{{ emailDisplay }}” ?
              <NuxtLink to="#" class="customOrange">Resend</NuxtLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue';
import { useRouter, useNuxtApp, useRuntimeConfig } from '#imports';
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

const otpDigits = ref(["", "", "", "", "", ""]);
const otpRefs = Array(6).fill(null);

const emailDisplay = computed(() => email.value || "your email");

// Handle input, auto-move, and paste
const onInput = (idx: number, event: Event) => {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, "");
  if (value.length > 1) {
    // If user pastes multiple digits, split and fill
    const values = value.split('');
    for (let i = 0; i < values.length && idx + i < 6; i++) {
      otpDigits.value[idx + i] = values[i];
      // Move focus to next
      if (otpRefs[idx + i + 1]) {
        (otpRefs[idx + i + 1] as HTMLInputElement).focus();
      }
    }
  } else {
    otpDigits.value[idx] = value;
    if (value && idx < 5) {
      nextTick(() => {
        (otpRefs[idx + 1] as HTMLInputElement)?.focus();
      });
    }
  }
};

const onKeydown = (idx: number, event: KeyboardEvent) => {
  const input = event.target as HTMLInputElement;
  if (event.key === "Backspace") {
    if (otpDigits.value[idx]) {
      otpDigits.value[idx] = "";
    } else if (idx > 0) {
      nextTick(() => {
        (otpRefs[idx - 1] as HTMLInputElement)?.focus();
        otpDigits.value[idx - 1] = "";
      });
    }
    event.preventDefault();
  } else if (event.key >= "0" && event.key <= "9") {
    // Allow only one digit per box
    otpDigits.value[idx] = "";
  }
};

const onPaste = (event: ClipboardEvent) => {
  event.preventDefault();
  const pasted = event.clipboardData?.getData('text')?.replace(/\D/g, '') || '';
  if (pasted.length) {
    for (let i = 0; i < 6; i++) {
      otpDigits.value[i] = pasted[i] || '';
    }
    // Focus the last filled input
    const lastIdx = Math.min(pasted.length, 6) - 1;
    nextTick(() => {
      if (otpRefs[lastIdx]) {
        (otpRefs[lastIdx] as HTMLInputElement).focus();
      }
    });
  }
};

const submitForm = async (event: Event) => {
  event.preventDefault();
  loading.value = true;

  const otp = otpDigits.value.join("");
  if (otp.length < 6) {
    toast && toast.error("Please enter the 6-digit OTP.");
    loading.value = false;
    return;
  }

  const loginData = {
    email: email.value,
    token: otp,
  };

  try {
    const result = await $services.auth.verify_login(loginData);
    if (result.message === "SUCCESSFUL") {
      // toast.success(result.body);
      localStorage.setItem("credentials", JSON.stringify(result));
      const authToken = result.body?.access_token;
      localStorage.setItem("authToken", result.body.access_token);

      // Redirect to the dashboard
      const config = useRuntimeConfig();
      const redirectionUrls = {
        SUPERADMIN: config.public.admin,
        Broker: config.public.Broker,
        CSCS: config.public.CSCS,
        Custodian: config.public.Custodian,
        Investor: config.public.Investor,
        Financial_Institutions: config.public.Financial_Institutions
      };

      const role = result.body.role;
      if (redirectionUrls[role]) {
        window.location.href = redirectionUrls[role] + "?token=" + authToken;
        localStorage.setItem("Token", result.body.access_token);
        return;
      }
    } else {
      toast.error(result.body);
    }
  } catch (error) {
    const err = error.result?.data?.body || "OTP verification failed";
    toast.error(err);
  } finally {
    loading.value = false;
  }
};
</script>