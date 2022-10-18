import React from 'react';

function WelcomeBanner() {
  const userName = localStorage.getItem('first_name');

  return (
    <>
      {/* Content */}
      <div className='relative'>
        <h1 className='text-2xl md:text-3xl text-slate-800 font-bold mb-8'>
          Bienvenido, {userName} 👋
        </h1>
      </div>
    </>
  );
}

export default WelcomeBanner;
