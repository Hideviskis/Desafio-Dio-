 const primeiraFrase = "O Herói tem de saldo de "
 const segundaFrase = " vitorias e está no nível de "


function winAndLoss(winRate = -100, lossRate = 5){
    console.log("Vitorias: " + winRate)
    console.log("Derrotas: " + lossRate)
    
    return somaRank = winRate - lossRate
}

winAndLoss()

if(somaRank >= 0 && somaRank<= 10){
    console.log(primeiraFrase + somaRank + segundaFrase + "Ferro" )
}else if(somaRank >= 11 && somaRank<= 20){
    console.log(primeiraFrase + somaRank + segundaFrase + "Bronze" )
}else if(somaRank >= 21 && somaRank<= 50){
    console.log(primeiraFrase + somaRank + segundaFrase + "Prata" )
}else if(somaRank >= 51 && somaRank<= 80){
    console.log(primeiraFrase + somaRank + segundaFrase + "Ouro" )
}else if(somaRank >= 81 && somaRank<= 90){
    console.log(primeiraFrase + somaRank + segundaFrase + "Diamante" )
}else if(somaRank >= 91 && somaRank<= 100){
    console.log(primeiraFrase + somaRank + segundaFrase + "Lendário" )
}else if(somaRank >= 101){
    console.log(primeiraFrase + somaRank + segundaFrase + "Imortal" )
}else{
    console.log("Erro: Valor inválido!")
}