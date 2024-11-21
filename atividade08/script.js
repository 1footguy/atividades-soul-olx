// 1. Crie um programa que receba um vetor de números e mostre a soma de todos os elementos. Utilize um loop while para percorrer o vetor e somar cada elemento.
function somaElementos(){
let numeros = [4, 5, 10];

let contador = 0;

let soma = 0;

while (contador < numeros.length) {
    soma = soma+numeros[contador]
    contador ++;
}

console.log("A soma dos números é", soma);
}
somaElementos();



// 2. Escreva um programa que recebe um vetor de números e mostre a quantidade de números pares no vetor. Use um loop while para verificar cada elemento e um contador para contar os números pares.
function contadorPar(){
    let numeros = [6, 5, 10, 12, 14, 17];
    
    let contador = 0, qtdPar = 0;
    
    
    while (contador < numeros.length) {
        if (numeros[contador] % 2 == 0) {
            qtdPar++
        }
        contador ++;
    }
    
    console.log("A quantidade de números par no vetor é:", qtdPar);
}
contadorPar();

// 3. Crie um programa que receba um vetor de strings e imprima cada item com uma mensagem personalizada, por exemplo: "Item: maçã", "Item: banana", etc. Utilize o loop for...of para percorrer o vetor e exibir cada item.
function exibirStrings(){
    let strings = ["maçã", "banana", "tomate", "maracujá"];
    
    for (const element of strings) {
       console.log("Fruta:", element);
    }
}
exibirStrings();

//4. Desenvolva um programa que receba um vetor de números e um valor multiplicador. O programa deve mostrar um novo vetor com cada elemento multiplicado pelo valor fornecido.
function multiplicarVetor(){
    let numeros = [2, 4, 8, 16, 22, 44];
    
    let multiplicador = 4, contador = 0;
    let numerosMultiplicados = [];
    
    while (contador < numeros.length) {
        numerosMultiplicados[contador] = numeros[contador] * multiplicador;
        console.log(numerosMultiplicados[contador]);
        
        contador ++;
    }
}
multiplicarVetor();

// 5.  Escreva um programa que receba um vetor de números e mostre o maior valor contido nele. Utilize um loop for para comparar cada valor e encontrar o maior.
function maiorValor(){
    let numeros = [12, 17, 11, 1];
    let unidade = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > unidade) {
            unidade = numeros[i];   
        }
    }
    console.log("O maior número é", unidade);  
}
maiorValor();
