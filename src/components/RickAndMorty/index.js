import React, { useState, useEffect } from 'react';
import CardsRickAndMorty from './CardsRickAndMorty/index';
import ButtonPagination from './ButtonPagination';
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
        if(next !== null) setNextpoint(next);
        if(prev !== null) setPrevpoint(prev);

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
        <div>
            <div className="personajes">
                {usersUI}
                </div>
                <div className="buttons">
                    <ButtonPagination operation={prevUpdate} text={"Prev"} />
                    <ButtonPagination operation={nextUpdate} text={"Next"} />
                </div>
        </div>
    )
}

export default RickAndMorty;