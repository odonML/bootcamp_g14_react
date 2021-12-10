import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
    const [active, setActive] = useState(0);
    
    const handleClick = (item) => setActive(item);
    const activeItem = (item) => `item ${active === item ? "active" : "inactive"}`

    return (
        <ul>
            <li className={activeItem(1)} onClick={() => handleClick(1) }>
                item1
            </li>
            <li className={activeItem(2)} onClick={() => handleClick(2)}>
                item2
            </li>
            <li className={activeItem(3)} onClick={() => handleClick(3)}>
                item3
            </li>
        </ul>
    );
}

export default Navbar;
