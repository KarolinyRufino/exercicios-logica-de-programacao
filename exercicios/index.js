/*
## Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar as mensagens.

## Saída
Ao final deve se exibir uma mensagem:
"O Herói {nome} está no nível de {nivel}"

*/ 
let nome = "JuninhoDoXp";
let xp = 4680;
let nivel;

if (xp < 1000) nivel = "Ferro";
else if (xp <= 2000) nivel = "Bronze";
else if (xp <= 5000) nivel ="Prata";
else if (xp <= 7000) nivel = "Ouro";
else if (xp <= 8000) nivel = "Platina";
else if (xp <= 9000) nivel = "Ascendente";
else if (xp <= 10000) nivel = "Imortal";
else nivel = "Radiante";

const fraseSaida = "O herói " + nome + " está no nível de: ";
console.log(fraseSaida + nivel);