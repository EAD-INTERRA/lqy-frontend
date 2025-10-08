<template>
  <div class="mx-auto p-4">
    <!-- Back Button -->
    <button @click="$emit('go-back')" class="text-black text-[18px] hover:underline mb-4 inline-block flex h-fit">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.7144 10.6161H7.39019L10.3382 7.40652C10.461 7.2774 10.5589 7.12295 10.6263 6.95218C10.6937 6.78141 10.7291 6.59774 10.7306 6.41188C10.7321 6.22603 10.6996 6.04171 10.6349 5.86969C10.5703 5.69767 10.4748 5.54139 10.3541 5.40997C10.2334 5.27854 10.0898 5.17461 9.93185 5.10423C9.77385 5.03385 9.60456 4.99844 9.43385 5.00005C9.26314 5.00167 9.09444 5.04028 8.93759 5.11364C8.78073 5.187 8.63887 5.29363 8.52027 5.42732L3.37771 11.0262C3.25798 11.1562 3.16299 11.3107 3.09817 11.4807C3.03336 11.6508 3 11.8331 3 12.0172C3 12.2013 3.03336 12.3836 3.09817 12.5537C3.16299 12.7237 3.25798 12.8782 3.37771 13.0082L8.52027 18.6071C8.76275 18.8621 9.0875 19.0031 9.42459 18.9999C9.76169 18.9968 10.0841 18.8496 10.3225 18.59C10.5609 18.3305 10.6961 17.9794 10.699 17.6124C10.7019 17.2454 10.5724 16.8919 10.3382 16.6279L7.39019 13.4155H19.7144C20.0553 13.4155 20.3823 13.2681 20.6234 13.0056C20.8645 12.7431 21 12.387 21 12.0158C21 11.6446 20.8645 11.2885 20.6234 11.026C20.3823 10.7636 20.0553 10.6161 19.7144 10.6161Z"
          fill="#1F2A37" />
      </svg>
      Back
    </button>

    <h3 class="font-in font-bold text-[24px]">Create Investor</h3>
    <section class="mb-6 gap-6 rounded-[12px] shadow-custom-heavy py-6 px-4">
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-ox">
          <div>
            <label for="first_name">First Name</label>
            <input type="text" name="first_name" v-model="firstName" class="w-full p-2 border rounded-md bg-black/5"
              required placeholder="Enter first name" />
            <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
          </div>
          <div>
            <label for="last_name">Last Name</label>
            <input type="text" name="last_name" v-model="lastName" class="w-full p-2 border rounded-md bg-black/5"
              required placeholder="Enter Last Name" />
            <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email" class="w-full p-2 border rounded-md bg-black/5" required
              placeholder="test@example.com" />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>
          <div>
            <label for="chn">CHN Number</label>
            <input id="chn" v-model="chn" type="text" maxlength="12" placeholder="Enter CHN number"
              class="w-full p-2 border rounded-md bg-black/5" />
            <p v-if="errors.chn" class="text-red-500 text-sm mt-1">{{ errors.chn }}</p>
          </div>
          <div>
            <label for="country_id">Country</label>
            <select id="country_id" v-model="country_id" @change="handleCountryChange"
              class="w-full p-2 border rounded-md bg-black/5">
              <option value="" disabled selected>Select a Country</option>
              <option v-for="country in countries" :key="country.id" :value="country.id">{{ country.name }}</option>
            </select>
          </div>
          <div>
            <label for="state_id">State</label>
            <select class="w-full p-2 border rounded-md bg-black/5" v-model="state_id">
              <option value="" selected disabled>Select State
              </option>
              <option v-for="state in states" :key="state.id" :value="state.id" class="bg-white text-black">
                {{ state.name }}
              </option>
            </select>
          </div>
          <div>
            <label for="bank_id">Bank</label>
            <select id="bank_id" v-model="bank_id"
              class="w-full p-2 border rounded-md bg-black/5">
              <option value="" disabled selected>Select a bank</option>
              <option v-for="bank in banks" :key="bank.id" :value="bank.id">{{ bank.name }}</option>
            </select>
          </div>
          <div>
            <label for="password">Password</label>
            <div class="relative">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter password"
                class="w-full p-2 border rounded-md bg-black/5 pr-10"
              />
              <button
                type="button"
                class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                @click="showPassword = !showPassword"
                tabindex="-1"
              >
                <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.907-4.568M6.634 6.634A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.818 5.626M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="mt-6 flex flex-col sm:flex-row justify-end gap-3">
          <button @click="resetForm" type="button"
            class="shadow-lg text-[#10356D] py-2 px-[3%] rounded-md hover:bg-gray-200/90 border border-gray-400 transition flex items-center justify-center">
            Cancel
          </button>
          <button type="submit"
            class="bg-[#10356D] shadow-lg text-white py-2 px-[5%] rounded-md hover:bg-[#10356D]/90 transition flex items-center justify-center">
            <template v-if="Loading"> Submitting...</template>
            <template v-else> Submit Request</template>
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

