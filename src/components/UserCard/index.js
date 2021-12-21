import React from 'react';
import UserDataCard from "../UserDataCard";

function UserCard({firstName, lastName, gender, occupation, birthdate, callback=null}) {
    return(
        <div onClick={callback} className='card'>
            <UserDataCard title={"Nombre:"} text={firstName}/>
			<UserDataCard title={"Apellido:"} text={lastName}/>
			<UserDataCard title={"Genero:"} text={gender}/>
			<UserDataCard title={"Ocupacion:"} text={occupation}/>
			<UserDataCard title={"Fecha de nacimiento:"} text={birthdate}/>
        </div>
    )
}

export default UserCard;