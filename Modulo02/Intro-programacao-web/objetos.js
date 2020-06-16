// Objetos em Javascript

const aluno01 = {
  nome: "José",
  nota: 7
}

const aluno02 = {
  nome: "Francisco",
  nota: 3.5
}

const aluno03 = {
  nome: "Maria",
  nota: 10
}

// como acessar elementos de um objeto

// imprime todo o conteudo do objeto
console.log(aluno01);
// imprime apenas o nome
console.log(aluno01.nome)
// imprime apenas a nota
console.log(aluno01.nota)


// calculo da média
const media = (aluno01.nota + aluno02.nota + aluno03.nota)/3
console.log(`A média da turma é ${media}`)