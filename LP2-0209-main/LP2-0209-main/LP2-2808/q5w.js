let quantidadedefebre = 0;
let temperatura = 0;
let pessoas=Number(prompt("Digite o número de pessoas: "));
let x = 0;


while( x < pessoas){

    let temperatura=Number(prompt("Digite a temperatura da pessoa: "));

    if( temperatura > 38 ){
        quantidadedefebre++;

    }

    x++;
}

console.log("Número de pessoas com febres: " + quantidadedefebre);