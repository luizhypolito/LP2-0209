let quantidadedefebre = 0;
let temperatura = 0;
let pessoas=Number(prompt("Digite o número de pessoas: "));


for(x = 0; x < pessoas; x++){

    let temperatura=Number(prompt("Digite a temperatura da pessoa: "));

    if( temperatura > 38 ){
        quantidadedefebre++;

    }
}

console.log("Número de pessoas com febres: " + quantidadedefebre);