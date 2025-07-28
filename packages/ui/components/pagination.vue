<template>
  <div class="flex font-pop justify-between items-center pt-4 border-t border-gray-100 mt-4 text-[16px]">
    <!-- Pagination Buttons -->
    <div class="flex space-x-2">
      <button
        v-for="page in displayedPages"
        :key="page"
        @click="changePage(page)"
        class="h-10 w-10 flex items-center justify-center rounded-lg font-medium"
        :class="page === currentPage 
          ? 'bg-red-100 text-red-500' 
          : 'text-gray-600 hover:bg-gray-100'"
      >
        {{ page }}
      </button>

      <!-- Ellipsis and Last Page -->
      <span v-if="totalPages > maxVisiblePages" class="text-gray-500">...</span>
      <button
        v-if="totalPages > maxVisiblePages"
        @click="changePage(totalPages)"
        class="h-10 w-10 flex items-center justify-center rounded-lg text-gray-600 font-medium hover:bg-gray-100"
      >
        {{ totalPages }}
      </button>
    </div>

    <!-- Close Button (only if it's a modal) -->
    <button
      v-if="isModal"
      @click="emit('close')"
      class="px-6 py-2 border border-gray-300 rounded-lg text-[16px] text-gray-600 hover:bg-gray-50"
    >
      Close
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  totalPages: { type: Number, required: true },
  maxVisiblePages: { type: Number, default: 4 },
  isModal: { type: Boolean, default: false }
});

// ✅ Define all emits in one call
const emit = defineEmits(['close', 'page-changed']);

const currentPage = ref(1);

const displayedPages = computed(() => {
  const pages = [];
  for (let i = 1; i <= Math.min(props.maxVisiblePages, props.totalPages); i++) {
    pages.push(i);
  }
  return pages;
});

const changePage = (page) => {
  currentPage.value = page;
  emit('page-changed', page);
  console.log(`Page changed to: ${page}`);
};
</script>
