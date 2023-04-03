const itemsPerPage = 6;
let pokemonListFavorite = [];

async function getPokemonFavoriteList() {
  console.log("bok iz favorite");
  document.getElementById("pokemon-list-favorite").innerHTML = "";
  document.getElementById("pagination-favorite").innerHTML = "";

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  pokemonListFavorite = await Promise.all(favorites.map(getPokemonById));

  let currentPage = 1;
  let totalPages = Math.ceil(pokemonListFavorite.length / itemsPerPage);
  showPokemonTypePage(currentPage, totalPages);
}

async function getPokemonById(id) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let data = await response.json();
  return data;
}

function showPokemonTypePage(currentPage, totalPages) {
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

              <div class="heart-button" onclick="addToFavorites(${id})" data-id="${id}">
             </div>
             
            </div>
            
          </div>

          </div>
        `;
    html += cardHtml;
    document.getElementById("pokemon-list-favorite").innerHTML = html;
  });

  showPagination(currentPage, totalPages);
}

function showPagination(currentPage, totalPages) {
  var html = `<div class="pagination-buttons"> `;
  for (var i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      html += `<button style="color: red; border-color: red;">${i}</button>`;
    } else {
      html += `<button onclick="showPokemonTypePage(${i}, ${totalPages})">${i}</button>`;
    }
  }
  html += `</div>`;
  document.getElementById("pagination-favorite").innerHTML = html;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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

  // update favorite list
  let html = "";
  let favoritePokemonList = JSON.parse(localStorage.getItem("favorites")) || [];
  favoritePokemonList.forEach((id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((pokemon) => {
        let imgSrc = pokemon.sprites.front_default;
        let name = pokemon.name;
        let types = pokemon.types.map((type) => type.type.name).join(", ");
        let abilities = pokemon.abilities.map((a) => a.ability.name).join(", ");
        let id = pokemon.id;
        let cardHtml = `
            <div class="pokemon-card">
              <div class="pokemon-card-image">
                <img src="${imgSrc}" alt="${name}">
              </div>
              <div class="pokemon-card-name">${capitalizeFirstLetter(
                name
              )}</div>
              <div class="pokemon-card-details">
                <div class="pokemon-card-types">Type: ${types}</div>
                <div class="pokemon-card-height">Height: ${
                  pokemon.height
                }m</div>
                <div class="pokemon-card-weight">Weight: ${
                  pokemon.weight
                }kg</div>
                <div class="pokemon-card-abilities">Abilities: ${abilities}</div>
              </div>
            </div>
          `;
        html += cardHtml;
        document.getElementById("pokemon-list-favorite").innerHTML = html;
      })
      .catch((error) => console.error(error));
  });
}
