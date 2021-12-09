import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
    const [active, setActive] = useState(0);
    const activeOne = `item ${active === 1 ? "active" : "inactive"}`;
    const activeTwo = `item ${active === 2 ? "active" : "inactive"}`;
    const activeThree = `item ${active === 3 ? "active" : "inactive"}`;

    return (
        <ul>
            <li className={activeOne} onClick={() => setActive(1)}>
                item1
            </li>
            <li className={activeTwo} onClick={() => setActive(2)}>
                item1
            </li>
            <li className={activeThree} onClick={() => setActive(3)}>
                item1
            </li>
        </ul>
    );
}

export default Navbar;
