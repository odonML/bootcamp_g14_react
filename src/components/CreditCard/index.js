import React, { useState } from "react";
import "./CreditCard.css";

function CreditCard() {
    const [cardNum, setCardNum] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [cvc, setCvc] = useState("");

    return (
        <div className="container">
            <div className="creditCard">
                {/* <p>Tarjeta de Credito: </p> */}
                <p>Num: {cardNum}</p>
                <p>Name: {name}</p>
                <p>date: {date}</p>
            </div>
            <form className="form">
                <div className="flex">
                    <div>
                        <label htmlFor="cardNum">Numero de tarjeta:</label>
                        <input
                            id="cardNum"
                            onChange={(e) => setCardNum(e.target.value)}
                            value={cardNum}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <div>
                        <label htmlFor="date">date:</label>
                        <input
                            id="date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                        />
                    </div>

                    <button type="submit" className="btn">
                        Enviar
                    </button>
                </div>
            </form>
            {/* Cantidad: {input2} */}
        </div>
    );
}

export default CreditCard;
