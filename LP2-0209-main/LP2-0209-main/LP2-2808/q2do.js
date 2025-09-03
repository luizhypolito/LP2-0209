let med = 0;
let idade;
let idadef = 0;

let ndep = Number(prompt("Digite quantas pessoas são: "));

let x = 0;
do {
    idade = Number(prompt("Digite sua idade: "));

    if (idade <= 0) {
        break; // interrompe se for zero ou negativo
    }

    idadef = idadef + idade;
    x++;

} while (x < ndep);

if (x > 0) {
    med = idadef / x;
    console.log("A média das idades é: " + med);
} else {
    console.log("Nenhuma idade válida foi informada.");
}
