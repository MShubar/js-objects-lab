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

// // Exercise 1
console.dir(pokemon, { maxArrayLength: null })

// Exercise 2
console.log(game.party)
console.log(game.gyms)
console.log(game.items)

// Exercise 3
game.difficulty = ['Easy', 'Med', 'Hard']
console.log(game.difficulty)

// Exercise 4
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    game.party.push(pokemon[i])
  }
}
console.log(`without top three`)
console.log(game.party)

// Exercise 5
const sortedPokemons = []
sortedPokemons = pokemon.sort((a, b) => a - b)
const topThreePokemons = sortedPokemons.slice(0, 3)
for (i = 0; i > topThreePokemons.length; i++) {
  game.party.push(topThreePokemons)
}
console.log('top three')
console.log(game.party)
