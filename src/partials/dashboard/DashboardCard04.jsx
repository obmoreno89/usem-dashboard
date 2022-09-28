import React from 'react';
import LineChart from '../../charts/LineChart01';
import iconGraph from '../../images/iconGraph';
import { apiPieces, useGetPiecesQuery } from '../../store/apis/apiPieces';
import { useSelector } from 'react-redux';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard04() {
  const { dateState } = useSelector((state) => state.state);
  const getFirstDate = dateState.map((firstDate) => firstDate);
  const fromDate = getFirstDate[0];
  const toDate = getFirstDate[2];

  const { data: piecesList = [], error } = useGetPiecesQuery({
    fromDate,
    toDate,
  });

  const piecesValidation = () => {
    if (error === undefined) {
      return <p>{piecesList.length}</p>;
    } else if (error.status === 404) {
      return <p>0</p>;
    } else {
      return <p>{piecesList.length}</p>;
    }
  };

  const datePieces = piecesList.map((data) => data.date);

  const piecesOk = piecesList.map((data) => data.is_ok);

  const chartData = {
    labels: !error && datePieces,
    datasets: [
      // Indigo line
      {
        label: 'Total',
        data: piecesOk,
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
          <img src={iconGraph.pieces} width='32' height='32' alt='Icon 03' />
          {/* Menu button */}
        </header>
        <h2 className='text-lg font-semibold text-slate-800 mb-2'>Piezas OK</h2>
        <div className='text-xs font-semibold text-slate-400 uppercase mb-1'>
          {fromDate + ' al ' + toDate}
        </div>
        <div className='flex items-start'>
          <div className='text-3xl font-bold text-slate-800 mr-2'>
            {piecesValidation()}
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='grow'>
        {/* Change the height attribute to adjust the chart height */}
        <LineChart name='OK' data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard04;
