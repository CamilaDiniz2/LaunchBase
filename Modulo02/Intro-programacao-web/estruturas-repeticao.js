
const alunosDaTurmaA = [
  {
    nome: "José",
    nota: 7
  },
  {
    nome: "Francisco",
    nota: 3.5
  },
  {
    nome: "Maria",
    nota: 10
  },
  {
    nome: 'Estela',
    nota: 5.5
  }
]

// estruturas de repetição
function calculaMedia (alunos){
  let soma = 0
  for (let i = 0; i < alunos.length ; i++ ){
    soma += alunos[i].nota
  }

  return soma/alunos.length
}

console.log(calculaMedia(alunosDaTurmaA));