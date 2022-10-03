import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DropdownFilter from '../partials/dashboard/DropdownFilter';
import Datepicker from '../partials/dashboard/Datepicker';
import GraphAccident from '../partials/dashboard/GraphAccident';
import GraphIncident from '../partials/dashboard/GraphIncident';
import GraphBadPieces from '../partials/dashboard/GraphBadPieces';
import GraphOkPieces from '../partials/dashboard/GraphOkPieces';
import GraphDowntime from '../partials/dashboard/GraphDowntime';
import AnalyticsCard11 from '../partials/analytics/AnalyticsCard11';
import GraphGender from '../partials/dashboard/GraphGender';
import GraphOperationTime from '../partials/dashboard/GraphOperationTime';
import CambiarNombre01 from '../partials/dashboard/CambiarNombre01';
import CambiarNombre02 from '../partials/dashboard/CambiarNombre02';

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

              <GraphBadPieces />

              <GraphOkPieces />

              <GraphDowntime />

              <GraphOperationTime />

              <CambiarNombre01 />

              <CambiarNombre02 />

              <AnalyticsCard11 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
