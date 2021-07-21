import { ProxyState } from "../AppState.js"
import { pokemonApiService } from "../Services/PokemonApiService.js"

function _draw() {
    const pokemon = ProxyState.allApiPokemon
    let template = ""
    pokemon.forEach(p => template += `<li class="action" onclick="app.pokemonApiController.getPokemon('${p.url}')">${p.name}</li>`)
    document.getElementById("api-pokemon").innerHTML = template
}

function _drawActive() {
    document.getElementById('displayPokemon').innerHTML = ProxyState.activePokemon.Template
}

export default class PokemonApiController {
    constructor() {
        ProxyState.on('allApiPokemon', _draw)
        ProxyState.on('activePokemon', _drawActive)

        this.getAllPokemon()
    }

    async getAllPokemon() {
        try {
            await pokemonApiService.getAllPokemon()
        } catch (error) {
            window.alert("We ran into an Error trying to get all of the Pokemon.")
        }
    }

    async getPokemon(id) {
        try {
            console.log(id)
            await pokemonApiService.getPokemon(id)
        } catch (error) {
            window.alert("We ran into a problem getting that Pokemon's Id." + error)
        }
    }

}