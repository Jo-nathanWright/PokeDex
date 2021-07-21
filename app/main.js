import PokemonApiController from "./Controllers/PokemonApiController.js";
import MyPokemonsController from "./Controllers/MyPokemonsController.js";


class App {
  pokemonApiController = new PokemonApiController()
  myPokemonController = new MyPokemonsController()
}

window["app"] = new App();
