// 1. Escreva uma função anônima que recebe um número e retorna o dobro desse número. Atribua a função a uma variável chamada dobro e teste-a com alguns valores.
const dobro = numero => numero*2;
console.log(dobro(6));

// 2. Crie uma arrow function chamada cubo que recebe um número e retorna o cubo dele. Teste a função com diferentes valores para verificar se o resultado está correto.
const cubo = numero => numero**3;
console.log(cubo(5));

// 3. Desenvolva uma função chamada calculaDesconto que recebe um preço e uma taxa de desconto (com valor padrão de 5%). A função deve retornar o preço com o desconto aplicado. Teste a função passando apenas o preço e depois passando o preço e a taxa.
function calculaDesconto(valor, desconto){
    return valor * ((100 - desconto) / 100);
}
console.log(calculaDesconto(155, 5));
 
// 4. Crie uma função chamada executaOperacao que recebe dois números e uma função de callback como parâmetros. A função deve executar a operação fornecida pelo callback com os dois números. Teste a função com operações de adição, subtração e multiplicação, passando funções anônimas como callbacks.
function executaOperacao(callback, n1, n2){
    return callback(n1, n2);
}
console.log(executaOperacao( function(n1, n2){return n1+n2}, 12, 14));

// 5. Dado um vetor de números [1, 2, 3, 4, 5], utilize o método forEach e uma função de callback para imprimir cada número multiplicado por 2. Use uma função anônima ou uma arrow function como callback para simplificar o código.
let numeros = [1,2,3,4,5]
numeros.forEach(function(num) {console.log(num*2)});