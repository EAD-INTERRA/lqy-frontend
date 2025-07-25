<template>
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
  >
    <div
      class="bg-white rounded-3xl shadow-xl w-full max-w-md flex flex-col h-[504px] p-6 font-pop"
    >
    
      <h2 class="text-[16px] font-bold mb-4 text-black">{{ modalTitle }}</h2>

      <!-- Scrollable Form Container -->
      <div class="flex-1 overflow-y-auto pr-1">
        <form @submit.prevent="handleSubmit">
          <div v-for="(field, index) in fields" :key="index" class="mb-4">
            <label
              :for="field.name"
              class="block text-[16px] font-medium text-gray-700"
            >
              {{ field.label }}
            </label>

            <select v-if="field.type === 'select'" :id="field.name" v-model="formData[field.name]"
              class="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-theme-primary focus:border-theme-primary sm:text-[16px]">
              <option value="" disabled selected>
                {{ field.placeholder }}
              </option>
              <option v-for="option in field.options" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>

            <input
              v-else
              :type="field.type"
              :id="field.name"
              v-model="formData[field.name]"
              :placeholder="field.placeholder"
              class="mt-1 block w-full px-3 py-2 border  text-black border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-theme-primary sm:text-[16px]"
            />
          </div>
          <!-- Button group aligned to bottom right -->
          <div class="flex gap-2 w-fit ml-auto mt-4 font-pop">
            <button
              type="submit"
              class="bg-theme-primary text-white py-1.5 px-4 rounded-md text-[16px]"
            >
              {{ submitButtonText }}
            </button>

            <button
              @click="closeModal"
              type="button"
               class="px-4 py-2 border text-[16px] border-gray-300 rounded-lg text-gray-700"
                       >
            
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalTitle: { type: String, default: "Edit User" },
    submitButtonText: { type: String, default: "Submit" },
    fields: { type: Array, default: () => [] },
    showModal: { type: Boolean, default: false },
  },
  data() {
    return {
      formData: {},
    };
  },
  watch: {
    fields: {
      handler(newFields) {
        newFields.forEach((field) => {
          this.formData[field.name] = "";
        });
      },
      immediate: true,
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.formData);
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* You can also customize scrollbars here if needed */
</style>
