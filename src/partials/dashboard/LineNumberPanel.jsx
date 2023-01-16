import { useEffect, useRef } from 'react';
import Transition from '../../utils/Transition';
import { useGetLineNumberQuery } from '../../store/apis/lineNumberApi';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLineNumber,
  setLineNumberName,
} from '../../store/slices/state/stateSlice';

const LineNumberPanel = ({
  setLineNumberPanelOpen,
  lineNumberPanelOpen,
  setBusinessUnityPanelOpen,
}) => {
  const closeBtn = useRef(null);
  const panelContent = useRef(null);
  const dispatch = useDispatch();
  const { idNameBusinessUnity, lineNumber } = useSelector(
    (state) => state.state
  );

  const { data: lineNumberList = [] } = useGetLineNumberQuery({
    idNameBusinessUnity,
  });

  const onChangeNameBusiness = (optionId, optionName) => {
    if (idNameBusinessUnity === optionId < 1) {
      dispatch(setLineNumber(null));
      dispatch(setLineNumberName(null));
    } else {
      dispatch(setLineNumber(optionId));
      dispatch(setLineNumberName(optionName));
    }
  };

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!lineNumberPanelOpen || keyCode !== 27) return;
      setLineNumberPanelOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      <Transition
        className='fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity'
        show={lineNumberPanelOpen}
        enter='transition ease-out duration-200'
        enterStart='opacity-0'
        enterEnd='opacity-100'
        leave='transition ease-out duration-200'
        leaveStart='opacity-100'
        leaveEnd='opacity-0'
        aria-hidden='true'
      />
      <Transition
        id='panelG'
        className='fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6'
        role='dialog'
        aria-modal='true'
        show={lineNumberPanelOpen}
        enter='transition ease-in-out duration-500'
        enterStart='opacity-0 translate-x-4'
        enterEnd='opacity-100 translate-x-0'
        leave='transition ease-in-out duration-500'
        leaveStart='opacity-100 translate-x-0'
        leaveEnd='opacity-0 translate-x-4'
      >
        <div
          ref={panelContent}
          className={`w-[480px] bg-white absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
            lineNumberPanelOpen ? 'translate-x-' : 'translate-x-full'
          }`}
        >
          <section className='mb-10 flex items-center justify-between  '>
            <div className='flex ml-5'>
              <button
                onClick={() => {
                  setLineNumberPanelOpen(false);
                  setBusinessUnityPanelOpen(true);
                }}
                className='mt-[17px]'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-arrow-left'
                >
                  <line x1='19' y1='12' x2='5' y2='12'></line>
                  <polyline points='12 19 5 12 12 5'></polyline>
                </svg>
              </button>
              <h2 className='mt-4 ml-5 w-full font-bold text-black text-2xl'>
                Numero de lineas
              </h2>
            </div>

            <button
              ref={closeBtn}
              onClick={() => setLineNumberPanelOpen(false)}
              className=' top-1 right-0 mt-4 mr-3 group p-1'
            >
              <svg
                className='w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z' />
              </svg>
            </button>
          </section>
          <section>
            {lineNumberList?.lines?.length ? (
              <div className='w-full px-5  2xl:pt-8'>
                {lineNumberList?.lines?.map((options, index) => (
                  <ul key={index}>
                    <li className='py-1 px-3'>
                      <label className='flex items-center'>
                        <input
                          type='checkbox'
                          className='form-checkbox'
                          value={options.id}
                          checked={lineNumber === options.id}
                          onChange={() =>
                            onChangeNameBusiness(options.id, options.name)
                          }
                        />
                        <span className='text-sm font-semibold ml-2'>
                          {options.name}
                        </span>
                      </label>
                    </li>
                  </ul>
                ))}

                <div className='flex justify-center items-center mt-14'>
                  <button
                    onClick={() => setLineNumberPanelOpen(false)}
                    className='btn bg-primary hover:bg-secondary text-white hover:text-primary font-semibold w-full h-12'
                  >
                    Finalizar
                  </button>
                </div>
              </div>
            ) : (
              <div className='w-full px-5  2xl:pt-8 flex justify-center items-start'>
                <h2 className='font-semibold text-slate-500 text-xl'>
                  Sin lineas
                </h2>
              </div>
            )}
          </section>
        </div>
      </Transition>
    </>
  );
};

export default LineNumberPanel;
