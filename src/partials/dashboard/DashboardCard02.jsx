import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import iconGraph from '../../images/iconGraph';
import { useGetIncidentQuery } from '../../store/apis/incidientApi';
import { useSelector } from 'react-redux';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard02() {
  const { dateState } = useSelector((state) => state.state);
  const getFirstDate = dateState.map((firstDate) => firstDate);
  const fromDate = getFirstDate[0];
  const toDate = getFirstDate[2];

  const { data: incidentList = [], error } = useGetIncidentQuery({
    fromDate,
    toDate,
  });

  const incidentValidation = () => {
    if (error === undefined) {
      return <h1>{incidentList.length}</h1>;
    } else if (error.status === 404) {
      return <h1>Sin datos</h1>;
    } else {
      return <h1>{incidentList.length}</h1>;
    }
  };

  const dateIncident = incidentList.map((data) => data.date);

  let allReportIncidents = {};

  dateIncident.forEach(
    (el) => (allReportIncidents[el] = allReportIncidents[el] + 1 || 1)
  );
  const totalIncidents = Object.values(allReportIncidents);

  const chartData = {
    labels: !error && dateIncident,
    datasets: [
      {
        label: 'Total',
        data: !error && totalIncidents,
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
          {/* Menu button */}
        </header>
        <h2 className='text-lg font-semibold text-slate-800 mb-2'>
          Incidentes
        </h2>
        <div className='text-xs font-semibold text-slate-400 uppercase mb-1'>
          {fromDate + ' al ' + toDate}
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
          width={389}
          height={128}
        />
      </div>
    </div>
  );
}

export default DashboardCard02;
