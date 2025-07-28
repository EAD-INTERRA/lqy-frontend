<template>
  <div class="bg-white min-h-screen">
    <!-- Header Section -->
    <div class="border-b border-gray-200 px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            <h1 class="text-lg font-medium text-gray-900">Live Emergency Feed</h1>
          </div>
          <div class="relative">
            <select class="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1.5 pr-8 text-[16px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="flex items-center gap-3">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search by Location, Status, or Driver"
              class="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-[16px] font-medium hover:bg-gray-200">
            Search
          </button>
          <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-[16px] font-medium hover:bg-gray-200">
            Filter
          </button>
          <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-[16px] font-medium hover:bg-gray-200">
            History
          </button>
        </div>
      </div>
    </div>

    <!-- Table Section -->
    <div class="px-6 py-4">
      <div class="overflow-x-auto">
        <table class="w-full">
          <!-- Table Header -->
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-3 px-4 text-[16px] font-medium text-gray-500">ID</th>
              <th class="text-left py-3 px-4 text-[16px] font-medium text-gray-500">Time</th>
              <th class="text-left py-3 px-4 text-[16px] font-medium text-gray-500">Location</th>
              <th class="text-left py-3 px-4 text-[16px] font-medium text-gray-500">Status</th>
              <th class="text-left py-3 px-4 text-[16px] font-medium text-gray-500">Driver</th>
              <th class="text-left py-3 px-4 text-[16px] font-medium text-gray-500">Time Elapsed</th>
              <th class="text-left py-3 px-4 text-[16px] font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          
          <!-- Table Body -->
          <tbody>
            <!-- Row 1 -->
            <tr class="border-b border-gray-100">
              <td class="py-4 px-4">
                <div class="flex items-center gap-2">
                  <span class="text-[16px] font-medium text-gray-900">#12345</span>
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </button>
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </td>
              <td class="py-4 px-4 text-[16px] text-gray-900">02:00 AM</td>
              <td class="py-4 px-4 text-[16px] text-gray-900">Gadanya, Bagwai</td>
              <td class="py-4 px-4">
                <span class="text-[16px] text-red-500 font-medium">Pending</span>
              </td>
              <td class="py-4 px-4">
                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-[16px] font-medium hover:bg-gray-200">
                  Assign
                </button>
              </td>
              <td class="py-4 px-4 text-[16px] text-red-500">5 Minutes</td>
              <td class="py-4 px-4">
                <button class="text-[16px] text-blue-600 hover:text-blue-800 font-medium">
                  View Details
                </button>
              </td>
            </tr>

            <!-- Row 2 -->
            <tr class="border-b border-gray-100">
              <td class="py-4 px-4">
                <div class="flex items-center gap-2">
                  <span class="text-[16px] font-medium text-gray-900">#12345</span>
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </button>
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </td>
              <td class="py-4 px-4 text-[16px] text-gray-900">01:00 AM</td>
              <td class="py-4 px-4 text-[16px] text-gray-900">Gadanya, Bagwai</td>
              <td class="py-4 px-4">
                <span class="text-[16px] text-gray-700 font-medium">Driver Assigned</span>
              </td>
              <td class="py-4 px-4 text-[16px] text-gray-900">David Goggins</td>
              <td class="py-4 px-4 text-[16px] text-gray-600">30 Minutes</td>
              <td class="py-4 px-4">
                <button class="text-[16px] text-blue-600 hover:text-blue-800 font-medium">
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Today Section Divider -->
      <div class="flex items-center gap-3 my-8">
        <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
        <span class="text-gray-400 font-medium">Today</span>
      </div>

      <!-- Today's Records -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <tbody>
            <!-- Row 3 -->
            <tr class="border-b border-gray-100">
              <td class="py-4 px-4">
                <div class="flex items-center gap-2">
                  <span class="text-[16px] font-medium text-gray-900">#12345</span>
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </button>
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </td>
              <td class="py-4 px-4 text-[16px] text-gray-900">11:00 PM</td>
              <td class="py-4 px-4 text-[16px] text-gray-900">Gadanya, Bagwai</td>
              <td class="py-4 px-4">
                <span class="text-[16px] text-gray-700 font-medium">In Progress</span>
              </td>
              <td class="py-4 px-4 text-[16px] text-gray-900">David Goggins</td>
              <td class="py-4 px-4 text-[16px] text-gray-600">2 Hours</td>
              <td class="py-4 px-4">
                <button class="text-[16px] text-blue-600 hover:text-blue-800 font-medium">
                  View Details
                </button>
              </td>
            </tr>

            <!-- Row 4 -->
            <tr class="border-b border-gray-100">
              <td class="py-4 px-4">
                <div class="flex items-center gap-2">
                  <span class="text-[16px] font-medium text-gray-900">#12345</span>
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td class="py-4 px-4 text-[16px] text-gray-900">09:00 PM</td>
              <td class="py-4 px-4 text-[16px] text-gray-900">Gadanya, Bagwai</td>
              <td class="py-4 px-4">
                <span class="text-[16px] text-green-500 font-medium">Complete</span>
              </td>
              <td class="py-4 px-4 text-[16px] text-gray-900">David Goggins</td>
              <td class="py-4 px-4 text-[16px] text-gray-600">1.5 Hours</td>
              <td class="py-4 px-4">
                <button class="text-[16px] text-blue-600 hover:text-blue-800 font-medium">
                  View Details
                </button>
              </td>
            </tr>

            <!-- Row 5 -->
            <tr class="border-b border-gray-100">
              <td class="py-4 px-4">
                <div class="flex items-center gap-2">
                  <span class="text-[16px] font-medium text-gray-900">#12345</span>
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </button>
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </td>
              <td class="py-4 px-4 text-[16px] text-gray-900">02:00 PM</td>
              <td class="py-4 px-4 text-[16px] text-gray-900">Gadanya, Bagwai</td>
              <td class="py-4 px-4">
                <span class="text-[16px] text-gray-700 font-medium">Driver Assigned</span>
              </td>
              <td class="py-4 px-4 text-[16px] text-gray-900">David Goggins</td>
              <td class="py-4 px-4 text-[16px] text-gray-600">30 Minutes</td>
              <td class="py-4 px-4">
                <button class="text-[16px] text-blue-600 hover:text-blue-800 font-medium">
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex items-center gap-2 mt-6">
        <button class="px-3 py-1 bg-red-500 text-white rounded text-[16px] font-medium">
          Page 1
        </button>
        <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-[16px] font-medium hover:bg-gray-200">
          2
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>