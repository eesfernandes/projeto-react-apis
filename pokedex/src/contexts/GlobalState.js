import { useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../constants/data"

function GlobalState({ children }) {

    const [pokelist, setPokelist] = useState([]);
    
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        getPokelist();
    }, []);

    const getPokelist = async () => {
        try{
            const response = await axios.get(BASE_URL);
            setPokelist(response.data.results);
        }catch(error){
            console.log(error.response);
        }
    };

    const addToPokedex = (adicionarPokemon) => {
        const estaNaPokedex = pokedex.find(
            (pokemonNaPokedex) => pokemonNaPokedex.name === adicionarPokemon.name
        );

        if(!estaNaPokedex){
            const novaPokedex = [...pokedex, adicionarPokemon];
            setPokedex(novaPokedex);
        }
    };

    const removeFromPokedex = (removerPokemon) => {
        const novaPokedex = pokedex.filter(
            (pokemonNaPokedex) => pokemonNaPokedex.name !== removerPokemon.name
        );
        setPokedex(novaPokedex);
    }

    const data = {
        pokelist,
        setPokelist,
        pokedex,
        setPokedex,
        getPokelist,
        addToPokedex,
        removeFromPokedex,
    };

  return (
    <GlobalContext.Provider value={data}>
        { children }
    </GlobalContext.Provider>
  )
}

export default GlobalState