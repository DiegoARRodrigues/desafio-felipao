let nickName = "Iron Man"
let xp = 100
let ranking
let faltaXP

if (xp < 1000) {
    ranking = "Ferro"
} else if
    (xp >= 1001 && xp <= 2000) {
    ranking = "Bronze"
} else if
    (xp >= 2001 && xp <= 5000) {
    ranking = "Prata"
} else if
    (xp >= 5001 && xp <= 7000) {
    ranking = "Ouro"
} else if
    (xp >= 7001 && xp <= 8000) {
    ranking = "Platina"
} else if
    (xp >= 8001 && xp <= 9000) {
    ranking = "Ascendente"
} else if
    (xp >= 9001 && xp <= 10000) {
    ranking = "Imortal"
} else {
    ranking = "Radiante"
}

console.log("O Herói de nome " + nickName + " está no nível de " + ranking)

if (xp <= 10000 && xp >= 9001) {
    faltaXP = 10001 - xp
} else if (xp <= 9000 && xp >= 8001) {
    faltaXP = 9001 - xp
} else if (xp <= 8000 && xp >= 7001) {
    faltaXP = 8001 - xp
} else if (xp <= 7000 && xp >= 5001) {
    faltaXP = 7001 - xp
} else if (xp <= 5000 && xp >= 2001) {
    faltaXP = 5001 - xp
} else if (xp <= 2000 && xp >= 1001) {
    faltaXP = 2001 - xp
} else if (xp <= 1000) {
    faltaXP = 1001 - xp
}

if (xp > 10000) {
    console.log("Parabéns Herói, Você já atingiu o ranking máximo!")
} else {
    console.log("Você está quase lá! Só precisa de mais " + faltaXP + " pontos de experiência para subir de nível!")
}