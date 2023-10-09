var num1 = prompt("Digite o primeiro número: ");
var num2 = prompt("Digite o segundo número: ");

var op = prompt("Escolha uma operação: \n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão");

switch(parseFloat(op)){
    
    case 1:
        console.log("A soma entre os dois números digitados é: %d", (parseFloat(num1) + parseFloat(num2)));
            break;
    case 2:
        console.log("A subtração entre os dois números digitados é: %d", (parseFloat(num1) - parseFloat(num2)));
            break;
    case 3:
        console.log("A multiplicação entre os dois números digitados é: %d", (parseFloat(num1) * parseFloat(num2)));
            break;
    case 4:
        console.log("A divisão entre os dois números digitados é: %d", (parseFloat(num1) / parseFloat(num2)));
            break;
    default: 
        console.log("Comando inválido!");
            
}