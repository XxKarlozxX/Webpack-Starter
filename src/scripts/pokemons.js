const axios = require('axios').default;
const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 1000
});

let test = document.getElementById('root');

instance
    .get('pokemon?limit=150')
    .then( res => {
        let pokemons = res.data.results;

        let pokeTemplate = [];
        pokeTemplate = pokemons.map( pokemon => {
            return (`<div class="poke-info">
                    <details>
                        <summary>${pokemon.name}</summary>
                        <p class="description">${pokemon.url}</p>
                    </details>
                </div>`);
        });
        test.innerHTML = pokeTemplate.join(' ');
    });