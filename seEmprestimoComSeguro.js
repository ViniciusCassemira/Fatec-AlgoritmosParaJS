console.log("Calcule o seu empréstimo aqui")

const saldoMedio = parseFloat(prompt("Digite seu saldo médio do ano passado: "))
const idade = parseInt(prompt("Digite sua idade: "))
let credito, seguro = 0

if (saldoMedio <= 200){
    credito = 0
    console.log("")
}
else{
    if(saldoMedio >200 && saldoMedio <=400 ){
        credito = saldoMedio * 0.2 
        console.log("")
    }
    else{
        if(saldoMedio >400 && saldoMedio < 601){
            credito = saldoMedio * 0.3
            console.log("")
        }else{
            if(saldoMedio >=601){
                credito = saldoMedio * 0.4
            }
        }
    }
}

if (idade >=18 && idade <=24){
    seguro = credito * 0.02
}else{
    if(idade > 24 && idade <=35){
        seguro = credito * 0.06
    }else{
        if(idade > 35 && idade <= 45){
            seguro = credito * 0.08
        }
        else{
            if(idade > 45 && idade <=55){
                seguro = credito * 0.1
            }
            else{
                if(idade > 55){
                    seguro = credito * 0.15
                }
            }
        }
    }
}

console.log("Confira seus resultados:")
console.log("Você conseguiu um crédito de R$" + credito)
console.log("O valor do seguro será de R$" + seguro)
console.log("Valor total a ser devolvido para o banco: R$" + (seguro + credito))