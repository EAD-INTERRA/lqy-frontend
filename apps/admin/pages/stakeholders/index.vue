<template>
  <div class="">
    <div
      class="bg-theme-dg p-[20px] lg:p-[40px] rounded-[8px] lg:rounded-[16px] mt-[50px] lg:mt-[100px] w-[90%] lg:w-[80%] mx-auto lg:ml-64">
      <div class="justify-between flex">
        <div class="flex gap-4 lg:pb-6 pb-3">
          <div
            class="w-48 md:w-56 h-9 border border-solid border-theme-dg rounded-[10px] bg-white gap-[10px] pl-[1px] flex">
            <img src="~/assets/images/search.svg" class="w-6 pl-2" />
            <input class="form-control w-3/4" placeholder="Search " />
          </div>
          <div
            class="w-8 md:w-[115px] h-9 border border-solid border-black rounded-[10px] bg-white pl-[1px] flex gap-2">
            <img src="~/assets/images/filter-icon.svg" class="pl-2 w-6" />
            <input class="form-control w-2/4" placeholder="FILTER " />
          </div>
        </div>
        <div>
          <p class="hidden md:flex opacity-65">
            Active (25) | Rejected (4) | pending (26)
          </p>
        </div>
      </div>
      <p class="md:hidden text-xs opacity-65 px-5 pb-3">
        Active (25) | Rejected (4) | pending (26)
      </p>
      <hr />
      <div class="">
        <table class="table-fixed w-full lg:w-auto">
          <thead>
            <tr
              class="text-black text-opacity-45 font-ox text-base font-normal leading-normal">
              <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Role</th>
              <th class="w-48 pt-2 pb-2 hidden lg:table-cell">
                Stakeholder name
              </th>
              <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Organization</th>
              <th class="w-48 pt-2 pb-2 hidden lg:table-cell">
                Verification status
              </th>
              <th class="w-48 pt-2 pb-2 hidden lg:table-cell">
                Date registered
              </th>
              <th class="w-32 pt-2 pb-2 hidden lg:table-cell">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-theme-tb cursor-pointer rowText bg-opacity-10 text-black text-opacity-85 font-ox text-base font-normal leading-normal"
              v-for="stakeholder in stakeholders.records">
              <td
                class="text-center flex flex-col gap-0 lg:gap-2 w-full mt-1 pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Organization</dt>
                  <!-- <dd>{Organization.name}</dd> -->
                  <dd
                    class="text-black text-opacity-45 font-ox text-base font-normal leading-normal">
                    {{ stakeholder.company_name }}
                  </dd>
                </dl>
                <dl class="lg:hidden">
                  <dt class="sr-only">Stakeholder name</dt>
                  <!-- <dd>{Stakeholder.name}</dd> -->
                  <dd>Jon Doe</dd>
                </dl>
                <p v-if="stakeholder.role">{{ stakeholder.role }}</p>
                <p v-else>Unkown</p>
              </td>
              <td class="hidden lg:table-cell text-center">
                <p v-if="stakeholder.first_name && stakeholder.last_name">
                  {{ stakeholder.first_name }} {{ stakeholder.last_name }}
                </p>
                <p v-else>{{ stakeholder.user.username }}</p>
              </td>
              <td class="hidden lg:table-cell text-center">
                <p>{{ stakeholder.company_name }}</p>
              </td>
              <td
                class="lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2 text-center lg:pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Date registered</dt>
                  <!-- <dd>{Stakeholder.name}</dd> -->
                  <dd>25/12/2023</dd>
                </dl>
                <p
                  :class="
                    stakeholder.user.status
                      ? 'rounded-lg bg-green-500 text-white w-100 p-1 mx-6 flex items-center justify-center gap-2 flex-shrink-0 '
                      : 'rounded-lg bg-orange-500 text-white w-100 p-1 mx-6 flex items-center justify-center gap-2 flex-shrink-0 '
                  ">
                  {{ stakeholder.user.status }}
                </p>
              </td>
              <td class="text-center hidden lg:table-cell pt-2 pb-2">
                <p>{{ stakeholder.created_at }}</p>
              </td>
              <td class="hidden lg:table-cell text-center pt-2 pb-2">
                <div class="flex gap-5 mt-5">
                  <NuxtLink :to="`/stakeholders/${stakeholder.user.id}`">
                    <button
                      class="w-24 h-10 font-ox text-white rounded-[8px] border border-solid border-black bg-blue-500">
                      View
                    </button>
                  </NuxtLink>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StatusCode } from "~/helpers/statusCodes";
import { type Shareholder } from "~/services/ShareholderService";
let toast = null;
const { $services } = useNuxtApp();
const route = useRoute();
console.log(route);

function formatDate(value) {
  if (value) {
    return moment(String(value)).format("YYYY-MM-DD");
  }
}

let stakeholders: Ref<Shareholder[]> = ref([]);

onMounted(async () => {
  if (process.client) {
    const pkg = await import("vue-toastification");
    const useToast = pkg.useToast;
    toast = useToast();
  }

  await getStakeHolders();
});

const getStakeHolders = async () => {
  try {
    stakeholders.value = (await $services.shareholder.getShareholders()).body;
  } catch (err) {
    console.log(err);
  }
};

const approve = async (shareholderId, status) => {
  const approveData = {
    status: status,
  };

  try {
    const response = await $services.shareholder.approveShareholder(
      shareholderId,
      approveData
    );
    if (response.code === StatusCode.SUCCESS) {
      console.log(response);
      toast.success("SUCCESS");
      await getStakeHolders();
    }
  } catch (err) {
    console.log(err);
  }
};
</script>
