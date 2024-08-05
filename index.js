let num1 = window.prompt('Digite o primeiro número:')
let num2 = window.prompt('Digite o segundo número:')

num1 = parseFloat(num1);
num2 = parseFloat(num2);

const soma = num1 + num2;
const sub = num1 - num2;
const multi = num1 * num2;
const divi = num1 / num2;


alert(
    "Resultados:\n" +
    '\nSoma: ' + soma +
    '\nSubtração: ' + sub + 
    '\nMultiplicação: ' + multi + 
    '\nDivisão: ' + divi
)


