<template>
  <div class="fixed">
    <div>
      <form @submit.prevent="handleSubmit">
        <div v-for="(field, index) in fields" :key="index" class="mt-2">
          <label
            :for="field.name"
            class="w-full text-[16px] font-medium text-gray-700"
          >
            {{ field.label }}
          </label>
          <input
            :type="field.type"
            :id="field.name"
            v-model="formData[field.name]"
            :placeholder="field.placeholder"
            class="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md text-black shadow-sm focus:outline-none focus:ring-theme-primary focus:border-theme-primary sm:text-[16px]"
          />
        </div>

        <!-- <div class="flex gap-2 w-fit ml-auto mt-4 font-pop">
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
        </div> -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalTitle: { type: String, default: "Edit User" },
    submitButtonText: { type: String, default: "Submit" },
    fields: { type: Array, default: () => [] },
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
/* Add any additional styles here */
</style>
