import React from 'react';
import "./ButtonPagination.css";
function ButtonPagination({operation, text}) {
    return (
        <button className='btn' onClick={operation}> {text} </button>
    )
}

export default ButtonPagination;