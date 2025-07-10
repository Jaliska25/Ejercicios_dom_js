// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.getElementsByClassName('showme')
console.log(button)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.getElementById('pillado')
console.log(h1)

// 1.3 Usa querySelector para mostrar por consola todos los p
const paragraph = document.getElementsByTagName('p')
console.log(paragraph)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemonClass = document.getElementsByClassName('pokemon')
console.log(pokemonClass)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const dataElements = document.querySelectorAll('[data-function="testMe"]')
console.log(dataElements)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const allCharacters = document.querySelectorAll('[data-function="testMe"]')
const thirdCharacter = allCharacters[2]
console.log(thirdCharacter)
