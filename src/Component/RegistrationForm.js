import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { login } from '../api/Auth';

function RegistrationForm() {

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur'
  });
  const onSabmit =  async (data) => {
    console.log(data)
    try {
    await login(data)
      Swal.fire({
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        width: 200,
        position: 'top-end',
        title: 'info!',
        text: 'Успешно',
        timer: 1500
      })
      
      reset()
    } catch(e) {
      Swal.fire({
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        width: 200,
        position: 'top-end',
        title: 'Error!',
        text: 'Do you want to continue',
        timer: 1500
      })
      reset()
    }
  }
 
 

  return (
    <div>
      <form onSubmit={handleSubmit(onSabmit)} className='w-1/3 mt-48 mr-auto  ml-auto  font-medium'>
        <label>
          Введите login:
          <input className='border-2 px-2 py-1 mb-2 w-full outline-0' {...register('login', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors?.login && <p className='text-center text-red-600'>{errors?.login?.message || "error"}</p>}
        </div>
        <label>
          Введите пароль:
          <input type='password' className='border-2 px-2 py-1 mb-2 w-full outline-0' {...register('password', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors?.password && <p className='text-center text-red-600'>{errors?.password?.message || "error"}</p>}
        </div>
        <input type="submit" className='border px-2 py-2 bg-yellow-400' />
      </form>
    </div>
  );
}
export default RegistrationForm;