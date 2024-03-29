import { Link, useNavigate } from 'react-router-dom';
import iconLogin from '../images/iconLogin';
import images from '../images/imagesPNG';
import { useForm } from 'react-hook-form';
import LoadingButton from './helpers/LoadingButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  startLoading,
  finishLoading,
  handleEye,
  handleErrorLogin,
  handleErrorLoginClosed,
} from '../store/slices/login/loginSlice';

function Signin() {
  const dispatch = useDispatch();
  const { loading, eye, errorLogin } = useSelector((state) => state.login);

  const submit = (data) => console.log(data);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const loginUser = (dataUser) => {
    fetch('http://kpi.syncronik.com/api/auth/login/', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(dataUser),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.code === 202) {
          dispatch(startLoading());
          setTimeout(() => {
            localStorage.setItem('token', json.token);
            localStorage.setItem('id', json.id);
            localStorage.setItem('first_name', json.first_name);
            navigate('/kpis/');
            dispatch(finishLoading());
          }, 1000);
        } else {
          dispatch(handleErrorLogin());
          setTimeout(() => {
            dispatch(handleErrorLoginClosed());
          }, 2000);
        }
      });
  };

  return (
    <main className='bg-white'>
      <div className='relative md:flex'>
        {/* Content */}
        <div className='md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            {/* Header */}
            <div className='flex-1'>
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
                {/* Logo */}
                <figure className='block'>
                  <img
                    className='w-32 mt-5'
                    src={iconLogin.logoNi}
                    alt='Logo'
                  />
                </figure>
              </div>
            </div>

            <div className='w-10/12 mx-auto px-4 py-8'>
              <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                Hola de nuevo
              </h1>
              {/* Form */}
              <form onSubmit={handleSubmit(loginUser)}>
                <div className='space-y-4'>
                  {/* INPUT EMAIL */}
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='email'>
                      Correo electrónico
                    </label>
                    <input
                      autoComplete='off'
                      className='form-input w-full'
                      type='email'
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'El formato no es correcto',
                        },
                      })}
                    />
                    {errors.email && (
                      <span className='text-red-500 text-sm'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  {/* INPUT PASSWORD */}
                  <div className='relative'>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='password'>
                      Contraseña
                    </label>
                    <input
                      autoComplete='off'
                      className='form-input w-full'
                      type={eye ? 'text' : 'password'}
                      {...register('password', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                      })}
                    />
                    {errors.password && (
                      <span className='text-red-500 text-sm'>
                        {errors.password.message}
                      </span>
                    )}
                    <button
                      onClick={() => dispatch(handleEye())}
                      type='button'
                      className='absolute right-0 top-5 mt-3 mr-4'>
                      {eye ? (
                        <img src={iconLogin.eye} alt='ojo abierto' />
                      ) : (
                        <img src={iconLogin.eyeClosed} alt='ojo tachado' />
                      )}
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between mt-6'>
                  <div className='mr-1'>
                    <Link
                      className='text-sm underline hover:no-underline'
                      to='/reset-password'>
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                  {!loading ? (
                    <button
                      type='submit'
                      className='btn bg-primary hover:bg-secondary hover:text-primary text-white ml-3'>
                      Iniciar sesión
                    </button>
                  ) : (
                    <LoadingButton loading='Ingresando' />
                  )}
                </div>
              </form>
              {/* Footer */}
              <div className='pt-5 mt-6 border-t border-slate-200'>
                {/* Warning */}
                {errorLogin && (
                  <div className='mt-5'>
                    <div className='bg-red-100 text-red-600 px-2 py-2 rounded flex'>
                      <svg
                        className='w-3 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3'
                        viewBox='0 0 16 16'>
                        <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z' />
                      </svg>
                      <span className='text-sm'>
                        Credenciales Incorrectas, por favor de verificar el
                        usuario o contraseña.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className='hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2'
          aria-hidden='true'>
          <img
            className='object-cover object-center w-full h-full'
            src={images.businessReport}
            width='760'
            height='1024'
            alt='Authentication'
          />
        </div>
      </div>
    </main>
  );
}

export default Signin;
