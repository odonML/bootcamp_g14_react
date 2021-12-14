import { useEffect, useState } from "react";
import "./App.css";
import CardsRickAndMorty from "./components/CardsRickAndMorty";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const {info, results} = await response.json();
            console.log(results);
            setUsers(results)
        }
        getUsers();
    }, []);

    const usersUI = users.map(({id, name, status, species, image, episode}) => (
       < CardsRickAndMorty key={id} name={name} status={status} species={species} img={image} episode={episode}/>
    ));

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Navbar />
                <div className="personajes">
                {usersUI}
                </div>
            </header>
        </div>
    );
}

export default App;
