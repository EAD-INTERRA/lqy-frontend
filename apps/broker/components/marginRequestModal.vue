<template>
  
</template>

<script lang="ts" setup>
import { ref, } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const { $services } = useNuxtApp();


const props = defineProps({
  requestId: { type: String, required: true },
  accountName: { type: String, required: true },
  chn: { type: String, required: true },
  status: { type: String, required: false, default: '' }
});

const emit = defineEmits(['close']);

const requestDetails = ref(null);
// const loading = ref(true);
const loading = ref(false);
const approveLoading = ref(false);

</script>