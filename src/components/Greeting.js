import React from "react";

function firstLetterUpperCase(word){
    if(!word) return '';
    const [letterOne, ...letters] = word;
    return (letterOne.toUpperCase() + letters.join('').toLowerCase());
}

function Greeting({name="", lastName=""}){    
    return(
        <div>
            <h1>Hola {name} {lastName.toUpperCase()}</h1>
        </div>
    )
}

export default Greeting;