// 2. Crie um arquivo (math.js) com duas funções: uma chamada subtrai que retorna a diferença entre dois números e uma função padrão (export default) chamada divide que retorna a divisão de dois números. Importe ambas as funções em outro arquivo e teste-as.
function subtrai(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
export {subtrai};
export default divide;