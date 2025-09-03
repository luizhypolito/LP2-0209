let n = Number(prompt("Digite um número: "));
let maior=1;
let menor=1;
let x = 1;


while(x <= 10) {

    n = Number(prompt("Digite um número: "));

    if (n > maior) {

        maior=n
       
    }

    if (n < menor) {

        menor=n
        
    }

    x++;

}

console.log("O menor valor é : " + menor)
console.log("O maior valor é : " + maior)