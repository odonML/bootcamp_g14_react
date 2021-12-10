import React, { useState } from "react";
import ContentNavbar from "../ContentNavbar";
import "./Navbar.css";

function Navbar() {
    const [active, setActive] = useState(1);

    const handleClick = (item) => setActive(item);
    const activeItem = (item) =>
        `item ${active === item ? "active" : ""}`;

    const showContent = (item) =>
        item ? `Item ${item}` : "";

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
                <li className={activeItem(4)} onClick={() => handleClick(4)}>
                    item4
                </li>
            </ul>
            <div>
                <ContentNavbar content={`item ${active}`}/>
                {/* <h2>{showContent(active)}</h2> */}
            </div>

        </div>
    );
}

export default Navbar;
