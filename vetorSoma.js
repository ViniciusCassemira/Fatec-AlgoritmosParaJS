const salarios = [890,1000,1300,1450,980]
let soma = 0
for(i=0; i<salarios.length ;i++){
    soma += salarios[i]
}

console.log("A soma dos " + salarios.length + " salários foi R$" + soma)