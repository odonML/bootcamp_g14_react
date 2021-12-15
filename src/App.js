import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RickAndMorty from "./components/RickAndMorty";
import logo from "./logo.svg";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Navbar />
                <RickAndMorty/>

            </header>
        </div>
    );
}

export default App;
