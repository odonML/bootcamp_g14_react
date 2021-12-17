import React from 'react';

function UserCard({firstName, lastName, gender, occupation, birthdate}) {
    return(
        <div className='card'>
            <p>Nombre: {firstName}</p>
            <p>Apellido: {lastName}</p>
            <p>Genero: {gender}</p>
            <p>Ocupacion: {occupation}</p>
            <p>Fecha de nacimiento: {birthdate}</p>
        </div>
    )
}

export default UserCard;