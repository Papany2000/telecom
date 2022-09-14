import React from 'react'


function AddContractsForm(props) {


  return (
    <div>
     <h2 className='w-80 mx-auto my-7 font-serif decoration-2'>{props.text}</h2>
     <form className='w-11/12 mt-3 mx-auto' onSubmit={props.submit}>
        <input className='border text-center'
         type='text'
         name='organizationId'
         required='required'
         placeholder='введите id организации'
         onChange={props.change}
        />
         <input className='mx-1 border text-center'
         type='text'
         name='number'
         required='required'
         placeholder='введите №'
         onChange={props.change}
        />
         <input className='mx-1 border text-center'
         type='text'
         name='description'
         required='required'
         placeholder='введите описание'
         onChange={props.change}
        />
         <input className='mx-1 border text-center'
         type='text'
         name='isProfitable'
         required='required'
         placeholder='true/false'
         onChange={props.change}
        />
         <input className='mx-1 border text-center'
         type='text'
         name='fileUuid'
         required='required'
         placeholder='введите путь к файлу'
         onChange={props.change}
        />
       
        <button type='submit' className='border mx-1 bg-sky-500 text-center'>add</button>
        </form>   
   
    
    </div>
  );
  }

export default AddContractsForm;