<template>
    <div class="relative"> <!-- Added relative here -->
      <input
        type="text"
        class="w-full px-4 py-3 bg-theme-bg-input rounded-lg text-theme-textColor placeholder-theme-textColor/50 focus:outline-none focus:ring-2 focus:ring-theme-primary/50 pl-10" <!-- Changed pr-10 to pl-10 -->
        :placeholder="placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
      <!-- icon -->
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          class="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps({
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Search..."
    }
  });
  
  const emit = defineEmits<{
    (e: "update:modelValue", value: string): void
  }>();
  </script>