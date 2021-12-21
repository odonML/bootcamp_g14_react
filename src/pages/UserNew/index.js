import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { crearUsuario } from "../../services/user";
import "./UserNew.css";

function UserNew() {
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

    const opOccupation = [
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(gender);
        try {
            await crearUsuario({
                firstName,
                lastName,
                gender,
                occupation,
                birthdate,
            });
            navigate(`/users`)
        } catch (err) {
            console.log(err);
        }
    };

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
                    options={opOccupation}
                    label={"Ocupacion"}
                />
                <Input
                    type={"date"}
                    id={"birthdate"}
                    value={birthdate}
                    setValue={setBirthdate}
                    label={"Fecha de nacimiento"}
                />
                <Button type={"submit"} text={"Crear"} />
            </form>
        </div>
    );
}

export default UserNew;
