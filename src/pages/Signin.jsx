import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import iconLogin from '../images/iconLogin';
import images from '../images/imagesPNG';
import { useForm } from 'react-hook-form';

function Signin() {
  const [eye, setEye] = useState(false);

  const toggleEye = () => {
    setEye((prevState) => !prevState);
  };

  const submit = (data) => console.log(data);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

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

            <div className='max-w-lg mx-auto px-4 py-8'>
              <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                Hola de nuevo
              </h1>
              {/* Form */}
              <form onSubmit={handleSubmit(submit)}>
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
                      id='password'
                      className='form-input w-full'
                      type={eye ? 'text' : 'password'}
                      autoComplete='off'
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
                      onClick={toggleEye}
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
                  <button
                    type='submit'
                    className='btn bg-primary hover:bg-secondary hover:text-primary text-white ml-3'>
                    Iniciar sesión
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className='pt-5 mt-6 border-t border-slate-200'>
                {/* Warning */}
                <div className='mt-5'>
                  <div className='bg-red-100 text-red-600 px-2 py-2 rounded flex'>
                    <svg
                      className='w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3'
                      viewBox='0 0 16 16'>
                      <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z' />
                    </svg>
                    <span className='text-sm'>
                      Credenciales Incorrectas, por favor de verificar el
                      usuario o contraseña.
                    </span>
                  </div>
                </div>
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
