<!-- Button.vue -->
<template>
  <button
    :type="type"
    :disabled="loading"
    class="w-full py-3 px-4 bg-[#E53935] text-white rounded-lg disabled:opacity-50"
  >
    <span v-if="loading">Loading...</span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'button',
  },
  loading: Boolean,
});
</script>
