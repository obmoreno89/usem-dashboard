import React from 'react';

function AnalyticsCard11() {
  return (
    <div className='col-span-full bg-white shadow-lg rounded-sm border border-slate-200'>
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
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-left'>Area</div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-left'>
                    Lista de producción
                  </div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-left'>Turno</div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-center'>Fecha</div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-center'>Hora</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className='text-sm divide-y divide-slate-100'>
              {/* Row */}
              <tr>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='shrink-0 rounded-full mr-2 sm:mr-3 bg-primary'>
                      <svg
                        className='w-9 h-9 fill-current text-indigo-50'
                        viewBox='0 0 36 36'>
                        <path d='M24.446 19.335a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM20.431 11.938a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM14.969 20.25a2.49 2.49 0 00-1.932-1.234A4.624 4.624 0 0113 18.5a4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 0011 18.5c.003.391.04.781.11 1.166a2.5 2.5 0 103.859.584z' />
                      </svg>
                    </div>
                    <div className='font-medium text-slate-800'>Area</div>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <p>Lista de producción</p>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <p>Matutino</p>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='text-center'>20/09/2022</div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='text-center'>11:09</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='shrink-0 rounded-full mr-2 sm:mr-3 bg-primary'>
                      <svg
                        className='w-9 h-9 fill-current text-indigo-50'
                        viewBox='0 0 36 36'>
                        <path d='M24.446 19.335a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM20.431 11.938a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM14.969 20.25a2.49 2.49 0 00-1.932-1.234A4.624 4.624 0 0113 18.5a4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 0011 18.5c.003.391.04.781.11 1.166a2.5 2.5 0 103.859.584z' />
                      </svg>
                    </div>
                    <div className='font-medium text-slate-800'>Area</div>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <p>Lista de producción</p>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <p>Matutino</p>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='text-center'>20/09/2022</div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='text-center'>11:09</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='shrink-0 rounded-full mr-2 sm:mr-3 bg-primary'>
                      <svg
                        className='w-9 h-9 fill-current text-indigo-50'
                        viewBox='0 0 36 36'>
                        <path d='M24.446 19.335a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM20.431 11.938a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM14.969 20.25a2.49 2.49 0 00-1.932-1.234A4.624 4.624 0 0113 18.5a4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 0011 18.5c.003.391.04.781.11 1.166a2.5 2.5 0 103.859.584z' />
                      </svg>
                    </div>
                    <div className='font-medium text-slate-800'>Area</div>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <p>Lista de producción</p>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <p>Matutino</p>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='text-center'>20/09/2022</div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='text-center'>11:09</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='shrink-0 rounded-full mr-2 sm:mr-3 bg-primary'>
                      <svg
                        className='w-9 h-9 fill-current text-indigo-50'
                        viewBox='0 0 36 36'>
                        <path d='M24.446 19.335a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM20.431 11.938a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM14.969 20.25a2.49 2.49 0 00-1.932-1.234A4.624 4.624 0 0113 18.5a4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 0011 18.5c.003.391.04.781.11 1.166a2.5 2.5 0 103.859.584z' />
                      </svg>
                    </div>
                    <div className='font-medium text-slate-800'>Area</div>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <p>Lista de producción</p>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <p>Matutino</p>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='text-center'>20/09/2022</div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='text-center'>11:09</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='shrink-0 rounded-full mr-2 sm:mr-3 bg-primary'>
                      <svg
                        className='w-9 h-9 fill-current text-indigo-50'
                        viewBox='0 0 36 36'>
                        <path d='M24.446 19.335a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM20.431 11.938a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM14.969 20.25a2.49 2.49 0 00-1.932-1.234A4.624 4.624 0 0113 18.5a4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 0011 18.5c.003.391.04.781.11 1.166a2.5 2.5 0 103.859.584z' />
                      </svg>
                    </div>
                    <div className='font-medium text-slate-800'>Area</div>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <p>Lista de producción</p>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <p>Matutino</p>
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='text-center'>20/09/2022</div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='text-center'>11:09</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard11;
