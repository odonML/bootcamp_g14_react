import React from "react";

function runOperation({operation, ...values}){
    const {valueOne, valueTwo} = values;
    const num1 = Number(valueOne);
    const num2 = Number(valueTwo);
    if(isNaN(num1) || isNaN(num2)) return "uno de los valores no es un numero";
    let obj = {
        suma: (num1 + num2),
        resta: (num1-num2),
        division: (num1/num2),
        multiplicacion: (num1*num2),
    }
    if(operation in obj){
        return obj[operation];
    }
}
function Calculator(props){
    const result = runOperation(props)
    return(
        <div>{result}</div>
    )
}
export default Calculator;