import { ProxyState } from "../AppState.js"
import { PokemonApi } from "./Axios.js"

class PokemonApiService {
    async getAllPokemon() {
        let res = await PokemonApi.get()
        //console.log(res.data.results)
        ProxyState.allPokemon = res.data.results
    }
}

export const pokemonApiService = new PokemonApiService()