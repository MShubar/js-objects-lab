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
console.log('Exercise 1: ')
console.dir(pokemon, { maxArrayLength: null })

// Exercise 2 completed
console.log('Exercise 2: ', game.party)
console.log(game.gyms)
console.log(game.items)

// Exercise 3 completed
game.difficulty = ['Easy', 'Med', 'Hard']
console.log('Exercise 3: ', game.difficulty)

// Exercise 4 completed
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    game.party.push(pokemon[i])
  }
}
console.log('Exercise 4: ', game.party)

// Exercise 5 completed
let sortedPokemon = pokemon.sort((a, b) => b.hp - a.hp)
for (let i = 0; i < 3 && i < sortedPokemon.length; i++) {
  game.party.push(sortedPokemon[i])
}
console.log('Exercise 5: ', game.party)

// Exercise 6 completed
for (let gym of game.gyms) {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
}
console.log('Exercise 6: ', game.gyms)

// Exercise 7 difficult
pokemon.forEach((element) => {
  if (element.starter === true) {
    const nextPokemon = pokemon.find(
      (poke) => poke.number === element.number + 1
    )
    if (nextPokemon) {
      game.party.push(nextPokemon)
    }
  }
})
game.party = game.party.filter((pokemon) => !pokemon.starter)
console.log('Exercise 7: ', game.party)

// Exercise 8 completed
console.log('Exercise 8: ')
game.party.forEach((spirit) => {
  pname = spirit.name
  console.log(pname)
})

//Exercise 9 completed
starterPokemon = []
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    starterPokemon.push(pokemon[i])
  }
}
console.log('Exercise 9: ', starterPokemon)

// Exercise 10
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj)
}
game.catchPokemon(pokemon[5])
console.log('Exercise 10: ', game.party)

//Exercise 11
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj)
  let pokeballItem = this.items.find((item) => item.name === 'pokeball')
  if (pokeballItem) {
    pokeballItem.quantity--
  }
}
game.catchPokemon(pokemon[3])
console.log('Exercise 11: ', game.items)

// Exercise 12 completed
for (let gym of game.gyms) {
  if (gym.difficulty < 6) {
    gym.completed = true
  }
}
console.log('Exercise 12: ', game.gyms)

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
console.log('Exercise 13: ')
game.gymStatus()

//Exercise 14 completed
let total = 0
const partyCount = () => {
  for (i = 0; i < game.party.length; i++) {
    total += 1
  }
  return total
}
console.log('Exercise 14: ', partyCount())

// Exercise 15 completed
for (let gym of game.gyms) {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
}
console.log('Exercise 15: ', game.gyms)

// Exercise 16 completed
console.log('Exercise 16: ', game)
