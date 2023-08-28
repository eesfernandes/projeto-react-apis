import { CardPokemonDetail, ContainerPokemonDetailsPage } from './PokemonDetailsPageStyle';
import MarcaDagua from '../../assets/detailsPage/MarcaDgua.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/data';
import { useParams } from 'react-router-dom';
import { getTypes } from '../../utils/ReturnPokemonType';
import { getColors } from '../../utils/ReturnCardColor';

function PokemonDetailsPage() {

  const [pokemonDetails, setPokemonDetails] = useState({});

  const { name } = useParams();
  useEffect(() => {
    getDataDetails();
  }, [name])

  // Preciso dessa requisição no card
  const getDataDetails = async () => {

    try {
      const response = await axios.get(`${BASE_URL}/${name}`);
      setPokemonDetails(response.data);

    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  return (
    <ContainerPokemonDetailsPage>
      <h1>Detalhes</h1>
      <CardPokemonDetail color={pokemonDetails.types && pokemonDetails.types.length > 0 ? getColors(pokemonDetails.types[0].type.name.charAt(0).toUpperCase() + pokemonDetails.types?.[0].type.name.slice(1)) : 'defaultColor'}>
        <img className='MarcaDagua' src={MarcaDagua} alt="" />
        <div className='Column1'>
          <img src={pokemonDetails.sprites?.front_default} alt="" />
          <img src={pokemonDetails.sprites?.back_default} alt="" />
        </div>

        <div className='Column2'>
          <h2 className='h2Columns'>Base Stats:</h2>
          {pokemonDetails.stats?.map((item, index) => {
            return (
              <div key={index}>
                <p>
                  {item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1)}: {item.base_stat}
                  <progress value={item.base_stat} max={"100"}></progress>
                </p>
              </div>
            );
          })}
          <p className='total'>{`Total: ${pokemonDetails.stats?.reduce((itemAnterior, itemAtual) => itemAnterior
            + itemAtual.base_stat, 0
          )}`}</p>
        </div>

        <div className='Column3'>
          <span># {pokemonDetails.id}</span>
          <h2 className='PokemonName'>{pokemonDetails.name}</h2>
          <div className='typesContainer'>
            {pokemonDetails.types?.map((type) => {
              return <img key={type.type.name} src={getTypes(type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1))} alt="" />
            })}
          </div>

          <div className='ContainerMoves'>
            <h2 className='h2Columns'>Moves:</h2>
            {pokemonDetails.moves?.slice(0, 4).map((item) => (
              <p className='itensMoves'>{item.move.name.charAt(0).toUpperCase() + item.move.name.slice(1)}</p>
            ))}
          </div>
        </div>

        <div className='Column4'>
          <img className='Pokemon' src={pokemonDetails.sprites?.other["official-artwork"].front_default} alt="" />
        </div>
      </CardPokemonDetail>
    </ContainerPokemonDetailsPage>
  )
}

export default PokemonDetailsPage;