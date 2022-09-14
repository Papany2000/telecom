import React from 'react'


function AddOrderForm(props) {


  return (
    <div>
     <h2 className='w-80 mx-auto my-7 font-serif decoration-2'>{props.text}</h2>
     <form className='w-11/12 mt-3 mx-auto' onSubmit={props.submit}>
        <input className='w-30 border text-center'
         type='text'
         name=' contractId'
         required='required'
         placeholder='введите id дговора'
         onChange={props.change}
        />
         <input className='w-30 mx-1 border text-center'
         type='text'
         name='number'
         required='required'
         placeholder='введите №'
         onChange={props.change}
        />
         <input className='w-30 mx-1 border text-center'
         type='text'
         name='description'
         required='required'
         placeholder='введите описание'
         onChange={props.change}
        />
         <input className='w-30 mx-1 border text-center'
         type='text'
         name='type'
         required='required'
         placeholder='введите тип'
         onChange={props.change}
        />
         <input className='w-28 mx-1 border text-center'
         type='text'
         name='supportEmail'
         required='required'
         placeholder='введите почту'
         onChange={props.change}
        />
         <input className='w-28 mx-1 border text-center'
         type='text'
         name='supprotPhone'
         required='required'
         placeholder='введите тел.'
         onChange={props.change}
        />
         <input className='w-28 mx-1 border text-center'
         type='text'
         name='supprotEmialTemplate'
         required='required'
         placeholder='введите текст сообщения'
         onChange={props.change}
        />
       
        <button type='submit' className='w-28 border mx-1 bg-sky-500 text-center'>add</button>
        </form>   
   
    
    </div>
  );
  }

export default AddOrderForm;