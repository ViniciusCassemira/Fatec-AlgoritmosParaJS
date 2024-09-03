const nota1 = parseFloat(prompt("Digite a primeira nota: "))
const nota2 = parseFloat(prompt("Digite a segunda nota: "))
let media = (nota1 + nota2) / 2

if(media < 6){
    console.log("Você foi reprovado")
}else{
    console.log("Você foi aprovado")
}
console.log("Sua média: " + media.toFixed(2))