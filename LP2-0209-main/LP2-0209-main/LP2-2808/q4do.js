let x = 1;
let n = Number(prompt("Digite um número: "));

let maior = n;
let menor = n;

do {
    n = Number(prompt("Digite um número: "));

    if (n > maior) {
        maior = n;
    }

    if (n < menor) {
        menor = n;
    }

    x++;
} while (x <= 10);

console.log("O menor valor é: " + menor);
console.log("O maior valor é: " + maior);
