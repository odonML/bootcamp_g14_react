import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getUserById } from "../../services/user";

function UserDetail() {
    const [user, setUser] = useState({});
	const params = useParams();

	useEffect(() => {
		const get = async () => {
			const response = await getUserById(params.userID);
			console.log(response);
			setUser(response);
		};
		get();
	}, [params.userID]);
    
	return (
        <div>
			Hola soy el detalle del usuario: {user?.firstName} {user?.lastName}
		</div>
	);
}
export default UserDetail;