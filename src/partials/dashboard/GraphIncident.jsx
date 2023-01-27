import React, { useEffect } from 'react';
import LineChart from '../../charts/LineChart01';
import iconGraph from '../../images/iconGraph';
import iconDashboard from '../../images/iconDashboard';
import { useGetIncidentQuery } from '../../store/apis/incidientApi';
import { useSelector } from 'react-redux';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function GraphIncident({ setGraphModalIncidentOpen, width, height, icon }) {
  const { dateState, lineNumber } = useSelector((state) => state.state);
  const getFirstDate = dateState.map((firstDate) => firstDate);
  const fromDate = getFirstDate[0];
  const toDate = getFirstDate[2];

  const { data: incidentList = [], error } = useGetIncidentQuery({
    fromDate,
    toDate,
    lineNumber,
  });

  const incidentValidation = () => {
    if (error === undefined) {
      if (incidentList.length === 1) {
        return <p>{incidentList.length} Reporte</p>;
      } else {
        return <p>{incidentList.length} Reportes</p>;
      }
    } else if (error.status === 404) {
      return <p>0 Reportes</p>;
    } else {
      return <p>{incidentList.length} Reportes</p>;
    }
  };

  const dateIncident = incidentList.map((data) => data.date);

  let allReportIncidents = {};
  const prueba = dateIncident.sort();

  prueba.forEach(
    (el) => (allReportIncidents[el] = allReportIncidents[el] + 1 || 1)
  );
  const totalIncidents = Object.values(allReportIncidents);

  const chartData = {
    labels: !error && dateIncident,
    datasets: [
      {
        label: 'Total',
        data: !error && allReportIncidents,
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
          <img src={iconGraph.alert} width='32' height='32' alt='Icon 02' />
          {!icon && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setGraphModalIncidentOpen(true);
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
          Incidentes
        </h2>
        <div className='text-xs font-semibold text-slate-400 uppercase mb-1'>
          {dateState.join(' ')}
        </div>
        <div className='flex items-start'>
          <div className='text-3xl font-bold text-slate-800 mr-2'>
            {incidentValidation()}
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='grow'>
        {/* Change the height attribute to adjust the chart height */}
        <LineChart
          name='Incidentes'
          data={chartData}
          width={width ? 1200 : 389}
          height={height ? 400 : 128}
        />
      </div>
    </div>
  );
}

export default GraphIncident;
