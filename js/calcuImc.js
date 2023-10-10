let peso = prompt("Digite seu peso em kg:");

peso = parseFloat(peso);

let altura = prompt("Digite sua altura em metros:");

altura = parseFloat(altura);

let imc = peso / (altura * altura);

if (imc < 18.5) {
  alert(`Seu IMC é ${imc}. Você está abaixo do peso.`);
} else if (imc >= 18.5 && imc < 24.9) {
  alert(`Seu IMC é ${imc}. Você está no peso ideal.`);
} else {
  alert(`Seu IMC é ${imc}. Você está acima do peso.`);
}
