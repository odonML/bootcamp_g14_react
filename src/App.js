import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import AppContainer from './components/AppContainer/index';

function App() {
	return (
		<AppContainer>
			<Outlet />
		</AppContainer>
	);
}

export default App;
