let nomeHeroi = "Equilibrador Estelar";
let pontoXP = 15000;
let nivel = "";

if (pontoXP <= 1000) {
    nivel = "Ferro";
} else if (pontoXP >= 1001 && pontoXP <= 2000) {
    nivel = "Bronze"
} else if (pontoXP >= 2001 && pontoXP <= 5000) {
    nivel = "Prata"
} else if (pontoXP >= 5001 && pontoXP <= 7000) {
    nivel = "Ouro"
} else if (pontoXP >= 7001 && pontoXP <= 8000) {
    nivel = "Platina"
} else if (pontoXP >= 8001 && pontoXP <= 9000) {
    nivel = "Ascendente"
} else if (pontoXP >= 9001 && pontoXP <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log("O herói " + nomeHeroi + " tem pontuação de " + pontoXP + "XP e está no nível " + nivel)