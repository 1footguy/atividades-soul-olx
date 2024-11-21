// 3. Crie dois vetores de números, vetor1 e vetor2, com valores distintos. Crie uma função que receba ambos os vetores e retorne um novo vetor que combine todos os elementos dos dois vetores. Use o operador spread para concatenar os vetores.
function newVetor(vetor1 = [1, 2, 3, 4, 5], vetor2 = [6, 7, 8, 9, 10]) {    
    let newVetor = [];
    
    newVetor = [...vetor1, ...vetor2];
    return newVetor;
    
}

export default newVetor;