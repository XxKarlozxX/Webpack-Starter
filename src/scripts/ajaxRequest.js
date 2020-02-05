/**
 * Custom funtion to make Request throught AJAX.
 *
 * @param string url          endpoint address
 * @param function callback   function callback
 */
function ajax_get(url, callback) {
  let data;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
      //console.log('responseText:' + xhr.responseText );
      try {
        data = JSON.parse(xhr.responseText);
      } catch( err ) {
        console.log(err.message + ' in ' + xhr.responseText);
        return;
      }
      callback(data);
    }
  };

  xhr.open('GET', url, true);
  xhr.send();
}

// Make a simple HTML with template string
ajax_get('https://pokeapi.co/api/v2/pokemon?limit=151', function(data) {
  let dataPokemona = data.results;
  let names = dataPokemona.map( pokemon => {
    return (
        `<div class="poke-info">
            <p class="poke-name">${pokemon.name}</p>
        </div>`);
  });

  document.getElementById('root').innerHTML = names.join(' ');

});

