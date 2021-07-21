import Pokemon from "../Models/Pokemon.js"
import { ProxyState } from "../AppState.js"
import { Sandbox } from "./AxiosService.js"

class MyPokemonsService {
    async getMyPokemon() {
        let res = await Sandbox.get()
        //console.log(res.data);
        ProxyState.myPokemon = res.data.map(p => new Pokemon(p))
    }

    async catchPokemon() {
        let res = await Sandbox.post("", ProxyState.activePokemon)
        console.log(res.data);
    }

}

export const myPokemonsService = new MyPokemonsService()