import React from 'react';
import { useForm } from 'react-hook-form';
import { getOrganizations, postOrganization } from '../api/Organization'
import Swal from 'sweetalert2'

function AddOrganizationForm(props) {


  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur'
  });
  const onSabmit =  async (data) => {
    try {
      const res = await postOrganization(data)
      Swal.fire({
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        width: 200,
        height: 200,
        position: 'top-end',
        title: 'info!',
        text: 'Успешно',
        timer: 1500
      })
      props.setOrganizations((await getOrganizations()).data)
      reset()
    } catch(e) {
      Swal.fire({
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        width: 200,
        height: 200,
        position: 'top-end',
        title: 'Error!',
        text: 'Do you want to continue',
        timer: 1500
      })
    }
  }
 
 

  return (
    <div>
      <form onSubmit={handleSubmit(onSabmit)} className='text-center'>
        <label>
          Организация:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('name', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors?.name && <p className='text-center text-red-600'>{errors?.name?.message || "error"}</p>}
        </div>
        <label>
          Телефон:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('phone', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.phone && <p className='text-center text-red-600'>{errors?.phone?.message || "error"}</p>}
        </div>
        <label>
          Почта:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('email', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.email && <p className='text-center text-red-600'>{errors?.email?.message || "error"}</p>}
        </div>
        <label>
          Менеджер:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('manager', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.manager && <p className='text-center text-red-600'>{errors?.manager?.message || "error"}</p>}
        </div>
        <label>
          Рабочий телефон:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('managerWorkPhone', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.managerWorkPhone && <p className='text-center text-red-600'>{errors?.managerWorkPhone?.message || "error"}</p>}
        </div>
        <label>
          Личный телефон:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('managerPersonalPhone', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.managerPersonalPhone && <p className='text-center text-red-600'>{errors?.managerPersonalPhone?.message || "error"}</p>}
        </div>
        <label>
          Почта менеджера:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('managerEmail', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.managerEmail && <p className='text-center text-red-600'>{errors?.managerEmail?.message || "error"}</p>}
        </div>
        <label>
          Почта поддержки:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('supportEmail', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.supportEmail && <p className='text-center text-red-600'>{errors?.supportEmail?.message || "error"}</p>}
        </div>
        <label>
          Телефон поддержки:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('supprotPhone', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.supprotPhone && <p className='text-center text-red-600'>{errors?.supportPhone?.message || "error"}</p>}
        </div>
        <input type="submit" className='border px-2 py-2 bg-yellow-400' />
      </form>
    </div>
  );
}
export default AddOrganizationForm;