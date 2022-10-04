import React from 'react';
import LineChart from '../../charts/LineChart01';
import iconGraph from '../../images/iconGraph';
import { useGetDowntimeQuery } from '../../store/apis/downtimeApi';
import { useSelector } from 'react-redux';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function GraphPpa() {
  const { dateState, lineNumber } = useSelector((state) => state.state);
  const getFirstDate = dateState.map((firstDate) => firstDate);
  const fromDate = getFirstDate[0];
  const toDate = getFirstDate[2];

  const { data: downtimeList = [], error } = useGetDowntimeQuery({
    fromDate,
    toDate,
    lineNumber,
  });

  const downtimeValidation = () => {
    if (error === undefined) {
      return <p>{downtimeList.length}</p>;
    } else if (error.status === 404) {
      return <p>0</p>;
    } else {
      return <p>{downtimeList.length}</p>;
    }
  };

  const dateDowntime = downtimeList.map((data) => data.date);

  const downtimeValue = downtimeList.map((data) => data.downtime);

  const chartData = {
    labels: ['2022-09-06', '2022-09-07', '2022-09-10'],
    datasets: [
      {
        label: 'Total',
        data: [120, 89, 156],
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
          <img src={iconGraph.ppa} width='32' height='32' alt='Icon 03' />
          {/* Menu button */}
        </header>
        <h2 className='text-lg font-semibold text-slate-800 mb-2'>PPA</h2>
        <div className='text-xs font-semibold text-slate-400 uppercase mb-1'>
          {fromDate + ' al ' + toDate}
        </div>
        <div className='flex items-start'>
          <div className='text-3xl font-bold text-slate-800 mr-2'>3</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='grow'>
        {/* Change the height attribute to adjust the chart height */}
        <LineChart name='PPA' data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default GraphPpa;
