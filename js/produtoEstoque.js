let quantidadeEmEstoque = 10;

let quantidadeDesejada = prompt("Digite a quantidade de pino de 5 que você deseja:");

quantidadeDesejada = parseInt(quantidadeDesejada);

if (quantidadeDesejada <= quantidadeEmEstoque) {
  alert(`Produto disponível! Tem ${quantidadeEmEstoque} unidades em estoque.`);
} else {
  alert(`Produto indisponível. Temos apenas ${quantidadeEmEstoque} unidades em estoque.`);
}
