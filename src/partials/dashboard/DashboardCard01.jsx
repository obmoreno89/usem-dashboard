import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import EditMenu from '../../components/DropdownEditMenu';
import iconGraph from '../../images/iconGraph';
import { fetchAccident } from '../../store/slices/accidents/accidentsSlice';
import { useDispatch, useSelector } from 'react-redux';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01() {
  const dispatch = useDispatch();
  const { accidentList } = useSelector((state) => state.accidents);
  const { dateState } = useSelector((state) => state.state);

  const dateAccident = accidentList.map((data) => data.date);

  let allReportAccidents = {};

  dateAccident.forEach(
    (el) => (allReportAccidents[el] = allReportAccidents[el] + 1 || 1)
  );
  const totalAccidents = Object.values(allReportAccidents);

  const chartData = {
    labels: dateAccident,
    datasets: [
      {
        label: 'Total',
        data: totalAccidents,
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

  useEffect(() => {
    dispatch(fetchAccident());
  }, []);

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
          {dateState ? dateState : '09-20-2022'}
        </div>
        <div className='flex items-start'>
          <p className='text-3xl font-bold text-slate-800 mr-2'>
            {accidentList.length}
          </p>
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

export default DashboardCard01;
