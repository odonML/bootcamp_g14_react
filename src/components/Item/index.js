import React from "react";

function Item({text, className, callback}){
    return <li className={className} onClick={callback}>{text}</li>
}

export default Item;