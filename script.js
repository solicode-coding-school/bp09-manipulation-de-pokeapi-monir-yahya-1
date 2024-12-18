// const TypesContainer = document.querySelector(".container");

// async function getPokemon() {
//   try {
//     const response = await fetch("https://pokeapi.co/api/v2/type/");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     const TheData = data.results;

//     TheData.forEach((ele) => {
//       const newLink = document.createElement("a");
//       newLink.classList.add("all_types");
//       newLink.href = `info.html?type=${ele.name}`;
//       newLink.textContent = ele.name;
//       TypesContainer.appendChild(newLink);
//     });
//   } catch (err) {
//     console.log(`Pokémon not found: ${err}`);
//   }
// }

// getPokemon();

// const params = new URLSearchParams(window.location.search);
// const type = params.get("type");
// const typeName = document.getElementById("type_name");
// typeName.innerText = type;

// async function getPokemonInfo() {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     const TheData = data.pokemon;
//     console.log(type);
//     console.log(TheData);

//     const pokemonListContainer = document.getElementById("pokemon_list");
//     TheData.forEach((pokemon) => {
//       const pokemonName = document.createElement("p");
//       pokemonName.textContent = pokemon.pokemon.name;
//       pokemonListContainer.appendChild(pokemonName);
//     });
//   } catch (err) {
//     console.log(`Pokémon not found: ${err}`);
//   }
// }

// getPokemonInfo();
