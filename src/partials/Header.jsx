import React, { useState } from 'react';
import Help from '../components/DropdownHelp';
import UserMenu from '../partials/dashboard/DropdownProfile';

function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className='sticky top-0 bg-white border-b border-slate-200 z-30'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 -mb-px'>
          <div className='flex space-x-3'>
            {/* Hamburger button */}
            <button
              className='text-slate-500 hover:text-slate-600 lg:hidden'
              aria-controls='sidebar'
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className='sr-only'>Open sidebar</span>
              <svg
                className='w-6 h-6 fill-current'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect x='4' y='5' width='16' height='2' />
                <rect x='4' y='11' width='16' height='2' />
                <rect x='4' y='17' width='16' height='2' />
              </svg>
            </button>
            <h2 className='font-semibold text-lg'>Dashboard</h2>
          </div>

          {/* Header: Right side */}
          <div className='flex items-center space-x-3'>
            <Help align='right' />
            {/*  Divider */}
            <hr className='w-px h-6 bg-slate-200 mx-3' />
            <UserMenu align='right' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
