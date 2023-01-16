import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Datepicker from '../partials/dashboard/Datepicker';
import GraphAccident from '../partials/dashboard/GraphAccident';
import GraphIncident from '../partials/dashboard/GraphIncident';
import GraphPieces from '../partials/dashboard/GraphPieces';
import GraphDowntime from '../partials/dashboard/GraphDowntime';
import RecentRecordTable from '../partials/dashboard/RecentRecordTable';
import GraphHeadcount from '../partials/dashboard/GraphHeadcount';
import GraphOperationTime from '../partials/dashboard/GraphOperationTime';
import OptionsBusinessUnityPanel from '../partials/dashboard/OptionsBusinessUnityPanel';
import LineNumberPanel from '../partials/dashboard/LineNumberPanel';
import { useSelector } from 'react-redux';
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [businessUnityPanelOpen, setBusinessUnityPanelOpen] = useState(false);
  const [lineNumberPanelOpen, setLineNumberPanelOpen] = useState(false);

  const { nameBusinessUnity, idNameBusinessUnity } = useSelector(
    (state) => state.state
  );

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 max-w-9xl mx-auto'>
            <div className='flex justify-between'>
              <div className='flex space-x-3'>
                <h2 className='font-semibold text-lg'>Dashboard</h2>
              </div>
              <div className='grid grid-flow-col sm:auto-cols-max sm:justify-end gap-2 mb-5'>
                <button
                  onClick={() => setBusinessUnityPanelOpen(true)}
                  className='btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600'
                >
                  <svg className='w-4 h-4 fill-current' viewBox='0 0 16 16'>
                    <path d='M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z' />
                  </svg>
                </button>
                <Datepicker />
              </div>
            </div>
            <div className='grid grid-cols-12 gap-6'>
              <GraphAccident />

              <GraphIncident />

              <GraphPieces />

              <GraphDowntime />

              <GraphOperationTime />

              {/* <GraphPpa />

              <GraphReWork /> */}

              <GraphHeadcount />
            </div>

            <section className='mt-8'>
              <RecentRecordTable />
            </section>
            <section>
              <OptionsBusinessUnityPanel
                businessUnityPanelOpen={businessUnityPanelOpen}
                setBusinessUnityPanelOpen={setBusinessUnityPanelOpen}
                setLineNumberPanelOpen={setLineNumberPanelOpen}
              />
            </section>
            <section>
              <LineNumberPanel
                setBusinessUnityPanelOpen={setBusinessUnityPanelOpen}
                setLineNumberPanelOpen={setLineNumberPanelOpen}
                lineNumberPanelOpen={lineNumberPanelOpen}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
