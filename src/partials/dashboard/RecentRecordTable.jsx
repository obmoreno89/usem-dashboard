import React from 'react';
import iconGraph from '../../images/iconGraph';
import { useGetRecentRecordQuery } from '../../store/apis/recentRecordApi';

function RecentRecordTable() {
  const { data: recentRecordList = [], error } = useGetRecentRecordQuery();

  console.log(recentRecordList);

  return (
    <div className='col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200'>
      <header className='px-5 py-4 border-b border-slate-100'>
        <h2 className='font-semibold text-slate-800'>Registros recientes</h2>
      </header>
      <div className='p-3'>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full'>
            {/* Table header */}
            <thead className='text-xs uppercase text-slate-400 bg-slate-50 rounded-sm'>
              <tr>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Area</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>
                    Lista de producción
                  </div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Turno</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Fecha</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Hora</div>
                </th>
              </tr>
            </thead>

            <tbody className='text-sm font-medium divide-y divide-slate-100'>
              {/* Row */}
              <tr>
                <td className='p-2'>
                  <div className='flex items-center'>
                    <div className='text-slate-800'>Area</div>
                  </div>
                </td>
                <td className='p-2'>
                  <div className='text-center'>Lista de producción</div>
                </td>
                <td className='p-2'>
                  <div className='text-center text-emerald-500'>Matutino</div>
                </td>
                <td className='p-2'>
                  <div className='text-center'>20/11/2022</div>
                </td>
                <td className='p-2'>
                  <div className='text-center '>11:29</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className='p-2'>
                  <div className='flex items-center'>
                    <div className='text-slate-800'>Area</div>
                  </div>
                </td>
                <td className='p-2'>
                  <div className='text-center'>Lista de producción</div>
                </td>
                <td className='p-2'>
                  <div className='text-center text-emerald-500'>Matutino</div>
                </td>
                <td className='p-2'>
                  <div className='text-center'>20/11/2022</div>
                </td>
                <td className='p-2'>
                  <div className='text-center '>11:29</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className='p-2'>
                  <div className='flex items-center'>
                    <div className='text-slate-800'>Area</div>
                  </div>
                </td>
                <td className='p-2'>
                  <div className='text-center'>Lista de producción</div>
                </td>
                <td className='p-2'>
                  <div className='text-center text-emerald-500'>Matutino</div>
                </td>
                <td className='p-2'>
                  <div className='text-center'>20/11/2022</div>
                </td>
                <td className='p-2'>
                  <div className='text-center '>11:29</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className='p-2'>
                  <div className='flex items-center'>
                    <div className='text-slate-800'>Area</div>
                  </div>
                </td>
                <td className='p-2'>
                  <div className='text-center'>Lista de producción</div>
                </td>
                <td className='p-2'>
                  <div className='text-center text-emerald-500'>Matutino</div>
                </td>
                <td className='p-2'>
                  <div className='text-center'>20/11/2022</div>
                </td>
                <td className='p-2'>
                  <div className='text-center '>11:29</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className='p-2'>
                  <div className='flex items-center'>
                    <div className='text-slate-800'>Area</div>
                  </div>
                </td>
                <td className='p-2'>
                  <div className='text-center'>Lista de producción</div>
                </td>
                <td className='p-2'>
                  <div className='text-center text-emerald-500'>Matutino</div>
                </td>
                <td className='p-2'>
                  <div className='text-center'>20/11/2022</div>
                </td>
                <td className='p-2'>
                  <div className='text-center '>11:29</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecentRecordTable;
