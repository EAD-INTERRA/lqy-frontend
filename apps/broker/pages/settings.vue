<template>
  <div
    class="flex flex-col md:flex-row gap-[5%] p-4  mt-[50px] lg:mt-[10px] mx-auto lg:ml-2 mb-2 lg:mb-5">
    <section class="w-full  md:w-[35%]">
      <div class="flex ">
        <div class="text-black font-ox font-bold py-2.5 pr-2">
          My Profile
        </div>
        <div class="  rounded-full bg-green-500 w-[20px] h-[20px] my-auto mr-2" ></div>
      </div>
      <div class="bg-theme-dg w-full h-fit rounded-[5px] mt-1 py-[30px] " v-if="profile">
        <img class="mx-auto rounded-full w-[150px] " src="/assets/images/profileImage.svg" />
        <div class="flex gap-1 text-lg font-bold justify-center">
          {{profile.first_name}} {{profile.last_name}}
        <img class="" src="/assets/images/tick.svg" />
        </div>
        <p class="text-sm text-center ">{{profile.company_name}}</p>
        <div class="justify-center mt-5  md:justify-end flex mr-5">
          <button class=" border border-solid border-black rounded-[10px] py-0 px-3"> Edit</button>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>


      <div class="flex ">
        <div class="text-black font-ox font-bold py-2.5 pr-2">
          Personal Information
        </div>
        <div class="  rounded-full bg-green-500 w-[20px] h-[20px] my-auto mr-2" ></div>
      </div>
      <div class="bg-theme-dg w-full h-fit rounded-[5px] mt-1 py-[30px] " >
       
        <div class="flex flex-col gap-1">
          <div class="px-6">
            <label for="" class="text-opacity-45 font-semibold">Firstname</label>
            <div class="text-lg font-bold">{{profile.first_name}}</div>
          </div>
          <div class="px-6">
            <label for="" class="text-opacity-45 font-semibold">Lastname</label>
            <div class="text-lg font-bold">{{profile.last_name}}</div>
          </div>
          <div class="px-6">
            <label for="" class="text-opacity-45 font-semibold">Email</label>
            <div class="text-lg font-bold text-blue-500">{{profile.email}}</div>
          </div>
          <div class="px-6">
            <label for="" class="text-opacity-45 font-semibold">Phone</label>
            <div class="text-lg font-bold text-blue-500">{{profile.phone_number}}</div>
          </div>
        </div>
        <div class="justify-center mt-5 md:justify-end flex mr-5">
          <button class=" border border-solid border-black rounded-[10px] py-0 px-3"> Edit</button>
        </div>
      </div>
    </section>
    
    <section class="w-full md:w-[60%] h-fit mr-3">
      <div class="flex ">
        <div class="text-black font-ox font-bold py-2.5 pr-2">
          Address
        </div>
        <div class="  rounded-full bg-green-500 w-[20px] h-[20px] my-auto mr-2" ></div>
      </div>
      <div class="bg-theme-dg w-full h-fit rounded-[5px] mt-1 py-[30px] " >
       
        <div class="flex flex-col gap-3 ">
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Country</label>
            <div class="text-lg font-bold">Nigeria</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">State</label>
            <div class="text-lg font-bold">{{profile.city}}</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Town/City</label>
            <div class="text-lg font-bold">{{profile.city}}</div>
          </div>

        </div>
        <div class="justify-center mt-5  md:justify-end flex pr-6">
          <button class=" border border-solid border-black rounded-[10px] py-0 px-3"> Edit</button>
        </div>
      </div>
     
     
      <div class="flex ">
        <div class="text-black font-ox font-bold py-2.5 pr-2">
          Business Information
        </div>
        <div class="  rounded-full bg-green-500 w-[20px] h-[20px] my-auto mr-2" ></div>
      </div>
      <div class="bg-theme-dg w-full  h-fit rounded-[5px] mt-1 py-[30px] " >
       
        <div class="flex flex-col gap-3 ">
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Business Type</label>
            <div class="text-lg font-bold">Financial Institution</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Tax identification number</label>
            <div class="text-lg font-bold">uhdb8ewg8</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">License Number</label>
            <div class="text-lg font-bold">FI28382ubdj ms</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Capital Adequacy</label>
            <div class="text-lg font-bold">$483,949</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Networth</label>
            <div class="text-lg font-bold">$4,093,029</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Tolerance</label>
            <div class="text-lg font-bold">High</div>
          </div>
          <div class="px-[30px] grid grid-col md:grid-cols-2 text-center md:text-left">
            <label for="" class="text-opacity-45 font-semibold">Preferred Asset Class</label>
            <div class="justify-center md:justify-start gap-3 md:gap-1 mt-2 md:mt-0 flex pr-0 md:pr-6">
              <button class=" border border-solid border-blue-500 bg-blue-200 font-semibold rounded-[10px] py-1 px-3"> Equities</button>
              <button class=" border border-solid border-blue-500 bg-blue-200 font-semibold rounded-[10px] py-1 px-3"> Stocks</button>
            </div>
          </div>

        </div>
        <div class="justify-center mt-5  md:justify-end flex pr-0 md:pr-6">
          <button class=" border border-solid border-black rounded-[10px] py-0 px-3"> Edit</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import {
    StatusCode
} from '~/helpers/statusCodes';

const {
    $services
} = useNuxtApp()

let profile = ref('');

onMounted(async () => {
  try {
    const response = await $services.base.getProfile();
    console.log(response)
    if (response.code === 200) {
      profile.value = typeof response.body === 'object' ? response.body : JSON.parse(response.body); // Assuming body is a JSON string   
    } else {
      console.error('Failed to fetch profile:', response.message);
    }
  } catch (error) {
    console.error('Error fetching profile:', error);
  }
  return {profile};
});
</script>
