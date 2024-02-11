let nomeHeroi = "Equilibrador Estelar";
let pontoXP = 15000;
let nivel = "";

switch (true) {
    case pontoXP <= 1000:
        nivel = "Ferro";
        break;
    case pontoXP >= 1001 && pontoXP <= 2000:
        nivel = "Bronze";
        break;
    case pontoXP >= 2001 && pontoXP <= 5000:
        nivel = "Prata";
        break;
    case pontoXP >= 5001 && pontoXP <= 7000:
        nivel = "Ouro";
        break;
    case pontoXP >= 7001 && pontoXP <= 8000:
        nivel = "Platina";
        break;
    case pontoXP >= 8001 && pontoXP <= 9000:
        nivel = "Ascendente";
        break;
    case pontoXP >= 9001 && pontoXP <= 10000:
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
}

console.log("O herói " + nomeHeroi + " tem pontuação de " + pontoXP + "XP e está no nível " + nivel);