<template>
  <div>
    <div
      class="bg-theme-dg p-[20px] lg:p-[40px] rounded-[8px] lg:rounded-[16px] mt-[50px] lg:mt-[100px] w-[90%] lg:w-9/12 mx-auto lg:ml-64"
    >
      <div class="grid grid-row lg:gap-4 lg:grid-cols-2">
        <div class="grid gird-row gap-y-3">
          <div class="text-xs">Company Name:</div>
          <div class="text-base">{{ stakeholder.company_name }}</div>
          <div class="text-xs">First Name:</div>
          <div class="text-base" v-if="stakeholder.first_name">{{ stakeholder.first_name }}</div>
          <div class="text-base" v-else>Unknown</div>
          <div class="text-xs">Country:</div>
          <div class="text-base">Nigeria</div>
          <div class="text-xs">Town/City:</div>
          <div class="text-base">{{ stakeholder.city }}</div>
          <div class="text-xs">Approval Status:</div>
          <div class="text-base">
            <div v-if="stakeholder.user.status" class="rounded-lg bg-green-700 text-white items-start p-2 w-24">
              Approved
            </div>
            <div v-else class="w-24 p-2 text-white items-start rounded-lg bg-orange-700">
              Declined
            </div>
          </div>
        </div>
        <div class="grid gird-row gap-y-3">
          <div class="text-xs">Business Type:</div>
          <div class="text-base">Investment Banking</div>
          <div class="text-xs">Last Name:</div>
          <div class="text-base" v-if="stakeholder.last_name">{{ stakeholder.first_name }}</div>
          <div class="text-base" v-else>Uknown</div>
          <div class="text-xs">State:</div>
          <div class="text-base" v-if="stakeholder.state">{{ stakeholder.state }}</div>
          <div class="text-base" v-else>Unknown</div>
          <div class="text-xs">Email:</div>
          <div class="text-base">{{ stakeholder.email }}</div>
        </div>
      </div>
      <div
        class="flex h-10 gap-3 mt-5 w-10/12 sm:w-5/12 rounded-[8px] border border-solid border-black p-2"
      >
        <img src="~/assets/images/bx_file.svg" class="w-4 h-6 ml-2" />
        <div class="px-3">Download file (2mb)</div>
        <img src="~/assets/images/Arrow.svg" class="w-4 h-4 mt-1" />
      </div>
      <div class="flex gap-5 mt-5">
        <button
          class="w-24 h-10 font-ox text-white rounded-[8px] border border-solid border-black bg-blue-500"
          @click="approve(stakeholder.user.id, true)"
        >
          Approve
        </button>
        <button
          class="w-24 font-ox text-white rounded-[8px] border border-solid border-black bg-red-500"
          @click="approve(stakeholder.user.id, false)"
        >
          Reject
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { StatusCode } from '~/helpers/statusCodes';
import {
    type Shareholder
} from '~/services/ShareholderService'
let toast = null;
const {
    $services
  } = useNuxtApp()

const route = useRoute();
const stakeId = parseInt(route.params.id)

let stakeholder: Ref <Shareholder> = ref({});

onMounted(async () => {
  if (process.client) {
    const pkg = await import('vue-toastification');
    const useToast = pkg.useToast;
    toast = useToast();

    console.log(typeof(stakeId));
  }

  await getStakeHolder();
});

const getStakeHolder = async () => {
  try {
    stakeholder.value = (await $services.shareholder.getShareholderById(stakeId)).body;
    console.log(stakeholder.value)
    // const res = (await $services.shareholder.getShareholderById(stakeId));
  } catch (err) {
    console.log(err)
  }
}

const approve = async (shareholderId, status) => {

  const approveData = {
        status: status,
    }

  try {
    const response = (await $services.shareholder.approveShareholder(shareholderId, approveData));
    if (response.code === StatusCode.SUCCESS) {
      console.log(response)
      toast.success("SUCCESS")
      await getStakeHolder();
    }
  } catch (err) {
    console.log(err)
  }
};
</script>
