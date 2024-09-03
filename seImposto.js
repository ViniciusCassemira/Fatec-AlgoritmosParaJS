const salarioBruto = parseFloat(prompt("Digite seu salário sem descontos:"))
let ir, inss=0

//calculando inss
if(salarioBruto <= 1412){
    inss = salarioBruto * 0.075
}else if (salarioBruto > 1412 && salarioBruto <= 2666.68){
    inss = (salarioBruto * 0.09) - 19.8
}else if (salarioBruto > 2666.68 && salarioBruto <= 4000.03){
    inss = (salarioBruto * 0.12) - 96.94
}else if(salarioBruto > 4000.03){
    inss = (salarioBruto * 0.14) - 174.08
}

//calculando ir
if(salarioBruto <= 2259.2){
    ir = 0
}else if (salarioBruto > 2259.2 && salarioBruto <= 2826.65){
    ir = (salarioBruto * 0.075) - 169.44
}else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05){
    ir = (salarioBruto * 0.15) - 381.44
}else if(salarioBruto > 3751.05 && salarioBruto <= 4664.68){
    ir = (salarioBruto * 0.225) - 662.77
}else if(salarioBruto > 4664.68){
    ir = (salarioBruto * 0.275) - 896
}

//salario líquido
let salarioLiquido = salarioBruto - (ir + inss)
console.log("Seu salário bruto R$:" + salarioBruto)
console.log("Desconto INSS R$:" + inss.toFixed(2))
console.log("Desconto IR R$:" + ir.toFixed(2))
console.log("Seu salário líquido R$:" + salarioLiquido.toFixed(2))