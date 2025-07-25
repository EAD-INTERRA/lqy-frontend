<template>
  <div class="w-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden font-pop">
    <!-- Mobile Card View (hidden on larger screens) -->
    <div class="block md:hidden">
      <!-- Loading State for Mobile -->
      <div v-if="loading" class="p-4">
        <div v-for="n in 3" :key="n" class="mb-4 p-4 border border-gray-100 rounded-lg animate-pulse">
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            <div class="h-3 bg-gray-200 rounded w-1/2"></div>
            <div class="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
      
      <!-- Empty State for Mobile -->
      <div v-else-if="rows.length === 0" class="p-8 text-center">
        <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No records found</h3>
        <p class="text-gray-500">There are no items to display at the moment.</p>
      </div>
      
      <!-- Mobile Cards -->
      <div v-else class="divide-y divide-gray-100 max-h-96 overflow-y-auto">
        <div
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="p-4 hover:bg-gray-50 transition-colors duration-150"
        >
          <div class="space-y-2">
            <div
              v-for="(cell, cellIndex) in row.values"
              :key="cellIndex"
              class="flex justify-between items-start"
            >
              <span class="text-[16px] font-medium text-gray-600 min-w-0 flex-shrink-0 mr-4">
                {{ headers[cellIndex] }}:
              </span>
              <span class="text-[16px] text-gray-900 text-right min-w-0 flex-1">
                <slot :name="'cell-' + cellIndex" :value="cell" :row="row">
                  {{ cell ? (typeof cell === 'string' ? cell.charAt(0).toUpperCase() + cell.slice(1) : cell) : "—" }}
                </slot>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

   <div class="hidden md:block">
      <div class="overflow-x-auto">
        <div class="max-h-[400px]  overflow-y-auto scrollbar-thin scrollbar-thumb-[#2B2E38]/50 scrollbar-track-[#2B2E38]/10 scrollbar-rounded-full">
          <table class="w-full ">
            <!-- Sticky Header -->
            <thead class="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
              <tr>
                <th
                  v-for="(head, index) in headers"
                  :key="index"
                  class="px-6 py-4 text-left text-[16px] font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap bg-gray-50"
                >
                  {{ head }}
                </th>
              </tr>
            </thead>
            
            <!-- Loading State -->
            <tbody v-if="loading" class="bg-white divide-y divide-gray-200">
              <tr v-for="n in 5" :key="n" class="animate-pulse">
                <td
                  v-for="(head, index) in headers"
                  :key="index"
                  class="px-6 py-4 whitespace-nowrap"
                >
                  <div class="h-4 bg-gray-200 rounded w-full"></div>
                </td>
              </tr>
            </tbody>
            
            <!-- Empty State or Custom Message -->
            <tbody v-else-if="rows.length === 0" class="bg-white">
              <tr>
                <td :colspan="headers.length" class="px-6 py-12 text-center">
                  <div class="flex flex-col items-center">
                    <div class="w-16 h-16 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">
                      {{ customMessage ? customMessage : 'No records found' }}
                    </h3>
                    <p class="text-gray-500" v-if="!customMessage">There are no items to display at the moment.</p>
                  </div>
                </td>
              </tr>
            </tbody>
            
            <!-- Data Rows -->
            <tbody v-else class="bg-white divide-y divide-gray-200 ">
              <tr
                v-for="(row, rowIndex) in rows"
                :key="rowIndex"
                class="hover:bg-gray-50 transition-colors duration-150"
              >
                <td
                  v-for="(cell, cellIndex) in row.values"
                  :key="cellIndex"
                  class="px-6 py-4 text-[16px]  text-gray-900"
                >
                  <div class="truncate" :title="cell">
                    <slot :name="'cell-' + cellIndex" :value="cell" :row="row">
                      {{ cell ? (typeof cell === 'string' ? cell.charAt(0).toUpperCase() + cell.slice(1) : cell) : "—" }}
                    </slot>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  headers: {
    type: Array,
    required: true,
    default: () => []
  },
  rows: {
    type: Array,
    required: true,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  },
  showCheckbox: {
    type: Boolean,
    default: true
  },
  customMessage: {
    type: String,
    default: ''
  }
});

// You can add additional reactive data or methods here if needed
</script>

<style scoped>
/* Custom scrollbar for webkit browsers */
.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Smooth transitions */
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>