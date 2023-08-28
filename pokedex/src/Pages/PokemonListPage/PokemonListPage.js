import { useContext, useEffect } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { ContainerCard, ContainerPokemonListPage } from './PokemonListPageStyle';
import { GlobalContext } from '../../contexts/GlobalContext';


function PokemonListPage() {

  const context = useContext(GlobalContext);

  const { pokelist, pokedex, addToPokedex } = context;

  const filterPokelist = () => pokelist.filter(
    (pokemonNaLista) => !pokedex.find(
      (pokemonNaPokedex) => pokemonNaLista.name === pokemonNaPokedex.name
    )
  );


  return (
    <ContainerPokemonListPage>
      <h1>Todos Pokémons</h1>
      <ContainerCard>
        {filterPokelist() && filterPokelist().map((pokemon) => {
          return <PokemonCard
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
          />
        })}
      </ContainerCard>
    </ContainerPokemonListPage>
  )
}

export default PokemonListPage;