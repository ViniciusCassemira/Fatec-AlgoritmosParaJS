//como eu fiz no visualG
let numeros = []
let varTemp = 0
for(let i=0;i<10;i++){
    numeros[i] = parseInt(prompt(`Digite o ${i+1}º número`))
}
for(let j=0;j<10;j++){
    for(let k=0;k<9;k++){
        if(numeros[k] > numeros[k+1]){
            varTemp = numeros[k]
            numeros[k] = numeros[k+1]
            numeros[k+1] = varTemp
        }
    }
}
console.log("Como eu fiz no visualG")
console.log(numeros)

//pequisei como faria no Js de uma maneira diferente

let numeros2 = [10,4,31,25,7,6,8,1,]

numeros2.sort((a,b) => a - b)

console.log("Como eu fiz apartir do método sort")
console.log(numeros2)