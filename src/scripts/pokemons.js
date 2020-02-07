const axios = require('axios').default;
const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 1000
});

let test = document.getElementById('promise');

instance
    .get('pokemon?limit=151')
    .then( res => {
        let pokemons = res.data.results;

        let pokeTemplate = [];
        pokeTemplate = pokemons.map( pokemon => {
            return (`<div class="poke-info">
                        <p class="poke-name">${pokemon.name}</p>
                </div>`);
        });
       test.innerHTML = pokeTemplate.join(' ');
    });
