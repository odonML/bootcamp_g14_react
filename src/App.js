import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<div className="main">
			<nav className="main-nav">
				<Link className="link" to="/">
					Home
				</Link>
				<Link className="link" to="users">
					Users
				</Link>
			</nav>
			<div className="container">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
