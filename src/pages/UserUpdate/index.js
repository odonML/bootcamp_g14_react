import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { getUserById, updateUser } from "../../services/user";
import { useNavigate, useParams } from 'react-router-dom';

function UserUpdate() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [occupation, setOccupation] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const navigate = useNavigate();
    const opGender = [
        {
            opValue: "M",
            opText: "Masculino",
        },
        {
            opValue: "F",
            opText: "Femenino",
        },
        {
            opValue: "X",
            opText: "No Binario",
        },
    ];

    const opActivity = [
        {
            opValue: "doctor",
            opText: "Doctor",
        },
        {
            opValue: "arquitecto",
            opText: "Arquitecto",
        },
        {
            opValue: "developer",
            opText: "Desarrollador",
        },
    ];
    const params = useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const id =params.userID;
		const data = {
			firstName,
			lastName,
			gender,
			occupation,
			birthdate,
		};
		await updateUser(id, data);
        navigate(`/users/${id}`)
    };

    useEffect(()=>{
        const get = async () => {
			const { firstName, lastName, gender, occupation, birthdate } =
				await getUserById(params.userID);
			// console.log(response);
			setFirstName(firstName);
			setLastName(lastName);
			setGender(gender);
			setOccupation(occupation);
			setBirthdate(birthdate);
		};
		get();
    },[params.userID])

    return (
        <div className="form-col">
            <h4>Agregar Usuario</h4>
            <form onSubmit={handleSubmit}>
                <Input
                    id={"firstName"}
                    value={firstName}
                    setValue={setFirstName}
                    label={"Nombre"}
                />
                <Input
                    id={"lastName"}
                    value={lastName}
                    setValue={setLastName}
                    label={"Apellido"}
                />
                <Select
                    value={gender}
                    setValue={setGender}
                    options={opGender}
                    label={"Genero"}
                />
                <Select
                    value={occupation}
                    setValue={setOccupation}
                    options={opActivity}
                    label={"Ocupacion"}
                />
                <Input
                    type={"date"}
                    id={"birthdate"}
                    value={birthdate}
                    setValue={setBirthdate}
                    label={"Fecha de nacimiento"}
                />
                <Button type={"submit"} text={"Actualizar"} />
            </form>
        </div>
    );
}

export default UserUpdate;
