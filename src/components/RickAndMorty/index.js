import React, { useEffect, useState } from 'react';
import ButtonPagination from './ButtonPagination';
import CardsRickAndMorty from './CardsRickAndMorty/index';
import "./RickAndMorty.css";

function RickAndMorty() {
    const [users, setUsers] = useState([]);
    const [endpoint, setEndpoint] = useState("https://rickandmortyapi.com/api/character");
    const [nextpoint, setNextpoint] = useState("");
    const [prevpoint, setPrevpoint] = useState("");
    
    
    const getUsers = async () => {
        const response = await fetch(endpoint);
        const {info, results} = await response.json();
        
        const {next, prev} = info;
        setNextpoint(next);
        setPrevpoint(prev);

        setUsers(results)
    }    

    const nextUpdate = () =>{
        if(nextpoint !== null) setEndpoint(nextpoint)
    }
    const prevUpdate = () =>{
        if(prevpoint !== null) setEndpoint(prevpoint)
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
        <div>
            <div className="personajes">
                {usersUI}
                </div>
                <div className="buttons">
                    { prevpoint !== null? <ButtonPagination operation={prevUpdate} text={"Prev"} /> : ""}
                    { nextpoint !== null? <ButtonPagination operation={nextUpdate} text={"Next"} /> : ""}
                    
                </div>
        </div>
    )
}

export default RickAndMorty;