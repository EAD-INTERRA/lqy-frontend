<script lang="ts" setup>
import { ref, computed } from "vue";
import BaseTable from "../../../packages/ui/components/BaseTable.vue";
import BasePagination from "../../../packages/ui/components/BasePagination.vue";

const { $services } = useNuxtApp();

const margins = ref([]);

onMounted(async () => {
  const response = await $services.shareholder.getMargins();
  margins.value = response.body
});
const headers = [
  "S/N",
  "Name",
  "Date Uploaded",
  "File"
];

const uploaderNames = [
  "Alice Johnson",
  "Bob Smith",
  "Carol Williams",
  "David Brown",
  "Emma Davis",
  "Frank Wilson",
];

function generateDummyData(rows: number) {
  const randomIndex = Math.floor(Math.random() * uploaderNames.length);
const randomName = uploaderNames[randomIndex];
  const data = [];
  for (let i = 1; i <= rows; i++) {
    data.push({
      sn: i,
      name: randomName,
      dateUploaded: new Date(Date.now() - i * 86400000).toLocaleDateString(),
      file: `file${i}.pdf`
    });
  }
  return data;
}

const allRequests = ref(generateDummyData(25));

const currentPage = ref(1);
const pageSize = ref(10);

const totalCount = computed(() => allRequests.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value));
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endItem = computed(() => Math.min(currentPage.value * pageSize.value, totalCount.value));

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return allRequests.value.slice(start, end).map((request) => ({
    values: [
      request.sn,
      request.name,
      request.dateUploaded,
      request.file,
    ],
    raw: request,
  }));
});

function setCurrentPage(page: number) {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
}

// Modal state and file upload handling
const showUploadModal = ref(false);
const showSuccessModal = ref(false);
const uploadSuccessUploader = ref<string | null>(null);
const selectedFiles = ref<File[]>([]);

const fileInputRef = ref<HTMLInputElement | null>(null);

function openUploadModal() {
  showUploadModal.value = true;
  selectedFiles.value = [];
}

function closeUploadModal() {
  showUploadModal.value = false;
  selectedFiles.value = [];
}

function triggerFileSelect() {
  fileInputRef.value?.click();
}

function onFileInputChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    selectedFiles.value = Array.from(input.files);
  }
}

function onDragOver(event: DragEvent) {
  event.preventDefault();
}

function onDrop(event: DragEvent) {
  event.preventDefault();
  if (event.dataTransfer?.files) {
    selectedFiles.value = Array.from(event.dataTransfer.files);
  }
}

function removeFile(index: number) {
  selectedFiles.value.splice(index, 1);
}

function uploadFiles() {
  if (selectedFiles.value.length === 0) {
    alert("No files selected.");
    return;
  }

  // Random uploader name
  const randomIndex = Math.floor(Math.random() * uploaderNames.length);
  uploadSuccessUploader.value = uploaderNames[randomIndex];

  // Close upload modal and show success modal
  closeUploadModal();
  showSuccessModal.value = true;
}

function closeSuccessModal() {
  showSuccessModal.value = false;
  uploadSuccessUploader.value = null;
}
</script>

<template>
  <div class="p-4 bg-white shadow-lg rounded-xl my-2">
    <div class="flex justify-between">
      <h3>Margin List</h3>
    <button
      @click="openUploadModal"
      class="mb-4 px-4 py-2 bg-white text-blue-900 rounded-lg border border-blue-900 hover:bg-gray200"
    >
      Upload Files
    </button>
    </div>

    <BaseTable
      :headers="headers"
      :rows="paginatedRows"
      :loading="false"
      :showCheckbox="false"
      class="!font-ox !font-bold m-2"
    >
      <template #cell-0="{ row }"><span>{{ row.values[0] }}</span></template>
      <template #cell-1="{ row }"><span class="font-bold font-ox">{{ row.values[1] }}</span></template>
      <template #cell-2="{ row }"><span>{{ row.values[2] }}</span></template>
      <template #cell-3="{ row }"><span>{{ row.values[3] }}</span></template>
    </BaseTable>

    <BasePagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      :startItem="startItem"
      :endItem="endItem"
      :totalCount="totalCount"
      @update:page="setCurrentPage"
    />

    <!-- Upload Modal -->
    <div
      v-if="showUploadModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @dragover.prevent="onDragOver"
      @drop.prevent="onDrop"
    >
      <div
        class="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg relative"
      >
        <h3 class="text-xl font-bold mb-4">Upload and Attach Files</h3>

        <!-- Hidden native file input -->
        <input
          ref="fileInputRef"
          type="file"
          multiple
          class="hidden"
          @change="onFileInputChange"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
        />

        <!-- Upload area -->
        <div
          class="border-2 border-dashed border-gray-400 rounded p-8 text-center mb-4 cursor-pointer hover:bg-gray-50"
          @click="triggerFileSelect"
        >
          <img
            src="~/assets/images/uploadFile.svg"
            alt="Upload Icon"
            class="mx-auto mb-3"
          />
          <p>
            <button class="underline font-bold text-blue-600">Click to upload</button>
            or drag and drop
          </p>
          <p class="text-xs mt-1">Maximum file size 2MB</p>
        </div>

        <!-- Selected files list -->
        <div v-if="selectedFiles.length > 0" class="max-h-48 overflow-y-auto mb-4">
          <div
            v-for="(file, index) in selectedFiles"
            :key="index"
            class="flex items-center justify-between border border-gray-300 rounded p-3 mb-2"
          >
            <p class="truncate">{{ file.name }} ({{ (file.size / 1024).toFixed(2) }} KB)</p>
            <button
              @click="removeFile(index)"
              class="text-red-600 hover:text-red-800 font-bold"
              aria-label="Remove file"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex justify-end gap-4">
          <button
            @click="closeUploadModal"
            class="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50"
          >
            Cancel
          </button>
          <button
            @click="uploadFiles"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Upload files
          </button>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 w-96 max-w-full text-center">
        <h3 class="text-xl font-bold mb-4 text-green-600">Upload Successful!</h3>
        <p class="mb-4">Files were uploaded successfully by <strong>{{ uploadSuccessUploader }}</strong>.</p>
        <button
          @click="closeSuccessModal"
          class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* optional styling */
</style>
