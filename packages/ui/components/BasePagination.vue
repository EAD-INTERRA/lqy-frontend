<template>
  <div class="flex items-center justify-between mt-4">
    <div class="text-sm text-gray-600">
      Showing {{ startItem }}-{{ endItem }} of {{ totalCount }}
    </div>
    <div class="flex items-center space-x-1">
      <button @click="$emit('update:page', Math.max(1, currentPage - 1))" :disabled="currentPage === 1"
        :class="[
          'px-3 py-1 text-sm border rounded-md transition-colors',
          currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
        ]">
        Previous
      </button>
      <button
      v-for="page in totalPages"
      :key="page"
      @click="$emit('update:page', page)"
      :class="[
        'px-3 py-1 text-sm border rounded-md min-w-[40px] transition-colors',
        currentPage === page
          ? '!bg-[#852282] text-white border-blue-600 hover:!bg-[#6b1b68]'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
      ]"
    >
      {{ page }}
    </button>
      <button @click="$emit('update:page', Math.min(totalPages, currentPage + 1))"
        :disabled="currentPage === totalPages" :class="[
          'px-3 py-1 text-sm border rounded-md transition-colors',
          currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
        ]">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  startItem: { type: Number, required: true },
  endItem: { type: Number, required: true },
  totalCount: { type: Number, required: true }
});
</script>