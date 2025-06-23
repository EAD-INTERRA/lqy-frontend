<template>
  <div class="p-4">
    <div
      class="bg-theme-dg p-[20px] mt-5 lg:p-[40px] rounded-[8px] lg:rounded-[16px] w-[100%]">
      <div class="mb-3">
        <p
          class="bg-theme-tb font-semibold w-fit text-sm md:text-lg px-2 md:px-3 py-1 rounded-[5px]">
          Transaction History
        </p>
      </div>
      <div class="">
        <table class="table-fixed w-full lg:w-auto">
          <thead>
            <tr
              class="text-black text-opacity-45 font-ox text-base font-normal leading-normal border-b-[0.1px] border-black">
              <th class="w-52 pt-2 pb-2 hidden lg:table-cell">
                Transaction Id
              </th>
              <th class="w-52 pt-2 pb-2 hidden lg:table-cell">
                Transaction Type
              </th>
              <th class="w-52 pt-2 pb-2 hidden lg:table-cell">Date</th>
              <th class="w-52 pt-2 pb-2 hidden lg:table-cell">Amount</th>
              <th class="w-52 pt-2 pb-2 hidden lg:table-cell">Status</th>
              <th class="w-52 pt-2 pb-2 hidden lg:table-cell">Action</th>
            </tr>
          </thead>
          <tbody class="mt-3">
            <tr
              class="rowText bg-opacity-10 text-black text-opacity-85 font-ox text-base font-normal leading-normal">
              <td
                class="text-center flex flex-col gap-0 lg:gap-2 w-full mt-1 pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Organization</dt>
                  <!-- <dd>{Organization.name}</dd> -->
                  <dd
                    class="text-black text-opacity-45 font-ox text-base font-normal leading-normal">
                    27/12/2023
                  </dd>
                </dl>
                <dl class="lg:hidden">
                  <dt class="sr-only">Stakeholder name</dt>
                  <!-- <dd>{Stakeholder.name}</dd> -->
                  <dd>Bank transfer</dd>
                </dl>
                <p>#7263g7b380h82v</p>
              </td>
              <td class="hidden lg:table-cell text-center">
                <p>Bank transfer</p>
              </td>
              <td class="hidden lg:table-cell text-center">
                <p>27/12/2023</p>
              </td>
              <td class="text-center hidden lg:table-cell pt-2 pb-2">
                <p>$120,039.43</p>
              </td>
              <td
                class="lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2 text-center lg:pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Amount</dt>
                  <!-- <dd>{Stakeholder.name}</dd> -->
                  <dd>$120,039.43</dd>
                </dl>
                <p
                  class="rounded-lg bg-blue-500 text-white w-100 p-1 mx-6 flex items-center justify-center gap-2 flex-shrink-0">
                  Completed
                </p>
              </td>
              <td>
                <img src="/assets/images/Frame588.svg" class="px-5" />
              </td>
            </tr>
            <tr
              class="bg-theme-tb rowText bg-opacity-10 text-black text-opacity-85 font-ox text-base font-normal leading-normal">
              <td
                class="text-center flex flex-col gap-0 lg:gap-2 w-full mt-1 pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Organization</dt>
                  <!-- <dd>{Organization.name}</dd> -->
                  <dd
                    class="text-black text-opacity-45 font-ox text-base font-normal leading-normal">
                    27/12/2023
                  </dd>
                </dl>
                <dl class="lg:hidden">
                  <dt class="sr-only">Stakeholder name</dt>
                  <!-- <dd>{Stakeholder.name}</dd> -->
                  <dd>Bank transfer</dd>
                </dl>
                <p>#7263g7b380h82v</p>
              </td>
              <td class="hidden lg:table-cell text-center">
                <p>Bank transfer</p>
              </td>
              <td class="hidden lg:table-cell text-center">
                <p>27/12/2023</p>
              </td>
              <td class="text-center hidden lg:table-cell pt-2 pb-2">
                <p>$120,039.43</p>
              </td>
              <td
                class="lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2 text-center lg:pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Amount</dt>
                  <!-- <dd>{Stakeholder.name}</dd> -->
                  <dd>$120,039.43</dd>
                </dl>
                <p
                  class="rounded-lg bg-orange-500 text-white w-100 p-1 mx-6 flex items-center justify-center gap-2 flex-shrink-0">
                  Pending
                </p>
              </td>
              <td>
                <img src="/assets/images/Frame588.svg" class="px-5" />
              </td>
            </tr>
            <tr
              class="rowText bg-opacity-10 text-black text-opacity-85 font-ox text-base font-normal leading-normal">
              <td
                class="text-center flex flex-col gap-0 lg:gap-2 w-full mt-1 pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Organization</dt>
                  <!-- <dd>{Organization.name}</dd> -->
                  <dd
                    class="text-black text-opacity-45 font-ox text-base font-normal leading-normal">
                    27/12/2023
                  </dd>
                </dl>
                <dl class="lg:hidden">
                  <dt class="sr-only">Stakeholder name</dt>
                  <!-- <dd>{Stakeholder.name}</dd> -->
                  <dd>Equities</dd>
                </dl>
                <p>#7263g7b380h82v</p>
              </td>
              <td class="hidden lg:table-cell text-center">
                <p>Bank transfer</p>
              </td>
              <td class="hidden lg:table-cell text-center">
                <p>27/12/2023</p>
              </td>
              <td class="text-center hidden lg:table-cell pt-2 pb-2">
                <p>$120,039.43</p>
              </td>
              <td
                class="lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2 text-center lg:pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Amount</dt>
                  <!-- <dd>{Stakeholder.name}</dd> -->
                  <dd>$120,039.43</dd>
                </dl>
                <p
                  class="rounded-lg bg-blue-500 text-white w-100 p-1 mx-6 flex items-center justify-center gap-2 flex-shrink-0">
                  Completed
                </p>
              </td>
              <td>
                <img src="/assets/images/Frame588.svg" class="px-5" />
              </td>
            </tr>
            <tr
              class="bg-theme-tb rowText bg-opacity-10 text-black text-opacity-85 font-ox text-base font-normal leading-normal">
              <td
                class="text-center flex flex-col gap-0 lg:gap-2 w-full mt-1 pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Organization</dt>
                  <!-- <dd>{Organization.name}</dd> -->
                  <dd
                    class="text-black text-opacity-45 font-ox text-base font-normal leading-normal">
                    27/12/2023
                  </dd>
                </dl>
                <dl class="lg:hidden">
                  <dt class="sr-only">Stakeholder name</dt>
                  <!-- <dd>{Stakeholder.name}</dd> -->
                  <dd>Bank transfer</dd>
                </dl>
                <p>#7263g7b380h82v</p>
              </td>
              <td class="hidden lg:table-cell text-center">
                <p>Bank transfer</p>
              </td>
              <td class="hidden lg:table-cell text-center">
                <p>27/12/2023</p>
              </td>
              <td class="text-center hidden lg:table-cell pt-2 pb-2">
                <p>$120,039.43</p>
              </td>
              <td
                class="lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2 text-center lg:pt-2 pb-2">
                <dl class="lg:hidden">
                  <dt class="sr-only">Amount</dt>
                  <!-- <dd>{Stakeholder.name}</dd> -->
                  <dd>$120,039.43</dd>
                </dl>
                <p
                  class="rounded-lg bg-red-500 text-white w-100 p-1 mx-6 flex items-center justify-center gap-2 flex-shrink-0">
                  failed
                </p>
              </td>
              <td>
                <img src="/assets/images/Frame588.svg" class="px-5" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
