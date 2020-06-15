// cria um objeto para armazenar dados de um programador (nome, idade e tecnolgia)

const dadosProgramador = {
  nome: 'Fulano de Tal',
  idade : 25,
  tecnologias : [
    {
      nome: 'Javascript',
      especialidade: 'Web'
    },
    {
      nome: 'Python',
      especialidade: 'Data Science'
    },
    {
      nome: 'PHP',
      especialidade: 'Back-end'
    }
  ]
}

// Imprimir na tela o nome e especialidade da primeira tecnologia que o progrmador possui
console.log(`O usuário ${dadosProgramador.nome} tem ${dadosProgramador.idade} anos,'
          + ' e usa a tecnologia ${dadosProgramador.tecnologias[0].nome} com especialidade'
          + 'em ${dadosProgramador.tecnologias[0].especialidade}`)