let listaDeCompras = prompt("Digite os itens da lista de compras:");

let itens = listaDeCompras;

for (let i = 0; i < itens.length; i++) {
  itens[i] = itens[i].trim();
}

alert(`Sua lista de compras inclui os seguintes itens:\n ${itens}`);
