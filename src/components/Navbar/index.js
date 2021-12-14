import React, { useState, useEffect } from "react";
import Content from "../Content";
import Item from "../Item";
import allItems from "./items";
import "./Navbar.css";

function Navbar() {
    const [active, setActive] = useState(1);
    const [items, setItems] = useState([]);

	useEffect(() => {
		// await fetch()
		setTimeout(() => {
			const response = allItems;
			setItems(response);
		}, 3000);
	}, []);

    const handleClick = (item) => setActive(item);
    const activeItem = (item) => `item ${active === item ? "active" : ""}`;

    // const showContent = (item) =>
    //     item ? `Item ${item}` : "";

    return (
        <div>
            <ul>
                {items.map(({ id, nameItem }) => (
                    <Item key={id} text={nameItem} className={activeItem(id)} callback={()=>handleClick(id)} />
                ))} 
            </ul>
            <div>
                <Content content={`item ${active}`} />
                {/* <h2>{showContent(active)}</h2> */}
            </div>
        </div>
    );
}

export default Navbar;
