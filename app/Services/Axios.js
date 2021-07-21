// @ts-ignore
export const PokemonApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
    timout: 5000
})

// @ts-ignore
export const Sandbox = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/classroom/spells',
    timeout: 5000
})