let toast = null;
if (process.client) {
  import('vue-toastification').then(pkg => {
    const useToast = pkg.useToast;
    toast = useToast();
  });
}
const Loading = ref(false)
const firstName = ref("")
const lastName = ref("")
const email = ref("")
const chn = ref("")
const country_code = ref('');
const country_id = ref('');
const bank_id = ref('');
const state_id = ref('');
const user_type = ref("Investor")
const password = ref("")
const showPassword = ref(false)
const errors = ref<{ [key: string]: string }>({})
const countries = ref<any[]>([])
const banks = ref<any[]>([])
const states = ref<any[]>([])
const { $services } = useNuxtApp();

onMounted(async () => {
  countries.value = (await $services.auth.getCountries()).body || [];
  banks.value = (await $services.auth.getBanks()).body || [];
});

const handleCountryChange = (e: Event) => {
  const selectedId = (e.target as HTMLSelectElement).value;
  country_id.value = selectedId;
  const selectedCountry = countries.value.find(c => c.id == selectedId);
  country_code.value = selectedCountry ? selectedCountry.code : '';
  getStateByCode();
};

const getStateByCode = async () => {
  if (country_code.value) {
    states.value = (await $services.auth.getStatesByCountry({ country_code: country_code.value })).body;
  }
};

// Reset form fields + errors
const resetForm = () => {
  firstName.value = ""
  lastName.value = ""
  email.value = ""
  chn.value = ""
  country_id.value = null
  bank_id.value = null
  state_id.value = null
  user_type.value = "Investor"
  password.value = ""
  errors.value = {}
}

// Simple validation
const validateForm = () => {
  errors.value = {}

  if (!firstName.value.trim()) {
    errors.value.firstName = "First name is required"
  }
  if (!lastName.value.trim()) {
    errors.value.lastName = "Last name is required"
  }
  if (!email.value.trim()) {
    errors.value.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = "Enter a valid email address"
  }
  if (chn.value && !/^[A-Za-z0-9]{6,12}$/.test(chn.value)) {
    errors.value.chn = "CHN must be 6–12 alphanumeric characters"
  }
  if (!password.value.trim()) {
    errors.value.password = "Password is required"
  }
  return Object.keys(errors.value).length === 0
}

// Form submit handler
const submitForm = async () => {
  Loading.value = true
  if (!validateForm()) {
    return
  }

  try {
    const payload = {
      chn: chn.value,
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      country_id: country_id.value,
      state_id: state_id.value,
      user_type: "Investor",
      password: password.value
    }
    console.log("Payload:", payload)
    const result = await $services.base.createInvestor(payload);
    console.log("Result:", result)
    if (result.message === "SUCCESSFUL") {
      toast.success("Investor Created Successfully!");
      Loading.value = false
    } else toast.error(result.body);
    resetForm()
  } catch (error: any) {
    console.error("Submission failed:", error)
    toast.error(error.response?.data?.message || "Something went wrong")
    Loading.value = false
  } finally {
    Loading.value = false
  }
}
</script>
