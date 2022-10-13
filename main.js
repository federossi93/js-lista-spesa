
let listaSpesa = ['carote','pasta','pane','formaggi']

const ul = document.querySelector('ul')




let i = 0

while (i < listaSpesa.length) {
    let lista = listaSpesa[i]
    console.log(lista);

    //primo metodo
    //const li = `<li>${lista}</li>`
    //ul.insertAdjacentHTML('beforeend',li)

    const li = document.createElement('li')
    li.append(lista)
    ul.append(li)

    i++
}

