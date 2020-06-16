// cria uma variável
const nome = "Camila Diniz";


// Imprime algo na tela
console.log(nome)

// Tipos de variáveis

//Strings: podem ser com aspas simples, duplas ou entre crase (Template Strings)
const nome2 = "Camila"
const nome3 = 'Almeida'
const nome4 = `Me chamo ${nome2}`

console.log(nome4)

const aluno01 = "Chico"
const aluno02 = "Francisco"
const aluno03 = "José"

// Number
const notaAluno01 = 1.8
const notaAluno02 = 7.5
const notaAluno03 = 4.5

// determinar o tipo de uma variável: typeof
console.log(typeof notaAluno01)
console.log(typeof aluno01)

// Realizando cálculos
// Calcunado a média
const media = (notaAluno01 + notaAluno02 + notaAluno03)/3
console.log(media)

// Estruturas condicionais: if
// Se a media for maior que 5 imprimir um parabens aos alunos
// Caso contrário -> imprimir que a turma precisa estudar mais
if (media > 5){
  console.log(`A média da turma foi ${media}, vocês estão de Parabéns`)
} else {
  console.log("Vocês precisam estudar mais um pouco!!")
}

/* ##################################### 
  OPERADORES DE COMPARAÇÃO
  
  >   MAIOR
  <   MENOR
  >=  mAIOR OU IGUAL A
  <=  MENOR OU IGUAL A
  ==  iGUAL A
  === IGUAL E DO MESMO TIPO
  !=  DIFERENTE DE
  !== DIFERENTE, INCLUSIVE DO TIPO

  #####################################*/

  console.log(4 == "4")
  console.log(4 === "4")
  console.log(4 != "5")
  console.log(4 !== "5")

