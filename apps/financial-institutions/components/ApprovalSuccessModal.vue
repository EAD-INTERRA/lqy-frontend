<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-sm mx-4 relative p-8">
      <!-- Added close button in top right -->
      <button @click="emit('close')" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">
        ✕
      </button>

      <!-- Added centered content with green checkmark and text -->
      <div class="flex flex-col items-center text-center space-y-4">
        <!-- Green checkmark icon -->
        <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <!-- Success message -->
        <h2 class="text-lg font-medium text-gray-900">Request Approved</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['close']);
</script>
