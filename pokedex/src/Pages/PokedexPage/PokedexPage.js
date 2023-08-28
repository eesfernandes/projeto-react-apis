import { ContainerPokedex, ContainerPokedexPage } from './PokedexPageStyle';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { BASE_URL } from '../../constants/data';


function PokedexPage() {

  const context = useContext(GlobalContext);

  const { pokedex, removeFromPokedex } = context;

  return (
    <ContainerPokedexPage>
      <h1>Meus Pokémons</h1>
      <ContainerPokedex>
        {pokedex.map((pokemon) =>
          <PokemonCard
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        )}
      </ContainerPokedex>
    </ContainerPokedexPage>
  )
}

export default PokedexPage;