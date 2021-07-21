import { ProxyState } from "../AppState.js";
import { myPokemonsService } from "../Services/MyPokemonsService.js";

export default class MyPokemonsController {
    constructor() {
        this.getMyPokemon()
    }

    async getMyPokemon() {
        try {
            myPokemonsService.getMyPokemon()
        } catch (error) {
            window.alert("There was a problem trying to access Your Pokemon")
        }
    }

    async catchPokemon() {
        try {
            myPokemonsService.catchPokemon()
        } catch (error) {
            window.alert("That one must of be a bug type." + error)
        }
    }

    async releasePokemon() {

    }
}