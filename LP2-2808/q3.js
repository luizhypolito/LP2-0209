let n;
let somat = 0;


for (x = 1; x > 0; x++) {

    n = Number(prompt("Digite um número: "));
    somat = somat + n;

    if (n == 0) {
       
        console.log("A média das idades é: " + somat)
        break;

    }

}

