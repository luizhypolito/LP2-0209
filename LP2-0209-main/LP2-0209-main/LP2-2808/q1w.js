

let salf = 0;
let sal;

let mf = Number(prompt("Digite quantas pessoas são na família: "));
mf = parseInt(mf);

let x = 0;
while (x < mf) {
    sal = Number(prompt("Digite o valor do salário: "));
    salf = salf + sal;
    x++;
}

console.log("O salário da família: " + salf);
