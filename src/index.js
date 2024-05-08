let nomeDoHeroi = "Caio";
let xpDoHeroi = 100000;
let nivelDoHeroi;

switch (true) {
    case (xpDoHeroi <= 1000):
        nivelDoHeroi = "Ferro";
        break;

    case (xpDoHeroi > 1000 && xpDoHeroi <= 2000):
        nivelDoHeroi = "Bronze";
        break;

    case (xpDoHeroi > 2000 && xpDoHeroi <= 5000):
        nivelDoHeroi = "Prata";
        break;

    case (xpDoHeroi > 5000 && xpDoHeroi <= 7000):
        nivelDoHeroi = "Ouro";
        break;

    case (xpDoHeroi > 7000 && xpDoHeroi <= 8000):
        nivelDoHeroi = "Platina";
        break;

    case (xpDoHeroi > 8000 && xpDoHeroi <= 9000):
        nivelDoHeroi = "Ascendente";
        break;

    case (xpDoHeroi > 9000 && xpDoHeroi <= 10000):
        nivelDoHeroi = "Imortal";
        break;

    case (xpDoHeroi > 10000):
        nivelDoHeroi = "Radiante";
        break;

    default:
        nivelDoHeroi = "Desconhecido";
        break;
}

console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}.`);