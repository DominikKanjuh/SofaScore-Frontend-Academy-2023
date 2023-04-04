const itemsPerPage = 6;
let pokemonListAll = [];
let pokemonListType = [];
let pokemonListFavorite = [];

///////////////////////////////////////
async function getAllPokemonList() {
  document.getElementById("pokemon-list-all").innerHTML = "";
  document.getElementById("pagination-all").innerHTML = "";

  await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
    .then((response) => response.json())
    .then((data) => {
      pokemonListAll = data.results;
      let currentPage = 1;
      let totalPages = Math.ceil(pokemonListAll.length / itemsPerPage);
      showPokemonPageAll(currentPage, totalPages);
    })
    .catch((error) => console.error(error));
}

function showPokemonPageAll(currentPage, totalPages) {
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentPokemonListAll = pokemonListAll.slice(startIndex, endIndex);

  let html = "";
  currentPokemonListAll.forEach((pokemon) => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((pokemon) => {
        let imgSrc = pokemon.sprites.front_default;
        let name = pokemon.name;
        let types = pokemon.types.map((type) => type.type.name).join(", ");
        let abilities = pokemon.abilities.map((a) => a.ability.name).join(", ");
        let id = pokemon.id;

        let heartClass = "heart-button";
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (favorites.includes(id)) {
          heartClass += " full-heart";
        }

        let cardHtml = `
          
            <button class="accordion">
            <div class="pokemon-card">
            <div class="pokemon-card-image">
              <img src="${imgSrc}" alt="${name}">
            </div>
              <div class="pokemon-card-name">${capitalizeFirstLetter(
                name
              )}</div>
          </div>
          
          </button>
            <div class="panel">
            <div class="pokemon-card-details>
              <div class="pokemon-card-types">Type: ${types}</div>
              <div class="pokemon-card-height">Height: ${pokemon.height}m</div>
              <div class="pokemon-card-weight">Weight: ${pokemon.weight}kg</div>
              <div class="pokemon-card-abilities">Abilities: ${abilities}</div>

              <div class="${heartClass}" onclick="addToFavorites(${id})" data-id="${id}">
             </div>
             
            </div>
            
          </div>

          </div>
        `;
        html += cardHtml;
        document.getElementById("pokemon-list-all").innerHTML = html;
      })
      .catch((error) => console.error(error));
  });

  showPaginationAll(currentPage, totalPages);
}

function showPaginationAll(currentPage, totalPages) {
  var html = `<div class="pagination-buttons"> `;
  for (var i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      html += `<button style="color: red; border-color: red;">${i}</button>`;
    } else {
      html += `<button onclick="showPokemonPageAll(${i}, ${totalPages})">${i}</button>`;
    }
  }
  html += `</div>`;
  document.getElementById("pagination-all").innerHTML = html;
}

//////////////////////////////////////
//////////////////////////////////////

async function getPokemonTypeList() {
  console.log("Bok iz type");
  let type = document.getElementById("type").value;

  document.getElementById("pokemon-list-type").innerHTML = "";
  document.getElementById("pagination-type").innerHTML = "";

  await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then((response) => response.json())
    .then((data) => {
      pokemonListType = data.pokemon;
      let currentPage = 1;
      let totalPages = Math.ceil(pokemonListType.length / itemsPerPage);
      showPokemonTypePage(currentPage, totalPages);
    })
    .catch((error) => console.error(error));
}

function showPokemonTypePage(currentPage, totalPages) {
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentPokemonListType = pokemonListType.slice(startIndex, endIndex);

  let html = "";
  currentPokemonListType.forEach((pokemon) => {
    fetch(pokemon.pokemon.url)
      .then((response) => response.json())
      .then((pokemon) => {
        let imgSrc = pokemon.sprites.front_default;
        let name = pokemon.name;
        let types = pokemon.types.map((type) => type.type.name).join(", ");
        let abilities = pokemon.abilities.map((a) => a.ability.name).join(", ");
        let id = pokemon.id;

        let heartClass = "heart-button";
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (favorites.includes(id)) {
          heartClass += " full-heart";
        }

        let cardHtml = `
              
                <button class="accordion">
                <div class="pokemon-card">
                <div class="pokemon-card-image">
                  <img src="${imgSrc}" alt="${name}">
                </div>
                  <div class="pokemon-card-name">${capitalizeFirstLetter(
                    name
                  )}</div>
              </div>
              
              </button>
                <div class="panel">
                <div class="pokemon-card-details>
                  <div class="pokemon-card-types">Type: ${types}</div>
                  <div class="pokemon-card-height">Height: ${
                    pokemon.height
                  }m</div>
                  <div class="pokemon-card-weight">Weight: ${
                    pokemon.weight
                  }kg</div>
                  <div class="pokemon-card-abilities">Abilities: ${abilities}</div>
                  <div class="${heartClass}" onclick="addToFavorites(${id})" data-id="${id}">
                 </div>
                 
                </div>
                
              </div>
    
              </div>
            `;
        html += cardHtml;
        document.getElementById("pokemon-list-type").innerHTML = html;
      })
      .catch((error) => console.error(error));
  });

  showPaginationType(currentPage, totalPages);
}

