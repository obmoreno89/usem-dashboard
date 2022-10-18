import React from 'react';
import iconGraph from '../../images/iconGraph';
import { useGetRecentRecordQuery } from '../../store/apis/recentRecordApi';

function RecentRecordTable() {
  const { data: recentRecordList = [], error } = useGetRecentRecordQuery();

  return (
    <>
      {recentRecordList.length ? (
        <div className='col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200'>
          <header className='px-5 py-4 border-b border-slate-100'>
            <h2 className='font-semibold text-slate-800'>
              Registros recientes
            </h2>
          </header>
          <div className='p-3'>
            <div className='overflow-x-auto'>
              <table className='table-auto w-full'>
                <thead className='text-xs uppercase text-slate-400 bg-slate-50 rounded-sm'>
                  <tr>
                    <th className='p-2'>
                      <div className='font-semibold text-left'>Reporte</div>
                    </th>
                    <th className='p-2'>
                      <div className='font-semibold text-center'>
                        Numero de linea
                      </div>
                    </th>
                    <th className='p-2'>
                      <div className='font-semibold text-center'>Usuario</div>
                    </th>
                    <th className='p-2'>
                      <div className='font-semibold text-center'>Fecha</div>
                    </th>
                  </tr>
                </thead>
                <tbody className='text-sm font-medium divide-y divide-slate-100'>
                  {recentRecordList.map((data) => (
                    <tr key={data.id}>
                      <td className='p-2'>
                        <div className='flex items-center'>
                          <div className='text-slate-800'>{data.type}</div>
                        </div>
                      </td>
                      <td className='p-2'>
                        <div className='text-center'>{data.line.line}</div>
                      </td>
                      <td className='p-2'>
                        <div className='text-center'>{data.user}</div>
                      </td>
                      <td className='p-2'>
                        <div className='text-center'>{data.date}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className='col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm '>
          <section className='p-3'>
            <article className='overflow-x-auto h-72 flex justify-center items-center'>
              <h2 className='font-semibold text-2xl text-gray-800'>
                Sin registros recientes
              </h2>
            </article>
          </section>
        </div>
      )}
    </>
  );
}

export default RecentRecordTable;
