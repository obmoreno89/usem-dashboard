import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DropdownFilter from '../partials/dashboard/DropdownFilter';
import Datepicker from '../partials/dashboard/Datepicker';
import GraphAccident from '../partials/dashboard/GraphAccident';
import GraphIncident from '../partials/dashboard/GraphIncident';
import GraphPieces from '../partials/dashboard/GraphPieces';
import GraphDowntime from '../partials/dashboard/GraphDowntime';
import RecentRecordTable from '../partials/dashboard/RecentRecordTable';
import GraphHeadcount from '../partials/dashboard/GraphHeadcount';
import GraphOperationTime from '../partials/dashboard/GraphOperationTime';
import GraphPpa from '../partials/dashboard/GraphPpa';
import GraphReWork from '../partials/dashboard/GraphReWork';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            <WelcomeBanner />

            <div>
              <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2 mb-5'>
                <DropdownFilter align='right' />

                <Datepicker />
              </div>
            </div>
            <div className='grid grid-cols-12 gap-6'>
              <GraphAccident />

              <GraphIncident />

              <GraphPieces />

              <GraphDowntime />

              <GraphOperationTime />

              <GraphPpa />

              <GraphReWork />

              <GraphHeadcount />
            </div>

            <section className='mt-8'>
              <RecentRecordTable />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
