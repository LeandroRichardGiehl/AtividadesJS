let loginDigitado = prompt("Digite seu login:");

let senhaDigitada = prompt("Digite sua senha:");

let loginCorreto = "leandro";
let senhaCorreta = "123";

if (loginDigitado === loginCorreto && senhaDigitada === senhaCorreta) {
  alert(`Login bem-sucedido! Bem-vindo, ${loginDigitado}.`);
} else {
  alert(`Login falhou. Verifique seu login e senha.`);
}
