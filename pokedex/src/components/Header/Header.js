import Logo from "../../assets/Logo.svg"
import { ContainerHeader } from './HeaderStyle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { goToPokedexPage, goToPokemonListPage } from '../../routes/Coordinator';

function Header() {

  const location = useLocation();

  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname){
      case "/":
        return(
          <>
            <img className="Logo" src={Logo} alt="Logo Pokédex" />
            <button className="Btn-pokedex" onClick={() => goToPokedexPage(navigate)}>Pokédex</button>
          </>
        );
      case "/PokedexPage":
        return(
          <> 
            <button className="Btn-todos-pokemons" onClick={() => goToPokemonListPage(navigate)}>{`< Todos Pokémons`}</button>
            <img className="Logo" src={Logo} alt="Logo Pokédex" />
          </>
        );
        default:
        return(
          <> 
            <button className="Btn-todos-pokemons" onClick={() => goToPokemonListPage(navigate)}>{`< Todos Pokémons`}</button>
            <img className="Logo" src={Logo} alt="Logo Pokédex" />
            <button className="Btn-excluir-da-pokedex" >Excluir da Pokédex</button>
          </>
        );
    }
  }

  // renderizando o header
  return (
    <ContainerHeader>
      {renderHeader()}
    </ContainerHeader>
  )
}

export default Header;