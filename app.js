const pokemon = require('./data.js')
const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ]
}

// // Exercise 1 completed
// console.dir(pokemon, { maxArrayLength: null })

// Exercise 2 completed
// console.log(game.party)
// console.log(game.gyms)
// console.log(game.items)

// Exercise 3 completed
game.difficulty = ['Easy', 'Med', 'Hard']
// console.log(game.difficulty)

// Exercise 4 completed
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    game.party.push(pokemon[i])
  }
}
// console.log(game.party)

// Exercise 5 completed
let sortedPokemon = pokemon.sort((a, b) => b.hp - a.hp)
for (let i = 0; i < 3 && i < sortedPokemon.length; i++) {
  game.party.push(sortedPokemon[i])
}
// console.log(game.party)

// Exercise 6 completed
for (let gym of game.gyms) {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
}
// console.log('Updated gyms:', game.gyms)

// Exercise 7 difficult
// for (let i = 0; i < pokemon.length; i++) {
//   if (pokemon[i].starter === true) {
//     let evolved = pokemon[i + 1]
//     game.party.push(evolved)
//   }
// }
// game.party = game.party.filter((pokemon) => !pokemon.starter)
// game.forEach((gam) => {
//   if (gam.starter === true) {
//     let evolved = pokemon[gam]
//     gam.party.push(evolved)
//   }
// })
// console.log(game)

// Loop through each Pokémon in the pokemon array
pokemon.forEach((pok, index) => {
  // Check if the Pokémon is a starter
  if (pok.starter === true) {
    // Get the next Pokémon (evolution) in the list if it exists
    let evolved = pokemon[index + 1] // Use index to access the next Pokémon

    // If the evolved Pokémon exists and is not a starter, push it to the party
    if (evolved && evolved.starter === false) {
      game.party.push(evolved)
    }
  }
})

// console.log(game.party) // Log the final party

// Exercise 8 completed
game.party.forEach((spirit) => {
  pname = spirit.name
  // console.log(pname)
})

//Exercise 9 completed
starterPokemon = []
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    starterPokemon.push(pokemon[i])
  }
}
// console.log(starterPokemon)

// Exercise 10
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj)
}

game.catchPokemon(pokemon[5])
// console.log(game.party)

//Exercise 11
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj)
  let pokeballItem = this.items.find((item) => item.name === 'pokeball')
  if (pokeballItem) {
    pokeballItem.quantity--
  }
}
game.catchPokemon(pokemon[3])
// console.log(game.items)

// Exercise 12 completed
for (let gym of game.gyms) {
  if (gym.difficulty < 6) {
    gym.completed = true
  }
}
// console.log(game.gyms)

//Exercise 13 completed
game.gymStatus = function () {
  const gymTally = {
    completed: 0,
    incomplete: 0
  }

  for (let gym of this.gyms) {
    if (gym.completed) {
      gymTally.completed++
    } else {
      gymTally.incomplete++
    }
  }
  console.log(gymTally)
}

// game.gymStatus()

//Exercise 14 completed
let total = 0
const partyCount = () => {
  for (i = 0; i < game.party.length; i++) {
    total += 1
  }
  return total
}
// console.log(partyCount())

// Exercise 15 completed
for (let gym of game.gyms) {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
}
// console.log(game.gyms)

// Exercise 16 completed
// console.log(game)
