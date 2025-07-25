<template>
  <div>
    <div v-for="(event, index) in events" :key="index" class="flex items-start">
      <!-- Dot or Icon -->
      <div class="flex flex-col items-center mr-4">
        <div
          v-if="!event.completed"
          class="w-6 h-6 border-2 border-gray-400 rounded-full bg-white"
        ></div>

        <div
          v-else
          class="w-6 h-5 bg-green-500 rounded-full flex items-center justify-center"
        >
          <img :src="event.icon" alt="completed" />
        </div>

        <!-- Vertical Line -->
        <div
          v-if="index < events.length - 1"
          class="w-0.5 h-5 bg-gray-300 mt-2"
        ></div>
      </div>

      <!-- Content -->
      <div class="flex-1">
        <h3
          v-html="event.title"
          class="text-gray-800 font-medium text-[16px]"
        ></h3>

        <p class="text-gray-500 text-[10px] mt-1">{{ event.time }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  events: {
    type: Array,
    default: () => [],
  },
});
</script>
