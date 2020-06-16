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
]

const alunosdaTurmaB = [
  {
    nome: "Carlos",
    nota: 1
  },
  {
    nome: "Bruno",
    nota: 2
  },
  {
    nome: "Ana",
    nota: 8
  },
]

// cria função para cálculo da média: reaproveitamento de código
function calculaMedia(alunos){
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
}

// funcao que retorna se a media é maoir que 5 ou não
function enviaMensagem(mediaTurma){
  return mediaTurma >= 5 ? console.log(`A media da turma foi ${mediaTurma}. Parabéns !!`) :
                console.log("A meédia da turma foi menor que 5. Estudem mais")
}

const mediaTurmaA = calculaMedia(alunosDaTurmaA)
const mediaTurmaB = calculaMedia(alunosdaTurmaB)

enviaMensagem(mediaTurmaA)
enviaMensagem(mediaTurmaB)
