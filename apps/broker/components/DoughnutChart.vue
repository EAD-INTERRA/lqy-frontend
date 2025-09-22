<!-- ChartComponent.vue -->
<template>
      <canvas ref="chartCanvasRef" class=" w-full md:w-[70%] h-full md:h-[70%]"></canvas>
  </template>
  
  <script setup lang="ts">
  import Chart from 'chart.js/auto';
  
  const chartCanvasRef = ref<HTMLCanvasElement | null>(null);
  
  const props = defineProps<{
    data: {
      name: string;
      count: number;
    }[];
    colors: string[];
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
    
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: props.data.map((item) => item.name),
        datasets: [
          {
            label: 'Complaints',
            data: props.data.map((item) => item.count),
            backgroundColor: props.colors,
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        cutout: 80, // Adjust the cutout percentage to make the doughnut chart slimmer
        plugins: {
          legend: {
            position: 'bottom',
            align: 'start',
            labels: {
              generateLabels: (chart) => {
                const data = chart.data;
                if (data.labels.length && data.datasets.length) {
                  return data.labels.map((label, index) => {
                    const count = data.datasets[0].data[index];
                    const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                    const percent = ((count / total) * 100).toFixed(2) + '%';
                    return {
                      text: `${label}       ${percent}`,
                      fillStyle: data.datasets[0].backgroundColor[index],
                      strokeStyle: 'transparent',
                      lineWidth: 0,
                      pointStyle: 'rectRot',
                      lineDash: [],
                    };
                  });
                }
                return [];
              },
              boxWidth: 12,
              padding: 15,
              font: {
                size: 14,
              },
              display: true,
              
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const count = context.raw;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percent = ((count / total) * 100).toFixed(2) + '%';
                return `${count} (${percent})`;
              },
            },
          },
        },
      },
    });
  });
  </script>
  