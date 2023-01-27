import React, { useState } from 'react';
import ModalBlank from '../../../components/ModalBlank';
import GraphIncident from '../GraphIncident';
import iconDashboard from '../../../images/iconDashboard';

function GraphModalIncident({
  setGraphModalIncidentOpen,
  graphModalIncidentOpen,
}) {
  return (
    <div className='m-1.5 '>
      <ModalBlank
        id='success-modal'
        modalOpen={graphModalIncidentOpen}
        setModalOpen={setGraphModalIncidentOpen}
      >
        <div className='p-5 flex space-x-4 '>
          <div className='relative'>
            <button
              className='absolute top-6 right-4'
              onClick={(e) => {
                e.stopPropagation();
                setGraphModalIncidentOpen(false);
              }}
            >
              <img
                className='w-7'
                src={iconDashboard.minimize}
                alt='Minimize'
              />
            </button>
            <section>
              <GraphIncident width={true} height={true} icon={true} />
            </section>
          </div>
        </div>
      </ModalBlank>
      {/* End */}
    </div>
  );
}

export default GraphModalIncident;
