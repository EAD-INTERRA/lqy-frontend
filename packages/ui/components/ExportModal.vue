<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 font-pop"
  >
    <div class="relative bg-white rounded-[15px] shadow-xl p-6 w-full max-w-md">
      <!-- Close button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-red-400 hover:text-gray-600 focus:outline-none"
        aria-label="Close modal"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Header -->
      <div class="flex items-center gap-2 mb-4">
        <img v-if="iconSrc" :src="iconSrc" alt="" class="w-5 h-5" />
        <component
          v-else-if="iconComponent"
          :is="iconComponent"
          class="w-5 h-5"
        />
        <h2 class="text-[16px] font-bold text-gray-900">
          {{ title }}
        </h2>
      </div>

      <!-- Subtitle / description -->
      <p class="text-[16px] text-gray-600 mb-6">{{ subtitle }}</p>

      <!-- Period selector -->
      <div v-if="periodOptions && periodOptions.length" class="mb-6">
        <div class="relative inline-block w-[92px]">
          <select
            v-model="selectedPeriod"
            class="w-full px-3 py-2 pr-8 border text-theme-textColor border-gray-300 rounded-md bg-white text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
          >
            <option
              v-for="option in periodOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
          />
        </div>
      </div>

      <!-- Date range inputs -->
      <div v-if="showDateRange" class="space-y-4 mb-8 text-theme-textColor">
        <div>
          <label class="block text-[16px] font-bold text-gray-700 mb-2"
            >From</label
          >
          <input
            v-model="fromDate"
            type="date"
            class="w-full px-3 py-2 text-[16px] border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label class="block text-[16px] font-bold text-gray-700 mb-2"
            >To</label
          >
          <input
            v-model="toDate"
            type="date"
            class="w-full px-3 py-2 text-[16px] border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between">
        <span class="text-[16px] text-gray-500 italic">{{
          recordsCountText
        }}</span>
        <button
          @click="handleExportClick"
          class="flex items-center gap-2 px-4 py-2 bg-white text-theme-textColor border text-[16px] font-medium rounded-[7.5px]"
          :disabled="exportDisabled"
        >
          <slot name="export-button-label">Export</slot>
          <img
            src="../images/resmas-export-file.svg"
            alt="Export icon"
            class="w-4 h-4"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, toRefs } from "vue";
import { ChevronDown, X } from "lucide-vue-next";

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  periodOptions: {
    type: Array,
    default: () => [
      { label: "Period", value: "custom" },
      { label: "All", value: "last7days" },
    ],
  },
  initialPeriod: { type: String, default: "custom" },
  showDateRange: { type: Boolean, default: true },
  recordsCount: { type: Number, default: 0 },
  iconSrc: { type: String, default: null },
  iconComponent: { type: Object, default: null },
  exportIconSrc: { type: String, default: null },
  exportIconComponent: { type: Object, default: null },
  exportDisabled: { type: Boolean, default: false },
});

const emit = defineEmits(["close", "export"]);

const { initialPeriod, recordsCount, subtitle } = toRefs(props);

const selectedPeriod = ref(initialPeriod.value);
const fromDate = ref("");
const toDate = ref("");

// Allow rendering subtitle as html if needed (like with bold tags)
const subtitleHtml = computed(() => subtitle.value);

const recordsCountText = computed(() => {
  return recordsCount.value > 0
    ? `${recordsCount.value} Records found`
    : "No records found";
});

const closeModal = () => {
  emit("close");
};

const handleExportClick = () => {
  emit("export", {
    period: selectedPeriod.value,
    fromDate: fromDate.value,
    toDate: toDate.value,
  });
};
</script>
