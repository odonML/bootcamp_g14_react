import React, {useState, useEffect} from 'react';
import { getUsers } from '../../services/user';
import "./UsersList.css"
import { useNavigate } from 'react-router-dom';
import UserCard from '../../components/UserCard';


function UsersList() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

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
        console.log(users)
    },[])


    return(
        <div className='usersList'>
            {users.length === 0 ? <h5>No hay usuarios</h5>:""}
            {users.map(({id, firstName, lastName, gender, occupation, birthdate})=>{
                return <UserCard key={id} firstName={firstName} lastName={lastName} gender={gender} occupation={occupation} birthdate={birthdate} callback={()=> navigate(`${id}`)} />
            })}
        </div>
    )
}

export default UsersList;