import { useEffect, useState } from "react";
import "./App.css";
import CardsRickAndMorty from "./components/CardsRickAndMorty";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";

function App() {
    const [users, setUsers] = useState([]);
    const [endpoint, setEndpoint] = useState("https://rickandmortyapi.com/api/character");
    const [nextpoint, setNextpoint] = useState("");
    const [prevpoint, setPrevpoint] = useState("");


    const getUsers = async () => {
        const response = await fetch(endpoint);
        const {info, results} = await response.json();

        const {next, prev} = info;
        if(next !== null) setNextpoint(next);
        if(prev !== null) setPrevpoint(prev);
        console.log(next, prev)

        setUsers(results)
    }    
    const nextUpdate = () =>{
        setEndpoint(nextpoint)
    }
    const prevUpdate = () =>{
        setEndpoint(prevpoint)
    }
    
    useEffect(() => {
        getUsers();
    }, []);
    
    useEffect(() => {
        getUsers();
    }, [endpoint]);
    
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
                <button onClick={nextUpdate}>Next</button>
                <button onClick={prevUpdate}>Prev</button>

            </header>
        </div>
    );
}

export default App;
