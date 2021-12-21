import React from 'react';

function Button({ type, text, callback=null}) {
    return  <button className='btn' onClick={callback} type={type}>{text}</button>
}

export default Button;