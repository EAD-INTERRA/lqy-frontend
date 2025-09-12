<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Main Content -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <!-- Header Section -->
      <div class="px-6 py-4 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-semibold text-gray-900">Margin Management</h1>
          
          <div class="flex items-center gap-3">
            <!-- View Margin Criteria Button -->
            <button 
              @click="showCriteriaModal = true"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
            >
              View Margin Criteria
            </button>
            
            <!-- Upload Button -->
            <button 
              @click="openUploadModal"
              class="px-4 py-2 bg-[#2E66E3] text-white rounded-lg hover:bg-[#2E66E2] font-medium"
            >
              Upload
            </button>
          </div>
        </div>
      </div>

      <!-- Margin List Section -->
      <div class="p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Margin List</h2>
        
        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Uploaded</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, index) in paginatedItems" :key="index" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">{{ item.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-900">{{ item.dateUploaded }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center text-[#2E66E3] hover:text-[#2E66E2]">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    {{ item.file }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="px-6 py-4 border-t border-gray-200 mt-4">
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-500">
              Showing {{ startItem }}-{{ endItem }} of {{ totalCount }}
            </div>
            <div class="flex items-center space-x-2">
              <button @click="setCurrentPage(currentPage - 1)" :disabled="currentPage === 1"
                class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>

              <button v-for="page in visiblePages" :key="page" @click="setCurrentPage(page)"
                :class="[
                  'px-3 py-1 text-sm border rounded',
                  currentPage === page
                    ? 'bg-[#2E66E3] text-white border-[#2E66E3]'
                    : 'border-gray-300 hover:bg-gray-50'
                ]">
                {{ page }}
              </button>

              <span v-if="totalPages > 5" class="px-2 text-gray-500">...</span>

              <button @click="setCurrentPage(currentPage + 1)" :disabled="currentPage === totalPages"
                class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Marginability Criteria Modal -->
    <div v-if="showCriteriaModal" class=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-[50%] relative">
        <!-- Modal Header -->
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Marginability Criteria</h3>
          <button @click="showCriteriaModal = false" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Margin Bands Content -->
        <div class="grid grid-cols-2 gap-8">
          <!-- Left Column -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Margin Bands</h4>
            <div class="space-y-3">
              <p class="text-gray-700">14 up to 20</p>
              <p class="text-gray-700">9 and less than 14</p>
              <p class="text-gray-700">7 and less than 9</p>
              <p class="text-gray-700">Less than 7</p>
            </div>
          </div>

          <!-- Right Column -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Margin Bands</h4>
            <div class="space-y-3">
              <p class="text-gray-700">50%</p>
              <p class="text-gray-700">40%</p>
              <p class="text-gray-700">30%</p>
              <p class="text-gray-700">Not marginable</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Upload Modal -->
    <div v-if="showUploadModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg relative">
        <h3 class="text-xl font-bold mb-4">Upload and Attach Files</h3>

        <!-- Hidden native file input -->
        <input ref="fileInputRef" type="file" multiple class="hidden" @change="onFileInputChange"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" />

        <!-- Upload area -->
        <div class="border-2 border-dashed border-gray-400 rounded p-8 text-center mb-4 cursor-pointer hover:bg-gray-50"
          @click="triggerFileSelect" @dragover.prevent @drop.prevent="onDrop">
          <svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <p>
            <button class="underline font-bold text-[#2E66E3]">Click to upload</button>
            or drag and drop
          </p>
          <p class="text-xs mt-1">Maximum file size 2MB</p>
        </div>

        <!-- Selected files list -->
        <div v-if="selectedFiles.length > 0" class="max-h-48 overflow-y-auto mb-4">
          <div v-for="(file, index) in selectedFiles" :key="index"
            class="flex items-center justify-between border border-gray-300 rounded p-3 mb-2">
            <p class="truncate">{{ file.name }} ({{ (file.size / 1024).toFixed(2) }} KB)</p>
            <button @click="removeFile(index)" class="text-red-600 hover:text-red-800 font-bold">
              ✕
            </button>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex justify-end gap-4">
          <button @click="closeUploadModal"
            class="px-4 py-2 border border-[#2E66E3] text-[#2E66E3] rounded ">
            Cancel
          </button>
          <button @click="uploadFiles" class="px-4 py-2 bg-[#2E66E3] text-white rounded hover:bg-[#2E66E2]">
            Upload files
          </button>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-96 max-w-full text-center">
        <h3 class="text-xl font-bold mb-4 text-green-600">Upload Successful!</h3>
        <p class="mb-4">Files were uploaded successfully by <strong>{{ userProfile?.first_name || '-' }} {{ userProfile?.last_name || '-' }}</strong>.</p>
        <button @click="closeSuccessModal" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const searchQuery = ref('')
const showCriteriaModal = ref(false)
const showUploadModal = ref(false)
const showSuccessModal = ref(false)
const uploadSuccessUploader = ref('')
const selectedFiles = ref([])
const fileInputRef = ref(null)

// Dummy data for margin list
const marginItems = ref([
  { name: 'David Sani', dateUploaded: 'Jan 4, 2025', file: 'Margin Doc.pdf' },
  { name: 'David Sani', dateUploaded: 'Jan 4, 2025', file: 'Margin Doc.pdf' },
  { name: 'David Sani', dateUploaded: 'Jan 4, 2025', file: 'Margin Doc.pdf' },
  { name: 'David Sani', dateUploaded: 'Jan 4, 2025', file: 'Margin Doc.pdf' },
  { name: 'David Sani', dateUploaded: 'Jan 4, 2025', file: 'Margin Doc.pdf' },
  { name: 'David Sani', dateUploaded: 'Jan 4, 2025', file: 'Margin Doc.pdf' },
  { name: 'David Sani', dateUploaded: 'Jan 4, 2025', file: 'Margin Doc.pdf' },
  { name: 'David Sani', dateUploaded: 'Jan 4, 2025', file: 'Margin Doc.pdf' },
  { name: 'David Sani', dateUploaded: 'Jan 4, 2025', file: 'Margin Doc.pdf' },
  { name: 'David Sani', dateUploaded: 'Jan 4, 2025', file: 'Margin Doc.pdf' }
])

// Pagination
const currentPage = ref(1)
const pageSize = ref(10)

const totalCount = computed(() => 300) // Total items as shown in image
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize.value))
const startItem = computed(() => (currentPage.value - 1) * pageSize.value + 1)
const endItem = computed(() => Math.min(currentPage.value * pageSize.value, totalCount.value))

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return marginItems.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, start + 4)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

function setCurrentPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

// File upload functions
function openUploadModal() {
  showUploadModal.value = true
  selectedFiles.value = []
}

function closeUploadModal() {
  showUploadModal.value = false
  selectedFiles.value = []
}

function triggerFileSelect() {
  fileInputRef.value?.click()
}

function onFileInputChange(event) {
  const input = event.target
  if (input.files) {
    selectedFiles.value = Array.from(input.files)
  }
}

function onDrop(event) {
  if (event.dataTransfer?.files) {
    selectedFiles.value = Array.from(event.dataTransfer.files)
  }
}

function removeFile(index) {
  selectedFiles.value.splice(index, 1)
}

function uploadFiles() {
  if (selectedFiles.value.length === 0) {
    alert('No files selected.')
    return
  }

  uploadSuccessUploader.value = 'David Sani'
  closeUploadModal()
  showSuccessModal.value = true
}

function closeSuccessModal() {
  showSuccessModal.value = false
  uploadSuccessUploader.value = ''
}
const { $services } = useNuxtApp();

const userProfile = ref("");

const fetchUserProfile = async () => {
  try {
    const response = await $services.auth.getProfile();
    console.log('Fetched user profile:', response);
    userProfile.value = response.body;
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};

onMounted(() => {
  fetchUserProfile();
});
</script>
