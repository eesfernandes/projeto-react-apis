import MarcaDgua from '../../assets/card/MarcaDgua.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToPokemonDetailsPage } from '../../routes/Coordinator';
import { ContainerPokemonCard } from './PokemonCardStyle';
import { getTypes } from '../../utils/ReturnPokemonType';
import { getColors } from '../../utils/ReturnCardColor';


function PokemonCard(props) {

  const { pokemonUrl, addToPokedex, removeFromPokedex } = props

  const [pokemonCard, setPokemonCard] = useState({});

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    getDataCard();
  }, [])

  const getDataCard = async () => {

    try {
      const response = await axios.get(pokemonUrl);
      setPokemonCard(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  return (
    <ContainerPokemonCard color={pokemonCard.types && pokemonCard.types.length > 0 ? getColors(pokemonCard.types[0].type.name.charAt(0).toUpperCase() + pokemonCard.types?.[0].type.name.slice(1)) : 'defaultColor'}>
      <div className='LeftCard'>
        <span>#{pokemonCard.id}</span>
        <h2>{pokemonCard.name}</h2>
        <div className='TypesContainer'>
          {pokemonCard.types?.map((type) => {
            return <img key={type.type.name} src={getTypes(type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1))} alt="" />
          })}
        </div>
        <button onClick={() => goToPokemonDetailsPage(navigate, pokemonCard.name)}>Detalhes</button>
      </div>
      <div className='RightCard'>
        <img className='MarcaDgua' src={MarcaDgua} alt="" />
        <img className='Pokemon' src={pokemonCard.sprites?.other["official-artwork"].front_default} alt="pokemon.name" />
        {location.pathname === "/" ? (
          <button onClick={() => addToPokedex(pokemonCard)} className='BtnCapturar'>Capturar!</button>
        ) : (
          <button onClick={() => removeFromPokedex(pokemonCard)} className='BtnExcluir'>Excluir</button>
        )}
      </div>
    </ContainerPokemonCard>
  )
}

export default PokemonCard;