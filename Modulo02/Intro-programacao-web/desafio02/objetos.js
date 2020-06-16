// cria um objeto que armazena dados da Rocketseat
const empresa = {
  nome: "Rocketseat",
  cor : 'roxo',
  foco: 'programação',
  endereco : {
    rua: 'Guilherme Gembala',
    numero: 260
  },
}

// Imprimir na tela o nome da empresa e o seu endereço (com a rua e o número)
console.log(`A empresa ${empresa.nome} está localizada na rua ${empresa.endereco.rua}, nº ${empresa.endereco.numero}`)