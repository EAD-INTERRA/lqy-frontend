<template>
  <button
    :type="type"
    :disabled="loading"
    class="px-4 bg-white whitespace-nowrap border h-[28px] px-4 py-1 text-black font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
  >
    <!-- Image, shown only when not loading -->
    <img v-if="img && !loading" :src="img" class="w-5 h-5" />

    <!-- Show Spinner when loading -->
    <svg
      v-if="loading"
      class="w-5 h-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M12 2a10 10 0 0110 10h-4a6 6 0 10-6 6v4a10 10 0 0110-10z"
      ></path>
    </svg>

    <!-- Label -->
    <span v-if="!loading">{{ label }}</span>
  </button>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  label: String,
  img: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "button",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

// Dynamically resolve image path
const img = computed(() => {
  return props.img ? new URL(props.img, import.meta.url).href : null;
});
</script>
