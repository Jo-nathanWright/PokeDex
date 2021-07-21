import { pokemonApiService } from "../Services/PokemonApiService.js"

export default class PokemonApiController {
    constructor() {
        this.getAllPokemon()
    }

    async getAllPokemon() {
        try {
            await pokemonApiService.getAllPokemon()
        } catch (error) {
            window.alert("We ran into an Error trying to get the pokemon")
        }
    }

}