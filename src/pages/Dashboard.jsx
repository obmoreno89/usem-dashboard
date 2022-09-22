import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DropdownFilter from '../partials/dashboard/DropdownFilter';
import Datepicker from '../partials/dashboard/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';

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

                <Datepicker align='right' />
              </div>
            </div>
            <div className='grid grid-cols-12 gap-6'>
              <DashboardCard01 />

              <DashboardCard02 />

              <DashboardCard03 />

              <DashboardCard04 />

              <DashboardCard05 />

              <DashboardCard07 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
