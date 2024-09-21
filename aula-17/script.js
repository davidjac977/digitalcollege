let crudAlunos = [
    {nome: 'Rogério', idade: 12, serie: '6-C', id: 201710162},
    {nome: 'Fulano', idade: 15, serie: '9-B', id: 21316172},
    {nome: 'Carlão', idade: 16, serie: '1-A', id: 20944712},
] 

// function criarAluno(aluno) {
//  const id = crudAlunos.length 

// }
// crudAlunos.push({nome: 'Beltrano', idade: 18, serie: '3-B', id: 18392074})

// console.log(crudAlunos)

//  function lerAluno(id) {
//   const aluno = crudAlunos.find(( aluno ) => aluno.id === id)
//      console.log(aluno)
//  }
//  lerAluno(21316172)

// function atualizarAluno(id, dadosNovos) {

// const index = crudAlunos.findIndex(( aluno ) => aluno.id === id)
// const dadosAntigos = crudAlunos[index]
// crudAlunos[index] = {...dadosAntigos, ...dadosNovos}
    
// }
// atualizarAluno(21316172, {nome: '', serie: ''})
// console.log(crudAlunos)


function deletarAluno(id) {
    const index = crudAlunos.findIndex(( aluno ) => aluno.id === id)
    crudAlunos.splice(2, 1)
} 
deletarAluno()

console.log(crudAlunos)