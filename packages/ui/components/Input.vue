<!-- Input.vue -->
<template>
  <div class="w-full">
    <div class="flex flex-col gap-[6px]">
      <label :for="id"  class="block my-[2px] mx-[5px] text-[16px] font-medium text-theme-textColor" style="font-size: 16px !important;">
        {{ label }}
       <span v-if="required" class="font-in font-bold text-red-800">*</span>
      </label>
      <div class="relative mb-2">
        <input
          :type="type"
          :id="id"
          :pattern="
            type === 'tel'
              ? '^(\\+234|0)?(70[0-9]|80[0-9]|81[0-9]|90[0-9]|91[0-9])[0-9]{7}$'
              : undefined
          "
          class="w-full px-4 py-3 bg-white border border-gray-400 rounded-lg text-theme-textColor placeholder-gray-500 placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-theme-primary/50 pr-10"
          :placeholder="placeholder"
          :value="modelValue"
          @input="updateValue"
          :required="required ? true : undefined"
        />

        <!-- Show '@' when input type is 'email' -->
        <span
          v-if="type === 'email'"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none"
        >
          @
        </span>
      </div>
    </div>
    <span class="text-red-400 text-[16px]">{{ supportText }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: String,
  supportText: String,
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
  id: String,
  modelValue: String,
  required: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
