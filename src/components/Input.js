import React from 'react';

function Input({id, value, setValue, label, type = "text" }) {
    return (
        <div className='input-block'>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} onChange={(e)=> setValue(e.target.value)} value={value} placeholder={`Escribe ${label}`} />
    </div>
    );
}

export default Input;