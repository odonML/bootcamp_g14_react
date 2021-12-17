import React, { useState } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { crearUsuario } from "../../services/user";
import "./UserNew.css";

function UserNew() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [activity, setActivity] = useState("");
    const [birthdate, setBirthdate] = useState("");

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
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(gender);
        try {
            await crearUsuario({
                firstName,
                lastName,
                gender,
                activity,
                birthdate,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container form-col">
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
                    value={activity}
                    setValue={setActivity}
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
                <Button type={"submit"} text={"Crear"} />
            </form>
        </div>
    );
}

export default UserNew;
