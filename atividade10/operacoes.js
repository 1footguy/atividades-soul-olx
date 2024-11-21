// 1. Crie dois arquivos JavaScript: No primeiro arquivo (operacoes.js), defina duas funções: soma e multiplica, que recebem dois números e retornam a soma e o produto, respectivamente. Exporte ambas as funções. No segundo arquivo (app.js), importe as funções e teste-as com diferentes valores.
function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(num1, num2){
    return num1 * num2;
}

export {soma, multiplica};