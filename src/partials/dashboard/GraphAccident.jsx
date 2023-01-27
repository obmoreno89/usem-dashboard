import React from 'react';
import LineChart from '../../charts/LineChart01';
import iconGraph from '../../images/iconGraph';
import iconDashboard from '../../images/iconDashboard';
import { useSelector } from 'react-redux';
import { useGetAccidentQuery } from '../../store/apis/accidentApi';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function GraphAccident({ setGraphModalAccidentOpen, width, height, icon }) {
  const { dateState, lineNumber, lineNumberName } = useSelector(
    (state) => state.state
  );
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
      if (accidentList.length === 1) {
        return <p>{accidentList.length} Reporte</p>;
      } else {
        return <p>{accidentList.length} Reportes</p>;
      }
    } else if (success) {
      return <p>0 Reportes</p>;
    } else {
      return <p>{accidentList.length} Reportes</p>;
    }
  };

  const dateAccident = accidentList.map((data) => data.date);

  let allReportAccidents = {};
  const data = dateAccident.sort();

  data.forEach(
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
          <img src={iconGraph.turrets} width='32' height='32' alt='Torreta' />
          {!icon && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setGraphModalAccidentOpen(true);
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
          width={width ? 1200 : 389}
          height={height ? 400 : 128}
        />
      </div>
    </div>
  );
}

export default GraphAccident;
