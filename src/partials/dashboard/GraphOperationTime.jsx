import React from 'react';
import LineChart from '../../charts/LineChart01';
import iconGraph from '../../images/iconGraph';
import { useGetOperationTimeQuery } from '../../store/apis/operationTimeApi';
import { useSelector } from 'react-redux';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function GraphOperationTime() {
  const { dateState, lineNumber } = useSelector((state) => state.state);
  const getFirstDate = dateState.map((firstDate) => firstDate);
  const fromDate = getFirstDate[0];
  const toDate = getFirstDate[2];

  const { data: operationTimeList = [], error } = useGetOperationTimeQuery({
    fromDate,
    toDate,
    lineNumber,
  });

  const operationTimeValidation = () => {
    if (error === undefined) {
      return <p>{operationTimeList.length}</p>;
    } else if (error.status === 404) {
      return <p>0</p>;
    } else {
      return <p>{operationTimeList.length}</p>;
    }
  };

  const dateOperationTime = operationTimeList.map((data) => data.date);

  const operationTimeValue = operationTimeList.map(
    (data) => data.operation_time.minutes
  );

  console.log(operationTimeList);

  const chartData = {
    labels: dateOperationTime,
    datasets: [
      // Indigo line
      {
        label: 'Total minutos',
        data: operationTimeValue,
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
          {/* Menu button */}
        </header>
        <h2 className='text-lg font-semibold text-slate-800 mb-2'>
          Operation Time
        </h2>
        <div className='text-xs font-semibold text-slate-400 uppercase mb-1'>
          {fromDate + ' al ' + toDate}
        </div>
        <div className='flex items-start'>
          <div className='text-3xl font-bold text-slate-800 mr-2'>
            {operationTimeValidation()}
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='grow'>
        {/* Change the height attribute to adjust the chart height */}
        <LineChart
          name='Operation time'
          data={chartData}
          width={389}
          height={128}
        />
      </div>
    </div>
  );
}

export default GraphOperationTime;
