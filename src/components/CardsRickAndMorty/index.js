import React from 'react';
import "./CardsRickAndMorty.css";

function CardsRickAndMorty({name, status, species, img, episode}){
    const ep = episode.length;
    return(
       <div className='card'>
           <img className='card-img' src={img}/>
            <div className='card-content'>
                <p>Nombre: {name}</p>
                <p>Status: {status}</p>
                <p>Especie: {species}</p>
                <p>Episodios: {ep}</p>
            </div>
       </div>
    )
}
export default CardsRickAndMorty;