import React, { useState } from 'react';



function Alert(props) {

 const [visibel, setVisibel] = useState(false)
 const style = {
  display: (visibel) ? 'block' : 'none'
}
const Handler = () => {
  setVisibel (prev => !prev)
  setTimeout(() => setVisibel (prev => !prev), 2500)
}

  return (
    <div>
   <button type = 'text' onClick = {Handler} >alert</button>  
 <p style = {style} >{props.children}</p>
    </div>
  );
}

export default Alert;
