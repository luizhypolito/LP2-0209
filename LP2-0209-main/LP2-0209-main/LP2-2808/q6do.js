let x = 0;


let aluno1 ={
    m: "",
    n: "",
}

let aluno2 ={
    m: "",
    n: "",
}

let aluno3 ={
    m: "",
    n: "",
}

let aluno4 ={
    m: "",
    n: "",
}
let aluno5 ={
    m: "",
    n: "",
}

let alunos = [

    aluno1,
    aluno2,
    aluno3,
    aluno4,
    aluno5,

]

let  notaf = 0
notaf=Number(notaf)

do{

    alunos[x].m=Number(prompt("Digite o número da matrícula: "));
    alunos[x].n=Number(prompt("Digite a nota: "));

    notaf += alunos[x].n

    x ++;
}while(x < 5)

let media = notaf/5

x=0;

do{
    
    if(alunos[x].n <= media){

        console.log("Matrículas que estão na média: ", + alunos[x].m)
    }

    x++;

}while(x < 5)