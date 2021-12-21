import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import UserCard from '../../components/UserCard/index';
import { deleteUser, getUserById } from "../../services/user";

function UserDetail() {
    const [user, setUser] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const get = async () => {
            const response = await getUserById(params.userID);
            console.log(response);
            setUser(response);
        };
        get();
    }, [params.userID]);

    const eliminarUser = async () => {
        console.log("eliminar usuario")
        const id = params.userID;
        await deleteUser(id);
        await navigate('/users')
    }

    return (
        <div className="detail">
			<UserCard firstName={user.firstName} lastName={user.lastName} gender={user.gender} occupation={user.occupation} birthdate={user.birthdate}/>
            <Button
                type={"text"}
                text={"Actualizar"}
                callback={() => navigate(`update`)}
            />
            <Button 
				type={"text"} 
				text={"Eliminar"} 
				callback={eliminarUser} 
			/>
        </div>
    );
}
export default UserDetail;
