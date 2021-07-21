import { ProxyState } from "../AppState.js"

export default class Pokemon {
    constructor({ name, img, weight, height, types, user, id, order }) {
        this.name = name
        this.img = img
        this.weight = weight
        this.height = height
        this.types = types
        this.user = user
        this.id = id
        this.order = order
    }


    get Template() {
        return `
        <div class="text-dark">
                        <div class="d-flex justify-content-center">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg"
                                alt="${this.name}">
                        </div>
                        <h4 class='uppercase'>${this.name}</h4>
                        <p>Weight: ${this.weight}</p>
                        <p>Height: ${this.height}</p>
                        <p>Types: ${this.types[0].type.name}</p>
                        <p>User: Ash</p>
                    </div>
                    <div class="text-right text-dark">
                        ${this.Buttons}
                    </div>
        `
    }

    get Buttons() {
        const exists = ProxyState.myPokemon.find(s => s.name === ProxyState.activePokemon.name)
        if (this.order) {
            return `
          <button type="button" class="btn btn-success" ${exists ? 'disabled' : ''} onclick="app.myPokemonsController.catchPokemon()">Catch Pokemon</button>`
        }
        return `
        <button type="button" class="btn btn-danger" onclick="app.myPokemonsController.releasePokemon()">Release pokemon</button>
        `
    }
}