import React, {useState, useEffect} from 'react';
import UserCard from '../../components/UserCard';
import { getUsers } from '../../services/user';
import "./UsersList.css"
function UsersList() {
    const [users, setUsers] = useState([]);

      const getUsersUI = async () => {
          const response = await getUsers();
          const arrayUsers = await toArray(response)
          setUsers(arrayUsers);
      }
      
      const toArray = (objPosts) =>{
        let listPosts = [];
        for (let key in objPosts) {
          let obj = {
            id: key,
            ...objPosts[key],
          }
          listPosts.push(obj);
        }
        return listPosts;
      }
      
    useEffect(()=>{
        getUsersUI();
    },[])

    return(
        <div className='usersList'>
            {users.map(({id, firstName, lastName, gender, occupation, birthdate})=>{
                return <UserCard key={id} firstName={firstName} lastName={lastName} gender={gender} occupation={occupation} birthdate={birthdate} />
            })}
        </div>
    )
}

export default UsersList;