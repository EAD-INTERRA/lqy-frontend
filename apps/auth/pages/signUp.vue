<template>
  <section
    class="hero custom-container bg min-h-screen flex items-center justify-center px-4 py-8 md:px-16 lg:px-32 relative">
    <!-- Logo at top-left corner on md+ screens -->
    <div class="hidden md:flex font-ubuntu text-[50px] font-bold absolute top-4 left-6 z-10">
      <h1 class="l-color">L</h1>
      <h1 class="customWhite">Q</h1>
      <h1 class="y-color">Y</h1>
    </div>
    <div class="w-full max-w-4xl mx-auto">
      <div class="customBorder shadow-lg rounded-[8px] p-6 sm:p-12 md:p-6 bg-opacity-90">
        <h3 class="customWhite pb-8 text-center font-ubuntu text-xl font-bold">SignUp</h3>
        <form @submit="submitForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div class="flex flex-col">
              <label class="font-ubuntu text-white text-sm font-normal my-1 mx-1">Company Name</label>
              <input type="text" class="form-control bg-theme-lb text-white rounded-[8px] h-[40px] px-3"
                placeholder="Enter Company name" required v-model="company_name" />
            </div>
            <div class="flex flex-col">
              <label class="font-ubuntu text-white text-sm font-normal my-1 mx-1">Business Type</label>
              <select class="form-control font-ubuntu form-select bg-theme-lb !text-white rounded-[8px] h-[40px] px-3"
                v-model="type">
                <option value="" selected disabled>Select your business type</option>
                <option v-for="role in roles" :key="role.name" :value="role.name" class="bg-white text-black">
                  {{ role.name }}
                </option>
              </select>
            </div>
            <div class="flex flex-col" v-if="showChnInput">
              <label class="font-ubuntu text-white text-sm font-normal my-1 mx-1">CHN Number</label>
              <input type="text" class="form-control bg-theme-lb text-white rounded-[8px] h-[40px] px-3"
                placeholder="Enter CHN Number" maxlength="12" v-model="chn_number" required />
            </div>
            <div class="flex flex-col">
              <label class="font-ubuntu text-white text-sm font-normal my-1 mx-1">First Name</label>
              <input type="text" class="form-control bg-theme-lb text-white rounded-[8px] h-[40px] px-3"
                placeholder="Enter First Name" required v-model="firstname" />
            </div>
            <div class="flex flex-col">
              <label class="font-ubuntu text-white text-sm font-normal my-1 mx-1">Last Name</label>
              <input type="text" class="form-control bg-theme-lb text-white rounded-[8px] h-[40px] px-3"
                placeholder="Enter Last Name" required v-model="lastname" />
            </div>
            <div class="flex flex-col">
              <label class="font-ubuntu text-white text-sm font-normal my-1 mx-1">Country</label>
              <select class="form-control font-ubuntu form-select bg-theme-lb !text-white rounded-[8px] h-[40px] px-3"
                v-model="country_id" @change="handleCountryChange">
                <option value="" disabled selected class="bg-theme-lb text-gray-400">
                  Select a Country
                </option>
                <option v-for="country in countries" :key="country.id" :value="country.id" class="bg-white text-black">
                  {{ country.name }}
                </option>
              </select>
            </div>
            <div class="flex flex-col">
              <label class="font-ubuntu text-white text-sm font-normal my-1 mx-1">State</label>
              <select class="form-control font-ubuntu form-select bg-theme-lb !text-white rounded-[8px] h-[40px] px-3"
                v-model="state_id">
                <option value="" selected disabled>Select State</option>
                <option v-for="state in states" :key="state.id" :value="state.id" class="bg-white text-black">
                  {{ state.name }}
                </option>
              </select>
            </div>
            <div class="flex flex-col">
              <label class="font-ubuntu text-white text-sm font-normal my-1 mx-1">Town/City</label>
              <input type="text" class="form-control bg-theme-lb text-white rounded-[8px] h-[40px] px-3"
                placeholder="Enter Your City" required v-model="city" />
            </div>
            <div class="flex flex-col space-y-2">
              <label for="cac-document" class="font-ubuntu text-white text-sm font-medium ml-1">
                CAC Document (Max 2MB, PDF, DOCX, DOC, PNG, JPEG)
              </label>

              <div class="relative w-full">
                <input ref="fileInput" id="cac-document" name="cac-document" type="file"
                  accept=".pdf,.docx,.doc,.png,.jpeg" class="hidden" @change="handleFileChange" required />

                <button type="button" @click="$refs.fileInput.click()"
                  class="w-full bg-white text-black font-ubuntu px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition">
                  {{ selectedFileName ? selectedFileName : 'Choose File' }}
                </button>

                <!-- <p
                  v-if="selectedFileName"
                  class="mt-2 text-xs text-black truncate font-ubuntu"
                >
                  Selected: {{ selectedFileName }}
                </p> -->
              </div>
            </div>

            <div class="flex flex-col">
              <label class="font-ubuntu text-white text-sm font-normal my-1 mx-1">Email</label>
              <input type="email" class="form-control bg-theme-lb text-white rounded-[8px] h-[40px] px-3"
                placeholder="Enter your email" required v-model="email" />
            </div>

            <div class="flex flex-col relative">
              <label class="font-ubuntu text-white text-sm font-normal my-1 mx-1">
                Password
              </label>
              <input :type="inputType" class="form-control bg-theme-lb text-white rounded-[8px] h-[40px] px-3 pr-10"
                placeholder="Enter your password" required v-model="password" />

              <!-- Toggle visibility button -->
              <button type="button" @click="togglePassword" aria-label="Toggle password visibility"
                class="absolute right-3 top-9 text-xl customOrange bg-transparent focus:outline-none flex items-center p-1"
                tabindex="0">
                <span v-if="inputType === 'password'">
                  <!-- Eye icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 5-4.03 9-9 9S3 17 3 12 7.03 3 12 3s9 4.03 9 9z" />
                  </svg>
                </span>
                <span v-else>
                  <!-- Eye-off icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13.875 18.825A9.956 9.956 0 0112 19c-4.97 0-9-4.03-9-9 0-1.657.445-3.216 1.225-4.575M6.7 6.7A9.956 9.956 0 0112 5c4.97 0 9 4.03 9 9 0 1.657-.445 3.216-1.225 4.575M15 12a3 3 0 11-6 0 3 3 0 016 0zM3 3l18 18" />
                  </svg>
                </span>
              </button>

              <!-- Password rules feedback -->
              <div class=" bg-white shadow-lg rounded-md font-ox text-xs mt-2 ml-1 p-2">
                <div class="grid grid-cols-2">
                  <span :class="isMinLength ? 'text-green-500' : 'text-red-500'">
                    - Minimum 8 characters
                  </span>
                  <span :class="hasUppercase ? 'text-green-500' : 'text-red-500'">
                    - At least 1 uppercase letter (A-Z)
                  </span>
                  <span :class="hasLowercase ? 'text-green-500' : 'text-red-500'">
                    - At least 1 lowercase letter (a-z)
                  </span>
                  <span :class="hasDigit ? 'text-green-500' : 'text-red-500'">
                    - At least 1 digit (0-9)
                  </span>
                </div>
                <span :class="hasSpecial ? 'text-green-500' : 'text-red-500'">
                  - At least 1 special character (!@#$%^&* etc.)
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center mt-8">
            <button
              class="font-ubuntu form-submit w-full h-[55px] md:w-1/2 dark text-sm md:text-lg font-normal leading-normal mb-4 flex items-center justify-center"
              :disabled="loading">
              <span v-if="loading" class="animate-spin mr-2">
                <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              </span>
              <span>{{ loading ? "Submitting..." : "Submit Details" }}</span>
            </button>
            <p class="customWhite text-center text-lg font-ubuntu">
              Already have an account?
              <NuxtLink to="/" class="customOrange">Login</NuxtLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, type Ref } from 'vue';
