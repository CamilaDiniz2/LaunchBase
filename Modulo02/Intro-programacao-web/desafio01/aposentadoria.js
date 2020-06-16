// Determina com base nos dados de idade, sexo e tempo de contribuição
// se uma pessoa já está apta  se apoentar

// cria as constantes para armazenar o nome, peso, altura da pessoa
const nome  = "Camila";
const sexo  = 'M';
const idade = 61;
const tempContribuicao = 35;

// estruturas condicionais
// condicao 1: Homem e 35 anos de contribuicao, Mulher e 30 anos de contribuição
// condicao 2: Homem -> idade + tempo Contribuicao > 95 anos, 
//caso mulher -> idade + tempo de contribuicao > 85 anos

//variável para armazenar o tempo de contribuicao + idade
const totalContribuicao = idade + tempContribuicao

// Identifica se o sexo é FEMININO
if (sexo == 'F'){
  // IDENTIFICA AS DUAS CONDIÇÕES RELACIONADAS AO TEMPO DE CONTRIBUICAO PARA O SEXO FEMININO
  if (totalContribuicao >= 85 && tempContribuicao >= 30){
    console.log(`${nome}, você está apto a se aposentar!`)
  }
  else{
    console.log(`${nome}, você não está apto a se aposentar!`)
  }

  // AGORA, REALIZA AS ESTRUTURAS CONDICIONAIS PARA O SEXO MASCULINO
} else{
  // IDENTIFICA AS DUAS CONDIÇÕES RELACIONADAS AO TEMPO DE CONTRIBUICAO PARA O SEXO MASCULINO
  if (totalContribuicao >= 95 && tempContribuicao >= 35){
    console.log(`${nome}, você está apto a se aposentar!`)
  }
  else{
    console.log(`${nome}, você não está apto a se aposentar!`)
  }
}