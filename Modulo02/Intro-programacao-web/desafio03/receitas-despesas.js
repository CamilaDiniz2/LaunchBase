/* QUestão: Crie um programa que calcula a 
soma de receitas e despesas de usuários e 
no fim retorna o saldo */

// criação do objeto usuários
const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

// funcão que calcula o saldo = soma das receitas - soma das despesas
function calculaSaldo (receitas, despesas){
  return receitas - despesas
}


// função que calcula a soma dos receitas e das despesas
function somaNumeros(numeros){
  let soma = 0;
  for (let i = 0; i < numeros.length; i++){
    soma += numeros[i]
  }
  return soma
}


// realiza o loop para 
for (let j = 0; j < usuarios.length; j++){
  
  let saldo = calculaSaldo(somaNumeros(usuarios[j].receitas), somaNumeros(usuarios[j].despesas));

  (saldo > 0) ? isSaldoPosNeg = "POSITIVO" : isSaldoPosNeg = "NEGATIVO"
  
  console.log(`${usuarios[j].nome} possui saldo ${isSaldoPosNeg} de ${saldo}`)
}