<template>
    <div>
      <div class="bg-theme-dg p-[20px] lg:p-[40px] rounded-[8px] lg:rounded-[16px] mt-[50px] lg:mt-[100px] w-[90%]  lg:w-9/12 mx-auto lg:ml-64">
      
            <div class="grid grid-row lg:gap-4 lg:grid-cols-2">
              <div class="grid gird-row gap-y-3">
                <div class="text-xs">Company Name:</div>
                <div class="text-base">Example Networks Limited</div>
                <div class="text-xs">First Name:</div>
                <div class="text-base">Doe</div>
                <div class="text-xs">Country:</div>
                <div class="text-base">Nigeria</div>
                <div class="text-xs">Town/City:</div>
                <div class="text-base">Abuja</div>
              </div>
              <div class="grid gird-row gap-y-3">
                <div class="text-xs">Business Type:</div>
                <div class="text-base">Investment Banking</div>
                <div class="text-xs">Last Name:</div>
                <div class="text-base">Jon</div>
                <div class="text-xs">State:</div>
                <div class="text-base">Federal Capital Teritory</div>
                <div class="text-xs">Email:</div>
                <div class="text-base">example@mail.com</div>
              </div>
            </div>
            <div class="flex h-10 gap-3 mt-5 w-10/12 sm:w-5/12 rounded-[8px] border border-solid border-black p-2 ">
              <img src="~/assets/images/bx_file.svg"  class="w-4 h-6 ml-2 "/>
              <div class="px-3 ">
                Download file (2mb)
              </div>
              <img src="~/assets/images/Arrow.svg"  class="w-4 h-4 mt-1"/>
            </div>
            <div class="flex gap-5 mt-5">
              <button class="w-24 h-10 font-ox text-white rounded-[8px] border border-solid border-black bg-blue-500 ">Approve</button>
              <button class="w-24 font-ox text-white rounded-[8px] border border-solid border-black bg-red-500 ">Reject</button>
            </div>
          </div>
      </div>
  
</template>

<script lang="ts" setup></script>
