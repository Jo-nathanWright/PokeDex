import PokemonApiController from "./Controllers/PokemonApiController.js";


class App {
  pokemonApiController = new PokemonApiController()
}

window["app"] = new App();
