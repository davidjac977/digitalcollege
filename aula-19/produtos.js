let idSelecionado

function gerarId() {
  if (produtos.length <= 0) return 1
  const lastIndex = produtos.length - 1
  return produtos[lastIndex].id + 1
}

function abrirModal(id) {
  idSelecionado = id
  const modal = document.getElementById('modal')

  modal.classList.remove('hidden')
  modal.classList.add('flex')

  const produto = produtos.find((prod) => prod.id === id)

  // TODO: selecionar com getElementById: nome, categoria e preco
  // do modal
  const nome = document.getElementById('nome-modal')
  nome.value = produto.nome
}

function fecharModal() {
  const modal = document.getElementById('modal')

  modal.classList.add('hidden')
  modal.classList.remove('flex')
}

let produtos = [
  { id: 1, nome: 'Mouse', preco: 200, categoria: 'Tecnologia' },
  { id: 2, nome: 'Teclado', preco: 400, categoria: 'Tecnologia' },
  { id: 3, nome: 'Monitor', preco: 1200, categoria: 'Tecnologia' },
  { id: 4, nome: 'Cadeira Gamer', preco: 800, categoria: 'Móveis' },
  { id: 5, nome: 'Mesa para Computador', preco: 600, categoria: 'Móveis' },
]

function listarProdutos() {
  const listaDeProdutos = document.getElementById('lista-de-produtos')
  
  listaDeProdutos.innerHTML = ''

  produtos.forEach((produto) => {
    listaDeProdutos.innerHTML += `
      <tr>
        <td class="py-2 px-4 border-b">${produto.nome}</td>
        <td class="py-2 px-4 border-b">${produto.preco}</td>
        <td class="py-2 px-4 border-b">${produto.categoria}</td>
        <td class="py-2 px-4 border-b">
          <button
            type="button"
            onclick="deletarProduto(${produto.id})"
            class="h-10 bg-red-600 px-4 rounded-md text-white"
          >
            Deletar
          </button>
          <button
            type="button"
            onclick="abrirModal(${produto.id})"
            class="h-10 bg-emerald-600 px-4 rounded-md text-white"
          >
            Editar
          </button>
        </td>
      </tr>
    `
  })
}

listarProdutos()

function criarProduto() {
  const nome = document.getElementById('nome')
  const preco = document.getElementById('preco')
  const categoria = document.getElementById('categoria')

  const produto = {
    id: gerarId(),
    nome: nome.value,
    preco: preco.value,
    categoria: categoria.value
  }

  produtos.push(produto)

  nome.value = ''
  categoria.value = ''
  preco.value = ''

  listarProdutos()
}

function deletarProduto(id) {
  const indice = produtos.findIndex((prod) => prod.id === id)
  produtos.splice(indice, 1)

  listarProdutos()
}

function atualizarProduto() {
  const indice = produtos.findIndex((prod) => prod.id === idSelecionado)

  // TODO: monte a lógica!!!
}