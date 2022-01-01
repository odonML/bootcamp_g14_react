import React, { Component } from "react";
import "./NavClass.css";

class NavClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 0,
		};
		this.activeItem = this.activeItem.bind(this);
	}

	activeItem(index) {
		this.setState({
			active: index,
		});
	}

	render() {
		let activeOne = `item ${this.state.active === 1 ? "active" : "inactive"}`;
		let activeTwo = `item ${this.state.active === 2 ? "active" : "inactive"}`;
		let activeThree = `item ${this.state.active === 3 ? "active" : "inactive"}`;
		return (
			<ul>
				<li className={activeOne} onClick={() => this.activeItem(1)}>
					item1
				</li>
				<li className={activeTwo} onClick={() => this.activeItem(2)}>
					item2
				</li>
				<li className={activeThree} onClick={() => this.activeItem(3)}>
					item3
				</li>
			</ul>
		);
	}
}

export default NavClass;
