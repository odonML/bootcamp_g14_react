import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
    const [active, setActive] = useState(0);

    const handleClick = (item) => setActive(item);
    const activeItem = (item) =>
        `item ${active === item ? "active" : ""}`;

    const showContent = (item) =>
        active === item ? "showContent" : "";

    return (
        <div>
            <ul>
                <li className={activeItem(1)} onClick={() => handleClick(1)}>
                    item1
                </li>
                <li className={activeItem(2)} onClick={() => handleClick(2)}>
                    item2
                </li>
                <li className={activeItem(3)} onClick={() => handleClick(3)}>
                    item3
                </li>
            </ul>
            <div>
                <h2 className={showContent(1)}>ITEM-1</h2>
                <h2 className={showContent(2)}>ITEM-2</h2>
                <h2 className={showContent(3)}>ITEM-3</h2>
            </div>

        </div>
    );
}

export default Navbar;
