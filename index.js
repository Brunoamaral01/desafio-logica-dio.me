// Desafio Herói

let heroiNome = "Bruno"
let heroiXP = 500
let rankHeroi = ""

if (heroiXP < 1000) {
    rankHeroi = "Ferro"
}

else if ((heroiXP >= 1001) && heroiXP < 2000) { rankHeroi = "Bronze"}
else if ((heroiXP >= 2001) && heroiXP < 5000) { rankHeroi = "Prata"}
else if ((heroiXP >= 5001) && heroiXP < 7000) { rankHeroi = "Ouro"}
else if ((heroiXP >= 7001) && heroiXP < 8000) { rankHeroi = "Platina"}
else if ((heroiXP >= 8001) && heroiXP < 9000) { rankHeroi = "Ascendente"}
else if ((heroiXP >= 9001) && heroiXP < 10000) { rankHeroi = "Imortal"}

else if (heroiXP > 10000) { rankHeroi = "Radiante"}

console.log("O herói " + heroiNome + " está no nível de " + rankHeroi)
