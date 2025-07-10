// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

//Title
const title = document.createElement('h1')
title.textContent = 'Países'
document.body.appendChild(title)

const list = document.createElement('ul')
for (const country of countries) {
  const item = document.createElement('li')
  item.textContent = country
  list.appendChild(item)
}
document.body.appendChild(list)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementToRemove = document.querySelector('.fn-remove-me')
elementToRemove.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const carsBox = document.querySelector('[data-function="printHere"]')
const title2 = document.createElement('h2')
title2.textContent = 'Coches'
carsBox.appendChild(title2)

const carsList = document.createElement('ul')
for (const car of cars) {
  const item = document.createElement('li')
  item.textContent = car
  carsList.appendChild(item)
}
carsBox.appendChild(carsList)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const mainContainer = document.createElement('div')
document.body.appendChild(mainContainer)

for (let i = 0; i < countries2.length; i++) {
  const containers = document.createElement('div')
  const title = document.createElement('h4')
  const img = document.createElement('img')

  title.textContent = countries2[i].title
  img.src = countries2[i].imgUrl
  img.alt = countries2[i].title

  containers.appendChild(title)
  containers.appendChild(img)

  mainContainer.appendChild(containers)
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const button = document.createElement('button')
button.textContent = 'Eliminar última imagen'
document.body.appendChild(button)

button.onclick = function () {
  const boxes = mainContainer.querySelectorAll('div')
  if (boxes.length > 0) {
    mainContainer.removeChild(boxes[boxes.length - 1])
  }
}

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const divs = mainContainer.querySelectorAll('div')

divs.forEach((div) => {
  const buttonEach = document.createElement('button')
  buttonEach.textContent = 'Elimina esta imagen'
  div.appendChild(buttonEach)

  buttonEach.onclick = function () {
    mainContainer.removeChild(div)
  }
})
