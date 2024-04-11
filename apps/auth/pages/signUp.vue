<template>
<section class="hero custom-container bg h-full p-[16px] md:p-[64px] lg:p-[64px] xl:py-[64px] xl:px-[128px]">
    <div class="w-full md:w-full mx-auto">
        <div class="hidden md:flex justify-center  font-ubuntu text-[50px] pb-5 font-bold">
            <h1 class="l-color">L</h1>
            <h1 class="customWhite">Q</h1>
            <h1 class="y-color">Y</h1>
            <!-- <img src="url(/_nuxt/public/assets/images/auth-bg.svg)" /> -->
        </div>
        <div class="customBorder shadow-lg rounded-[8px] p-[24px] sm:py-[64px] sm:px-[198px] md:py-[64px] md:px-[98px]">
            <h3 class="customWhite pb-8 justify-center text-center font-ubuntu text-xl font-bold">
                SignUp
            </h3>
            <!-- <hr class="pb-6" /> -->
            <form action="" @submit="submitForm">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 lg:gap-x-[48px] md:gap-x-[48px] xl:gap-x-[48px] ">
                    <div class="flex flex-col">
                        <label class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]">Company Name</label>
                        <input type="text" class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto" placeholder="Enter Company name" required v-model="company_name" />
                    </div>
                    <div class="flex flex-col">
                        <label class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]">Business Type</label>
                        <select class="form-control  font-ubuntu form-select bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto" v-model="type">
                            <option value="" selected disabled>Select your business type</option>
                            <option
                            v-for="role in roles"
                            :key="role.name"
                            :value="role.name" >
                            {{ role.name }}
                            </option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]">First Name</label>
                        <input type="text" class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto" placeholder="Enter First Name" required v-model="firstname" />
                    </div>
                    <div class="flex flex-col">
                        <label class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]">Last Name</label>
                        <input type="text" class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto" placeholder="Enter Last Name" required v-model="lastname"/>
                    </div>
                    <div class="flex flex-col">
                        <label class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]">Country</label>
                        <select class="form-control font-ubuntu text-black form-select bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto" v-model="country_code" @change="getState" >
                            <option value="" selected disabled>Select a Country</option>
                            <option
                            v-for="country in countries"
                            :key="country"
                            :value="country.code"
                            >
                            {{ country.name }}
                            </option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]">State</label>
                        <select class="form-control  font-ubuntu form-select bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto" v-model="state_id">
                            <option value="" selected disabled>Select State</option>
                            <option
                            v-for="state in states"
                            :key="state"
                            :value="state.id"
                            >
                            {{ state.name }}
                            </option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]">Town/City</label>
                        <input type="text" class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto" placeholder="Enter Your City" required v-model="city"/>
                    </div>
                    <div class="flex flex-col">
                        <label class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]">CAC Document</label>
                        <div class=" flex">
                            <!-- <p class="upload font-unbutu customWhite text-xs rounded-l-[8px]">Upload</p> -->
                            <input type="file" class="form-control bg-theme-lb rounded-r-[8px] h-[40px] px-[10px] py-auto w-full" placeholder="" required />
                        </div>

                    </div>
                    <div class="flex flex-col">
                        <label class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]">Email</label>
                        <input type="email" class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto" placeholder="enter your email" required v-model="email"/>
                    </div>

                    <div class="flex flex-col">
                        <label class="font-ubuntu text-white text-sm font-normal leading-normal my-[5px] mx-[5px]">Password</label>
                        <input type="password" class="form-control bg-theme-lb rounded-[8px] h-[40px] px-[10px] py-auto" placeholder="enter  your password" required v-model="password"/>
                    </div>

                </div>
                <div class=" justify-center text-center  mt-6">
                    <button class="font-ubuntu form-submit w-full h-[55px] md:p-2.5 dark text-sm md:text-lg font-normal leading-normal">
                        Submit
                    </button>
                    <p class="customWhite pb-8 justify-center text-center text-lg font-ubuntu mt-3">Already have an account? <NuxtLink to="/" class="customOrange">Login</NuxtLink>
                    </p>
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
import {
    type Country,
    type State,
    type Roles
} from '~/services/BaseService'
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

const router = useRouter()
const loading = ref(false);
const company_name = ref('');
const email = ref('');
const firstname = ref('');
const lastname = ref('');
const country_code = ref('');
const state_id = ref('');
const type = ref('');
const password = ref('');
const city = ref('');

let countries: Ref < Country[] > = ref([]);
let states: Ref < State[] > = ref([]);
let roles: Ref < Roles[] > = ref([]);

onMounted(async () => {
    countries.value = (await $services.base.getCountries()).body
    roles.value = (await $services.base.getRoles()).body.filter(role => {
    // Define roles to exempt
    const exemptRoles =  ['LQY_Admin', 'Custodian', 'Investor'];
    // Return true if the role name is not in the exemptRoles array
    return !exemptRoles.includes(role.name);
});
})

const getState = async (e: Event) => {
    states.value = (await $services.base.getStatesByCountry({ country_code: e.target.value })).body
}

const submitForm = async (event: Event) => {
    event.preventDefault();
    loading.value = true;

    const signupData = {
        company_name: company_name.value, 
        email: email.value, 
        firstname: firstname.value, 
        lastname: lastname.value, 
        country_code: country_code.value, 
        state_id: state_id.value, 
        type: type.value, 
        password: password.value,
        city: city.value
    }
    
    try {
        const result = await $services.auth.signup(signupData)

        if (result.code === StatusCode.SUCCESS) {
            toast.success("Account Created Successfully!");
            setTimeout(function () {    
                router.replace("/pending");
              }, 5000);
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
