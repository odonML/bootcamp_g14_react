import React from "react";

// function runOperation({operation, ...values}){
//     const {valueOne, valueTwo} = values;
//     const num1 = Number(valueOne);
//     const num2 = Number(valueTwo);
//     if(isNaN(num1) || isNaN(num2)) return "uno de los valores no es un numero";
//     let obj = {
//         suma: (num1 + num2),
//         resta: (num1-num2),
//         division: (num1/num2),
//         multiplicacion: (num1*num2),
//     }
//     if(operation in obj){
//         return obj[operation];
//     }
// }


function runOperation({ operation, ...values }) {
    try {
        const numberValues = toNumberValues(values);
        let obj = {
            suma: (acu, val) => acu + val,
            resta: (acu, val) => acu - val,
            division: (acu, val) => acu / val,
            multiplicacion: (acu, val) => acu * val,
        };
        if (operation in obj) {
            return numberValues.reduce(obj[operation]);
        }
    } catch (err) {
        return err;
    }
}

function toNumberValues(obj) {
    let numbers = Object.values(obj);
    let values = [];
    for (let number of numbers) {
        let value = Number(number);
        if (isNaN(value)) throw "uno de los valores no es un numero";
        values.push(value);
    }
    return values;
}

function Calculator(props){
    const result = runOperation(props)
    return(
        <div>{result}</div>
    )
}
export default Calculator;