
const alunos = [
  {
    nome: "José",
    nota: 7,
  },
  {
    nome: "Francisco",
    nota: 3.5,
  },
  {
    nome: "Maria",
    nota: 10,
  },
]

function marcarComoReprovado (aluno){
  aluno.reprovado = false;
  if (aluno.nota < 5){
    aluno.reprovado = true
  }
}

function enviarMensagemReprovado (aluno){
  if (aluno.reprovado){
    console.log(`O aluno ${aluno.nome} está reprovado`)
  }
}

function alunoReprovado (alunos){
  for (let aluno of alunos){
    marcarComoReprovado(aluno);
    enviarMensagemReprovado(aluno)
  }
}

alunoReprovado(alunos)