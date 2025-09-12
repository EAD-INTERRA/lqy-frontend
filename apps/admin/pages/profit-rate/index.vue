<template>
  <div class="w-full">
    <!-- Tabs -->
    <!-- <div class="flex border-b border-gray-200">
      <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="[
        'px-4 py-2 text-sm font-ox focus:outline-none',
        activeTab === index
          ? 'text-red-500 border-b-2 border-red-500'
          : 'text-gray-600 hover:text-gray-800'
      ]">
        {{ tab }}
      </button>
    </div> -->

    <!-- Tab Content -->
    <div class="mt-0">
      <div v-if="activeTab === 0">
        <tb-90 />
      </div>
      <!-- <div v-else-if="activeTab === 1">
        <margin-rate />
      </div>
      <div v-else-if="activeTab === 2">
        <proposed-security />
      </div>
      <div v-else-if="activeTab === 3">
        <p>Financial Institution spread content...</p>
      </div>
      <div v-else-if="activeTab === 4">
        <p>LQY Admin fee content...</p>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = [
  'Proposed Security Lending Rate',
  'Margin Rates',
  'TB 90-Days',
  'Financial Institution spread',
  'LQY Admin fee'
]

const activeTab = ref(0)
</script>
