<template>
  <div class="flex flex-row gap-3 p-5 w-full h-full font-ox">
    <section class="w-1/4 h-fit">
      <div class="flex">
        <div class="text-black font-ox font-bold py-2.5 pr-2">My Profile</div>
        <div class="rounded-full bg-green-500 w-[20px] h-[20px] my-auto mr-2"></div>
      </div>
      <div class="bg-white shadow-lg w-full h-fit rounded-[5px] mt-1 py-[30px]">
        <img
          class="mx-auto rounded-full w-[150px]"
          src="/assets/images/profileImage.svg"
        />
        <div class="flex gap-1 text-lg font-bold justify-center">
          {{ profile.first_name || "N/A" }} {{ profile.last_name || "N/A" }}
          <img v-if="profile" class="" src="/assets/images/tick.svg" />
        </div>
        <p class="text-sm text-center">{{ profile.company_name || "N/A" }}</p>
        <!-- <div class="justify-center mt-5 md:justify-end flex mr-5">
          <button class="border border-solid border-black rounded-[10px] py-0 px-3">
            Edit
          </button>
        </div> -->
      </div>
    </section>

    <section class="w-3/4 flex flex-col h-fit gap-3 mr-3">
      <div class="h-fit">
        <div class="flex ">
        <div class="text-black font-ox font-bold py-2.5 pr-2">
          Personal Information
        </div>
        <div class="  rounded-full bg-green-500 w-[20px] h-[20px] my-auto mr-2" ></div>
      </div>
      <div class="bg-white shadow-lg w-full h-fit rounded-[5px] mt-1 py-[30px] " >
       
        <div class="flex flex-col gap-1 font-ox">
          <div class="px-6">
            <label for="" class="text-[14px] text-opacity-45">Firstname</label>
            <div class="text-[18px] font-bold">{{profile.first_name || "N/A"}}</div>
          </div>
          <div class="px-6">
            <label for="" class="text-[14px] text-opacity-45">Lastname</label>
            <div class="text-[18px] font-bold">{{profile.last_name || "N/A"}}</div>
          </div>
          <div class="px-6">
            <label for="" class="text-[14px] text-opacity-45">Email</label>
            <div class="text-[18px] font-bold text-blue-500">{{profile.email || "N/A"}}</div>
          </div>
          <div class="px-6">
            <label for="" class="text-[14px] text-opacity-45">Phone</label>
            <div class="text-[18px] font-bold text-blue-500">{{profile.phone || "N/A"}}</div>
          </div>
        </div>
        <!-- <div class="justify-center mt-5 md:justify-end flex mr-5">
          <button class=" border border-solid border-black rounded-[10px] py-0 px-3"> Edit</button>
        </div> -->
      </div>
      </div>
      <div class=" h-full">
        <div class="flex">
          <div class="text-black font-ox font-bold py-2.5 pr-2">Address</div>
          <div class="rounded-full bg-green-500 w-[20px] h-[20px] my-auto mr-2"></div>
        </div>
        <div class="bg-white shadow-lg w-full h-full rounded-[5px] mt-1 py-[30px]">
          <div class="flex flex-col gap-3">
            <div class="px-[30px] flex flex-row gap-3 items-center h-fit text-left">
              <label for="" class="text-opacity-45 text-[14px] w-[10%]">Country</label>
              <div class="text-lg font-bold w-[90%]">{{profile.city || "N/A"}}</div>
            </div>
            <div class="px-[30px] flex flex-row gap-3 items-center h-fit text-left">
              <label for="" class="text-opacity-45 text-[14px] w-[10%]">State</label>
              <div class="text-lg font-bold w-[90%]">{{ profile.city || "N/A"}}</div>
            </div>
            <div class="px-[30px] flex flex-row gap-3 items-center h-fit text-left">
              <label for="" class="text-opacity-45 text-[14px] w-[10%]">Town/City</label>
              <div class="text-lg font-bold w-[90%]">{{ profile.city || "N/A"}}</div>
            </div>
          </div>
          <!-- <div class="justify-center mt-5 md:justify-end flex pr-6">
            <button class="border border-solid border-black rounded-[10px] py-0 px-3">
              Edit
            </button>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { StatusCode } from "~/helpers/statusCodes";

const { $services } = useNuxtApp();

const profile = ref("");

onMounted(async () => {
  try {
    const response = await $services.base.getProfiles();
    console.log(response);
    profile.value = response.body;
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
  return { profile };
});
</script>