import { StatusCode } from '~/helpers/statusCodes';
import { type Country, type State, type Roles } from '~/services/BaseService';

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

const company_name = ref('');
const email = ref('');
const firstname = ref('');
const lastname = ref('');
const country_code = ref('');
const country_id = ref('');
const state_id = ref('');
const type = ref('');
const password = ref('');
const city = ref('');
// const chn_number = ref('');
const inputType = ref('password');

const togglePassword = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password';
};


// ✅ Computed validations
const isMinLength = computed(() => password.value.length >= 8)
const hasUppercase = computed(() => /[A-Z]/.test(password.value))
const hasLowercase = computed(() => /[a-z]/.test(password.value))
const hasDigit = computed(() => /\d/.test(password.value))
const hasSpecial = computed(() =>
  /[!@#$%^&*()_\-+=\[\]{}|;:',.<>\/?`~]/.test(password.value)
)

const showChnInput = computed(() => type.value === 'Broker');

const selectedFileName = ref('')

const handleFileChange = (event) => {
  const file = event.target.files[0]
  selectedFileName.value = file ? file.name : ''
}
let countries: Ref<Country[]> = ref([]);
let states: Ref<State[]> = ref([]);
let roles: Ref<Roles[]> = ref([]);

onMounted(async () => {
  countries.value = (await $services.base.getCountries()).body;
  roles.value = (await $services.base.getRoles()).body.filter(role => {
    const exemptRoles = ['LQY_Admin', 'Custodian', 'Investor'];
    return !exemptRoles.includes(role.name);
  });
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
    states.value = (await $services.base.getStatesByCountry({ country_code: country_code.value })).body;
  }
};

const submitForm = async (event: Event) => {
  event.preventDefault();
  loading.value = true;

  const signupData = {
    first_name: firstname.value,
    last_name: lastname.value,
    email: email.value,
    type: type.value,
    password: password.value,
    city: city.value,
    company_name: company_name.value,
    state_id: String(state_id.value),
    country_id: String(country_id.value),
  };

  if (type.value === 'Broker') {
    signupData.chn_number = chn_number.value;
  }

  try {
    const result = await $services.auth.signup(signupData);
    if (result.code === StatusCode.SUCCESS) {
      toast.success("Account Created Successfully!");
      setTimeout(() => {
        router.replace("/pending");
      }, 5000);
    } else toast.error(result.body);
  } catch (error) {
    const err = error.response.data.body;
    toast.error(err);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
@media (max-width: 1024px) {
  .customBorder {
    padding: 1.5rem !important;
  }
}

@media (max-width: 768px) {
  .customBorder {
    padding: 1rem !important;
  }

  .max-w-4xl {
    max-width: 100% !important;
  }
}

@media (max-width: 640px) {
  .customBorder {
    padding: 0.5rem !important;
  }
}
</style>
