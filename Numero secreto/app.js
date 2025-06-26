alert("Boas vindas ao jogo do numero secreto");
let numeroSecreto = 2;
console.log(` O numero secreto é ${numeroSecreto}`)
let chute = prompt("Escolha um numero entre 1 e 10");
console.log(` O numero escolhido foi ${chute}`)

console.log("observe a mensagem na tela")
// se o chute for igual ao numero secreto 
if (chute == numeroSecreto) {
    alert(`Isso ai você descobriu o numero secreto! ${numeroSecreto}`);
} else {
    alert("Você errou :(");
}