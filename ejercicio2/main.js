// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement('div')
newDiv.className = 'firstDiv' // Añado este nombre a la clase para el ejercicio 2.8
document.body.appendChild(newDiv)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newDiv2 = document.createElement('div')
let newP = document.createElement('p')
newP.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, porro architecto tenetur dignissimos temporibus magni labore eum, ea, quod earum laboriosam vitae. Porro provident doloribus repellendus mollitia obcaecati unde non.'
newDiv2.appendChild(newP)
document.body.appendChild(newDiv2)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 	loop con javascript.
let loopDiv = document.createElement('div')
for (let i = 0; i < 6; i++) {
  let p = document.createElement('p')
  p.textContent = `Paragraph number ${i + 1}`
  loopDiv.appendChild(p)
}
document.body.appendChild(loopDiv)

// 2.4 Inserta dinamicamente con javascript en un html una p con el 	texto 'Soy dinámico!'.
let paragraph = document.createElement('p')
paragraph.textContent = 'Soy dinámico!'
document.body.appendChild(paragraph)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let insert = document.querySelector('.fn-insert-here')
insert.textContent = 'Wubba Lubba dub dub'

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
//Título
const title = document.createElement('h2')
title.textContent = 'Lista de Redes Sociales'
document.body.appendChild(title)
//Lista
const list = document.createElement('ul')
for (const app of apps) {
  const item = document.createElement('li')
  item.textContent = app
  list.appendChild(item)
}
document.body.appendChild(list)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removingElements = document.querySelectorAll('.fn-remove-me')
for (const element of removingElements) {
  element.remove()
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 	Recuerda que no solo puedes insertar elementos con .appendChild.
const insertP = document.getElementsByClassName('firstDiv')
insertP[0].insertAdjacentHTML('afterbegin', '<p>Voy en medio!</p>')

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 	.fn-insert-here
const insertText = document.querySelectorAll('.fn-insert-here')
for (const div of insertText) {
  div.insertAdjacentHTML('afterbegin', '<p>Voy dentro!</p>')
}
