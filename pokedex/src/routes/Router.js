import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";
import PokemonDetailsPage from "../Pages/PokemonDetailsPage/PokemonDetailsPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/PokedexPage" element={<PokedexPage />} />
        <Route path="/PokemonDetailsPage/:name" element={<PokemonDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;