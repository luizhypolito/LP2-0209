let med = 0;
let idade;
let idadef = 0;

let ndep = Number(prompt("Digite quantas pessoas são: "));
ndep = parseInt(ndep)

for (x = 0; x < ndep; x++) {

    idade = Number(prompt("Digite sua idade: "));
    idadef = idadef + idade;

    if (idade == 0 || idade < 0) {

        break;

    }

}

med= idadef/x;

console.log("A média das idades é: " + med)