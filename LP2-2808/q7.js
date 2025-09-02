let conts = 0;
let consub = 0;
let conddiv = 0; 
let condmult = 0;
let n1;
let n2;

let esc = prompt("Digite para realizar a conta A)ADIÇÂO B)SUBTRAÇÂO C)DIVISÃO D)MULTIPLICAÇÃO E)SAIR")

for( x = 1; x < 0; x++){

    if( esc === e || esc === E){

        console.log("Núemro de equacões de subtração: "+ consub)
        console.log("Núemro de equacões de soma: "+ conts)
        console.log("Núemro de equacões de divisão: "+ conddiv)
        console.log("Núemro de equacões de multiplicação: "+ condmult)

        break;

    }

    if( esc === 'A' || esc === 'a' ){

        let soma = n1 + n2;
        console.log("Resultado: ", + soma)
        conts++;
    }

    if( esc === 'B' || esc === 'b' ){
        let sub = n1 + n2;
        console.log("Resultado: ", + sub)
        consub++;
    }

    if( esc === 'C' || esc === 'c' ){
        let div = n1 / n2;
        console.log("Resultado: ", + div)
        con++;
    }

    if( esc === 'd' || esc === 'D' ){
        let mul = n1 * n2;
        console.log("Resultado: ", + mul)
        condmult++;
    }
}