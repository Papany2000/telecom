import React from 'react'


function AddOrganizationForm(props) {

 
  return (
    <div>
     <h2 className='w-80 mx-auto my-7 font-serif decoration-2'>{props.text}</h2>
     <form className='w-11/12 mt-3 mx-auto' onSubmit={props.submit}>
        <input className='w-28 border text-center'
         type='text'
         name='name'
         required='required'
         placeholder='введите имя'
         onChange={props.change}
        />
         <input className='w-28 mx-1 border text-center'
         type='text'
         name='phone'
         required='required'
         placeholder='введите тел.' 
         onChange={props.change}
        />
         <input className='w-30 mx-1 border text-center'
         type='text'
         name='email'
         required='required'
         placeholder='введите почту'
         onChange={props.change}
        />
         <input className='w-30 mx-1 border text-center'
         type='text'
         name='manager'
         required='required'
         placeholder='имя менеджера'
        
         onChange={props.change}
        />
         <input className='w-28 mx-1 border text-center'
         type='text'
         name='managerWorkPhone'
         required='required'
         placeholder='раб. тел.'
        
         onChange={props.change}
        />
         <input className='w-28 mx-1 border text-center'
         type='text'
         name='managerPersonalPhone'
         required='required'
         placeholder='личн. тел.'
         onChange={props.change}
        />
         <input className='w-30 mx-1 border text-center'
         type='text'
         name='managerEmail'
         required='required'
         placeholder='личн. почту'
         onChange={props.change}
        />
         <input className='w-30 mx-1 border text-center'
         type='text'
         name='supportEmail'
         required='required'
         placeholder='почту поддержки'
         onChange={props.change}
        />
         <input className='w-30 border mx-1 text-center'
         type='text'
         name='supprotPhone'
         required='required'
         placeholder='тел. поддержки'
         onChange={props.change}
        />
        <button type='submit' className='w-28 border mx-1 bg-sky-500 text-center'>add</button>
        </form>  
       
   
    
    </div>
  );
  }

export default AddOrganizationForm;