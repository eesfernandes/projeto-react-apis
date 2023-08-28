
export const goToPokemonListPage = (navigate) => {
    navigate("/")
}

export const goToPokedexPage = (navigate) => {
    navigate("PokedexPage")
}

export const goToPokemonDetailsPage = (navigate, name) => {
    navigate(`/PokemonDetailsPage/${name}`)
}