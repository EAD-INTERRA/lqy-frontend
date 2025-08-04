<template>
  <div class="w-full bg-white rounded-lg border border-gray-200 overflow-hidden font-pop">
    <div class="p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
      />
    </div>

    <!-- Mobile Card View (hidden on larger screens) -->
    <div class="mobile-only">
      <div v-if="loading" class="p-4">
        <div v-for="n in 3" :key="n" class="mb-4 p-4 border border-gray-100 rounded-lg animate-pulse">
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            <div class="h-3 bg-gray-200 rounded w-1/2"></div>
            <div class="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>

      <div v-else-if="filteredRows.length === 0" class="p-8 text-center">
        <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
            </path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No records found</h3>
        <p class="text-gray-500">There are no items to display at the moment.</p>
      </div>

      <div v-else class="divide-y divide-gray-100 max-h-96 overflow-y-auto">
        <div v-for="(row, rowIndex) in filteredRows" :key="rowIndex" class="p-4 hover:bg-gray-50 transition-colors duration-150">
          <div class="space-y-2">
            <div v-for="(cell, cellIndex) in row.values" :key="cellIndex" class="flex justify-between items-start">
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

    <!-- Desktop Table View -->
    <div class="desktop-only">
      <div class="overflow-x-auto">
        <table class="w-full">
          <!-- Header -->
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th v-for="(head, index) in headers" :key="index"
                class="px-6 py-4 text-left text-sm font-normal text-gray-500 whitespace-nowrap">
                {{ head }}
              </th>
            </tr>
          </thead>

          <!-- Loading State -->
          <tbody v-if="loading" class="bg-white divide-y divide-gray-300">
            <tr v-for="n in 5" :key="n" class="animate-pulse">
              <td v-for="(head, index) in headers" :key="index" class="px-6 py-4 whitespace-nowrap">
                <div class="h-4 bg-gray-300 rounded w-full"></div>
              </td>
            </tr>
          </tbody>

          <!-- Empty State -->
          <tbody v-else-if="filteredRows.length === 0" class="bg-white">
            <tr>
              <td :colspan="headers.length" class="px-6 py-12 text-center">
                <div class="flex flex-col items-center">
                  <div class="w-16 h-16 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                      </path>
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
          <tbody v-else class="bg-white divide-y divide-gray-200">
            <tr v-for="(row, rowIndex) in filteredRows" :key="rowIndex" class="hover:bg-gray-100 transition-colors duration-150">
              <td v-for="(cell, cellIndex) in row.values" :key="cellIndex"
                class="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
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
</template>

<script setup>
import { ref, computed } from 'vue';

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

const searchQuery = ref('');

const filteredRows = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) return props.rows;

  return props.rows.filter(row =>
    row.values.some(cell =>
      String(cell).toLowerCase().includes(query)
    )
  );
});
</script>

<style scoped>
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

* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

table {
  border-collapse: separate;
  border-spacing: 0;
}

thead th {
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 400;
  color: #6b7280;
  font-size: 14px;
}

tbody tr {
  border-bottom: 1px solid #f3f4f6;
}

tbody tr:last-child {
  border-bottom: none;
}

tbody td {
  color: #374151;
  font-weight: 400;
}

tbody tr:hover {
  background-color: #f9fafb;
}

.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}

.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .desktop-only {
    display: block;
  }
}
</style>
