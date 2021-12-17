import React from 'react';
import UserCard from '../UserCard';

function UsersList({users}) {
    return(
        <div className='usersList'>
            {users.map(({id, firstName, lastName, gender, occupation, birthdate})=>{
                return <UserCard key={id} firstName={firstName} lastName={lastName} gender={gender} occupation={occupation} birthdate={birthdate} />
            })}
        </div>
    )
}

export default UsersList;