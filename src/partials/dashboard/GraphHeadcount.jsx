import React from 'react';
import PolarChart from '../../charts/PolarChart';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function GraphHeadcount() {
  const chartData = {
    labels: ['Hombres', 'Mujeres'],
    datasets: [
      {
        label: 'Sessions By Gender',
        data: [15, 17],
        backgroundColor: [
          `rgba(${hexToRGB(tailwindConfig().theme.colors.cyan[700])}, 0.8)`,
          `rgba(${hexToRGB(tailwindConfig().theme.colors.cyan[400])}, 0.8)`,
        ],
        hoverBackgroundColor: [
          `rgba(${hexToRGB(tailwindConfig().theme.colors.cyan[600])}, 0.8)`,
          `rgba(${hexToRGB(tailwindConfig().theme.colors.cyan[500])}, 0.8)`,
        ],
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  return (
    <div className='flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200'>
      <header className='px-5 py-4 border-b border-slate-100'>
        <h2 className='font-semibold text-slate-800'>Headcount</h2>
        <div className='text-xs font-semibold text-slate-400 uppercase mb-1'>
          2022-09-01 a 20-09-30
        </div>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <PolarChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default GraphHeadcount;
