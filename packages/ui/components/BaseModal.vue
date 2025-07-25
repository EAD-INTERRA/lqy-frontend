<template>
  <div
    v-show="visible"
    class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
  >
    <div
      class="bg-white p-6 rounded-[15px] shadow-xl w-full font-pop max-w-sm relative"
    >
      <!-- Optional Close Button -->
      <button
        v-if="showClose"
        @click="$emit('close')"
        class="absolute top-3 right-3 text-gray-500 hover:text-black"
      >
        &times;
      </button>

      <!-- Header slot -->
      <slot name="header" />

      <!-- Default content slot -->
      <slot />

      <!-- Footer slot -->
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean,
  showClose: {
    type: Boolean,
    default: true,
  },
});
defineEmits(["close"]);
</script>