function showPaginationType(currentPage, totalPages) {
  var html = `<div class="pagination-buttons"> `;
  for (var i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      html += `<button style="color: red; border-color: red;">${i}</button>`;
    } else {
      html += `<button onclick="showPokemonTypePage(${i}, ${totalPages})">${i}</button>`;
    }
  }
  html += `</div>`;
  document.getElementById("pagination-type").innerHTML = html;
}

//////////////////////////////////////
//////////////////////////////////////

async function getPokemonFavoriteList() {
  document.getElementById("pokemon-list-favorite").innerHTML = "";
  document.getElementById("pagination-favorite").innerHTML = "";

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  pokemonListFavorite = await Promise.all(favorites.map(getPokemonById));

  let currentPage = 1;
  let totalPages = Math.ceil(pokemonListFavorite.length / itemsPerPage);
  showPokemonFavoritePage(currentPage, totalPages);
}

async function getPokemonById(id) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let data = await response.json();
  return data;
}

function showPokemonFavoritePage(currentPage, totalPages) {
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentPokemonListFavorite = pokemonListFavorite.slice(
    startIndex,
    endIndex
  );

  let html = "";
  currentPokemonListFavorite.forEach((pokemon) => {
    let imgSrc = pokemon.sprites.front_default;
    let name = pokemon.name;
    let types = pokemon.types.map((type) => type.type.name).join(", ");
    let abilities = pokemon.abilities.map((a) => a.ability.name).join(", ");
    let id = pokemon.id;

    let heartClass = "heart-button";
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(id)) {
      heartClass += " full-heart";
    }

    let cardHtml = `
          
            <button class="accordion">
            <div class="pokemon-card">
            <div class="pokemon-card-image">
              <img src="${imgSrc}" alt="${name}">
            </div>
              <div class="pokemon-card-name">${capitalizeFirstLetter(
                name
              )}</div>
          </div>
          
          </button>
            <div class="panel">
            <div class="pokemon-card-details>
              <div class="pokemon-card-types">Type: ${types}</div>
              <div class="pokemon-card-height">Height: ${pokemon.height}m</div>
              <div class="pokemon-card-weight">Weight: ${pokemon.weight}kg</div>
              <div class="pokemon-card-abilities">Abilities: ${abilities}</div>

              <div class="${heartClass}" onclick="addToFavorites(${id})" data-id="${id}">
             </div>
             
            </div>
            
          </div>

          </div>
        `;
    html += cardHtml;
    document.getElementById("pokemon-list-favorite").innerHTML = html;
  });

  showPaginationFavorite(currentPage, totalPages);
}

function showPaginationFavorite(currentPage, totalPages) {
  var html = `<div class="pagination-buttons"> `;
  for (var i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      html += `<button style="color: red; border-color: red;">${i}</button>`;
    } else {
      html += `<button onclick="showPokemonFavoritePage(${i}, ${totalPages})">${i}</button>`;
    }
  }
  html += `</div>`;
  document.getElementById("pagination-favorite").innerHTML = html;
}

////////////////////////////////////////////
//sve iste funckcije za sve

document.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("accordion")) {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = 40 + "px";
    }
  }
});

function addToFavorites(id) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    document
      .querySelector(`.heart-button[data-id='${id}']`)
      .classList.add("full-heart");
  } else {
    favorites = favorites.filter((pokemonId) => pokemonId !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    document
      .querySelector(`.heart-button[data-id='${id}']`)
      .classList.remove("full-heart");
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
