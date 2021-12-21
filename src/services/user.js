import { BASE_URL } from "../utils/constants";
const USER_PATH = "users.json";

const getUsers = async () =>{
    const response = await fetch(`${BASE_URL}${USER_PATH}`);
    return await response.json();
}

const getUserById = async (id) => {
    const response = await fetch(`${BASE_URL}users/${id}.json`);
    return await response.json();
};

const crearUsuario = async (data) =>{
    const response = await fetch(`${BASE_URL}${USER_PATH}`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

const updateUser = async (id, data) =>{
    const response = await fetch(`${BASE_URL}users/${id}.json`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
		// body: data,
	});
	return await response.json();
}

const deleteUser = async (id) => {
    await fetch(`${BASE_URL}users/${id}.json`, {
		method: "DELETE",
	});
}

export {
    getUsers,
    getUserById,
    crearUsuario,
    updateUser,
    deleteUser,
}