// Vetores (Arrays): agrupam diversos valores em uma unica variável

const alunos = [
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
]

// imprime o vetor alunos
console.log(alunos)

// Acessando os valores de um array
// precisamos usar os índices, sempre começando pelo índice 0

console.log(alunos[0])   // imprime: {nome: 'José', nota: 7}
console.log(alunos[1])   // imprime: {nome: 'Francisco', nota: 3.5}
console.log(alunos[2])   // imprime: {nome: 'Maria', nota: 10}


// vamos calcular novamente a média
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3


