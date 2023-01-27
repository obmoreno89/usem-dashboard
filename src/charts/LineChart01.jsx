import React, { useRef, useEffect } from 'react';

import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  scales,
} from 'chart.js';
import 'chartjs-adapter-moment';
import zoomPlugin from 'chartjs-plugin-zoom';

// Import utilities
import { tailwindConfig, formatValue } from '../utils/Utils';

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  zoomPlugin
);

function LineChart01({ data, width, height, name }) {
  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;

    const chart = new Chart(ctx, {
      type: 'line',
      data: data,

      options: {
        scales: scales,
        responsive: true,
        chartArea: {
          backgroundColor: tailwindConfig().theme.colors.slate[50],
        },
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            display: true,
            beginAtZero: true,
          },
          x: {
            type: 'time',
            time: {
              parser: 'YYYY-MM-DD',
              unit: 'day',
            },
            display: true,
          },
        },

        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: 'x',
            },
          },
          tooltip: {
            callbacks: {
              title: () => name, // Disable tooltip title
              // label: (context) => formatValue(context.parsed.y),
            },
          },
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
      },
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return <canvas ref={canvas} width={width} height={height}></canvas>;
}

export default LineChart01;
