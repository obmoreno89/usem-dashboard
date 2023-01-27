import React, { useState } from 'react';
import ModalBlank from '../../../components/ModalBlank';
import GraphDowntime from '../GraphDowntime';
import iconDashboard from '../../../images/iconDashboard';

function GraphModalDowntime({
  setGraphModalDowntimeOpen,
  graphModalDowntimeOpen,
}) {
  return (
    <div className='m-1.5 '>
      <ModalBlank
        id='success-modal'
        modalOpen={graphModalDowntimeOpen}
        setModalOpen={setGraphModalDowntimeOpen}
      >
        <div className='p-5 flex space-x-4 '>
          <div className='relative'>
            <button
              className='absolute top-6 right-4'
              onClick={(e) => {
                e.stopPropagation();
                setGraphModalDowntimeOpen(false);
              }}
            >
              <img
                className='w-7'
                src={iconDashboard.minimize}
                alt='Minimize'
              />
            </button>
            <section>
              <GraphDowntime width={true} height={true} icon={true} />
            </section>
          </div>
        </div>
      </ModalBlank>
      {/* End */}
    </div>
  );
}

export default GraphModalDowntime;
