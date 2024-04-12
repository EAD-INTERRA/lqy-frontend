<template>
    <div class="">
      <div class="bg-theme-dg p-[20px] lg:p-[40px] rounded-[8px] lg:rounded-[16px] mt-[50px] lg:mt-[100px] w-[90%]  lg:w-9/12 mx-auto lg:ml-64">
            <div class="  justify-between flex ">
              <div class="flex gap-4 lg:pb-6 pb-3">
                <div class="w-48 md:w-56 h-9 border border-solid border-theme-dg rounded-[10px]  bg-white gap-[10px] pl-[1px]  flex">
                  <img src="~/assets/images/search.svg"  class="w-6 pl-2"/>
                  <input class="form-control w-3/4" placeholder="Search " />
                </div>
                <div class=" w-8 md:w-[115px] h-9 border border-solid border-black rounded-[10px]  bg-white  pl-[1px]  flex gap-2">
                  <img src="~/assets/images/filter-icon.svg" class="pl-2 w-6" />
                  <input class="form-control w-2/4" placeholder="FILTER " />
                </div>
              </div>
              <div> 
               <p class=" hidden md:flex opacity-65 ">Active (25) | Rejected (4) | pending (26)</p>
              </div>
            </div>
            <p class=" md:hidden text-xs opacity-65 px-5 pb-3 ">Active (25) | Rejected (4) | pending (26)</p>
            <hr />
            <div class="">
              <table class="table-fixed w-full lg:w-auto">
                <thead>
                  <tr class=" text-black text-opacity-45 font-ox text-base font-normal leading-normal">
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Role</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Stakeholder name</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Organization</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell ">Verification status</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Date registered</th>
                      <th class="w-32 pt-2 pb-2 hidden lg:table-cell">Action</th>
                  </tr>

                </thead>
                <tbody>
                  
                  <tr class="bg-theme-tb  rowText bg-opacity-10 text-black text-opacity-85 font-ox text-base font-normal leading-normal">
                    <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                      <dl class="lg:hidden ">
                        <dt class="sr-only">Organization</dt>
                        <!-- <dd>{Organization.name}</dd> -->
                        <dd class="text-black text-opacity-45 font-ox text-base font-normal leading-normal">Wells  fargo</dd>
                      </dl>
                      <dl class="lg:hidden">
                        <dt class="sr-only">Stakeholder name</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>Jon Doe</dd>
                      </dl>
                      <p>Broker</p>
                      
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>Jon Doe</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>Wells  fargo</p>
                     
                    </td>
                    <td class=" lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2   text-center  lg:pt-2 pb-2">
                      <dl class="lg:hidden">
                        <dt class="sr-only">Date registered</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>25/12/2023</dd>
                      </dl>
                      <p class="rounded-lg bg-orange-500 text-white w-100 p-1 mx-6 flex items-center justify-center gap-2 flex-shrink-0 ">Pending</p>
                      
                    </td>
                    <td class="text-center hidden lg:table-cell pt-2 pb-2">
                      <p>25/12/2023</p>
                     
                    </td>
                    <td class=" hidden lg:table-cell text-center pt-2 pb-2">
                      <p>on</p>
                    </td>
                  </tr>
                  <tr class=" rowText bg-opacity-10 text-black text-opacity-85 font-ox text-base font-normal leading-normal">
                    <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                      <dl class="lg:hidden ">
                        <dt class="sr-only">Organization</dt>
                        <!-- <dd>{Organization.name}</dd> -->
                        <dd class="text-black text-opacity-45 font-ox text-base font-normal leading-normal">Wells  fargo</dd>
                      </dl>
                      <dl class="lg:hidden">
                        <dt class="sr-only">Stakeholder name</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>Jon Doe</dd>
                      </dl>
                      <p>Broker</p>
                      
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>Jon Doe</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>Wells  fargo</p>
                     
                    </td>
                    <td class=" lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2   text-center  lg:pt-2 pb-2">
                      <dl class="lg:hidden">
                        <dt class="sr-only">Date registered</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>25/12/2023</dd>
                      </dl>
                      <p class="rounded-lg bg-blue-500  text-white w-100 p-1 mx-6 flex items-center justify-center gap-2 flex-shrink-0 ">Approved</p>
                      
                    </td>
                    <td class="text-center hidden lg:table-cell pt-2 pb-2">
                      <p>25/12/2023</p>
                     
                    </td>
                    <td class=" hidden lg:table-cell text-center pt-2 pb-2">
                      <p>on</p>
                    </td>
                  </tr>
                  <tr class="bg-theme-tb  rowText bg-opacity-10 text-black text-opacity-85 font-ox text-base font-normal leading-normal">
                    <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                      <dl class="lg:hidden ">
                        <dt class="sr-only">Organization</dt>
                        <!-- <dd>{Organization.name}</dd> -->
                        <dd class="text-black text-opacity-45 font-ox text-base font-normal leading-normal">Wells  fargo</dd>
                      </dl>
                      <dl class="lg:hidden">
                        <dt class="sr-only">Stakeholder name</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>Jon Doe</dd>
                      </dl>
                      <p>Broker</p>
                      
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>Jon Doe</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>Wells  fargo</p>
                     
                    </td>
                    <td class=" lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2   text-center  lg:pt-2 pb-2">
                      <dl class="lg:hidden">
                        <dt class="sr-only">Date registered</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>25/12/2023</dd>
                      </dl>
                      <p class="rounded-lg bg-red-500 text-white  w-100 p-1 mx-6 flex items-center justify-center gap-2 flex-shrink-0 ">Reject</p>
                      
                    </td>
                    <td class="text-center hidden lg:table-cell pt-2 pb-2">
                      <p>25/12/2023</p>
                     
                    </td>
                    <td class=" hidden lg:table-cell text-center pt-2 pb-2">
                      <p>on</p>
                    </td>
                  </tr>

                
                </tbody>
              </table> 
                 </div>
          </div>
      </div>
  
</template>

<script lang="ts" setup>
</script>
