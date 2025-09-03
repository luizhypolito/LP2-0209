let pokemon = {
    Nome: prompt("Digite o nome do pokemon! "),
    HP: 10,
    Ataque: Math.floor(Math.random() * (3 - 1 + 1)) + 1,
    Level: 1,
};

let pokemoninicial = {
    nomei: pokemon.Nome,
    HPi: pokemon.HP,
    Ataquei: pokemon.Ataque,
    Leveli: pokemon.Level
};

let vit = 0;
let der = 0;

while (true) {
    let esc = prompt("Menu principal:\n 1) Batalhar \n 2) Vitórias e Derrotas \n 3) Listar Caracteristícas \n 4) Sair");

    if (esc === "1") {
        let inimigoHP = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        let inimigoAtaque = Math.floor(Math.random() * 5);

        alert("Um inimigo apareceu!\nHP: " + inimigoHP + " | Ataque: " + inimigoAtaque);

        let hppokemon = pokemon.HP;
        let hpinimigo = inimigoHP;
        let turno = 1;

        while (hppokemon > 0 && hpinimigo > 0) {
            if (turno % 2 !== 0) {
                hpinimigo -= pokemon.Ataque;
                alert(pokemon.Nome + " atacou! HP do inimigo: " + hpinimigo);
            } else {
                hppokemon -= inimigoAtaque;
                alert("Inimigo atacou! HP do seu Pokémon: " + hppokemon);
            }
            turno++;
        }

        if (hppokemon > 0) {
            alert("Você venceu!");
            vit++;
            pokemon.Level++;

            let up = prompt("Escolha o atributo para aumentar permanentemente:\n1) HP\n2) Ataque");
            if (up === "1") {
                pokemon.HP += 2;
            } else if (up === "2") {
                pokemon.Ataque++;
            }
        } else {
            alert("Você perdeu!");
            der++;
        }
    }

    else if (esc === "2") {
        alert("Total de vitórias: " + vit + "\nTotal de derrotas: " + der);
    }

    else if (esc === "3") {
        alert(
            "Dados Iniciais:\n" +
            "Nome: " + pokemoninicial.nomei + "\nHP: " + pokemoninicial.HPi + "\nAtaque: " + pokemoninicial.Ataquei + "\nLevel: " + pokemoninicial.Leveli +
            "\n\nDados Atuais:\n" +
            "Nome: " + pokemon.Nome + "\nHP: " + pokemon.HP + "\nAtaque: " + pokemon.Ataque + "\nLevel: " + pokemon.Level
        );
    }

    else if (esc === "4") {
        alert("Obrigado por jogar!");
        break;
    }

    else {
        alert("Opção inválida!");
    }
}
