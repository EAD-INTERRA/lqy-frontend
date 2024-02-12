<template>
  <div>
    <div
      class="bg-theme-dg p-[65px] rounded-[8px] lg:rounded-[16px] mt-[50px] lg:mt-[100px] w-[50%]  mx-auto lg:ml-64">
      <p class="text-black font-sans font-bold mb-5">Upload and attach files</p>
        <div class="grid gird-row gap-y-3 border-2 px-[150px] py-[30px] border-dashed border-black text-center">
         <img class="mx-auto" src="~/assets/images/uploadFile.svg" />
         
          <div class="text-xs"><NuxtLink to="" class="text-ox underline-offset-4 font-bold"
            >Click to upload</NuxtLink> or Drag and drop</div>
          <div class="text-xs">Maximum file size 2mb</div>
        </div>
      <div class="flex pointer  mt-5 rounded-[8px] border border-solid text-center align-middle   justify-between border-black p-4">
        <img src="~/assets/images/bx_file.svg" class="w-8 h-8 ml-2" />
        <p class="text-lg">hqrequire file.doxc 1.5mb</p>
        <img src="~/assets/images/Arrow.svg" class="w-4 h-4 mt-1" />
      </div>
      <div class="flex gap-5 mt-5">
        <button
          class="w-full px-5 py-2 font-ox bg-white rounded-[8px] border border-solid border-blue-500 text-blue-500">
          Cancel
        </button>
        <button
          class="w-full px-5 py-2 font-ox text-white rounded-[8px] border border-solid border-black bg-blue-500">
          Upload files
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
