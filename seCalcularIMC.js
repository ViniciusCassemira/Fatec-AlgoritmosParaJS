console.log("Calcule seu IMC")

const peso = parseFloat(prompt("Seu peso:"))
const altura = parseFloat(prompt("Sua altura:"))
let imc = peso / (altura*altura)

if(imc <= 18.5){
console.log("Você está abaixo do peso")    
}else if(imc > 18.5 && imc <= 25){
console.log("Você está com o peso normal")
}else if(imc > 25 && imc <= 30){
console.log("Você está com sobrepeso")
}else if(imc > 30 && imc <= 40){
console.log("Você está obeso")
}else if(imc > 40){
console.log("Você está muito obeso")
}