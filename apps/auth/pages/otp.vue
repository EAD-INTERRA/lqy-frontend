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
        <h3 class="customWhite pb-8 text-center font-ubuntu text-2xl font-bold">OTP</h3>
        <form @submit.prevent="submitForm">
          <div class="flex flex-col w-full">
            <label class="font-ubuntu customWhite text-sm mb-3 text-center font-normal leading-normal">
              Enter the OTP sent to your mail.
            </label>
            <div class="flex justify-center gap-2 mb-4">
              <template v-for="(otp, index) in otps" :key="index">
                <input class="border border-gray-300 bg-gray-100 text-gray-900 text-lg font-medium rounded-lg text-center w-[65px] h-[65px]
                  xs:w-[48px] xs:h-[48px]
                  sm:w-[55px] sm:h-[55px]
                  md:w-[60px] md:h-[60px]
                  lg:w-[65px] lg:h-[65px]
                  focus:outline-none focus:border-theme-primary transition duration-150" type="tel" maxlength="1"
                  v-model="otps[index]" @input="handleInput(index)" @keydown.backspace="handleBackspace(index)"
                  @paste="handlePaste($event)" placeholder="0" required />

              </template>
            </div>
          </div>

          <div class="flex w-full flex-col items-center justify-center text-center mt-4">
            <button
              class="font-ubuntu form-submit w-[60%] h-[40px] md:p-2.5 dark text-sm md:text-lg hover:bg-gray-200 hover:shadow-lg font-normal leading-normal flex items-center justify-center"
              :disabled="loading" type="submit">
              <span v-if="loading" class="animate-spin mr-2">
                <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              </span>
              <span>{{ loading ? 'Logging in...' : 'Verify OTP' }}</span>
            </button>
            <p class="text-center mt-4 flex justify-between items-center w-full">
              <button @click="resendOtp" class="customWhite font-bold font-ubuntu "
                :class="timeLeft > 0 ? `cursor-not-allowed opacity-50` : `cursor-pointer`" :disabled="timeLeft > 0">
                Resend Code
              </button>

              <span v-if="timeLeft > 0" class="ml-2 text-white font-ubuntu font-semibold">
                (Retry in {{ formattedTime }})
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
let toast = null;
if (process.client) {
  import("vue-toastification").then((pkg) => {
    toast = pkg.useToast();
  });
}

const { $services } = useNuxtApp();

const loading = ref(false);
const email = ref("");
if (process.client) {
  email.value = localStorage.getItem("email") || "";
}
const otps = ref(Array(6).fill(""));

const timeLeft = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
});

function startTimer() {
  timeLeft.value = 180; // 180 seconds = 3 minutes

  if (interval) clearInterval(interval);
  interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(interval!);
      interval = null;
    }
  }, 1000);
}

const handleInput = (index: number) => {
  const value = otps.value[index];
  if (value.length > 1) {
    otps.value[index] = value.slice(0, 1);
  }

  if (/^\d$/.test(value)) {
    if (index < 5) {
      const nextInput = document.querySelectorAll("input[type='tel']")[index + 1];
      nextInput && (nextInput as HTMLElement).focus();
    } else if (index === 5) {
      const isComplete = otps.value.every((digit) => digit.trim() !== "");
      if (isComplete) {
        setTimeout(() => {
          submitForm();
        }, 200);
      }
    }
  }
};

const handleBackspace = (index: number) => {
  if (index > 0 && otps.value[index] === "") {
    const prevInput = document.querySelectorAll("input[type='tel']")[index - 1];
    prevInput && (prevInput as HTMLElement).focus();
  }
};

const handlePaste = (event: ClipboardEvent) => {
  const pastedText = event.clipboardData?.getData("text") || "";
  const digits = pastedText.replace(/\D/g, "").slice(0, 6);
  if (digits.length > 0) {
    digits.split("").forEach((digit, index) => {
      otps.value[index] = digit;
    });

    const nextInput = document.querySelectorAll("input[type='tel']")[digits.length - 1];
    nextInput && (nextInput as HTMLElement).focus();

    if (digits.length === 6) {
      setTimeout(() => {
        submitForm();
      }, 200);
    }
  }

  event.preventDefault(); // Prevent default paste
};

const submitForm = async () => {
  loading.value = true;
  const loginData = {
    email: email.value,
    token: otps.value.join(""),
  };

  try {
    const result = await $services.auth.verify_login(loginData);

    if (result.message === "SUCCESSFUL") {
      localStorage.setItem("credentials", JSON.stringify(result));
      const authToken = result.body?.access_token;
      localStorage.setItem("authToken", authToken);
      // Redirect logic
      const config = useRuntimeConfig();
      const redirectionUrls = {
        LQY_Admin: config.public.admin,
        Broker: config.public.Broker,
        // Broker: config.public.Investor,
        CSCS: config.public.CSCS,
        Custodian: config.public.Custodian,
        Investor: config.public.Investor,
        Financial_Institutions: config.public.Financial_Institutions,
      };


      const role = result.body.role;
      console.log(role)
      if (redirectionUrls[role]) {
        window.location.href = redirectionUrls[role] + "?token=" + authToken;
        localStorage.setItem("Token", authToken);
        return;
      }
    } else {
      toast.error(result.customMessage || "An error occurred.");
    }
  } catch (error) {
    toast.error("Invalid email, password, or OTP.");
  } finally {
    loading.value = false;
  }
};

async function resendOtp() {
  if (timeLeft.value > 0) return; // prevent resend if timer active

  const loginData = {
    email: email.value,
  };

  try {
    const result = await $services.auth.resendOtp(loginData);

    if (result.message === "SUCCESSFUL") {
      toast.success(result.customMessage);
      startTimer();
      otps.value = Array(6).fill("");
      // Optionally focus first input after clearing
      setTimeout(() => {
        const firstInput = document.querySelector("input[type='tel']");
        firstInput && (firstInput as HTMLElement).focus();
      }, 100);
    } else {
      toast.error(result.customMessage);
    }
  } catch (error) {
    toast.error("An error occurred. Please try again later.");
  }
}

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>
