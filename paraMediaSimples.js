let numeros = [];
let soma = 0;
let qntNota = parseInt(prompt("Quantas notas serão inseridas: "));

for (let i = 0; i < qntNota; i++){
    numeros[i] = parseFloat(prompt("Número " + i));
    soma = soma + numeros[i];
}

let media = soma / qntNota 

console.log("As notas digitadas foram:")
numeros.forEach(numero => console.log(numero));
console.log("A media foi " + media)