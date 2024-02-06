<template>
  <div
    class="flex gap-[5%] p-4  mt-[50px] lg:mt-[100px] mx-auto lg:ml-64">
    <section class="  w-[35%]">
      <p class="text-black font-ox font-bold">
        My Profile
        <span class="rounded-full bg-green-500 px-2.5 h-fit items-left m-2"></span>
      </p>
      <div class="bg-theme-dg w-full h-fit rounded-[5px] mt-1 py-[30px] " >
        <img class="mx-auto rounded-full w-[150px] " src="~/assets/images/profileImage.svg" />
        <div class="flex gap-1 text-lg font-bold justify-center">
          Jon Dovina
        <img class="" src="~/assets/images/tick.svg" />
        </div>
        <p class="text-sm text-center ">Example networks limite</p>
        <div class="justify-end flex mr-5">
          <button class=" border border-solid border-black rounded-[10px] py-0 px-3"> Edit</button>
        </div>
      </div>


      <p class="text-black font-ox mt-3 font-bold">
        Personal Information
        <span class="rounded-full bg-green-500 px-2.5 h-fit items-left m-2"></span>
      </p>
      <div class="bg-theme-dg w-full h-fit rounded-[5px] mt-1 py-[30px] " >
       
        <div class="flex flex-col gap-1">
          <div class="px-6">
            <label for="" class="text-opacity-45 font-semibold">Firstname</label>
            <div class="text-lg font-bold">Dovina</div>
          </div>
          <div class="px-6">
            <label for="" class="text-opacity-45 font-semibold">Lastname</label>
            <div class="text-lg font-bold">Jonnathan</div>
          </div>
          <div class="px-6">
            <label for="" class="text-opacity-45 font-semibold">Email</label>
            <div class="text-lg font-bold text-blue-500">example@mail.com</div>
          </div>
          <div class="px-6">
            <label for="" class="text-opacity-45 font-semibold">Phone</label>
            <div class="text-lg font-bold text-blue-500">(+234) 814 1225 566</div>
          </div>
        </div>
        <div class="justify-end flex mr-5">
          <button class=" border border-solid border-black rounded-[10px] py-0 px-3"> Edit</button>
        </div>
      </div>
    </section>

    <section class=" w-[60%] h-fit mr-3">
      <p class="text-black font-ox font-bold">
        Address
        <span class="rounded-full bg-green-500 px-2.5 h-fit items-left m-2"></span>
      </p>
      <div class="bg-theme-dg w-full h-fit rounded-[5px] mt-1 py-[30px] " >
       
        <div class="flex flex-col gap-3 ">
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Country</label>
            <div class="text-lg font-bold">Nigeria</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">State</label>
            <div class="text-lg font-bold">Federal Capital Teritory</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Town/City</label>
            <div class="text-lg font-bold">Abuja</div>
          </div>

        </div>
        <div class="justify-end flex pr-6">
          <button class=" border border-solid border-black rounded-[10px] py-0 px-3"> Edit</button>
        </div>
      </div>
     
     
      <p class="text-black font-ox mt-3 font-bold">
        Business Information
        <span class="rounded-full bg-green-500 px-2.5 h-fit items-left m-2"></span>
      </p>
      <div class="bg-theme-dg w-full h-fit rounded-[5px] mt-1 py-[30px] " >
       
        <div class="flex flex-col gap-3 ">
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Business Type</label>
            <div class="text-lg font-bold">Financial Institution</div>
          </div>
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Tax identification number</label>
            <div class="text-lg font-bold">uhdb8ewg8dbduew8</div>
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
          <div class="px-[30px] grid grid-cols-2 text-left">
            <label for="" class="text-opacity-45 font-semibold">Preferred Asset Class</label>
            <div class="justify-start gap-1 flex pr-6">
              <button class=" border border-solid border-blue-500 bg-blue-200 font-semibold rounded-[10px] py-1 px-3"> Equities</button>
              <button class=" border border-solid border-blue-500 bg-blue-200 font-semibold rounded-[10px] py-1 px-3"> Stocks</button>
            </div>
          </div>

        </div>
        <div class="justify-end flex pr-6">
          <button class=" border border-solid border-black rounded-[10px] py-0 px-3"> Edit</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup></script>
