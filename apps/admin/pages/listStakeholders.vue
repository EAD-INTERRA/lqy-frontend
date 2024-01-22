<template>
    <div>
      <div class="listDiv mx-auto lg:ml-64">
            <div class="  justify-between flex hide ">
              <div class="flex gap-4 pb-6">
                <div class="searchBar flex">
                  <img src="~/assets/images/search.svg"  class="w-6 pl-2"/>
                  <input class="form-control w-3/4" placeholder="Search " />
                </div>
                <div class="filterBar flex gap-2">
                  <img src="~/assets/images/filter-icon.svg" class="pl-2 w-6" />
                  <input class="form-control w-2/4" placeholder="FILTER " />
                </div>
              </div>
              <div> 
               <p class=" opacity-65">Active (25) | Rejected (4) | pending (26)</p>
              </div>
            </div>
            <hr />
            <div class="">
              <table class="table-fixed ">
                <thead>
                  <tr class="tableHead">
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Role</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Stakeholder name</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Organization</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell ">Verification status</th>
                      <th class="w-48 pt-2 pb-2 hidden lg:table-cell">Date registered</th>
                      <th class="w-32 pt-2 pb-2 hidden lg:table-cell">Action</th>
                  </tr>

                </thead>
                <tbody>
                  
                  <tr class="rowBg rowText">
                    <td class="  text-center rowTextTd  pt-2 pb-2 ">
                      <dl class="lg:hidden ">
                        <dt class="sr-only">Organization</dt>
                        <!-- <dd>{Organization.name}</dd> -->
                        <dd class="organization">Wells  fargo</dd>
                      </dl>
                      <dl class="lg:hidden">
                        <dt class="sr-only">Stakeholder name</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>Jon Doe</dd>
                      </dl>
                      <p>Broker</p>
                      
                    </td>
                    <td class=" hidden lg:table-cell text-center pt-2 pb-2">
                      <p>Jon Doe</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center pt-2 pb-2">
                      <p>Wells  fargo</p>
                     
                    </td>
                    <td class=" lg:table-cell mt-5 flex flex-col gap-2   text-center  pt-2 pb-2">
                      <dl class="lg:hidden">
                        <dt class="sr-only">Date registered</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>25/12/2023</dd>
                      </dl>
                      <p class="status">Accepted</p>
                      
                    </td>
                    <td class="text-center hidden lg:table-cell pt-2 pb-2">
                      <p>25/12/2023</p>
                     
                    </td>
                    <td class=" hidden lg:table-cell text-center pt-2 pb-2">
                      <p>on</p>
                    </td>
                  </tr>
                  <tr class=" rowText">
                    <td class="  text-center rowTextTd  pt-2 pb-2 ">
                      <dl class="lg:hidden ">
                        <dt class="sr-only">Organization</dt>
                        <!-- <dd>{Organization.name}</dd> -->
                        <dd class="organization">Wells  fargo</dd>
                      </dl>
                      <dl class="lg:hidden">
                        <dt class="sr-only">Stakeholder name</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>Jon Doe</dd>
                      </dl>
                      <p>Broker</p>
                      
                    </td>
                    <td class=" hidden lg:table-cell text-center pt-2 pb-2">
                      <p>Jon Doe</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center pt-2 pb-2">
                      <p>Wells  fargo</p>
                     
                    </td>
                    <td class=" lg:table-cell mt-5 flex flex-col gap-2   text-center  pt-2 pb-2">
                      <dl class="lg:hidden">
                        <dt class="sr-only">Date registered</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>25/12/2023</dd>
                      </dl>
                      <p class="status">Accepted</p>
                      
                    </td>
                    <td class="text-center hidden lg:table-cell pt-2 pb-2">
                      <p>25/12/2023</p>
                     
                    </td>
                    <td class=" hidden lg:table-cell text-center pt-2 pb-2">
                      <p>on</p>
                    </td>
                  </tr>
                  <tr class="rowBg rowText">
                    <td class="  text-center rowTextTd  pt-2 pb-2 ">
                      <dl class="lg:hidden ">
                        <dt class="sr-only">Organization</dt>
                        <!-- <dd>{Organization.name}</dd> -->
                        <dd class="organization">Wells  fargo</dd>
                      </dl>
                      <dl class="lg:hidden">
                        <dt class="sr-only">Stakeholder name</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>Jon Doe</dd>
                      </dl>
                      <p>Broker</p>
                      
                    </td>
                    <td class=" hidden lg:table-cell text-center pt-2 pb-2">
                      <p>Jon Doe</p>
                    </td>
                    <td class=" hidden lg:table-cell text-center pt-2 pb-2">
                      <p>Wells  fargo</p>
                     
                    </td>
                    <td class=" lg:table-cell mt-5 flex flex-col gap-2   text-center  pt-2 pb-2">
                      <dl class="lg:hidden">
                        <dt class="sr-only">Date registered</dt>
                        <!-- <dd>{Stakeholder.name}</dd> -->
                        <dd>25/12/2023</dd>
                      </dl>
                      <p class="status">Accepted</p>
                      
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

<script lang="ts" setup></script>
