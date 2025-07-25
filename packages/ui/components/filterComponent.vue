<template>
  <div
    class="absolute right-0  text-theme-textColor  mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
  >
    <ul class="py-1 text-gray-700 text-[11px]">
      <li>
        <button
          @click="selectFilter('location')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          By Location
        </button>
      </li>
      <li>
        <button
          @click="selectFilter('status')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          By Status
        </button>
      </li>
      <li>
        <button
          @click="selectFilter('period')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          By Period
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const emit = defineEmits(["filter"]);

const selectFilter = (type) => {
  emit("filter", type);
};
</script>
