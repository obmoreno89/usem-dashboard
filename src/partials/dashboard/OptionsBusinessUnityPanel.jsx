import { useEffect, useRef } from 'react';
import Transition from '../../utils/Transition';
import { useGetBusinessUnityQuery } from '../../store/apis/businessUnityApi';
import { useGetParamNameBusinessUnityQuery } from '../../store/apis/paramNameBusinessUnityApi';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNameBusinessUnity,
  setIdNameBusinessUnity,
} from '../../store/slices/state/stateSlice';

const OptionsBusinessUnityPanel = ({
  setBusinessUnityPanelOpen,
  businessUnityPanelOpen,
  setLineNumberPanelOpen,
}) => {
  const closeBtn = useRef(null);
  const panelContent = useRef(null);
  const dispatch = useDispatch();
  const { nameBusinessUnity, idNameBusinessUnity } = useSelector(
    (state) => state.state
  );

  console.log(idNameBusinessUnity);

  const { data: businessUnityList = [] } = useGetBusinessUnityQuery();

  const { data: nameBusinessUnityList = [] } =
    useGetParamNameBusinessUnityQuery({ nameBusinessUnity });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!businessUnityPanelOpen || keyCode !== 27) return;
      setBusinessUnityPanelOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const onChangebusiness = (optionName) => {
    if (nameBusinessUnity === optionName) {
      dispatch(setNameBusinessUnity(null));
    } else {
      dispatch(setNameBusinessUnity(optionName));
    }
  };

  const onChangeNameBusiness = (optionId) => {
    if (idNameBusinessUnity === optionId) {
      dispatch(setIdNameBusinessUnity(null));
    } else {
      dispatch(setIdNameBusinessUnity(optionId));
    }
  };
  return (
    <>
      <Transition
        className='fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity'
        show={businessUnityPanelOpen}
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
        show={businessUnityPanelOpen}
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
            businessUnityPanelOpen ? 'translate-x-' : 'translate-x-full'
          }`}
        >
          <section className='mb-10 flex items-center justify-between  '>
            <div>
              <h2 className='mt-4 ml-5 w-full font-bold text-black text-2xl'>
                Filtro
              </h2>
            </div>

            <button
              ref={closeBtn}
              onClick={() => setBusinessUnityPanelOpen(false)}
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
            <div className='w-full px-5 pt-4 2xl:pt-8'>
              <ul>
                {businessUnityList?.map((options, index) => (
                  <div key={index}>
                    <div className='text-md font-semibold text-slate-400 pb-2'>
                      selecciona BU
                    </div>
                    <ul className='mb-4'>
                      <li className='py-1 px-3'>
                        <label className='flex items-center'>
                          <input
                            type='checkbox'
                            className='form-checkbox'
                            value={options.name}
                            checked={nameBusinessUnity === options.name}
                            onClick={() => onChangebusiness(options.name)}
                          />
                          <span className='text-sm font-semibold ml-2'>
                            {options.name}
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                ))}
              </ul>
            </div>

            <div className='w-full px-5 2xl:pt-8'>
              {nameBusinessUnity?.length > 0 && (
                <ul>
                  <div>
                    <h2 className='text-md font-semibold text-slate-400 pb-2'>
                      selecciona las opciones
                    </h2>
                  </div>
                  {nameBusinessUnityList?.map((options, index) => (
                    <div key={index}>
                      <ul>
                        <li className='py-1 px-3'>
                          <label className='flex items-center'>
                            <input
                              type='checkbox'
                              className='form-checkbox'
                              value={options.id}
                              checked={idNameBusinessUnity === options.id}
                              onClick={() => onChangeNameBusiness(options.id)}
                            />
                            <span className='text-sm font-semibold ml-2'>
                              {options.name}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  ))}
                </ul>
              )}
            </div>
            <div className='w-full px-5 pt-4 2xl:pt-8'>
              <ul>
                <div>
                  <div className='text-md font-semibold text-slate-400 pb-2'>
                    selecciona una opcion
                  </div>
                  <ul className='mb-4 '>
                    <li className='py-1 px-3'>
                      <label className='flex items-center'>
                        <input
                          type='radio'
                          className='form-checkbox'
                          value='1'
                        />
                        <span className='text-sm font-semibold ml-2'>
                          Cuerpos
                        </span>
                      </label>
                    </li>
                    <li className='py-1 px-3'>
                      <label className='flex items-center'>
                        <input
                          type='radio'
                          className='form-checkbox'
                          value='1'
                        />
                        <span className='text-sm font-semibold ml-2'>
                          Embobinado
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </ul>
              <div className='flex justify-center items-center mt-14'>
                <button
                  onClick={() => {
                    setLineNumberPanelOpen(true);
                    setBusinessUnityPanelOpen(false);
                  }}
                  className='btn bg-primary hover:bg-secondary text-white hover:text-primary font-semibold w-full h-12'
                >
                  continuar
                </button>
              </div>
            </div>
          </section>
        </div>
      </Transition>
    </>
  );
};

export default OptionsBusinessUnityPanel;
