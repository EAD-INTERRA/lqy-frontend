<template>
  <div class="flex flex-col gap-[6px]">
    <div class="flex flex-col gap-[6px]">
      <!-- Label -->
      <label
        :for="id"
        class="block my-[2px] mx-[5px] text-sen-xsm font-medium text-theme-textColor"
      >
        {{ label }}
        <span v-if="required" class="font-in font-bold text-red-800">*</span>
      </label>

      <!-- Input with Icon -->
      <div class="relative">
        <input
          :type="passwordFieldType"
          :id="id"
          :name="name"
          class="w-full px-4 py-3 bg-white border border-gray-400 rounded-lg text-theme-textColor placeholder-gray-500   placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-theme-primary/50 pr-10"
          :placeholder="placeholder"
          :value="modelValue"
          :required="required ? true : undefined"
          @input="emit('update:modelValue', $event.target.value)"
        />

        <!-- Toggle Password Visibility -->
        <button
          type="button"
          class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200"
          @click="togglePasswordVisibility"
          aria-label="Toggle password visibility"
        >
          <svg
            v-if="passwordFieldType === 'password'"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 5.83329V4.66663C4 2.73579 4.58333 1.16663 7.5 1.16663C10.4167 1.16663 11 2.73579 11 4.66663V5.83329"
              stroke="#2B2E38"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.4166 12.8334H4.58329C2.24996 12.8334 1.66663 12.25 1.66663 9.91671V8.75004C1.66663 6.41671 2.24996 5.83337 4.58329 5.83337H10.4166C12.75 5.83337 13.3333 6.41671 13.3333 8.75004V9.91671C13.3333 12.25 12.75 12.8334 10.4166 12.8334Z"
              stroke="#2B2E38"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825a11.58 11.58 0 01-1.875.175c-6.3 0-9.54-7-9.54-7s1.56-3.405 5.046-5.568m7.347 2.232c1.482.852 2.787 2.025 3.921 3.336a20.075 20.075 0 01-1.371 1.855M4.75 4.75l14.5 14.5"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Support Text -->
    <span class="text-gray-400 text-[16px]">{{ supportText }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";

// Define props
const props = defineProps({
  label: String,
  name: String,
  id: String,
  placeholder: String,
  required: Boolean,
  modelValue: String,
  supportText: String,
});

// Emit event for v-model binding
const emit = defineEmits(["update:modelValue"]);

// Password visibility toggle
const passwordFieldType = ref("password");

function togglePasswordVisibility() {
  passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password";
}
</script>
