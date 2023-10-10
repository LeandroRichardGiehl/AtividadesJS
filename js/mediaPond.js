let nota1 = prompt("Digite a nota da primeira prova:");
let nota2 = prompt("Digite a nota da segunda prova:");
let nota3 = prompt("Digite a nota da terceira prova:");

let peso1 = prompt("Digite o peso da primeira prova:");
let peso2 = prompt("Digite o peso da segunda prova:");
let peso3 = prompt("Digite o peso da terceira prova:");

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
peso1 = parseFloat(peso1);
peso2 = parseFloat(peso2);
peso3 = parseFloat(peso3);

let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3).toFixed(2);

alert(`A média ponderada das notas é: ${mediaPonderada}`);
