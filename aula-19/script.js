const titulo = document.getElementById('titulo')

titulo.innerText = 'Produtos'

const produtos = ['RAM', 'SSD', 'Fonte']

const listaDeProdutos = 
document.getElementById('lista-de-produtos')


produtos.forEach((produto) => {
listaDeProdutos.innerHTML += `

       <li>${produto}</li> 
       `
})