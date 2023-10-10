let valorProduto = prompt("Digite o valor do produto:");

let porcentagemDesconto = prompt("Digite a porcentagem de desconto:");

valorProduto = parseFloat(valorProduto);
porcentagemDesconto = parseFloat(porcentagemDesconto);

let valorDesconto = (porcentagemDesconto / 100) * valorProduto;

let valorFinal = valorProduto - valorDesconto;

alert(`O valor final do produto com ${porcentagemDesconto} % de desconto é: R$ ${valorFinal}`);
