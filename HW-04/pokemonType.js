const itemsPerPage = 6;
let pokemonListType = [];

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
        document.getElementById("pokemon-list-type").innerHTML = html;
      })
      .catch((error) => console.error(error));
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
  document.getElementById("pagination-type").innerHTML = html;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// modify this code
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "30px";
    }
  });
}

// to this
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
