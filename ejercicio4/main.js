// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const button = document.querySelector('#btnToClick')
button.textContent = 'Botón'

button.addEventListener('click', function (event) {
  console.log('Información del evento:', event)
})

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focus = document.querySelector('.focus') // selecciono el input que ya está creado en el html
focus.addEventListener('focus', function () {
  console.log(focus.value)
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input = document.querySelector('.value')
input.placeholder = 'Imprimo todo lo que escribes'
input.addEventListener('input', function () {
  console.log(input.value)
})

// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const title = document.createElement('h2')
title.textContent = 'Álbunes'
document.body.appendChild(title)

const list = document.createElement('ul')
for (const album of albums) {
  const item = document.createElement('li')
  item.textContent = album
  list.appendChild(item)
}
document.body.appendChild(list)
