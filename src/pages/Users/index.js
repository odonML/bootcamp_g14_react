import React, { useEffect, useState } from 'react';
import UsersList from "../../components/UsersList";
import { getUsers } from "../../services/user";
import "./Users.css";


  
  function Users() {
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

    console.log(users)

    return (
        <div className='display'>
            <div className='content'>
            <h4>lista de usuarios Usuarios</h4>
            <UsersList users={users} />
            </div>
        </div>
    )

}

export default Users;