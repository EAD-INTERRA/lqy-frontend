<template>
  <div class="w-full">
    <!-- Label -->
    <label
      :for="id"
      class="block my-[2px] mx-[5px] text-sen-xsm font-medium text-theme-textColor"
    >
      {{ label }}
      <span v-if="required" class="font-in font-bold text-red-800">*</span>
    </label>

    <!-- Dropdown -->
    <div class="relative mb-2 hover:cursor-pointer">
      <select
        :id="id"
        v-model="selectedValue"
        class="w-full px-4 py-3 bg-gray-200 rounded-lg text-theme-textColor placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-theme-primary/50 pr-10"
        :required="required"
      >
        <option value="" disabled>{{ placeholder }}</option>
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
          class="px-4 py-3 bg-[#EBEBEC] text-gray-400 placeholder-theme-textColor focus:outline-none focus:ring-2 focus:ring-[#d3ff00]/50 hover:bg-theme-primary cusor-pointer hover:text-theme-active appearance-none"
        >
          {{ option.label }}
        </option>
      </select>

      <!-- Dropdown Arrow -->
      <!-- <div
        class="absolute inset-y-0 end-3 flex items-center pointer-events-none"
      >
        <img
          src="/assets/images/dropdown-arrow.svg"
          alt="Dropdown Arrow"
          class="h-5 w-5"
        />
      </div> -->
    </div>

    <!-- Support Text -->
    <span class="text-gray-400 text-[16px]">{{ supportText }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  label: String,
  supportText: String,
  placeholder: String,
  id: String,
  modelValue: String,
  required: Boolean,
  options: {
    type: Array as () => { label: string; value: string }[],
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

// Ensure the placeholder is selected by default
const selectedValue = computed({
  get: () => props.modelValue || "",
  set: (value) => emit("update:modelValue", value),
});
</script>
