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

let  notaf =0
notaf=Number(notaf)

for(x = 0; x < 5; x++){

    alunos[x].m=Number(prompt("Digite o número da matrícula: "));
    alunos[x].n=Number(prompt("Digite a nota: "));

    notaf += alunos[x].n
}

let media = notaf/5

x=0;


for(x = 0; x < 5; x++){
    
    if(alunos[x].n >= media){

        console.log("Matrículas que estão na média: ", + alunos[x].m)
    }
}