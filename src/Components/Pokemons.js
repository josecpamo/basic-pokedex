/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useFetch } from "../Hooks/useFetch";
import Card from "./Card";

export default function Pokemons(props) {
    const [pokemons, setPokemons] = useState([]);
    const { data, isPending, error } = useFetch(
        "https://pokeapi.co/api/v2/pokemon/"
    );

    useEffect(() => {
        if (!isPending) {
            data.results.forEach(async (el) => {
                const res = await fetch(el.url);
                const data = await res.json();

                let pokemon = {
                    id: data.id,
                    name: data.name,
                    img: data.sprites.front_default,
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        }
    }, [isPending]);

    if (error)
        return (
            <h2>
                {error.statusText} | Error: {error.status}
            </h2>
        );
    else
        return (
            <>
                {pokemons.length === 0 ? (
                    <img className="loader" src="loader.svg" alt="loader" />
                ) : (
                    pokemons.map((el) => (
                        <Card key={el.id} url={el.img} name={el.name} />
                    ))
                )}
            </>
        );
}
