function verificarNota() {
    let nota = 60;
    if (nota >= 0 && nota <=100) {
        if (nota >= 60) {
            console.log("Aluno aprovado!");
        } else {
            console.log("Aluno reprovado!");
            
        }
    } else { console.log("Nota inválida! (0-100)"); }
}
 verificarNota();

function verificarFaixaEtaria(){

    let idade = 17;

    if (idade > 0 && idade < 125) {
        if (idade < 12) {
            console.log("Criança");
        } else if (idade > 12 && idade <= 17) {
            console.log("Adolescente");
        } else if (idade > 17 && idade <= 64) {
            console.log("Adulto");
        } else {
            console.log("Idoso");
        }
    } else { "Informe uma idade válida (de 1 a 125 anos)" }
}
verificarFaixaEtaria();

function verificarMes(){
    let mes = 1;

    switch (mes) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");            
            break;
        case 6:
            console.log("Junho");            
            break;
        case 7:
            console.log("Julho");            
            break;
        case 8:
            console.log("Agosto");            
            break;
        case 9:
            console.log("Setembro");            
            break;
        case 10:
            console.log("Outubro");            
            break;
        case 11:
            console.log("Novembro");           
            break;
        case 12:
            console.log("Dezembro");            
            break;
    
        default:
            console.log("Informe um mês válido (1-12)");
            break;
    }
}
verificarMes();

function verificarLogin() {
    let login = "admin";
    let senha = "12345"

    if (login == "admin" && senha == "12345") {
        console.log("Login bem-sucedido");
    } else { 
        console.log("Senha incorreta!");
        
    }
}
verificarLogin();

function verificadorTernario() {
    let pontos = 99;
    console.log( pontos >= 100 ? "Você venceu!" : "Tente novamente!");
}
verificadorTernario();