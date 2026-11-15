import Pokemon from "./Pokemon";
function PokemonList({ pokemons }) {
  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <Pokemon key={pokemon.id} name={pokemon.name} type={pokemon.type} />
        );
      })}
    </div>
  );
}
export default PokemonList;
