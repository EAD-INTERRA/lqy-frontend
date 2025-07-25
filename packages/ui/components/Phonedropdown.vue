<template>
  <div class="w-full">
    <!-- Label -->
    <label
      :for="id"
      class="block my-2 mx-1 text-[16px] font-medium text-theme-active"
    >
      {{ label }}
      <span v-if="required" class="text-red-800 font-bold">*</span>
    </label>

    <!-- Phone Number Input with Country Code -->
    <div class="flex items-center space-x-2 mb-2">
      <!-- Country Code Dropdown -->
      <div class="relative w-24">
        <select
          v-model="selectedCountryCode"
          class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#d3ff00]/50 appearance-none cursor-pointer"
        >
          <option
            v-for="(option, index) in countryCodes"
            :key="index"
            :value="option.value"
            class="text-black"
          >
            {{ option.label }}
          </option>
        </select>

        <!-- Dropdown Arrow -->
        <!-- <div class="absolute inset-y-0 right-2 flex items-center pointer-events-none">
          <img src="/assets/images/dropdown-arrow.svg" alt="Dropdown Arrow" class="h-4 w-4" />
        </div> -->
      </div>

      <!-- Phone Number Input -->
      <input
        type="tel"
        class="w-full px-3 py-2 border bg-[#EBEBEC] border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d3ff00]/50"
        :placeholder="placeholder"
        v-model="phoneNumber"
        @input="updatePhoneNumber"
        required
      />
    </div>

    <!-- Support Text -->
    <span class="text-gray-400 text-[16px]">{{ supportText }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
const loading = ref(false);
const props = defineProps({
  label: String,
  supportText: String,
  placeholder: String,
  id: String,
  modelValue: String, // Support for v-model
  required: Boolean,
  loading: Boolean
});

const emit = defineEmits(["update:modelValue"]);

// Country codes for the dropdown
const countryCodes = ref([
  { label: "🇳🇬 +234", value: "+234" }, // Nigeria
  { label: "🇺🇸 +1", value: "+1" }, // USA
  { label: "🇬🇧 +44", value: "+44" }, // UK
  { label: "🇮🇳 +91", value: "+91" }, // India
]);

const selectedCountryCode = ref("+234"); // Default country code
const phoneNumber = ref(""); // Phone number input

const updatePhoneNumber = () => {
  emit("update:modelValue", `${selectedCountryCode.value}${phoneNumber.value}`);
};
</script>
