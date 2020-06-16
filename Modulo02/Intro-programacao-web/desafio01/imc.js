// cálculo do imc

// cria as constantes para armazenar o nome, peso, altura da pessoa
const nome   = "Camila"
const peso   = 77
const altura = 1.70

// calcula o imc
const imc = peso / (altura ** 2)

// estrutura condicional para determinar 
//se a pessoa está ou não acima do peso
if (imc >= 30){
  console.log(`${nome}, vocês está acima do peso.`)
} else{
  console.log(`${nome}, você não está acima do peso`)
}
