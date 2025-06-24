let nomeHeroi
let xpHeroi

const primeiraFrase = "O Herói de nome "
const segundaFrase = " está no nível de "


nomeHeroi = "Artorias"
xpHeroi = 10000

if(xpHeroi >= 0 && xpHeroi <= 1000){
    console.log(primeiraFrase + nomeHeroi + segundaFrase + " Ferro" )
}else if(xpHeroi >= 1001 && xpHeroi <= 2000 ){
    console.log(primeiraFrase + nomeHeroi + segundaFrase + " Bronze" )
}else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    console.log(primeiraFrase + nomeHeroi + segundaFrase + "Prata")
}else if(xpHeroi >= 5001 && xpHeroi <= 7000){
    console.log(primeiraFrase + nomeHeroi + segundaFrase + "Ouro")
}else if(xpHeroi >= 7001 && xpHeroi <= 8000){
    console.log(primeiraFrase + nomeHeroi + segundaFrase + "Platina")
}else if(xpHeroi >= 8001 && xpHeroi <= 9000){
    console.log(primeiraFrase + nomeHeroi + segundaFrase + "Ascendente")
}else if(xpHeroi >= 9001 && xpHeroi <= 10000){
    console.log(primeiraFrase + nomeHeroi + segundaFrase + "Imortal")
}else if(xpHeroi >= 10001){
    console.log(primeiraFrase + nomeHeroi + segundaFrase + "Radiante")
}else{
    console.log("Valor inválido!!")
}