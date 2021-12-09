import React, { useEffect, useState } from "react";


function x(word){
    if(!word) return '';
    const [letterOne, ...letters] = word;
    return (letterOne.toUpperCase() + letters.join('').toLowerCase());
}

function Greeting({name="", lastName=""}){    
    const [isLoading, setIsLoading] = useState(true);
    console.log("Hola el componente se esta montando");
    useEffect(() => {
        console.log("Hola el componente ya cargo");
        setTimeout(()=>{
            setIsLoading(false)
        }, 4000);
    }, [])

    return(
        <div>
            <h1>Hola {name} {lastName.toUpperCase()}</h1>
            <span>{isLoading ? "El componente esta cargando" : "El componente ya cargo"}</span>
        </div>
    )
}

export default Greeting;