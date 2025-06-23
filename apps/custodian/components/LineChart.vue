<template>
  <div class="time-range-selector space-x-2">
    <button @click="selectTimeRange('7 days')" class="border-[1.5px] border-black border-opacity-50 bg-white shadow-sm rounded p-1 font-ox">Last 7 Days</button>
    <button @click="selectTimeRange('30 days')" class="border-[1.5px] border-black border-opacity-50 bg-white shadow-sm rounded p-1 font-ox">Last 30 Days</button>
    <button @click="selectCustomRange" class="border-[1.5px] border-black border-opacity-50 bg-white shadow-sm rounded p-1 font-ox">Custom</button>
  </div>
  <canvas ref="chartCanvasRef" class="w-[100%]"></canvas>
</template>

<script setup lang="ts">
import Chart from 'chart.js/auto';
import { ref, onMounted, defineProps } from 'vue';

const chartCanvasRef = ref<HTMLCanvasElement | null>(null);

const { labels, datasets } = defineProps<{
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor?: string;
    fill?: boolean;
  }[];
}>()

onMounted(() => {
  const canvas = chartCanvasRef.value;
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Canvas context not available');
    return;
  }

  if (!datasets) {
    console.error('Datasets not provided');
    return;
  }

  console.log('Initializing chart...');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: datasets.map(dataset => ({
        ...dataset,
        tension: 0.9,
        cubicInterpolationMode: 'monotone'
      }))
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            stepSize: 25 // Set the step size of the y-axis ticks
          }
        }
      }
    },
  });
});
</script>
