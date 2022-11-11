import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Pokemons(props) {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {       
        const getPokemons = async(url) => {
            const res = await fetch(url);
            const json = await res.json();

            json.results.forEach(async (el) => {
                const res = await fetch(el.url);
                const data = await res.json();

                const pokemon = {
                    id: data.id,
                    name: data.name,
                    img: data.sprites.front_default
                }

                setPokemons((pokemons) => [...pokemons, pokemon])
            });
        }
        
        getPokemons("https://pokeapi.co/api/v2/pokemon");
    }, []);

    return(
        <>
            {(pokemons.lengt===0) 
            ? (<img className='loader' src='loader.svg' alt='loader'/>) 
            : (pokemons.map(el => <Card key={el.id} url={el.img} name={el.name}/>))}
        </>
    );
}