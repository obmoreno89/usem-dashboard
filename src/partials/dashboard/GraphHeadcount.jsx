import React from 'react';
import PolarChart from '../../charts/PolarChart';
import iconDashboard from '../../images/iconDashboard';
import { useGetHeadcountQuery } from '../../store/apis/headcountApi';
import { useSelector } from 'react-redux';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function GraphHeadcount({ setGraphModalHeadcountOpen, width, height, icon }) {
  const { dateState, lineNumber } = useSelector((state) => state.state);
  const getFirstDate = dateState.map((firstDate) => firstDate);
  const fromDate = getFirstDate[0];
  const toDate = getFirstDate[2];

  const { data: headcountList = [], error } = useGetHeadcountQuery({
    lineNumber,
  });

  const personalTotal = headcountList.men + headcountList.women;

  const genderPercentage = [headcountList.men, headcountList.women];

  const chartData = {
    labels: ['Hombres', 'Mujeres'],
    datasets: [
      {
        data: genderPercentage,
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
        <div className='flex justify-between'>
          <h2 className='font-semibold text-slate-800'>Headcount</h2>
          {!icon && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setGraphModalHeadcountOpen(true);
              }}
            >
              <img
                className='w-7'
                src={iconDashboard.maximize}
                alt='Maximize'
              />
            </button>
          )}
        </div>
        <div className='text-xs font-semibold text-slate-400 uppercase mb-1'>
          {dateState.join(' ')}
          <p>total de personal: {personalTotal}</p>
        </div>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <PolarChart
        name='Porcentaje'
        data={chartData}
        width={width ? 1200 : 389}
        height={height ? 400 : 210}
      />
    </div>
  );
}

export default GraphHeadcount;
