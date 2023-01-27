import React from 'react';
import LineChart from '../../charts/LineChart01';
import iconGraph from '../../images/iconGraph';
import iconDashboard from '../../images/iconDashboard';
import { useGetDowntimeQuery } from '../../store/apis/downtimeApi';
import { useSelector } from 'react-redux';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function GraphDowntime({ setGraphModalDowntimeOpen, width, height, icon }) {
  const { dateState, lineNumber } = useSelector((state) => state.state);
  const getFirstDate = dateState.map((firstDate) => firstDate);
  const fromDate = getFirstDate[0];
  const toDate = getFirstDate[2];

  const { data: downtimeList = [], error } = useGetDowntimeQuery({
    fromDate,
    toDate,
    lineNumber,
  });

  const dateDowntime = downtimeList.map((data) => data.date);

  const downtimeValue = downtimeList.map((data) => data.downtime);

  let minutesTotal = 0;

  downtimeValue.forEach((minutes) => (minutesTotal += minutes));

  const downtimeValidation = () => {
    if (error === undefined) {
      return <p>{minutesTotal} Minutos</p>;
    } else if (error.status === 404) {
      return <p>0 Minutos</p>;
    } else {
      return <p>{downtimeList.length} Minutos</p>;
    }
  };

  const chartData = {
    labels: !error && dateDowntime,
    datasets: [
      // Indigo line
      {
        label: 'Total minutos',
        data: !error && downtimeValue,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.cyan[700],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
    ],
  };

  return (
    <div className='flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200'>
      <div className='px-5 pt-5'>
        <header className='flex justify-between items-start mb-2'>
          {/* Icon */}
          <img src={iconGraph.time} width='32' height='32' alt='Icon 03' />
          {!icon && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setGraphModalDowntimeOpen(true);
              }}
            >
              <img
                className='w-7'
                src={iconDashboard.maximize}
                alt='Maximize'
              />
            </button>
          )}
        </header>
        <h2 className='text-lg font-semibold text-slate-800 mb-2'>Downtime</h2>
        <div className='text-xs font-semibold text-slate-400 uppercase mb-1'>
          {dateState.join(' ')}
        </div>
        <div className='flex items-start'>
          <div className='text-3xl font-bold text-slate-800 mr-2'>
            {downtimeValidation()}
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='grow'>
        {/* Change the height attribute to adjust the chart height */}
        <LineChart
          name='Downtime'
          data={chartData}
          width={width ? 1200 : 389}
          height={height ? 400 : 128}
        />
      </div>
    </div>
  );
}

export default GraphDowntime;
