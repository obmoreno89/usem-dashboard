import React from 'react';
import LineChart from '../../charts/LineChart01';
import iconGraph from '../../images/iconGraph';
import { useSelector } from 'react-redux';
import { useGetAccidentQuery } from '../../store/apis/accidentApi';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function GraphAccident() {
  const { dateState, lineNumber } = useSelector((state) => state.state);
  const getFirstDateAccident = dateState.map((firstDate) => firstDate);
  const fromDate = getFirstDateAccident[0];
  const toDate = getFirstDateAccident[2];

  const {
    data: accidentList = [],
    error,
    success,
  } = useGetAccidentQuery({
    fromDate,
    toDate,
    lineNumber,
  });

  const accidentValidation = () => {
    if (accidentList) {
      return <p>{accidentList.length}</p>;
    } else if (success) {
      return <p>Sin datos</p>;
    } else {
      return <p>{setIncidentList.length}</p>;
    }
  };

  const dateAccident = accidentList.map((data) => data.date);

  let allReportAccidents = {};
  const prueba = dateAccident.sort();

  prueba.forEach(
    (el) => (allReportAccidents[el] = allReportAccidents[el] + 1 || 1)
  );

  const totalAccident = Object.values(allReportAccidents);

  const chartData = {
    labels: dateAccident,
    datasets: [
      {
        label: 'Total',
        data: allReportAccidents,
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
          <img src={iconGraph.turrets} width='32' height='32' alt='Torreta' />
          {/* Menu button */}
        </header>
        <h2 className='text-lg font-semibold text-slate-800 mb-2'>
          Accidentes
        </h2>
        <div className='text-xs font-semibold text-slate-400 uppercase mb-1'>
          {dateState.join(' ')}
        </div>
        <div className='flex items-start'>
          <div className='text-3xl font-bold text-slate-800 mr-2'>
            {accidentValidation()}
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='grow'>
        {/* Change the height attribute to adjust the chart height */}
        <LineChart
          name='Accidentes'
          data={chartData}
          width={389}
          height={128}
        />
      </div>
    </div>
  );
}

export default GraphAccident;
