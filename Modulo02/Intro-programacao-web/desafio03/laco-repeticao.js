/* Questão: Crie um programa que armazena um array de usuários (objetos),

  cada usuário tera um nome e um conunto de tecnologias (array)

  Faça um laço de repetição para imprimir na telc as informações dos usuários
*/

// criação do objeto usuarios
const usuarios = [
  {
    nome: "João",
    tecnologias: ["HTML", "CSS"]
  },
  {
    nome: "José",
    tecnologias: ["Javascript", "NodeJs", "React"]
  },
  {
    nome: "Ana",
    tecnologias: ["Python", "PHP"]
  }
]

// Laço de reptição para impressão dos usuários com as respectivas tecnologias
for (let i = 0; i < usuarios.length; i++){
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}