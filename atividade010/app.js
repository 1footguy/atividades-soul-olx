import divide, { subtrai } from "./math.js";
import { multiplica, soma } from "./operacoes.js";
import newVetor from "./vetores.js";

// 1. Crie dois arquivos JavaScript: No primeiro arquivo (operacoes.js), defina duas funções: soma e multiplica, que recebem dois números e retornam a soma e o produto, respectivamente. Exporte ambas as funções. No segundo arquivo (app.js), importe as funções e teste-as com diferentes valores.
console.log(soma(5,5));
console.log(multiplica(2,5));

// 2. Crie um arquivo (math.js) com duas funções: uma chamada subtrai que retorna a diferença entre dois números e uma função padrão (export default) chamada divide que retorna a divisão de dois números. Importe ambas as funções em outro arquivo e teste-as.
console.log(divide(20,2));
console.log(subtrai(12, 2));

//3. Crie dois vetores de números, vetor1 e vetor2, com valores distintos. Crie uma função que receba ambos os vetores e retorne um novo vetor que combine todos os elementos dos dois vetores. Use o operador spread para concatenar os vetores.
let vetor =[1, 2, 3, 4];
let vetor2 = [5, 6, 7, 8];
console.log(newVetor(vetor, vetor2));

// 4. Crie um objeto usuario com as propriedades nome, idade, e email. Crie um novo objeto usuarioCompleto que contenha todas as propriedades de usuario mais uma propriedade adicional, telefone. Use o operador spread para copiar as propriedades.

const usuario = {
    nome: "jonatas",
    idade: 21,
    email: "jonatas@email.com"
}

const usuarioCompleto = {...usuario, telefone: "912345678"}
console.log(usuarioCompleto);

// 5. Crie um objeto livro com as propriedades titulo, autor, ano e genero. Use destructuring para extrair titulo e autor em variáveis separadas e exiba essas variáveis no console.
const livro = {
    titulo: "as aventuras de tom sawyer",
    autor: "mark twain",
    ano: "1876",
    genero: "aventura"
}

const { titulo, autor } = livro;

console.log(`O título do livro é: ${titulo} e o autor foi ${autor}`);

