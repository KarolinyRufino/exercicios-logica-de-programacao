/*
** O Que deve ser utilizado **
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

** Objetivo: **
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
*/

function calcularNivel(vitoria, derrota){
    let nivel;
    let soma = vitoria - derrota;

    if (soma < 10) nivel = "Ferro";
    else if (soma <= 20) nivel = "Bronze";
    else if (soma <= 50) nivel = "Prata";
    else if (soma <= 80) nivel = "Ouro";
    else if (soma <= 90) nivel = "Diamante";
    else if (soma <= 100) nivel = "Lendário";
    else nivel = "Imortal";

    let frase = `O herói tem de saldo de ${soma} vitórias e está no nível de ${nivel}`

    return frase
}
calcularNivel(63, 0);