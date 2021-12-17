import React from "react";

function Select({ value, setValue, options, label }) {
    return (
        <div className='input-block'>
        <label htmlFor={value}>{label}</label>
        <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="none" selected="selected" hidden>Seleciona una Opcion</option>
            {options.map(({ opValue, opText }, index) => {
                return (
                    <option key={index} value={opValue}>
                        {opText}
                    </option>
                );
            })}
        </select>
        </div>
    );
}

export default Select;