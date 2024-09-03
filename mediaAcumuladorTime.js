let alturaJogadores = []
let menorAltura, maiorAltura, alturaMedia ;
let qntJogador = parseInt(prompt("Quantos jogadores tem no time: "))

for (let i=0; i < qntJogador; i++){
    alturaJogadores[i] = parseFloat(prompt("Altura do jogador da posição " + i +": "))

    //primeiro jogador
    if(i==0){
        maiorAltura = alturaJogadores[0]
        menorAltura = alturaJogadores[0] 
    }

    //demais jogadores
    if(i > 0){
        if(alturaJogadores[i] < menorAltura){
            menorAltura = alturaJogadores[i]
        }
        if(alturaJogadores[i] > maiorAltura){
            maiorAltura = alturaJogadores[i]
        }
    }

}

console.log("Altura dos jogadores:")
alturaJogadores.forEach((altura) => console.log(altura))
console.log("Menor e maior altura:")
console.log(menorAltura)
console.log(maiorAltura)