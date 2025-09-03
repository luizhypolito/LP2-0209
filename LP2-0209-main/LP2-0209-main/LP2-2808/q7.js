let conts = 0;
let consub = 0;
let conddiv = 0; 
let condmult = 0;


for( x = 1; x > 0; x++){

    let esc = prompt("Digite para realizar a conta A)ADIÇÂO \n B)SUBTRAÇÂO \n C)DIVISÃO \n D)MULTIPLICAÇÃO \n E)SAIR")

    if( esc === 'e' || esc === 'E' ){

        console.log("Núemro de equacões de subtração: "+ consub)
        console.log("Núemro de equacões de soma: "+ conts)
        console.log("Núemro de equacões de divisão: "+ conddiv)
        console.log("Núemro de equacões de multiplicação: "+ condmult)

        break;

    }

    if( esc === 'A' || esc === 'a' ){

         n1=Number(prompt("Digite um número: "))
         n2=Number(prompt("Digite outro número: "))

        let soma = n1 + n2;
        console.log("Resultado: ", + soma)
        conts++;
    }

    if( esc === 'B' || esc === 'b' ){

         n1=Number(prompt("Digite um número: "))
        n2=Number(prompt("Digite outro número: "))

        let sub = n1 + n2;
        console.log("Resultado: ", + sub)
        consub++;
    }

    if( esc === 'C' || esc === 'c' ){

        n1=Number(prompt("Digite um número: "))
        n2=Number(prompt("Digite outro número: "))

        let div = n1 / n2;
        console.log("Resultado: ", + div)
        conddiv++;
    }

    if( esc === 'd' || esc === 'D' ){

        n1=Number(prompt("Digite um número: "))
        n2=Number(prompt("Digite outro número: "))

        let mul = n1 * n2;
        console.log("Resultado: ", + mul)
        condmult++;
    }
}