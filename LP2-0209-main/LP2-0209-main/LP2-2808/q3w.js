let n;
let somat = 0;

n = Number(prompt("Digite um número: ")); // primeira leitura

while (n !== 0) {
    somat += n;
    n = Number(prompt("Digite um número: "));
}

console.log("A soma dos números é: " + somat);
