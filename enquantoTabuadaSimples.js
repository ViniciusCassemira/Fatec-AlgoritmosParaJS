console.log("Tabuada simples")

let numero = parseFloat(prompt("Tabuada de qual número: "))
let multiplicador = parseInt(prompt("Quantas vezes vai multiplicar: "))

for(let i=1; i < multiplicador + 1; i++){
    console.log(numero + " X " + i + " = " + numero*i)
}