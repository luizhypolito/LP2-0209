let salf = 0;
let sal;

let mf = Number(prompt("Digite quantas pessoas são na família: "));
mf=parseInt(mf)

for( x = 0; x < mf ; x++){
    sal = Number(prompt("Digite o valor do salário: "));
    salf = salf + sal;
    
}


console.log("O salário da família: " + salf)
