import React, { useEffect, useState } from "react";
import "./Counter.css";
function Counter() {
    const [counter, setCounter] = useState(0);
    let colorCounter = counter % 2 === 0? "text-even": "text-odd";
    // UseEffect que se ejecutara cuando un estado o una prop cambie
    // useEffect(()=>{
    //     console.log("siempre")
    // });

    // UseEffect que se ejecutara solo una ves
    // useEffect(()=>{
    //     console.log("commit");
    // }, []);

    // UseEffect que se ejecutara cuando cambie el estado que esta pendiente "[counter]"
    useEffect(() => {
        console.log("cambio Counter");
    }, [counter]);

    return (
        <div>
            <p className={colorCounter}>Counter: {counter}</p>
            <button className="btn" onClick={() => setCounter(counter + 1)}>add</button>
            <button className="btn" onClick={() => setCounter(0)}>reset</button>
            <button className="btn" onClick={() => setCounter(counter - 1)}>less</button>
        </div>
    );
}

export default Counter;
