<template>
  <div class="flex flex-col md:flex-row gap-[5%] p-4 mt-[10px] lg:mt-[2px] mb-5 mx-auto lg:ml-6 overflow-y-auto">

    <!-- Profile Section -->
    <section class="w-full md:w-[35%]">
      <!-- My Profile Card -->
      <div class="flex items-center mb-2">
        <div class="text-black font-bold py-2.5 pr-2">My Profile</div>
        <div class="rounded-full bg-green-500 w-[20px] h-[20px]"></div>
      </div>

      <div class="bg-gray-100 w-full rounded-[5px] mt-1 mb-3 py-[30px]">
        <img class="mx-auto rounded-full w-[150px]" src="/assets/images/profileImage.svg" alt="profile image" />
        <div class="flex gap-1 text-lg font-bold justify-center items-center mt-4">
          {{ userProfile?.first_name || 'First' }} {{ userProfile?.last_name || 'Last' }}
          <img src="/assets/images/tick.svg" alt="verified" />
        </div>
        <p class="text-sm text-center text-gray-600 mt-1">
          {{ userProfile?.company_name || 'Company Name' }}
        </p>
        <div class="flex justify-center mt-5 md:justify-end md:mr-5">
          <button class="border border-solid border-black rounded-[10px] py-2 px-4 hover:bg-gray-50 transition-colors"
            @click="openEditModal">
            Edit
          </button>
        </div>
      </div>

      <!-- Personal Information Card -->
      <div class="flex items-center mb-2">
        <div class="text-black font-bold py-2.5 pr-2">Personal Information</div>
        <div class="rounded-full bg-green-500 w-[20px] h-[20px]"></div>
      </div>

      <div class="bg-gray-100 w-full rounded-[5px] mt-1 py-[30px]">
        <div class="flex flex-col gap-4">
          <div class="px-6">
            <label class="text-gray-600 font-semibold text-sm">Firstname</label>
            <div class="text-lg font-bold">{{ userProfile?.first_name || '-' }}</div>
          </div>
          <div class="px-6">
            <label class="text-gray-600 font-semibold text-sm">Lastname</label>
            <div class="text-lg font-bold">{{ userProfile?.last_name || '-' }}</div>
          </div>
          <div class="px-6">
            <label class="text-gray-600 font-semibold text-sm">Email</label>
            <div class="text-sm font-bold text-blue-500">{{ userProfile?.email || '-' }}</div>
          </div>
          <div class="px-6">
            <label class="text-gray-600 font-semibold text-sm">User</label>
            <div class="text-lg font-bold text-blue-500">{{ userProfile?.type || '-' }}</div>
          </div>
        </div>
        <div class="flex justify-center mt-5 md:justify-end md:mr-5">
          <button class="border border-solid border-black rounded-[10px] py-2 px-4 hover:bg-gray-50 transition-colors"
            @click="openEditModal">
            Edit
          </button>
        </div>
      </div>
    </section>

    <!-- Address & Business Section -->
    <section class="w-full md:w-[60%] mr-3">
      <!-- Address Card -->
      <div class="flex items-center mb-2">
        <div class="text-black font-bold py-2.5 pr-2">Address</div>
        <div class="rounded-full bg-green-500 w-[20px] h-[20px]"></div>
      </div>

      <div class="bg-gray-100 w-full rounded-[5px] mt-1 mb-6 py-[30px]">
        <div class="flex flex-col gap-3">
          <div class="px-[30px] grid grid-cols-1 md:grid-cols-2 gap-2">
            <label class="text-gray-600 font-semibold text-sm">Country</label>
            <div class="text-lg font-bold">{{ userProfile?.country?.name || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-1 md:grid-cols-2 gap-2">
            <label class="text-gray-600 font-semibold text-sm">State</label>
            <div class="text-lg font-bold">{{ userProfile?.state?.name || userProfile?.state_id || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-1 md:grid-cols-2 gap-2">
            <label class="text-gray-600 font-semibold text-sm">Town/City</label>
            <div class="text-lg font-bold">{{ userProfile?.city || '-' }}</div>
          </div>
        </div>
        <div class="flex justify-center mt-5 md:justify-end md:pr-6">
          <button class="border border-solid border-black rounded-[10px] py-2 px-4 hover:bg-gray-50 transition-colors"
            @click="openEditModal">
            Edit
          </button>
        </div>
      </div>

      <!-- Business Information Card -->
      <div class="flex items-center mb-2">
        <div class="text-black font-bold py-2.5 pr-2">Business Information</div>
        <div class="rounded-full bg-green-500 w-[20px] h-[20px]"></div>
      </div>

      <div class="bg-gray-100 w-full rounded-[5px] mt-1 py-[30px]">
        <div class="flex flex-col gap-3">
          <div class="px-[30px] grid grid-cols-1 md:grid-cols-2 gap-2">
            <label class="text-gray-600 font-semibold text-sm">Business Type</label>
            <div class="text-lg font-bold">{{ userProfile?.type || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-1 md:grid-cols-2 gap-2">
            <label class="text-gray-600 font-semibold text-sm">Tax ID Number</label>
            <div class="text-lg font-bold">{{ userProfile?.tax_id || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-1 md:grid-cols-2 gap-2">
            <label class="text-gray-600 font-semibold text-sm">License Number</label>
            <div class="text-lg font-bold">{{ userProfile?.license_number || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-1 md:grid-cols-2 gap-2">
            <label class="text-gray-600 font-semibold text-sm">Capital Adequacy</label>
            <div class="text-lg font-bold">{{ userProfile?.capital_adequacy || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-1 md:grid-cols-2 gap-2">
            <label class="text-gray-600 font-semibold text-sm">Networth</label>
            <div class="text-lg font-bold">{{ userProfile?.networth || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-1 md:grid-cols-2 gap-2">
            <label class="text-gray-600 font-semibold text-sm">Tolerance</label>
            <div class="text-lg font-bold">{{ userProfile?.tolerance || '-' }}</div>
          </div>
          <div class="px-[30px] grid grid-cols-1 gap-2">
            <label class="text-gray-600 font-semibold text-sm">Preferred Asset Class</label>
            <div class="flex flex-wrap gap-2 mt-2">
              <span v-for="(asset, idx) in userProfile?.preferred_asset_class || []" :key="idx"
                class="border border-blue-500 bg-blue-100 text-blue-700 font-semibold rounded-[10px] py-1 px-3 text-sm">
                {{ asset }}
              </span>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-5 md:justify-end md:pr-6">
          <button class="border border-solid border-black rounded-[10px] py-2 px-4 hover:bg-gray-50 transition-colors"
            @click="openEditModal">
            Edit
          </button>
        </div>
      </div>
    </section>

    <!-- Edit Profile Modal -->
    <div v-if="showEditModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 mx-4 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800">Edit Profile</h2>
          <button @click="closeEditModal"
            class="text-gray-400 hover:text-gray-600 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            ×
          </button>
        </div>

        <form @submit.prevent="submitEditProfile" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input v-model="editForm.first_name" type="text"
                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter first name" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input v-model="editForm.last_name" type="text"
                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter last name" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">City</label>
            <input v-model="editForm.city" type="text"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter city" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <select v-model="editForm.country_id" @change="handleCountryChange"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="" disabled>Select a Country</option>
              <option v-for="country in countries" :key="country.id" :value="country.id">
                {{ country.name }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">State</label>
            <select v-model="editForm.state_id"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :disabled="!states.length">
              <option value="" disabled>{{ states.length ? 'Select State' : 'Select country first' }}</option>
              <option v-for="state in states" :key="state.id" :value="state.id">
                {{ state.name }}
              </option>
            </select>
          </div>

          <div class="flex justify-end gap-3 mt-8 pt-4 border-t">
            <button type="button" @click="closeEditModal"
              class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Cancel
            </button>
            <button type="submit"
              class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              :disabled="isSubmitting">
              {{ isSubmitting ? 'Saving...' : 'Save Changes' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

// Reactive data
const userProfile = ref(null)
const showEditModal = ref(false)
const isSubmitting = ref(false)
const countries = ref([])
const states = ref([])
const countryCode = ref('')

const editForm = ref({
  first_name: '',
  last_name: '',
  city: '',
  state_id: null,
  country_id: null,
})

// Composables
const { $services } = useNuxtApp()

// Methods
const fetchUserProfile = async () => {
  try {
    const response = await $services.auth.getProfile()
    console.log('Fetched user profile:', response)
    userProfile.value = response.body
  } catch (error) {
    console.error('Error fetching user profile:', error)
  }
}

const fetchCountries = async () => {
  try {
    const response = await $services.auth.getCountries()
    countries.value = response.body
  } catch (error) {
    console.error('Error fetching countries:', error)
  }
}

const handleCountryChange = async (event) => {
  const selectedId = event.target.value
  editForm.value.country_id = selectedId
  editForm.value.state_id = null // Reset state when country changes

  const selectedCountry = countries.value.find(c => c.id == selectedId)
  countryCode.value = selectedCountry ? selectedCountry.code : ''

  if (countryCode.value) {
    await getStatesByCountry()
  }
}

const getStatesByCountry = async () => {
  try {
    if (countryCode.value) {
      const response = await $services.auth.getStatesByCountry({
        country_code: countryCode.value
      })
      states.value = response.body
    }
  } catch (error) {
    console.error('Error fetching states:', error)
    states.value = []
  }
}

const openEditModal = () => {
  // Pre-populate form with current user data
  editForm.value = {
    first_name: userProfile.value?.first_name || '',
    last_name: userProfile.value?.last_name || '',
    city: userProfile.value?.city || '',
    state_id: userProfile.value?.state_id || userProfile.value?.state?.id || null,
    country_id: userProfile.value?.country_id || userProfile.value?.country?.id || null,
  }

  // Load states if country is already selected
  if (editForm.value.country_id) {
    const selectedCountry = countries.value.find(c => c.id == editForm.value.country_id)
    if (selectedCountry) {
      countryCode.value = selectedCountry.code
      getStatesByCountry()
    }
  }

  showEditModal.value = true
}

const closeEditModal = () => {
  showEditModal.value = false
  states.value = []
  countryCode.value = ''
}

const submitEditProfile = async () => {
  isSubmitting.value = true
  try {
    await $services.auth.updateProfile(editForm.value)
    showEditModal.value = false
    await fetchUserProfile()
    // You could add a success notification here
  } catch (error) {
    console.error('Error updating profile:', error)
    // You could add an error notification here
  } finally {
    isSubmitting.value = false
  }
}

// Lifecycle
onMounted(async () => {
  await Promise.all([
    fetchUserProfile(),
    fetchCountries()
  ])
})
</script>