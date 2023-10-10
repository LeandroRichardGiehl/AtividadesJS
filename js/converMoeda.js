let valorEmReais = prompt("Digite o valor em reais:");

valorEmReais = parseFloat(valorEmReais).toFixed(2);

let taxaDeCambio = 5.00;

let valorEmDolares = valorEmReais / taxaDeCambio;

alert(`O valor em dólares é: $ ${valorEmDolares}`);
