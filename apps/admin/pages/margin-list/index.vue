<template>
    <div class="">
      <div class="bg-theme-dg p-[20px] lg:p-[20px] rounded-[8px] lg:rounded-[16px] mt-[50px] lg:mt-[100px] w-[90%]  lg:w-9/12 mx-auto lg:ml-64">
        <div class="flex justify-between pr-9 mb-6">
          <p class=" bg-theme-tb bolder w-fit  text-lg px-3 py-1 rounded-[5px] ">Margin List</p>
          <NuxtLink to="/marginList/margin-upload" class="border border-solid border-blue-500 text-ox text-base text-blue-500 px-6 py-1 rounded-[5px] text-center">Upload</NuxtLink>
        </div>
            <hr />
            <div class="">
              <table class="table-fixed w-full lg:w-auto">
                <thead>
                  <tr class=" text-black text-opacity-45 font-ox text-base font-normal leading-normal">
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Name</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Cash Margin</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Stock Margin</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell ">Bond Margin</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Total Margin</th>
                      <th class="w-32 pt-2 pb-2 hidden lg:table-cell text-left">Risk Level</th>
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
                        <dt class="sr-only">name</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>David Superman</dd>
                      </dl>
                      <p>David Superman</p>
                      
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>$150,000</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>$200,000</p>
                     
                    </td>
                    <td class=" lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2   text-center  lg:pt-2 pb-2">
                      <dl class="lg:hidden">
                        <dt class="sr-only">Date registered</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>25/12/2023</dd>
                      </dl>
                      <p >$150,000</p>
                    </td>
                    <td class="text-center hidden lg:table-cell pt-2 pb-2">
                      <p class="text-green-500">$500,000</p>
                     
                    </td>
                    <td class=" hidden lg:table-cell text-left pt-2 pb-2">
                      <p>High</p>
                    </td>
                  </tr>
                  <tr class="  rowText bg-opacity-10 text-black text-opacity-85 font-ox text-base font-normal leading-normal">
                    <td class="  text-center flex flex-col gap-0 lg:gap-2 w-full mt-1  pt-2 pb-2 ">
                      <dl class="lg:hidden ">
                        <dt class="sr-only">Organization</dt>
                        <!-- <dd>{Organization.name}</dd> -->
                        <dd class="text-black text-opacity-45 font-ox text-base font-normal leading-normal">Wells  fargo</dd>
                      </dl>
                      <dl class="lg:hidden">
                        <dt class="sr-only">name</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>David Superman</dd>
                      </dl>
                      <p>David Superman</p>
                      
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>$150,000</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>$200,000</p>
                     
                    </td>
                    <td class=" lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2   text-center  lg:pt-2 pb-2">
                      <dl class="lg:hidden">
                        <dt class="sr-only">Date registered</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>25/12/2023</dd>
                      </dl>
                      <p >$150,000</p>
                    </td>
                    <td class="text-center hidden lg:table-cell pt-2 pb-2">
                      <p class="text-green-500">$500,000</p>
                     
                    </td>
                    <td class=" hidden lg:table-cell text-left pt-2 pb-2">
                      <p>Moderate</p>
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
                        <dt class="sr-only">name</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>David Superman</dd>
                      </dl>
                      <p>David Superman</p>
                      
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>$150,000</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>$200,000</p>
                     
                    </td>
                    <td class=" lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2   text-center  lg:pt-2 pb-2">
                      <dl class="lg:hidden">
                        <dt class="sr-only">Date registered</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>25/12/2023</dd>
                      </dl>
                      <p >$150,000</p>
                    </td>
                    <td class="text-center hidden lg:table-cell pt-2 pb-2">
                      <p class="text-green-500">$500,000</p>
                     
                    </td>
                    <td class=" hidden lg:table-cell text-left pt-2 pb-2">
                      <p>High</p>
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
                        <dt class="sr-only">name</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>David Superman</dd>
                      </dl>
                      <p>David Superman</p>
                      
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>$150,000</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>$200,000</p>
                     
                    </td>
                    <td class=" lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2   text-center  lg:pt-2 pb-2">
                      <dl class="lg:hidden">
                        <dt class="sr-only">Date registered</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>25/12/2023</dd>
                      </dl>
                      <p >$150,000</p>
                    </td>
                    <td class="text-center hidden lg:table-cell pt-2 pb-2">
                      <p class="text-green-500">$500,000</p>
                     
                    </td>
                    <td class=" hidden lg:table-cell text-left pt-2 pb-2">
                      <p>Low</p>
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
                        <dt class="sr-only">name</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>David Superman</dd>
                      </dl>
                      <p>David Superman</p>
                      
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>$150,000</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center">
                      <p>$200,000</p>
                     
                    </td>
                    <td class=" lg:table-cell mt-5 flex flex-col gap-1 lg:gap-2   text-center  lg:pt-2 pb-2">
                      <dl class="lg:hidden">
                        <dt class="sr-only">Date registered</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>25/12/2023</dd>
                      </dl>
                      <p >$150,000</p>
                    </td>
                    <td class="text-center hidden lg:table-cell pt-2 pb-2">
                      <p class="text-green-500">$500,000</p>
                     
                    </td>
                    <td class=" hidden lg:table-cell text-left pt-2 pb-2">
                      <p>Moderate</p>
                    </td>
                  </tr>

                
                </tbody>
              </table> 
                 </div>
          </div>
      </div>
  
</template>

<script lang="ts" setup></script>
