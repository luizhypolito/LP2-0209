let n;
let somat = 0;

do {
    n = Number(prompt("Digite um número: "));
    if (n !== 0) {
        somat += n;
    }
} while (n !== 0);

console.log("A soma dos números é: " + somat);
