/* Questão: Utilize o objeto usado na questao anterior

  Crie uma função que receba os dados de usuário e retorna SE o usuário

  trabalha com CSS ou não. A função deve retorna true/false.
*/

// criação do objeto usuarios
const usuario = [
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
    tecnologias: ["Python", "PHP", "CSS"] 
  }
]

function checaSeUsuarioUsaCSS (usuario){
  for (let j = 0; j < usuario.tecnologias.length; j++){
    if (usuario.tecnologias[j] == 'CSS'){
      return true
    }
  }
  return false  
}

// Percorre o array de usuários e verifica se trabalham com CSS
for (let i = 0; i < usuario.length; i++){
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i])

  if(usuarioTrabalhaComCSS){
    console.log(`O usuário ${usuario[i].nome} trabalha com CSS`)
  }
}
