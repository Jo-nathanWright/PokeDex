import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { PokemonApi } from "./AxiosService.js"

class PokemonApiService {
    async getAllPokemon() {
        let res = await PokemonApi.get()
        //console.log(res.data.results)
        ProxyState.allApiPokemon = res.data.results
    }

    async getPokemon(id) {
        let res = await PokemonApi.get(id)
        console.log(res.data)
        ProxyState.activePokemon = new Pokemon(res.data)
        console.log(ProxyState.activePokemon)
    }
}

export const pokemonApiService = new PokemonApiService()