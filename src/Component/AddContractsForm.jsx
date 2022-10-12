import React from 'react'
import { useForm } from 'react-hook-form';
import { getContracts, postContract } from '../api/Contract';
import Swal from 'sweetalert2'


function AddContractsForm(props) {
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
      const res = await postContract(data)
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
      props.setContracts((await getContracts()).data)
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
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSabmit)} className='text-center'>
        <label>
           Id Организации:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('organizationId', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors?.organizationId && <p className='text-center text-red-600'>{errors?.organizationId?.message || "error"}</p>}
        </div>
        <label>
          № до:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('number', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.number && <p className='text-center text-red-600'>{errors?.number?.message || "error"}</p>}
        </div>
        <label>
          Описание:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('description', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.description && <p className='text-center text-red-600'>{errors?.description?.message || "error"}</p>}
        </div>
        <label>
          Договор расходный или доходный:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('isProfitable', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.isProfitable && <p className='text-center text-red-600'>{errors?.isProfitable?.message || "error"}</p>}
        </div>
        <label>
          Путь к договору:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('fileUuid', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.fileUuid && <p className='text-center text-red-600'>{errors?.fileUuid?.message || "error"}</p>}
        </div>
        <input type="submit" className='border px-2 py-2 bg-yellow-400' />
      </form>
    </div>
  );
}

 

export default AddContractsForm;