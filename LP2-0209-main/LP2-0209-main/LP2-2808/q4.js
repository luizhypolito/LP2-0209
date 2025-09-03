let n = 0;
let maior=1;
let menor=1;


for (x = 1; x <= 10; x++) {

    n = Number(prompt("Digite um número: "));

    if (n > maior) {

        maior=n;
       
    }

    if (n < menor) {

        menor=n;
        
    }

}

console.log("O menor valor é : " + menor);
console.log("O maior valor é : " + maior);