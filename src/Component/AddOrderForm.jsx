import React from 'react'
import { useForm } from 'react-hook-form';
import { getOrders, postOrder } from '../api/Order'


function AddOrderForm(props) {

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
    postOrder(data)
    props.setOrders((await getOrders()).data)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSabmit)} className='text-center'>
      <label>
          Id договора:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('contractId', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors?.contractId && <p className='text-center text-red-600'>{errors?.contractId?.message || "error"}</p>}
        </div>
        <label>
          № заказа:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('number', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors?.number && <p className='text-center text-red-600'>{errors?.number?.message || "error"}</p>}
        </div>
        <label>
          Описание:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('description', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.description && <p className='text-center text-red-600'>{errors?.description?.message || "error"}</p>}
        </div>
        <label>
          Тип файла:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('type', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.type && <p className='text-center text-red-600'>{errors?.type?.message || "error"}</p>}
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
        <label>
          Краткое описание:
          <input className='border px-2 py-1 mb-2 w-full outline-0' {...register('supprotEmialTemplate', { required: 'Поле обязательно к заполнению' })} />
        </label>
        <div>
          {errors.supprotEmialTemplate && <p className='text-center text-red-600'>{errors?.supprotEmialTemplate?.message || "error"}</p>}
        </div>
        <input type="submit" className='border px-2 py-2 bg-yellow-400' />
      </form>
    </div>
  );
}

export default AddOrderForm;