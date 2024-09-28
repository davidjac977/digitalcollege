const produtos = [
    { id: 1, nome: "Laptop", categoria: "Electronics", preco: 999.99 },
    { id: 2, nome: "Smartphone", categoria: "Electronics", preco: 699.99 },
    { id: 3, nome: "Running Shoes", categoria: "Sports", preco: 89.99 },
    { id: 4, nome: "Coffee Maker", categoria: "Home Appliances", preco: 49.99 },
    { id: 5, nome: "Backpack", categoria: "Accessories", preco: 39.99 },
  ]
  
  const nome = document.getElementById('nome')
  const preco = document.getElementById('preco')
  const categoria = document.getElementById('categoria')
  
  function imprimirDadosDoFormulario() {
    const produto = {
      nome: nome.value,
      preco: preco.value,
      categoria: categoria.value
    }
  
    console.log(produto)
  }
  
  
  function deletarProduto(id) {
    const indice = produtos.findIndex((produto) => {
        return produto.id === id
    })
    
    produtos.splice(indice, 1)
  
    console.log(produtos)
  }